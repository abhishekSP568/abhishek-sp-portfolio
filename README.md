# Abhishek S P — Portfolio

A responsive, single-page portfolio built with plain HTML, CSS, and JavaScript. No build step or package installation is required.

## Open in VS Code

1. Open the `portfolio` folder in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. In the Explorer, right-click `index.html` and choose **Open with Live Server**. The site opens in your browser and refreshes when you save changes.

You can also open `index.html` directly in a browser, though Live Server is recommended while editing.

## Personalize the site

- **Profile photo:** Your supplied photo is used at `assets/images/profile-photo.png`. Replace that file to use a different photo, or update the `src` on the profile `<img>` in `index.html` to point to another image. `assets/images/profile-placeholder.svg` is kept as a generic fallback asset. Use a portrait-oriented image for the best fit.
- **Resume:** Replace `assets/resume.pdf` with your own PDF, keeping that filename so both download buttons continue to work. The included starter PDF contains only the profile details provided for this portfolio; edit or replace it before sharing.
- **Contact and social profiles:** Your email and phone number are set in `SITE_CONFIG` at the top of `js/script.js`. Update them there if they change; also replace the GitHub and LinkedIn placeholders with your real profiles.
- **Projects:** Edit the project titles, descriptions, and technology tags in `index.html`. Set each corresponding URL in `SITE_CONFIG.projects` in `js/script.js`. The current repository URLs are examples to replace. Live-demo links are not shown because no demo URLs were provided.
- **Education and internship:** Update the academic cards and Ideonix Solution internship entry in the education section of `index.html` whenever these details change.
- **Colors and layout:** Adjust the CSS custom properties near the top of `css/style.css`.

## Contact form

The contact form validates the entered fields and opens the visitor's configured email application with the recipient, subject, and message filled in. It does **not** send or store messages by itself. For background delivery without the visitor's email application, connect a form service or your own backend.

## Publish with GitHub Pages

1. Create a GitHub repository and add the contents of this `portfolio` folder to its root (so `index.html` is at the repository root).
2. Push the files to the repository's default branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save.
5. After GitHub Pages finishes deploying, open the URL shown in the Pages settings and check the site on desktop and mobile.

Before publishing, replace all example email, profile, and project URLs, and review the starter resume PDF.
