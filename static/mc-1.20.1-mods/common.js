const MODS_MAP = new Map(MODS_DATA.map(m => [m.name, m]));

// 计算被依赖关系
MODS_DATA.forEach(mod => mod.depBy = []);
MODS_DATA.forEach(mod => {
    if (mod.deps) {
        mod.deps.forEach(depName => {
            const depMod = MODS_MAP.get(depName);
            if (depMod && !depMod.depBy.includes(mod.name)) {
                depMod.depBy.push(mod.name);
            }
        });
    }
});

// 统计非 disabled 的模组
const ACTIVE_MODS = MODS_DATA.filter(m => !m.disabled);

// 检测 MC 版本（取最常见的版本）
function detectMCVersion() {
    const versions = {};
    ACTIVE_MODS.forEach(m => {
        const v = m.mcVersion || 'unknown';
        versions[v] = (versions[v] || 0) + 1;
    });
    return Object.keys(versions).sort((a, b) => versions[b] - versions[a])[0];
}

let currentFilter = null;

// 渲染页面标题和统计信息
function renderPageInfo() {
    const mcVersion = detectMCVersion();
    const totalMods = ACTIVE_MODS.length;
    const topLevelMods = ACTIVE_MODS.filter(m => !m.depBy || m.depBy.length === 0).length;

    document.getElementById('subtitle').textContent = `MC ${mcVersion} Fabric - ${totalMods} 个模组`;
    document.getElementById('sidebarTitle').textContent = `📦 模组列表 (${totalMods})`;

    const categoryCounts = {};
    ACTIVE_MODS.forEach(m => categoryCounts[m.category] = (categoryCounts[m.category] || 0) + 1);
    const warningMods = MODS_DATA.filter(m => m.warning).length;

    let statsHtml = '<div class="stats-row">';
    statsHtml += `<div class="stat-card${currentFilter === null ? ' active' : ''}" onclick="filterByCategory(null)"><div class="stat-value">${totalMods}</div><div class="stat-label">总模组</div></div>`;
    statsHtml += `<div class="stat-card${currentFilter === 'top' ? ' active' : ''}" onclick="filterByCategory('top')"><div class="stat-value">${topLevelMods}</div><div class="stat-label">顶层模组</div></div>`;
    if (warningMods > 0) {
        statsHtml += `<div class="stat-card${currentFilter === 'warning' ? ' active' : ''}" onclick="filterByCategory('warning')"><div class="stat-value">${warningMods}</div><div class="stat-label">版本警告</div></div>`;
    }
    statsHtml += '</div><div class="stats-row">';
    Object.entries(CATEGORIES).forEach(([cat, title]) => {
        if (categoryCounts[cat] && cat !== 'disabled') {
            statsHtml += `<div class="stat-card${currentFilter === cat ? ' active' : ''}" onclick="filterByCategory('${cat}')"><div class="stat-value">${categoryCounts[cat]}</div><div class="stat-label">${title}</div></div>`;
        }
    });
    statsHtml += '</div>';

    document.getElementById('stats').innerHTML = statsHtml;
}

function getCategoryClass(modName, fallback = 'gameplay') {
    return MODS_MAP.get(modName)?.category || fallback;
}

function renderDepTags(deps, tagClass, defaultCategory = 'gameplay') {
    return deps.map(d => {
        const catClass = getCategoryClass(d, defaultCategory);
        return `<span class="${tagClass} tooltip-${catClass}">${d}</span>`;
    }).join('');
}

function renderDepLinks(deps, defaultCategory = 'gameplay') {
    return deps.map(d => {
        const catClass = getCategoryClass(d, defaultCategory);
        return `<a href="#mod-${d}" class="dep-tag dep-${catClass}" data-mod="${d}">${d}</a>`;
    }).join('');
}

function createTooltip(modName) {
    const mod = MODS_MAP.get(modName);
    if (!mod) return '';

    let html = `<div class="tooltip-name">${mod.name}</div>`;
    if (mod.deps?.length > 0) {
        html += `<div class="tooltip-section"><div class="tooltip-label">📦 依赖</div><div class="tooltip-tags">`;
        html += renderDepTags(mod.deps, 'tooltip-tag', 'gameplay');
        html += `</div></div>`;
    }
    if (mod.optional?.length > 0) {
        html += `<div class="tooltip-section"><div class="tooltip-label">🔧 可选</div><div class="tooltip-tags">`;
        html += renderDepTags(mod.optional, 'tooltip-tag', 'utility');
        html += `</div></div>`;
    }
    if (mod.depBy?.length > 0) {
        html += `<div class="tooltip-section"><div class="tooltip-label">🔗 被依赖 (${mod.depBy.length})</div><div class="tooltip-tags">`;
        html += renderDepTags(mod.depBy, 'tooltip-tag', 'library');
        html += `</div></div>`;
    }
    return html;
}

let activeTooltip = null;

function showTooltip(e, modName) {
    hideTooltip();
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip-floating';
    tooltip.innerHTML = createTooltip(modName);
    document.body.appendChild(tooltip);

    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 + 'px';
    tooltip.style.top = rect.top - 10 + 'px';
    tooltip.style.transform = 'translate(-50%, -100%)';

    activeTooltip = tooltip;
}

function hideTooltip() {
    if (activeTooltip) {
        activeTooltip.remove();
        activeTooltip = null;
    }
}

function renderSidebar(filtered = MODS_DATA) {
    const list = document.getElementById('sidebarList');
    list.innerHTML = '';

    Object.entries(CATEGORIES).forEach(([cat, title]) => {
        const catMods = filtered.filter(m => m.category === cat);
        if (catMods.length === 0) return;

        const catDiv = document.createElement('div');
        catDiv.className = 'sidebar-category';
        catDiv.textContent = `${title} (${catMods.length})`;
        list.appendChild(catDiv);

        catMods.forEach(mod => {
            const item = document.createElement('div');
            item.className = `sidebar-item ${mod.category}`;
            item.textContent = mod.name + (mod.warning ? ' ⚠️' : '');
            item.onclick = () => document.getElementById(`mod-${mod.name}`).scrollIntoView({ behavior: 'smooth' });

            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerHTML = createTooltip(mod.name);
            item.appendChild(tooltip);
            list.appendChild(item);
        });
    });
}

function filterByCategory(category) {
    currentFilter = category;
    renderPageInfo();
    renderMain();
}

function renderMain() {
    const container = document.getElementById('modsContainer');
    container.innerHTML = '';

    let filtered = ACTIVE_MODS;
    if (currentFilter === 'top') {
        filtered = ACTIVE_MODS.filter(m => !m.depBy || m.depBy.length === 0);
    } else if (currentFilter === 'warning') {
        filtered = MODS_DATA.filter(m => m.warning);
    } else if (currentFilter) {
        filtered = ACTIVE_MODS.filter(m => m.category === currentFilter);
    }

    Object.entries(CATEGORIES).forEach(([cat, title]) => {
        const catMods = filtered.filter(m => m.category === cat);
        if (catMods.length === 0) return;

        const section = document.createElement('div');
        section.className = 'section';
        section.innerHTML = `<div class="section-title">${title} (${catMods.length})</div>`;

        catMods.forEach(mod => {
            const card = document.createElement('div');
            card.className = `mod-card ${mod.category}${mod.warning ? ' warning' : ''}${mod.disabled ? ' disabled' : ''}`;
            card.id = `mod-${mod.name}`;

            let html = `<div class="mod-header"><div class="mod-name">${mod.name}</div><div class="mod-header-right">`;
            if (mod.mcVersion) html += `<span class="mod-version">MC ${mod.mcVersion}</span>`;
            html += `<a href="https://search.mcmod.cn/s?key=${mod.name.replace(/ /g, '+')}&mold=0" target="_blank" class="mod-link">📖 MC百科</a></div></div>`;
            html += `<div class="mod-file">${mod.file}</div>`;
            if (mod.desc) html += `<div class="mod-desc">${mod.desc}</div>`;
            if (mod.warning) html += `<div class="dep-label">⚠️ ${mod.warning}</div>`;

            if (mod.disabled) {
                card.innerHTML = html;
                section.appendChild(card);
                return;
            }

            if (mod.deps?.length > 0) {
                html += `<div class="deps"><div class="dep-label">📦 依赖:</div><div class="dep-list">`;
                html += renderDepLinks(mod.deps, 'gameplay');
                html += `</div></div>`;
            }

            if (mod.optional?.length > 0) {
                html += `<div class="deps"><div class="dep-label">🔧 可选依赖:</div><div class="dep-list">`;
                html += renderDepLinks(mod.optional, 'utility');
                html += `</div></div>`;
            }

            if (mod.depBy?.length > 0) {
                html += `<div class="deps"><div class="dep-label">🔗 被依赖 (${mod.depBy.length}):</div><div class="dep-list">`;
                html += renderDepLinks(mod.depBy, 'library');
                html += `</div></div>`;
            }

            card.innerHTML = html;
            section.appendChild(card);
        });

        container.appendChild(section);
    });

    document.querySelectorAll('.dep-tag[data-mod]').forEach(tag => {
        tag.addEventListener('mouseenter', e => showTooltip(e, e.target.dataset.mod));
        tag.addEventListener('mouseleave', hideTooltip);
    });
}

function initSearch() {
    document.getElementById('sidebarSearch').addEventListener('input', e => {
        const search = e.target.value.toLowerCase();
        const filtered = search ? MODS_DATA.filter(m => m.name.toLowerCase().includes(search) || m.file.toLowerCase().includes(search)) : MODS_DATA;
        renderSidebar(filtered);
    });
}

function renderWarningBanner() {
    const warningMods = MODS_DATA.filter(m => m.warning);
    const banner = document.getElementById('warningBanner');

    if (warningMods.length === 0) {
        banner.innerHTML = '';
        return;
    }

    let html = '<div class="warning-banner"><div class="warning-banner-title">⚠️ 版本警告 (' + warningMods.length + ')</div><div class="warning-banner-list">';
    warningMods.forEach(mod => {
        const catClass = mod.category;
        html += `<a href="#mod-${mod.name}" class="dep-tag dep-${catClass}">${mod.name}</a>`;
    });
    html += '</div></div>';
    banner.innerHTML = html;
}

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    const main = document.querySelector('.main');

    main.addEventListener('scroll', () => {
        if (main.scrollTop > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    btn.addEventListener('click', () => {
        main.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
