# SuperiorCSAT Website

Static rebuild of superiorcsat.com — plain HTML/CSS/JS, ready to deploy on Azure Static Web Apps.

## Structure

```
index.html          Home
experience.html      Experience
teaching.html         Teaching
industries.html       Industries Served
team.html             Our Team
faqs.html              FAQs (accordion)
blog.html              Blog (3 posts)
assets/styles.css     Shared styles
assets/main.js        FAQ accordion behavior
staticwebapp.config.json   Azure routing config
```

## Known placeholders to replace before going live

- All photos are placeholder gradient boxes (search for `placeholder-img` in the HTML files) — swap in real images from the old site or new assets.
- Team headshots on `team.html` (Sasha Ross, Darrel Tisdale, Steve Roberts) are placeholder circles.
- The pie chart on `experience.html` uses estimated percentages (50/20/15/15) — update the `data` array in the inline `<script>` at the bottom of that file with real numbers once known.
- Contact form still embeds the existing Google Form (per your instruction to keep it as-is).
- Newsletter signup field is currently non-functional (no backend wired up) — cosmetic only until a form handler is added.

## Deploy to GitHub + Azure Static Web Apps

1. Create a new GitHub repository (e.g., `superiorcsat-website`).
2. Push this folder's contents to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial static site rebuild"
   git branch -M main
   git remote add origin https://github.com/<your-username>/superiorcsat-website.git
   git push -u origin main
   ```
3. In the Azure Portal, when creating (or editing) your Static Web App, connect it to this repository:
   - App location: `/`
   - Output location: `/` (leave blank or `/` — no build step needed, it's plain HTML)
4. Azure will commit a GitHub Actions workflow to the repo and deploy automatically on every push to `main`.

## Custom domain (superiorcsat.com)

Once the site is live on its `*.azurestaticapps.net` URL:
1. In the Static Web App resource → **Custom domains** → **Add**.
2. Add the TXT record Azure gives you at Network Solutions' DNS panel to verify ownership.
3. Add a CNAME (for `www`) or the apex-domain record Azure provides.
4. Validate in Azure, then update the production A/CNAME records at Network Solutions to point to Azure.
5. Free managed SSL certificate can be issued once the domain is validated.
