# Voice Chatbot Docs Site

Documentation website for the `voice-chatbot` project. This repository contains the frontend for the docs site, not the Python application itself.

Live site: `https://docs-site-kappa-coral.vercel.app`

## Purpose

The site presents product and developer documentation for the Voice Chatbot project:

- landing page and feature overview
- quick-start installation guide
- architecture and pipeline breakdown
- configuration reference
- ROS 2 deployment notes
- module-level API reference

It is a small single-page app built with React, Vite, and React Router, then deployed to Vercel.

## Stack

- React 19
- React Router 7
- Vite 8
- `react-syntax-highlighter` for formatted code examples
- plain CSS in [`src/index.css`](/C:/Users/aapot/voice-chatbot-docs/src/index.css)
- Vercel for hosting with SPA rewrites via [`vercel.json`](/C:/Users/aapot/voice-chatbot-docs/vercel.json)

## Site Architecture

The app is mounted in [`src/main.jsx`](/C:/Users/aapot/voice-chatbot-docs/src/main.jsx) inside a `BrowserRouter`.

Routes are defined in [`src/App.jsx`](/C:/Users/aapot/voice-chatbot-docs/src/App.jsx):

- `/` -> Home
- `/quick-start` -> Quick Start
- `/architecture` -> Architecture
- `/configuration` -> Configuration
- `/ros2` -> ROS 2 Integration
- `/api-reference` -> API Reference

All pages render inside the shared shell in [`src/components/Layout.jsx`](/C:/Users/aapot/voice-chatbot-docs/src/components/Layout.jsx), which provides:

- persistent sidebar navigation on desktop
- collapsible mobile navigation
- GitHub outbound link
- top bar for small screens

Code examples are rendered through [`src/components/CodeBlock.jsx`](/C:/Users/aapot/voice-chatbot-docs/src/components/CodeBlock.jsx).

## Project Structure

```text
voice-chatbot-docs/
|- public/
|  `- favicon.svg
|- src/
|  |- components/
|  |  |- CodeBlock.jsx
|  |  `- Layout.jsx
|  |- pages/
|  |  |- ApiReference.jsx
|  |  |- Architecture.jsx
|  |  |- Configuration.jsx
|  |  |- Home.jsx
|  |  |- QuickStart.jsx
|  |  `- Ros2.jsx
|  |- App.jsx
|  |- index.css
|  `- main.jsx
|- index.html
|- package.json
|- vercel.json
`- vite.config.js
```

## Local Development

Install dependencies:

```bash
bun install
```

Start the dev server:

```bash
bun run dev
```

Default local URL:

```text
http://localhost:5173
```

Create a production build:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

Lint the codebase:

```bash
bun run lint
```

## Editing Content

Each documentation page lives in [`src/pages`](/C:/Users/aapot/voice-chatbot-docs/src/pages) as a React component. The site is intentionally simple: content is written directly in JSX rather than loaded from Markdown or a CMS.

For common changes:

- add or update page copy in the relevant file under [`src/pages`](/C:/Users/aapot/voice-chatbot-docs/src/pages)
- change navigation labels or add a route in [`src/components/Layout.jsx`](/C:/Users/aapot/voice-chatbot-docs/src/components/Layout.jsx)
- register new routes in [`src/App.jsx`](/C:/Users/aapot/voice-chatbot-docs/src/App.jsx)
- adjust global visual styling in [`src/index.css`](/C:/Users/aapot/voice-chatbot-docs/src/index.css)
- use [`src/components/CodeBlock.jsx`](/C:/Users/aapot/voice-chatbot-docs/src/components/CodeBlock.jsx) for terminal commands or code snippets

When adding a new page:

1. Create `src/pages/NewPage.jsx`.
2. Export a default React component.
3. Add the route in [`src/App.jsx`](/C:/Users/aapot/voice-chatbot-docs/src/App.jsx).
4. Add the sidebar entry in [`src/components/Layout.jsx`](/C:/Users/aapot/voice-chatbot-docs/src/components/Layout.jsx).
5. Confirm Vercel routing still works by building locally.

## Styling Notes

The site uses one global stylesheet: [`src/index.css`](/C:/Users/aapot/voice-chatbot-docs/src/index.css).

Key patterns already defined there:

- CSS custom properties for colors, spacing, and shared tokens
- responsive sidebar and mobile top bar
- reusable styles for tables, callouts, feature cards, tech-grid items, and pipeline diagrams
- automatic light/dark palette switching through `prefers-color-scheme`

Before adding new one-off markup, prefer reusing the existing classes:

- `.callout`
- `.table-wrapper`
- `.pipeline-diagram`
- `.feature-grid`
- `.tech-grid`
- `.api-section`
- `.api-method`

## Routing and Deployment

This is a client-side rendered SPA using `BrowserRouter`. Direct navigation to nested routes in production requires rewrite support.

That is handled in [`vercel.json`](/C:/Users/aapot/voice-chatbot-docs/vercel.json):

```json
{
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Without that rewrite, refreshing a page like `/architecture` or `/api-reference` would return a 404 from the hosting layer.

## Maintenance Guidelines

- Keep page content aligned with the actual `voice-chatbot` project behavior.
- Prefer short sections, tables, and callouts over long paragraphs.
- Verify command examples before publishing them.
- When changing page slugs, update both the router and the sidebar nav.
- If you add external links, use `target="_blank"` with `rel="noopener noreferrer"`.

## Scripts

Defined in [`package.json`](/C:/Users/aapot/voice-chatbot-docs/package.json):

- `bun run dev` -> start Vite dev server
- `bun run build` -> create production build in `dist/`
- `bun run preview` -> preview the production build
- `bun run lint` -> run ESLint

## License

MIT
