# melliott18.github.io

Mitchell Elliott's static portfolio. The refreshed design is the root home page and uses plain HTML, CSS, and JavaScript, with no build step or package installation.

## Repository layout

```text
index.html                         Home page content
assets/
  css/site.css                     Home page styles
  js/theme-init.js                 Restore the theme before styles load
  js/site.js                       Navigation, alignment, and theme controls
  images/picture.jpeg              Portrait
Mitchell_Elliott_Resume.pdf         Current two-page master resume
Mitchell_Elliott_CV.pdf             Current six-page academic CV
docs/
  portfolio-review/                Review notes, source mappings, and skill coverage
.nojekyll                          Publish static files without Jekyll processing
AGENTS.md                          Repository workflow instructions
README.md                          Repository guide
```

Keep page content in [index.html](index.html) and edit its styles and behavior in `assets/`. The small theme initializer runs before the stylesheet; the main script runs at the end of the body.

There is one current home page. The previous `site/` and `review/` layouts remain available in Git history. Review documentation lives in [docs/portfolio-review](docs/portfolio-review/README.md); historical paths and validation records there describe the layout at the time of each review.

## Local preview

Run from the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open the [local home page](http://127.0.0.1:4173/).

Verify navigation, light/dark/system themes, portrait loading, and both PDF downloads at desktop and mobile widths. Keep relative resource paths valid when moving files.

## Content sources

The page uses the current CV and master resume from the sibling resume repository for career details. It includes all eight work roles, two teaching roles, both degrees, five presentations, and 21 project entries: thirteen CV projects, two retained historical projects, and six professional-work summaries. It keeps the broad 402-entry skills inventory across 17 groups at the owner’s request.

The PDF downloads are unchanged, exact copies of `resumes/general/master/master-two-page.pdf` and `resumes/general/cv/cv.pdf`. Their root filenames preserve the existing public download URLs. See the [September 23 content refresh](docs/portfolio-review/content-refresh-2026-09-23.md) and [source hashes](docs/portfolio-review/content-refresh-sources.json) for provenance and validation.

## Development workflow

Use a topic branch named `<type>/<short-description>` and test locally. Keep `main` unchanged until integration is requested.

GitHub Pages publishes from `main` at the repository root. Merging changes into remote `main` triggers publication through that existing setup. No custom GitHub Actions workflow, Actions settings changes, custom build, or Pages source change is needed. `.nojekyll` tells Pages to publish the static files without Jekyll processing, as described in the [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#static-site-generators). GitHub still handles deployment through its managed Pages workflow. Repository documentation remains available as static content.
