const MODS_DATA = [
    // 核心库
    { name: "Fabric API", file: "fabric-api-0.92.6+1.20.1.jar", category: "library", deps: [], desc: "Fabric 模组开发的核心 API 库", mcVersion: "1.20.1" },
    { name: "Architectury API", file: "architectury-9.2.14-fabric.jar", category: "library", deps: [], desc: "跨平台模组开发 API", mcVersion: "1.20+" },
    { name: "Balm", file: "balm-fabric-1.20.1-7.3.9.jar", category: "library", deps: ["Fabric API"], desc: "多加载器模组抽象层", mcVersion: "1.20.1" },
    { name: "Cardinal Components API", file: "cardinal-components-api-5.2.2.jar", category: "library", deps: ["Fabric API"], desc: "为游戏对象附加数据的 API", mcVersion: "1.20+" },
    { name: "Cloth Config API", file: "cloth-config-11.1.136-fabric.jar", category: "library", deps: [], desc: "模组配置界面 API", mcVersion: "1.20+" },
    { name: "Fabric Language Kotlin", file: "fabric-language-kotlin-1.12.3+kotlin.2.0.21.jar", category: "library", deps: [], desc: "Kotlin 语言支持库", mcVersion: "1.20+" },
    { name: "Forge Config API Port", file: "ForgeConfigAPIPort-v8.0.3-1.20.1-Fabric.jar", category: "library", deps: ["Fabric API"], desc: "Forge 配置系统移植", mcVersion: "1.20.1" },
    { name: "libIPN", file: "libIPN-fabric-1.20-4.0.2.jar", category: "library", deps: ["Fabric API", "Fabric Language Kotlin"], desc: "Inventory Profiles Next 的库", mcVersion: "1.20" },
    { name: "MaLiLib", file: "malilib-fabric-1.20.1-0.16.3.jar", category: "library", deps: [], desc: "masa 客户端模组的库", mcVersion: "1.20.1" },
    { name: "Moonlight Lib", file: "moonlight-1.20-2.16.21-fabric.jar", category: "library", deps: ["Fabric API"], desc: "轻量级工具库", mcVersion: "1.20" },
    { name: "PandaLib", file: "pandalib-fabric-0.4.2-1.20.jar", category: "library", deps: ["Fabric API"], desc: "The Panda Oliver 的库", mcVersion: "1.20" },
    { name: "Player Animation Library", file: "player-animation-lib-fabric-1.0.2-rc1+1.20.jar", category: "library", deps: [], desc: "玩家动画支持库", mcVersion: "1.20" },
    { name: "Searchables", file: "Searchables-fabric-1.20.1-1.0.3.jar", category: "library", deps: [], desc: "根据组件形状颜色过滤元素，预测输入", mcVersion: "1.20.1" },

    // 性能优化
    { name: "Sodium", file: "sodium-fabric-0.5.13+mc1.20.1.jar", category: "optimization", deps: [], desc: "现代渲染引擎和优化", mcVersion: "1.20.1" },
    { name: "Indium", file: "indium-1.0.36+mc1.20.1.jar", category: "optimization", deps: ["Sodium"], optional: ["Continuity"], desc: "Sodium 的 Fabric 渲染 API 支持", mcVersion: "1.20.1" },
    { name: "Iris Shaders", file: "iris-1.7.6+mc1.20.1.jar", category: "optimization", deps: ["Sodium"], optional: ["Reese's Sodium Options", "Sodium Extra"], desc: "现代光影加载器", mcVersion: "1.20.1" },
    { name: "Reese's Sodium Options", file: "reeses_sodium_options-1.7.2+mc1.20.1-build.101.jar", category: "optimization", deps: ["Sodium"], optional: ["Sodium Extra", "Iris"], desc: "Sodium 视频设置界面改进", mcVersion: "1.20.1" },
    { name: "Sodium Extra", file: "sodium-extra-0.5.4+mc1.20.1-build.115.jar", category: "optimization", deps: ["Sodium"], optional: ["Reese's Sodium Options", "Iris"], desc: "Sodium 额外功能扩展", mcVersion: "1.20.1" },
    { name: "Continuity", file: "continuity-3.0.0-beta.5+1.20.1.jar", category: "optimization", deps: ["Fabric API"], optional: ["Indium"], desc: "连接材质和发光材质支持", mcVersion: "1.20.1" },
    { name: "Entity Culling", file: "entityculling-fabric-1.7.0-mc1.20.1.jar", category: "optimization", deps: ["Fabric API"], desc: "实体遮挡剔除优化", mcVersion: "1.20.1" },
    { name: "Lithium", file: "lithium-fabric-mc1.20.1-0.11.2.jar", category: "optimization", deps: [], desc: "游戏逻辑和物理优化", mcVersion: "1.20.1" },
    { name: "ModernFix", file: "modernfix-fabric-5.25.2+mc1.20.1.jar", category: "optimization", deps: [], desc: "全方位性能优化和 Bug 修复", mcVersion: "1.20.1" },

    // 玩法机制
    { name: "Amendments", file: "amendments-1.20-2.2.3-fabric.jar", category: "gameplay", deps: ["Fabric API", "Moonlight Lib"], desc: "原版方块功能增强", mcVersion: "1.20" },
    { name: "Better Combat", file: "bettercombat-fabric-1.9.0+1.20.1.jar", category: "gameplay", deps: ["Fabric API", "Cloth Config API", "Player Animation Library"], desc: "地下城风格战斗系统：武器碰撞检测、连击、双持", mcVersion: "1.20.1" },
    { name: "Carry On", file: "carryon-fabric-1.20.1-2.1.2.7.jar", category: "gameplay", deps: ["Fabric API"], desc: "搬运方块实体和生物", mcVersion: "1.20.1" },
    { name: "Panda's FallingTree", file: "fallingtrees-fabric-0.12.7-1.20.jar", category: "gameplay", deps: ["Fabric API", "PandaLib"], desc: "快速砍树", mcVersion: "1.20" },
    { name: "Supplementaries", file: "supplementaries-1.20-3.1.42-fabric.jar", category: "gameplay", deps: ["Moonlight Lib", "Fabric API"], desc: "原版风格装饰和功能方块", mcVersion: "1.20" },
    { name: "Traveler's Backpack", file: "travelersbackpack-fabric-1.20.1-9.1.46.jar", category: "gameplay", deps: ["Fabric API", "Cardinal Components API"], desc: "可穿戴背包系统", mcVersion: "1.20.1" },
    { name: "Waystones", file: "waystones-fabric-1.20-14.1.6.jar", category: "gameplay", deps: ["Fabric API", "Balm"], desc: "路标传送系统", mcVersion: "1.20" },
    { name: "Open Parties and Claims", file: "open-parties-and-claims-fabric-1.20.1-0.25.8.jar", category: "gameplay", deps: ["Fabric API", "Forge Config API Port"], desc: "领地保护和队伍系统", mcVersion: "1.20.1" },
    { name: "Gliders", file: "gliders-fabric-1.2.0.jar", category: "gameplay", deps: [], desc: "可制作的滑翔翼，鞘翅的早期替代品", mcVersion: "1.20.1" },
    { name: "Create", file: "create-fabric-6.0.8.1+build.1744-mc1.20.1.jar", category: "gameplay", deps: ["Fabric API"], desc: "机械动力：齿轮、传送带、自动化机械", mcVersion: "1.20.1" },
    { name: "Polymorph", file: "polymorph-fabric-0.49.10+1.20.1.jar", category: "gameplay", deps: ["Fabric API"], desc: "合成冲突解决：选择想要的配方", mcVersion: "1.20.1" },

    // 装饰物品
    { name: "Windchimes", file: "windchimes-1.2.4+1.20.jar", category: "decoration", deps: [], desc: "装饰性风铃", mcVersion: "1.20" },
    { name: "Decorative Blocks", file: "decorative_blocks-fabric-1.20.1-4.1.3.jar", category: "decoration", deps: ["Fabric API"], desc: "装饰性方块", mcVersion: "1.20.1" },
    { name: "Entity Texture Features", file: "entity_texture_features_fabric_1.20.1-6.2.5.jar", category: "decoration", deps: [], desc: "实体自定义纹理和发光效果", mcVersion: "1.20.1" },
    { name: "Cluttered", file: "Cluttered-2.1.0-1.20.1[Fabric].jar", category: "decoration", deps: [], desc: "装饰性家具和物品", mcVersion: "1.20.1" },
    { name: "Kaleidoscope-Cookery", file: "kaleidoscopecookery-1.0.1-fabric+mc1.20.1.jar", category: "decoration", deps: [], desc: "森罗物语：厨房装饰", mcVersion: "1.20.1" },
    { name: "Kaleidoscope-Doll", file: "kaleidoscopedoll-1.20.1-fabric-1.0.9.jar", category: "decoration", deps: [], desc: "森罗物语：玩偶装饰", mcVersion: "1.20.1" },

    // 实用工具
    { name: "Jade", file: "Jade-1.20-Fabric-11.12.0.jar", category: "utility", deps: ["Fabric API"], desc: "查看准心处的方块和实体信息", mcVersion: "1.20" },
    { name: "JEI", file: "jei-1.20.1-fabric-15.20.0.129.jar", category: "utility", deps: ["Fabric API"], desc: "物品和配方查看器，代替合成书", mcVersion: "1.20.1" },
    { name: "EMI", file: "emi-1.1.22+1.20.1+fabric.jar", category: "utility", deps: [], desc: "现代化配方查看器，支持配方树和可制作模式", mcVersion: "1.20.1" },
    { name: "Xaero's Minimap", file: "xaerominimap-fabric-1.20.1-25.3.5.jar", category: "utility", deps: [], desc: "小地图", mcVersion: "1.20.1" },
    { name: "Xaero's World Map", file: "xaeroworldmap-fabric-1.20.1-1.40.6.jar", category: "utility", deps: ["Xaero's Minimap"], desc: "全屏世界地图", mcVersion: "1.20.1" },
    { name: "XaeroPlus", file: "XaeroPlus-2.30.3+fabric-1.20.1-WM1.40.6-MM25.3.5.jar", category: "utility", deps: ["Xaero's Minimap", "Xaero's World Map"], desc: "Xaero 地图增强", mcVersion: "1.20.1" },
    { name: "Distant Horizons", file: "DistantHorizons-2.4.5-b-1.20.1-fabric-forge.jar", category: "utility", deps: [], desc: "LOD 超远视距渲染", mcVersion: "1.20.1" },
    { name: "Leawind's Third Person", file: "leawind_third_person-v2.0.8-beta.5-mc1.20.1-fabric.jar", category: "utility", deps: ["Fabric API", "Architectury API"], desc: "第三人称视角增强", mcVersion: "1.20.1" },
    { name: "Litematica", file: "litematica-fabric-1.20.1-0.15.4.jar", category: "utility", deps: ["MaLiLib"], desc: "建筑蓝图和投影工具", mcVersion: "1.20.1" },
    { name: "Tweakeroo", file: "tweakeroo-fabric-1.20.1-0.17.1.jar", category: "utility", deps: ["MaLiLib"], desc: "客户端功能增强", mcVersion: "1.20.1" },
    { name: "Inventory Profiles Next", file: "InventoryProfilesNext-fabric-1.20-1.10.11.jar", category: "utility", deps: ["Fabric API", "libIPN"], desc: "物品栏管理和自动整理", mcVersion: "1.20" },
    { name: "Controlling", file: "Controlling-fabric-1.20.1-12.0.2.jar", category: "utility", deps: ["Fabric API","Searchables"], desc: "键位冲突显示", mcVersion: "1.20.1" },
    { name: "Nature's Compass", file: "NaturesCompass-1.20.1-2.2.3-fabric.jar", category: "utility", deps: [], desc: "生物群系指南针，快速定位群系", mcVersion: "1.20.1" },
    { name: "Mod Menu", file: "modmenu-7.2.2.jar", category: "utility", deps: ["Fabric API"], desc: "模组列表和配置界面", mcVersion: "1.20+" },
    { name: "IMBlocker", file: "IMBlocker-5.4.6-fabric+1.17-1.21.8.jar", category: "utility", deps: [], desc: "输入法冲突修复", mcVersion: "1.20.1" },
    { name: "JECharacters", file: "jecharacters-1.20.1-fabric-4.6.3.jar", category: "utility", deps: [], desc: "拼音搜索支持", mcVersion: "1.20.1" },
    { name: "WorldEdit", file: "worldedit-mod-7.2.15.jar", category: "utility", deps: [], desc: "创造模式地图编辑器", mcVersion: "1.20+" },
    { name: "WorldEditCUI", file: "WorldEditCUI-1.20+01.jar", category: "utility", deps: ["Fabric API", "WorldEdit"], desc: "WorldEdit 选区可视化", mcVersion: "1.20+" },
    { name: "Axiom", file: "Axiom-5.2.1-for-MC1.20.1.jar", category: "utility", deps: [], desc: "现代化世界编辑工具", mcVersion: "1.20.1" },
    { name: "Fabric Carpet", file: "fabric-carpet-1.20-1.4.112+v230608.jar", category: "utility", deps: [], desc: "技术玩家工具集", mcVersion: "1.20" },
    { name: "LotTweaks", file: "LotTweaks-mc1.20.1-fabric-2.3.4.jar", category: "utility", deps: [], desc: "色轮调色工具", mcVersion: "1.20.1" }
];

const CATEGORIES = { library: '核心库', optimization: '性能优化', gameplay: '玩法机制', decoration: '装饰物品', utility: '实用工具', disabled: '已禁用' };
