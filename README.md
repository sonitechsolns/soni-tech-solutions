# Soni Tech Solutions

The STS website and portfolio of Bhavyakumar Soni, live at https://soni-tech-solutions.vercel.app/

It's a single static page (`index.html`) deployed by Vercel on every push to `main`.

## Files
- `index.html`: the whole page (markup, styles, scripts)
- `assets/`: compiled CSS, images, favicon and link-preview image
- `firestore.rules`: database rules for the Firebase project `sts-portal-prod` (paste into Firebase Console > Firestore > Rules)

## Changing styles
The page uses compiled Tailwind CSS (`assets/styles.css`). After adding or changing Tailwind classes in `index.html`, rebuild it:

```bash
npx tailwindcss@3 -i src/tailwind.css -o assets/styles.css --minify
```

## Posting announcements
Open the site with `?admin` at the end of the address (for example `https://soni-tech-solutions.vercel.app/?admin`) to show the **Add Announcement** button. The passcode is the password of the admin account in Firebase Authentication.
