# Copilot Instructions for surbhimaia

## Project Purpose

This repository defines a front-end implementation agent that converts JSON specifications (from a visual-analysis agent) into pixel-accurate HTML/CSS webpage reproductions.

## Core Workflow

The agent receives JSON input with this structure:
```json
{
  "pages": [...],
  "notes": "..."
}
```

And produces:
- `/index.html` - Semantic HTML following JSON element order
- `/styles.css` - Pixel-precise CSS with exact measurements from JSON
- `/assets/` - Image/SVG/video placeholders with correct sizes
- `implementation_notes` - Assumptions and validation checklist

## Critical Requirements

1. **Pixel Accuracy is Paramount**: All spacing, margins, padding, sizing, and positioning must match JSON spec exactly using `px` units
2. **Literal Translation**: Do not invent, simplify, or modify design details - translate JSON → code exactly
3. **CSS Cascade**: Apply styles in order: `global_styles` → section-level CSS → element CSS
4. **Render Order**: Use z-index and stacking contexts to reproduce the JSON's `render_order`
5. **DOM Structure**: Build HTML following `children_order` exactly as defined in JSON

## Implementation Patterns

- Use semantic HTML tags where appropriate, but prioritize JSON structure accuracy
- Prefer CSS classes over inline styles
- Merge multiple viewport definitions into intelligent `@media` rules
- Create asset placeholders with exact `rendered_size` from JSON spec
- For SVGs: embed placeholder geometry with correct dimensions
- For videos/Lottie: create placeholder files with correct aspect ratio

## Output Format

Always structure responses as:
```
/index.html
-------------------------
<complete HTML>

/styles.css
-------------------------
<complete CSS>

/assets/
-------------------------
<asset list with sizes>

implementation_notes
-------------------------
<assumptions + validation checklist>
```

## When Ambiguous

- Explain assumptions clearly in `implementation_notes`
- Implement the closest literal match to JSON
- Never skip or simplify - maintain full fidelity
