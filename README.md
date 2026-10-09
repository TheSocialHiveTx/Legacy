# Legacy Home-Improvement

Five-page static website built with vanilla HTML, CSS and JavaScript. No dependencies, framework, build step or backend.

## Pages
- `index.html`: Home, services overview and featured projects.
- `services.html`: Bathrooms, decks, concrete/porches and detached garages.
- `about.html`: Family-owned business, Angel, free estimates and service area.
- `gallery.html`: All 15 project photos plus the logo and cover artwork, category filters and a keyboard-accessible full-size image viewer.
- `contact.html`: Facebook contact and a project message helper.

## GitHub Pages
Upload the contents of `dist/` to the repository root. Keep the HTML files, `styles.css`, `script.js` and `assets/` together. In Settings → Pages, select deployment from the main branch and root folder. Relative links support repository project URLs. The delivered ZIP already has these files at its root; upload its contents, rather than the ZIP itself.

## Source facts
Source: https://www.facebook.com/profile.php?id=61595333751210
Reviewed October 9, 2026 in the signed-in browser supplied by the user.

The business introduction identifies a small, family-owned and operated company based in Wichita, Kansas. Angel manages the profile. It serves Wichita, surrounding areas, Hutchinson and communities south of Wichita. The business advertises free estimates and asks customers to inquire about warranties for their specific work.

The available photo collection contained 17 images: 8 garage and masonry photos, 3 deck photos, 2 porch/concrete photos, 2 bathroom renovation photos, the logo and the cover artwork. The Albums view showed no additional albums. All 17 images are included locally. `assets/image-sources.json` maps each original to its Facebook source. Original JPEGs are preserved. WebP display copies remove the embedded black letterboxing and reduce file size.

Business posts describe detached single-car garage construction with concrete work and selected masonry coloring; a completed deck; removal and replacement of a cracked, sunken concrete porch; and bathroom work correcting existing framing. Website copy paraphrases those descriptions. No customer names, comments, account information, private messages or personal profile details are included.

No verified phone number, email address, street address, operating hours, license, insurance credentials or broad warranty terms were found. These have not been invented. Confirm available warranty coverage directly with the business.

## Contact behavior
Facebook links open the supplied profile. The message helper copies a draft for the visitor to paste into Facebook. It does not submit or store inquiries. Clipboard access works on HTTPS/localhost; manual copying is available when clipboard access is blocked.

## Editing
Edit copy and links in the HTML pages, styling in `styles.css`, and navigation/gallery/message interactions in `script.js`. Replace Facebook links or add verified phone/email details when available. Image assets are local and do not depend on expiring Facebook CDN URLs.

## Validation
JavaScript syntax checked. All five pages checked for local links, asset references, heading structure and gallery inventory. A browser-rendered visual inspection was not available in the static preview environment.

## Google Maps
Home and Contact include an official Google Maps iframe obtained from Wichita’s Share → Embed a map dialog. It shows Wichita as the home city/service area, not an unverified office address. Maps requires an internet connection; no API key is needed.
