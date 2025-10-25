# Lei Pei Personal Website

This repository contains the source for Lei Pei's personal website, featuring
research highlights, publications, projects, and contact information. The site
is built with lightweight, framework-free HTML, CSS, and JavaScript so it can be
deployed easily to any static hosting provider (GitHub Pages, Netlify, Vercel,
etc.).

## Structure

- `index.html` &mdash; Landing page with hero, research themes, publications,
  projects, teaching, news, and contact sections.
- `sections/` &mdash; Detail pages for research themes, publications, projects,
  the CV, and the legal notice (impressum).
- `assets/css/style.css` &mdash; Global styling for typography, layout, and
  components.
- `assets/js/main.js` &mdash; Interactive behaviors including the responsive
  navigation menu, dynamic copyright year, and a lightweight contact form
  handler.
- `assets/images/profile-placeholder.svg` &mdash; Placeholder portrait artwork.
- `assets/resume/` &mdash; Place the downloadable CV PDF here as `Lei_Pei_CV.pdf`.

## Getting Started

Open `index.html` directly in a browser or serve the folder with any static file
server:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000> to preview the website locally.

## Customization Tips

- Replace placeholder text with Lei Pei's actual biography, research projects,
  and publication citations.
- Swap the `profile-placeholder.svg` background with a professional portrait in
  `assets/images/` and update the CSS if needed.
- Add analytics, forms, or additional sections by extending the HTML templates.
