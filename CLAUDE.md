# CV Website — Project Guide

## Overview
This is a static single-page CV/resume website built with plain HTML, CSS, and JavaScript. It uses no frameworks or build tools — just open `index.html` in a browser or serve it with a local HTTP server.

The project is a sibling of `Project_CV` (Lionel Lam's personal CV site), sharing the same architecture, theme system, and design paradigm.

## Running locally
```bash
python3 -m http.server 8081
# then open http://localhost:8081
```

---

## Architecture

### File structure
```
Project_CV_Leonard/
├── index.html       # Page shell + render logic (do not edit for content changes)
├── content.js       # All CV data — edit this to update the website content
├── css/
│   ├── theme.css    # CSS variables for light and dark themes
│   └── base.css     # Layout, components, and responsive styles
├── img/             # Certification badge images and institution logos
└── files/
    └── cv.pdf       # Downloadable PDF of the CV
```

### Content separation
- **`content.js`** is the single source of truth for all personal data
- **`index.html`** reads `RESUME_DATA` from `content.js` and renders the page via JavaScript
- **Never hardcode personal content in `index.html`** — always edit `content.js`

---

## content.js data structure

```js
const RESUME_DATA = {
  profile: {
    name: "Full Name",
    jobTitle: "Job Title",
    postnominals: "CERT1, CERT2",   // Post-nominal letters, or "" if none
    contacts: [
      { label: "display text", link: "tel:+..." },
      { label: "display text", link: "mailto:..." },
      { label: "display text", link: "https://..." }
    ]
  },
  summary: [
    "Paragraph 1",
    "Paragraph 2",
    // Add as many paragraphs as needed
  ],
  experience: [
    {
      employer: "Company Name, Location",
      role: "Job Title",
      projects: [
        {
          title: "Project or Engagement Name",
          period: "Month Year – Month Year<br>Client Name",  // <br> adds a line break
          bullets: ["Achievement 1", "Achievement 2"]
        }
      ]
    }
  ],
  earlierCareer: [
    { employer: "Company Name", desc: "Role — Description (Year – Year)" }
  ],
  skills: [
    { category: "Category Name", tags: ["Skill A", "Skill B"] }
  ],
  certifications: [
    {
      name: "Certification Name",
      issuer: "Issuing Body",
      id: "CERT-ID",
      badge: "img/badge-filename.png"  // store badge image in img/ folder
    }
  ],
  publications: [
    {
      title: "Article Title",
      date: "Month Year",
      link: "https://...",
      bullets: ["Summary point 1", "Summary point 2"]
    }
  ],
  education: [
    {
      period: "Year – Year",
      degree: "Degree Name",
      school: "Institution Name",
      logo: "img/logo-filename.png"  // store logo image in img/ folder
    }
  ]
};
```

---

## Theme system

Colors are defined as CSS variables in `css/theme.css`:

```css
:root { /* Light mode */ }
[data-theme="dark"] { /* Dark mode */ }
```

Key variables:
- `--gold` / `--gold-light` — accent colour (headings, borders, highlights)
- `--navy` / `--navy-mid` — primary text and heading colour
- `--bg` / `--bg-glass` — background and frosted nav background
- `--text` / `--text-mid` / `--text-muted` / `--text-faint` — text hierarchy

To change the accent colour across the whole site, update `--gold` and `--gold-light` in both `:root` and `[data-theme="dark"]` in `theme.css`.

Dark mode is toggled by the moon/sun button in the nav. It sets a `data-theme="dark"` attribute on `<html>` and saves the preference to `localStorage`.

---

## Assets

### Certification badges
- Place badge images in `img/` (e.g. `img/badge-pmp.png`)
- Reference them in `content.js` as `badge: "img/badge-pmp.png"`
- Recommended size: square, at least 160×160px

### Institution logos
- Place logos in `img/` (e.g. `img/logo-ntu.png`)
- Reference them in `content.js` as `logo: "img/logo-ntu.png"`
- Logos are displayed at 130×52px with `object-fit: contain`
- In dark mode, logos get a white background automatically

### CV PDF
- Place the PDF at `files/cv.pdf`
- The download button in the header links to this path automatically

---

## Populating from a CV document

When given a CV (PDF, Word, or plain text), follow these steps:

1. Extract the following and map to `content.js`:
   - Name, job title, post-nominals → `profile`
   - Phone, email, LinkedIn → `profile.contacts`
   - Professional summary → `summary` (split into 2–4 paragraphs)
   - Work history → `experience` (group by employer, then by project/engagement)
   - Older or shorter roles → `earlierCareer`
   - Skills → `skills` (group into logical categories)
   - Certifications → `certifications` (source badge images separately)
   - Articles or papers → `publications` (leave empty array if none)
   - Education → `education` (source institution logos separately)

2. If a section doesn't apply (e.g. no publications), set it to an empty array: `publications: []`

3. If `postnominals` is empty, set it to `""` — it renders nothing

4. After populating `content.js`, verify the page renders correctly at `http://localhost:8081`
