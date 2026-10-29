# Mingwu Zhang — Academic Website

An English, seven-page academic website inspired by the structure of Cheng-Zhong Xu's University of Macau website. All faculty content and institutional assets have been replaced with HBUT material. No Opening page is included.

## Run

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Deploy the contents of `dist/` to any static web host. Every section has its own generated HTML document and works with JavaScript disabled. JavaScript enhances mobile navigation and publication filtering.

## GitHub Pages

The public repository is `Wcowin/ishbut`. The prepared workflow is `.github/workflows/pages.yml`.

1. Push the website source and workflow to `main`.
2. In the repository, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Run **Deploy to GitHub Pages** from Actions, or push another change to `main`.
4. After the deployment succeeds, the expected project URL is `https://wcowin.github.io/ishbut/`.

The workflow builds the site with Node.js 22 and publishes only `dist/`. Navigation and assets use relative URLs, so both domain-root hosting and the `/ishbut/` project prefix are supported. Do not publish the unbuilt source using the branch-root Pages option.

The workflow is prepared locally; adding it does not itself enable Pages or publish the site.

Routes: `/`, `/research/`, `/awards/`, `/publication/`, `/patents/`, `/teaching/`, `/services/`.

Edit `src/content.mjs` for content, `src/style.css` for appearance, and `scripts/generate.mjs` for the shared page template. The dev and build commands regenerate all seven pages. Restart the dev command after changing the generator or content.

## Sources and content limitations

- Faculty profile, published April 14, 2025: https://scs.hbut.edu.cn/info/1021/1048.htm
- Official English CV: https://sie.hbut.edu.cn/__local/6/FF/9E/B22FA8150519ACF1C1243EBC316_FB4C65A9_2DE16.pdf
- HBUT English website and seal: https://en.hbut.edu.cn/ (seal extracted from its `images/logo1.png`).
- Professor's portrait: the faculty profile's own image.
- DBLP and Google Scholar links: linked from the university faculty profile.
- Layout reference: https://personal.fic.um.edu.mo/czxu/

Quantities and positions reflect the public faculty profile; they are not represented as newly verified 2026 statistics. Patent counts describe applications, not grants. An itemized patent register and current student roster were not supplied by the faculty profile, so neither is fabricated. The Students page contains verified supervision fields and aggregate alumni destinations. English translations of Chinese monograph and project titles are editorial translations. Publication title links lead to Google Scholar searches, not invented PDF links.

The original site author's text, portrait, QR code, diagrams, and University of Macau branding are not included. The school wordmark is typeset in English beside the official HBUT seal.

Source rechecked on October 29, 2026: the faculty profile still displays its April 2025 publication date. The linked English CV is a historical university document and lists `scauzhang@gmail.com`; the website intentionally uses `hbutzhang@gmail.com` from the newer faculty profile. Faculty confirmation of current appointments, admissions, and aggregate statistics remains advisable before treating this as an up-to-date official personal website. Individual publication records have not all been independently checked against publisher records.
