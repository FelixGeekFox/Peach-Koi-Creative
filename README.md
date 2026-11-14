# Peach Koi Creative

The public website for Peach Koi Creative, an independent creative collective where art, identity, and community bloom together.

## Pages

- **Home** — the collective's identity, values, and creative direction
- **Creative Studio** (`studio.html`) — creative partners, beginning with Felix Greyson, and tools
- **AI Resources** (`ai-resources.html`) — the Studio’s learning and creative-tool library
- **Creative Collective** (`communities.html`) — independent member communities
- **Creative Connection** (`connection.html`) — membership, shared standards, applications and moderator enquiries
- Old links to `partners.html` redirect to `studio.html#partners`; the communities URL is unchanged.

## Application and contact forms

`connection-config.js` holds published Google Forms responder URLs for membership
applications and moderator enquiries. Never put credentials or editor URLs here.
`connection.js` offers a direct link and loads an embedded form only when requested.
Google handles validation, collection and confirmation; the site does not proxy
submissions, store form answers or claim success on an iframe load.

Manage questions, notifications and responses in Google Forms. Keep response
summaries private, avoid requiring Google sign-in, and verify public access before
announcing a form. Required reply email and consent are collected inside Google
Forms. The Connection page discloses Google’s role and links its privacy policy.
Unconfigured form URLs leave the corresponding load control disabled.

## Brand system

The site follows the Peach Koi Creative Brand Identity & Visual Guidelines v1.0:

- Koi Peach `#FF9C83`
- Sakura Pink `#F6B2D4`
- Wisteria `#C394EA`
- Midnight Plum `#21102F`
- Deep Aubergine `#4C285F`
- Pearl Cream `#FFF3ED`
- Lantern Gold `#FFCB79`
- Moonlight Mint `#A8F0E6`
- Dusk Rose `#EF779C`

Typography uses Outfit, Playfair Display Italic, and DM Sans.

## Local preview

This is a dependency-free static site. Run any local HTTP server from the repository root:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deployment

GitHub Pages deploys directly from the `main` branch.
