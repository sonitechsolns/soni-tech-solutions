/** Tailwind config for the STS site. Rebuild after changing classes in index.html:
 *  npx tailwindcss@3 -i src/tailwind.css -o assets/styles.css --minify
 */
module.exports = {
  content: ['./index.html'],
  theme: { extend: {} },
  plugins: [],
};
