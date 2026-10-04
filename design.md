# Jemma Wedgwood — design system

A portfolio for clients and design studios to explore Jemma’s interior work and make an enquiry.

## Direction

Based on the user’s supplied interior design reference. Use a white surface, black sans-serif headings, open space, a split title band and large project images. The home page follows Hallmark’s Photographic structure. Project pages share this design system.

## Type and colour

- Display: the existing local Cal Sans SemiBold font. Upright, tight but readable spacing.
- Body: the existing Outfit font. Body copy stays within 60 characters per line where possible.
- Palette: `tokens.css`, imported through `src/styles/globals.css`. Images supply most colour. Blue is reserved for small details and focus indicators.
- Use semantic tokens for both light and dark mode. Default theme remains light; the footer retains the theme control.

## Layout

- Content width: 1440px maximum; 40px side margins on desktop and 20px on phones.
- Home: quiet navigation, split title, wide image, asymmetric introduction, image-led project index, experience, contact, simple footer.
- Project pages: project name, discipline, large image, brief, gallery, project navigation and contact link.
- Images and structural elements have square corners. Primary controls are small pills.
- Collapse sections to one column on phones. Use `minmax(0, 1fr)` for flexible image columns.

## Content and interaction

- Use only Jemma’s real project images and supplied information.
- The selected project count comes from the project configuration. Do not claim completed commissions or years of experience without evidence.
- All projects remain at `/projects/1` through `/projects/5`.
- Retain `/opportunities` and its existing work.
- Galleries have keyboard controls, a focus trap, Escape to close and focus return.
- Contact uses the existing endpoint. The receipt message means the API accepted the enquiry; it does not prove Telegram delivery.
- Hover transitions are brief. Respect reduced motion. Do not hide content behind scroll animations.

## Sources

- User-supplied reference image.
- UI Skills Root → `zeke/swiss-design`: grid, spacing, responsive design and focus. The user’s bold type and white palette override the skill’s light type and stone palette.
- https://github.com/Nutlope/hallmark: reference study, shared design system and final review.
- Modern Web Guidance: priority loading for the main image and lazy loading below the fold.
