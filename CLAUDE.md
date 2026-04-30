# AJ Redes & Infra — Landing Page

Landing page profissional para empresa de fibra óptica, cabeamento, elétrica e TI.
Objetivo: captação de leads via WhatsApp e email.

## Stack
- **Framework**: Astro (static output)
- **Hospedagem**: Cloudflare Pages (gratuito)
- **Versionamento**: GitHub
- **Domínio**: Registro.br (.com.br, ~R$40/ano)

## Comandos
```bash
npm install       # instalar dependências
npm run dev       # dev server em localhost:4321
npm run build     # gerar pasta dist/ para deploy
npm run preview   # preview local do build
```

## Estilo Visual
- **Tema**: Light — azul corporativo (#0A3D91) com laranja vibrante (#FF6B1A)
- **Fontes**: Barlow Condensed (títulos) + Mulish (corpo)
- **Paleta**: ver `src/styles/variables.css`

## Placeholders para substituir
| Placeholder | Arquivo | Substituir por |
|---|---|---|
| `5511999999999` | todos os links `wa.me` | número real com DDI+DDD |
| `contato@ajredeseinfra.com.br` | Contact.astro, Footer.astro | email real |
| `ajredeseinfra.com.br` | astro.config.mjs, Layout.astro | domínio real |
| `[Cidade/Região]` | Hero.astro | cidade de atuação |
| `+X anos` | Differentials.astro | anos de experiência reais |
| `00.000.000/0000-00` | Footer.astro | CNPJ real |

## Deploy (Cloudflare Pages)
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION=20`
- Branch de produção: `main`

---

## Diretriz Estética (DISTILLED_AESTHETICS_PROMPT)

```
<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>
```
