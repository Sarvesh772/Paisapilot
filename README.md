# PaisaPilot

Static bilingual personal-finance website (English + Hindi), ready for GitHub Pages deployment.

## Project Structure
- `index.html` - Home
- `articles.html` - All posts + search
- `about.html`, `contact.html`
- `editorial-policy.html`, `privacy-policy.html`, `terms.html`, `disclaimer.html`
- `posts/` - English posts
- `posts-hi/` - Hindi posts
- `assets/` - logo/favicon/OG assets
- `style.css`, `script.js`
- `sitemap.xml`, `robots.txt`, `ads.txt`

## Deploy on GitHub Pages (Free)
1. Create a new GitHub repo (example: `paisapilot`).
2. Push this project to `main` branch.
3. GitHub repo -> `Settings` -> `Pages`.
4. Source: `Deploy from a branch`.
5. Branch: `main`, Folder: `/ (root)`.
6. Wait for Pages URL generation.

Default URL format:
- `https://<username>.github.io/<repo>/`

## Optional Custom Domain (if you keep your domain)
1. Add a `CNAME` file with your domain (example: `paisapilot.website`).
2. In DNS, point domain to GitHub Pages (A/ALIAS/CNAME records as per GitHub docs).
3. In GitHub Pages settings, enable HTTPS.

## Notes
- `.htaccess` is Apache-only and not used by GitHub Pages.
- Keep `sitemap.xml` and `robots.txt` updated after major content changes.
