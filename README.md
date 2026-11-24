# Abdelrahman Ashraf — Cybersecurity portfolio

Live site: https://abdelrahmanashraf-sec.github.io/

A graphite and copper portfolio with a cinematic raven background. Abdelrahman Ashraf is the primary name; 0xTitan is the smaller alias. The approved typography uses Barlow Condensed, Manrope, and IBM Plex Mono, bundled locally with their licenses.

## Development

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`index.html` loads `src/portfolio/app.js`. Edit that file for profile, projects, skills, experience, and contact content. Styles live beside it in `style.css`, `identity.css`, and `graphite.css`; font declarations are in `fonts.css`. Earlier React components are retained in the repository but are not the active page entry.

The portfolio includes an interactive domain map linked to the skill explorer, keyboard-accessible skill and experience tabs, project filtering and detail dialogs, mobile navigation, reading progress, and reduced-motion support. Project descriptions distinguish authorized lab practice from client work.

The CV download uses the current Penetration Testing Intern PDF. `public/Abdelrahman_Ashraf_CV.pdf` preserves the earlier public download URL with the same updated file. Experience includes TIPS Hindawi, DEPI, Instant, and Archon Security.

## Deployment

The existing `.github/workflows/pages.yml` builds `dist/` and deploys it to GitHub Pages when `main` changes. Local demo controls, typography experiments, local file paths, and localhost links are not included in the published page.

## Contact

- Email: abdelrahman.a.moustfa@gmail.com
- LinkedIn: https://www.linkedin.com/in/abdelrahman-ashraf1/
- GitHub: https://github.com/abdelrahmanashraf-sec
