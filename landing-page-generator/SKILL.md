---
name: landing-page-generator
description: 生成美观、交互性强、动效强、创意强的落地页（Landing Page）。基于纯 HTML + Tailwind CSS CDN + 原生 JS/CSS 动画，产出的 .html 文件双击即可在浏览器打开，无需 Node/npm/构建工具。当用户要求「生成落地页」「做个官网/主页」「做个产品页/推广页/营销页」「做个炫酷的网页」「需要动效/动画的网页」时使用本技能。内置完整落地页模板与 26 个可复用动效组件（渐变文字、魔法卡片、粒子背景、霓虹按钮等）。
---

# 落地页生成器（Landing Page Generator）

本技能用于快速生成高质量落地页，核心原则：**美观、交互强、动效强、创意强、完整优化**。

## 技术栈（必须遵守）

- **纯 HTML 单文件**：所有样式与脚本内联在单个 `.html` 文件中
- **Tailwind CSS 通过 CDN 引入**（生产环境建议用 Play CDN 快速预览）：
  ```html
  <script src="https://cdn.tailwindcss.com"></script>
  ```
- **动效**：优先使用原生 CSS `@keyframes`、`transition`、`transform`，配合 `IntersectionObserver` 实现滚动入场动画；少量复杂效果用原生 JS（如鼠标跟随、粒子）。
- **图标**：用内联 SVG 或 emoji，避免依赖图标库（或按需引入 Lucide）。
- **字体**：通过 Google Fonts CDN 引入（如 Inter、Space Grotesk、Poppins）。
- **不依赖任何构建工具**：双击 HTML 即可预览，可直接部署到任意静态托管。

## 目录结构（如有更改自动更新目录，删除已经被用户弃用的模板）

```
landing-page-generator/
├── SKILL.md                    # 本文件
├── templates/                  # 完整落地页模板（可直接使用/改内容）
│   ├── saas-landing.html       # SaaS 产品落地页
│   ├── product-landing.html    # 消费品/App 落地页
│   ├── portfolio-landing.html  # 个人/团队作品集落地页
│   ├── yuezhou-labeling-machine.html  # 工业设备 B2B 英文官网（浅色深蓝工业风）
│   ├── sports.html             # 运动品牌落地页（黑底荧光绿，斜切块+速度线）
│   └── motion-gsap.html        # GSAP 动画展示页（深墨蓝+琥珀金，时间线/ScrollTrigger/pin/视差）
└── components/                 # 可复用动效组件（每个是一个独立 .html 演示，可直接预览+复制代码）
    ├── text/                   # 文字动效
    ├── cards/                  # 卡片/边框动效
    ├── buttons/                # 按钮动效
    ├── backgrounds/            # 背景动效
    └── misc/                   # 其他动效
```

## 内置模板说明

`templates/` 下的完整落地页模板，均可直接改文案/配色后使用：

| 模板文件 | 风格 | 适用场景 |
|---------|------|---------|
| saas-landing.html | 现代科技风 | SaaS 产品、软件服务 |
| product-landing.html | 消费审美风 | 消费品、App、实体产品 |
| portfolio-landing.html | 个人/作品集风 | 个人主页、团队介绍 |
| yuezhou-labeling-machine.html | 浅色深蓝工业风 | 工业设备 B2B 英文官网 |
| sports.html | 运动品牌视觉风 | 运动/潮流品牌、电商促销、高冲击力视觉 |
| motion-gsap.html | 深色动画展示风 | GSAP 动效演示 / 创意落地页 |

### yuezhou-labeling-machine.html（工业设备英文官网模板）

- **配色**：浅色底 + 深蓝主色 `#1346af`，亮蓝 `#1F65CE` / `#259ded` 作强调；白底 + 浅蓝灰分区，标题深色 `#1a1a2e`，正文灰 `#5b6572`。
- **字体**：Space Grotesk（标题，前沿几何感）+ Poppins（正文，对齐原官网）。
- **动效**（12+ 类 UX 动效）：文字逐词入场、渐变文字流动、数字滚动计数、磁吸按钮、卡片上浮投影、图标 hover 弹跳、产品标签贴附动画（SVG）、滚动入场错峰、导航栏滚动阴影、脉冲圆点、跑马灯、浮动插画。
- **结构**：Nav → Hero（产品 SVG 插画 + 标签贴附动画）→ 跑马灯 → 产品卡片 → 六大卖点 → 应用行业 → 源头厂家 → 联系 CTA → Footer。
- **适用**：机械设备、工业制造、B2B 出海官网。产品视觉通过内联 SVG 插画 + 标签贴附动效突出核心动作。

### sports.html（运动品牌落地页模板）

- **配色**：纯黑底 `#0a0a0a` + 荧光绿 `#d4ff3f`（volt）+ 炭灰 `#161616`，高对比运动视觉。
- **字体**：Anton（超大标题、窄字重冲击力）+ Inter（正文）。
- **签名元素**：斜切块（skew 装饰条）+ 速度线（repeating-linear-gradient + streak 扫光动画）+ 滚动入场 reveal。
- **结构**：Nav → Hero（超大标题 Move Faster + 数据指标 + 速度线）→ The Lineup（三列产品卡）→ CTA（荧光绿全屏）→ Footer。
- **适用**：运动/潮流品牌、球鞋服饰、电商促销、能量饮料等高冲击力视觉场景。

### motion-gsap.html（GSAP 动画展示模板）

- **配色**：深墨蓝底 `#0d0f14` + 琥珀金强调 `#e8b45a` + 暖白文字，标题 Space Grotesk。
- **技术**：引入 GSAP + ScrollTrigger CDN，动画按 `gsap-skills` 规范编写（transform 别名、autoAlpha、timeline）。
- **动效**（展示 GSAP 能力）：Hero 时间线入场（mask 文字逐行上滑）、数字滚动计数、`ScrollTrigger.batch` 卡片错峰入场、**固定区块（pin）滚动切换**、背景大字视差、滚动进度条、`gsap.matchMedia()` 适配响应式与 `prefers-reduced-motion`。
- **结构**：Nav → Hero（时间线入场）→ 数据区（计数）→ Features（踩错入场）→ 固定演示区（pin）→ 视差区 → CTA → Footer。
- **适用**：需要强动效展示的创意落地页、动画演示、数字产品官网，也是 GSAP 动画的实现范本。

## 组件清单

### text/ 文字动效
| 文件 | 效果 |
|------|------|
| animated-gradient-text.html | 渐变流动文字 |
| sparkles-text.html | 星光闪烁文字 |
| aurora-text.html | 极光渐变文字 |
| shimmer-text.html | 金属闪光文字 |
| number-ticker.html | 数字滚动计数 |
| word-rotate.html | 词语轮播切换 |
| text-reveal.html | 逐行揭示文字 |
| typing-animation.html | 打字机效果 |

### cards/ 卡片与边框
| 文件 | 效果 |
|------|------|
| magic-card.html | 鼠标跟随聚光卡片 |
| shine-border.html | 流光边框 |
| border-beam.html | 边框光束环绕 |
| neon-gradient-card.html | 霓虹渐变卡片 |
| glare-hover.html | 眩光悬停 |
| bento-grid.html | Bento 网格布局 |

### buttons/ 按钮
| 文件 | 效果 |
|------|------|
| shimmer-button.html | 流光按钮 |
| rainbow-button.html | 彩虹渐变按钮 |
| shiny-button.html | 闪亮按钮 |
| pulsating-button.html | 脉动按钮 |
| interactive-hover-button.html | 磁吸交互按钮 |

### backgrounds/ 背景动效
| 文件 | 效果 |
|------|------|
| particles.html | 粒子背景 |
| retro-grid.html | 复古透视网格 |

### misc/ 其他动效
| 文件 | 效果 |
|------|------|
| marquee.html | 跑马灯 |
| confetti.html | 彩带庆祝 |
| orbiting-circles.html | 环绕轨道 |
| avatar-circles.html | 头像堆叠 |
| scroll-progress.html | 滚动进度条 |

## 生成落地页的标准流程

1. **明确需求**：向用户确认落地页类型（SaaS / 产品 / 作品集 / 活动页等）、主色调、目标受众、核心转化动作（注册/购买/留资）。
2. **选择模板**：优先从 `templates/` 选取最接近的模板作为骨架，避免从零开始。
3. **组装组件**：按页面区块需求，从 `components/` 复制对应组件的 HTML+CSS+JS 代码，替换文案与配色。
4. **统一设计**：确保颜色、字体、圆角、间距一致；定义 CSS 变量统一主题色。
5. **动效节奏**：动效要有层次——首屏 Hero 用最强的视觉冲击（如 aurora 背景 + 渐变文字 + 流光按钮），向下逐步减弱；避免全页堆砌动效导致视觉疲劳。
6. **完整优化**（务必做到）：
   - 响应式：使用 Tailwind 的 `sm:`/`md:`/`lg:` 断点适配移动端
   - 性能：动画用 `transform`/`opacity`（GPU 加速），避免大图未压缩
   - SEO：`<title>`、`<meta name="description">`、语义化标签（`<header>`/`<main>`/`<section>`/`<footer>`）
   - 可访问性：`alt` 属性、`aria-*`、对比度、键盘可操作
   - 无障碍动效：尊重 `prefers-reduced-motion`
7. **交付**：输出单个 `.html` 文件到工作区 output 目录，附上预览链接与改色/改文案的简要说明。

## 关键技术要点

### Tailwind CDN 自定义主题
在 `<script>` 后追加 `tailwind.config` 配置品牌色：
```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: { brand: { 500: "#6366f1", 600: "#4f46e5" } },
        fontFamily: { sans: ["Inter", "sans-serif"] },
      },
    },
  };
</script>
```

### 滚动入场动画（通用模式）
```html
<style>
  .reveal { opacity: 0; transform: translateY(24px); transition: all .7s cubic-bezier(.16,1,.3,1); }
  .reveal.is-visible { opacity: 1; transform: translateY(0); }
</style>
<script>
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
</script>
```

### 鼠标跟随效果（如 magic-card）
核心是监听 `mousemove` 更新 CSS 变量，用 `radial-gradient` 做背景：
```html
<script>
  const card = document.getElementById('card');
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
</script>
```

### 尊重无障碍动效
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

## 注意事项

- 产出文件**必须**是纯 HTML 单文件，用户可直接双击打开预览。
- 生成后主动告知用户：如何改颜色（CSS 变量 / tailwind.config）、如何改文案、如何部署（任意静态托管如 Vercel/Netlify/GitHub Pages）。
- 若用户有 Figma 设计稿或明确配色，优先遵循用户的设计。
- 本模板库的原创内容仅供非商业使用，商业使用须事先获得权利人书面许可。第三方模板、组件和素材须分别核实来源及其原有许可证，不得仅凭本说明认定可商用。
