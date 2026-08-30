# Editing GeoSMART@UCF

This is the editable source project. Do not edit generated files on the live `geosmart` branch.

## Main files

- `content/site-data.ts`: navigation, links, people, alumni, and gallery
- `content/publications.ts`: publication records and topics
- `content/resources.ts`: student resources and links
- `app/page.tsx`: home page and mission
- `app/research/page.tsx`: research descriptions
- `app/news/page.tsx`: news
- `app/teaching/page.tsx`: teaching
- `app/globals.css`: colors, fonts, spacing, and layouts
- `public/images/`: all photographs and figures

## Preview locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Publish

Push changes to the `source` branch:

```bash
git add -A
git commit -m "Update website"
git push origin source
```

The included workflow builds the website and updates the live `geosmart` branch automatically.
