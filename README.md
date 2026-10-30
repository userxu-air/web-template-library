# Web 模板库

## 使用许可

本模板库中权利人拥有的原创内容仅供个人学习、研究和非商业用途。未经权利人事先书面许可，不得用于商业项目、商业网站、出售、收费交付或其他商业用途。第三方代码、字体、图片和其他素材各自适用其原有许可，本声明不替代或改变第三方许可；使用前请自行核实授权。

网页模板与官网成品归档，可直接双击 HTML 预览，也可作为后续制作官网的模板库复用。

## 目录结构

```
web模板库/
├── landing-page-generator/        # 落地页生成技能完整包
│   ├── SKILL.md                   # 技能说明（含内置模板说明）
│   ├── components/                # 26 个可复用动效组件（背景/按钮/卡片/文字/杂项）
│   └── templates/                 # 6 个落地页模板
│       ├── product-landing.html
│       ├── saas-landing.html
│       ├── portfolio-landing.html
│       ├── sports.html            # 运动品牌落地页
│       ├── motion-gsap.html       # GSAP 动画展示模板
│       └── yuezhou-labeling-machine.html  # 越舟贴标机模板
├── mineral-water/                 # 矿泉水产品页（澄泉 CHENGQUAN，浅色水感主题）
│   └── index.html                 # 单文件，../vendor/ 本地插件引用，可 file:// 直开
└── vendor/                        # 本地插件库（GSAP 3.13 / ScrollTrigger / Lenis / Lucide）
```

## 说明

- `landing-page-generator/` 是完整的技能包，组件和模板均可复用，双击 `components/` 或 `templates/` 下的 html 即可预览。
- `mineral-water/` 是 Codex 高交互模板适配的矿泉水产品落地页：SVG 手绘瓶身、上升气泡、水源剖面、产品规格切换，全部动效本地化，双击 `mineral-water/index.html` 即可离线预览。
- 本目录为「Web 模板」归档，与 `F:\github插件库`（GitHub 插件）分开存放。
