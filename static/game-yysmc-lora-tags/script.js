const previewLimit = 36;
const captionPreviewLimit = 5;
const modalBatchSize = 160;
const modalLoadOffset = 600;

const state = {
  data: null,
  toastTimer: null,
  modalBatch: null,
};

const summary = document.querySelector("#summary");
const commonPreview = document.querySelector("#commonPreview");
const wordPreview = document.querySelector("#wordPreview");
const captionPreview = document.querySelector("#captionPreview");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modalTitle");
const modalBody = document.querySelector("#modalBody");
const closeModalButton = document.querySelector("#closeModal");
const toast = document.querySelector("#toast");

function frequencyEntries(frequency) {
  return Object.entries(frequency ?? {}).sort(([aWord, aCount], [bWord, bCount]) => {
    if (bCount !== aCount) {
      return bCount - aCount;
    }

    return aWord.localeCompare(bWord);
  });
}

function createTag(word, count) {
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.role = "button";
  tag.tabIndex = 0;
  tag.title = "Copy";
  tag.dataset.copy = word;

  const wordEl = document.createElement("span");
  wordEl.className = "tag-word";
  wordEl.textContent = word;

  const countEl = document.createElement("span");
  countEl.className = "tag-count";
  countEl.textContent = count;

  tag.append(wordEl, countEl);
  return tag;
}

function createCaption(caption, index) {
  const item = document.createElement("div");
  item.className = "caption-item";
  item.role = "button";
  item.tabIndex = 0;
  item.dataset.copy = caption;
  item.textContent = `${index + 1}. ${caption}`;
  return item;
}

function renderFrequency(container, frequency, limit) {
  container.replaceChildren(
    ...frequencyEntries(frequency)
      .slice(0, limit)
      .map(([word, count]) => createTag(word, count)),
  );
}

function renderCaptions(container, captions, limit) {
  container.replaceChildren(
    ...captions.slice(0, limit).map((caption, index) => createCaption(caption, index)),
  );
}

function appendModalBatch() {
  const batch = state.modalBatch;

  if (!batch || batch.cursor >= batch.items.length) {
    return;
  }

  const fragment = document.createDocumentFragment();
  const nextCursor = Math.min(batch.cursor + batch.size, batch.items.length);

  for (let index = batch.cursor; index < nextCursor; index += 1) {
    const item = batch.items[index];
    fragment.append(batch.createItem(item, index));
  }

  batch.container.append(fragment);
  batch.cursor = nextCursor;
}

function renderModalIncrementally(container, items, createItem) {
  state.modalBatch = {
    container,
    items,
    createItem,
    cursor: 0,
    size: modalBatchSize,
  };

  appendModalBatch();
}

function maybeAppendModalBatch() {
  if (modal.hidden || !state.modalBatch) {
    return;
  }

  const remainingScroll = modal.scrollHeight - modal.scrollTop - modal.clientHeight;

  if (remainingScroll < modalLoadOffset) {
    appendModalBatch();
  }
}

function fillModalViewport() {
  if (modal.hidden || !state.modalBatch) {
    return;
  }

  while (modal.scrollHeight <= modal.clientHeight && state.modalBatch.cursor < state.modalBatch.items.length) {
    appendModalBatch();
  }
}

function openModal(section) {
  const data = state.data;
  const fragment = document.createDocumentFragment();

  if (section === "common") {
    modalTitle.textContent = "Caption Frequency";
    const grid = document.createElement("div");
    grid.className = "tag-list";
    renderModalIncrementally(
      grid,
      frequencyEntries(data.captionFrequency ?? data.commonFrequency),
      ([word, count]) => createTag(word, count),
    );
    fragment.append(grid);
  }

  if (section === "word") {
    modalTitle.textContent = "Word Frequency";
    const grid = document.createElement("div");
    grid.className = "tag-list";
    renderModalIncrementally(
      grid,
      frequencyEntries(data.wordFrequency),
      ([word, count]) => createTag(word, count),
    );
    fragment.append(grid);
  }

  if (section === "captions") {
    modalTitle.textContent = "All Captions";
    const list = document.createElement("div");
    list.className = "caption-list";
    renderModalIncrementally(list, data.captions, (caption, index) => createCaption(caption, index));
    fragment.append(list);
  }

  modalBody.replaceChildren(fragment);
  modal.hidden = false;
  modal.scrollTop = 0;
  document.body.style.overflow = "hidden";
  requestAnimationFrame(fillModalViewport);
  closeModalButton.focus();
}

function closeModal() {
  modal.hidden = true;
  modalBody.replaceChildren();
  state.modalBatch = null;
  document.body.style.overflow = "";
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3000);
}

function copiedMessage(text) {
  const compactText = text.length > 48 ? `${text.slice(0, 45)}...` : text;
  return `${compactText} Copied`;
}

function bindEvents() {
  document.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.openModal));
  });

  closeModalButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
  modal.addEventListener("scroll", maybeAppendModalBatch, { passive: true });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }

    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-copy]")) {
      event.preventDefault();
      copyText(event.target.dataset.copy).then(() => showToast(copiedMessage(event.target.dataset.copy)));
    }
  });

  document.addEventListener("click", async (event) => {
    const copyTarget = event.target.closest("[data-copy]");

    if (!copyTarget) {
      return;
    }

    await copyText(copyTarget.dataset.copy);
    showToast(copiedMessage(copyTarget.dataset.copy));
  });
}

function render(data) {
  state.data = data;
  const captionFrequency = data.captionFrequency ?? data.commonFrequency;

  summary.textContent = `${data.captionCount} captions · ${Object.keys(captionFrequency).length} caption tags · ${Object.keys(data.wordFrequency).length} words`;
  renderFrequency(commonPreview, captionFrequency, previewLimit);
  renderFrequency(wordPreview, data.wordFrequency, previewLimit);
  renderCaptions(captionPreview, data.captions, captionPreviewLimit);
}

async function init() {
  bindEvents();

  try {
    const response = await fetch("./client-data.json");

    if (!response.ok) {
      throw new Error(`Failed to load client-data.json: ${response.status}`);
    }

    render(await response.json());
  } catch (error) {
    summary.textContent = error.message;
    console.error(error);
  }
}

init();
