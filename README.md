# melliott18.github.io

Mitchell Elliott's static portfolio. The home page and proposed redesign use plain HTML, CSS, and JavaScript, with no build step or package installation.

## Repository layout

```text
site/                              Self-contained public site
  index.html                       Home page content
  assets/
    css/site.css                   Home page styles
    js/theme.js                    Home page theme controls
    images/picture.jpeg            Shared portrait
  downloads/
    Mitchell_Elliott_Resume.pdf     Current two-page master resume
    Mitchell_Elliott_CV.pdf         Current six-page academic CV
review/
  proposed-layout.html             Proposed redesign for local review
  assets/
    css/proposed-layout.css        Redesign styles
    js/theme-init.js               Restore the theme before styles load
    js/proposed-layout.js          Redesign navigation, alignment, and theme controls
docs/
  portfolio-review/                Review notes, source mappings, and skill coverage
AGENTS.md                          Repository workflow instructions
README.md                          Repository guide
```

Keep page content in the corresponding HTML file and edit its styles and behavior in the adjacent asset directories. The preview uses separate styles and scripts so it can be developed independently of the home page. The small preview theme initializer must run before its stylesheet; its other script runs at the end of the body.

The public site lives entirely in [site/](site/), including its assets and PDF downloads. The repository root contains only `site/`, `review/`, `docs/`, and repository files. The preview shares the site's portrait and downloads. Review documentation lives in [docs/portfolio-review](docs/portfolio-review/README.md), separate from the [preview page](review/proposed-layout.html).

## Local preview

Run from the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

- [Home page](http://127.0.0.1:4173/site/)
- [Proposed redesign](http://127.0.0.1:4173/review/proposed-layout.html)

Check both pages after changing shared assets. Verify navigation, light/dark/system themes, portrait loading, and both PDF downloads at desktop and mobile widths. Keep relative resource paths valid when moving files.

## Content sources

Both pages use the current CV and master resume from the sibling resume repository for career details. The home page includes all eight work roles, two teaching roles, thirteen CV projects, both degrees, and five presentations. The proposed layout also retains its historical project inventory and professional-work summaries. Both keep the broad 402-entry skills inventory at the owner’s request.

The PDF downloads are exact copies of `resumes/general/master/master-two-page.pdf` and `resumes/general/cv/cv.pdf`. See the [September 23 content refresh](docs/portfolio-review/content-refresh-2026-09-23.md) and [source hashes](docs/portfolio-review/content-refresh-sources.json) for provenance and validation.

## Development workflow

Use a topic branch named `<type>/<short-description>` and test locally. Keep `main` unchanged until integration is requested. The proposed redesign remains a review artifact; reorganizing the repository does not promote it to the home page.

Future publishing should serve `site/` as the document root. This reorganization does not change deployment configuration or add root-level compatibility copies; the previous public home-page and PDF URLs can be addressed when publishing is updated.
