# PA 103 Reviewer

Study reviewer for PA 103, built from the course slides and documents. The raw sources are
condensed into final notes, and the final notes are published as a site on Cloudflare Pages.

## Folder guide

| Folder | What goes here |
| --- | --- |
| `00_RAW_SOURCES/` | Original files as received: PDFs, PPTs, DOCX, TXT. Never edited. |
| `01_FINAL_NOTES/` | The cleaned, final reviewer notes. One file per topic in `topics/`. |
| `02_PRACTICE_MATERIALS/` | Practice questions, quizzes, flashcards, mock exams. |
| `03_SOURCE_INDEX/` | Index of the raw sources (slides, docs): which file, which topic it feeds. |
| `04_ASSETS/images/` | Pictures used in the notes. |
| `04_ASSETS/diagrams/` | Diagrams and charts made for the notes. |
| `04_ASSETS/extracted_figures/` | Figures pulled out of the slides and documents. |
| `05_CLOUDFLARE_SITE/` | Old placeholder. The live site source is now `site/`. |
| `site/` | Astro project. Reads the notes in `01_FINAL_NOTES/` in place and builds the site into `site/dist/`. |

## Cloudflare Pages settings

- Root directory: `site`
- Build command: `npm run build`
- Build output directory: `dist`

Local: `cd site && npm install && npm run dev` (preview), `npm run build` (full build with search index).

## Notes

- `.gitkeep` files only exist so Git keeps empty folders. Delete them once a folder has content.
- Keep the raw slides and documents out of `01_FINAL_NOTES/`. List them in `03_SOURCE_INDEX/` instead.
