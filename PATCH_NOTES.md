# OmniView direct patch

This project is the user's v0-generated production code with only the requested fixes applied.

## Patched issues

1. Capability carousel
   - Rebuilt each row as two identical grouped tracks.
   - The translation distance is exactly one full group plus the inter-group gap.
   - Both directions now loop without a designed endpoint or visible reset.

2. AI radar
   - Restored an explicit animated radar pulse using the approved ring sizes/timing.
   - Kept labels and center isotype static.

3. Project form
   - Success state now replaces the old form heading/intro instead of appearing below it.
   - Success content is only the approved success title/body.
   - Phone and description are required, matching the approved production form.
   - Server endpoint continues to require a real `{ ok: true }` webhook response before returning success.
   - Server-side validation now checks all required lead fields.

4. Footer contact block
   - Order: WhatsApp number, email address, Instagram, Facebook.
   - Email uses the approved localized prefilled mailto subject/body.

## Environment variables required in Vercel/v0

- `LEAD_WEBHOOK_URL`
- `LEAD_WEBHOOK_SECRET`

They are intentionally not included in this ZIP.

## Validation performed

- TypeScript/TSX syntax transpile check: PASS for every modified TS/TSX file.
- CSS brace integrity check: PASS for both modified stylesheets.
- Full Next.js build was not executed in the sandbox because project dependencies were not locally installed and network package download is unavailable here.
