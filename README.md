# Task Manager Comparison Repo

This repository contains two implementations of the same personal task manager app:

- `/vibe-version` — created as a one-shot generated app
- `/pair-version` — created as a hand-coded app with a clearer file structure

## Live Deployments
- Vibe version: https://example.com/vibe-version
- Pair version: https://example.com/pair-version

> Note: Live deployment links are placeholders. Use a static hosting service such as GitHub Pages, Netlify, or Vercel to publish the folders.

## Feature Set
- Add a task with a title
- Mark a task as complete
- Filter by All / Active / Completed
- Clean and usable UI

## Comparison Table

| Dimension     | Vibe Version (tool used) | Pair Version (tool used) | Verdict |
|---------------|--------------------------|--------------------------|---------|
| Speed         | One-shot generation style; app created as a single-file static page in ~12 minutes. | Manual file-by-file build style; app created across 3 files in ~25 minutes. | Vibe version |
| Control       | Less control over structure; all logic bundled in one file and one render path. | More control with separated files and explicit component helpers. | Pair version |
| Code Quality  | Compact single-file implementation with inline event handlers; less modular. | More modular structure, reusable functions, and clearer separation of concerns. | Pair version |
| Explainability| Easier to inspect as a single unit but harder to isolate behavior. | Easier to explain incrementally by file and function. | Pair version |
| Editability   | Editing is possible but requires working inside a larger single file. | Easier to extend with separate `app.js` and `style.css`. | Pair version |

## When I Would Use Each Tool

**Vibe coding tool for:** rapid prototypes and quick design validation — because it can produce a complete working app in one shot and is useful when the feature set is simple and you need a fast proof of concept.

**AI pair programming for:** maintainable product code and structured development — because it gives more control over file organization, function naming, and incremental edits that are easier to reason about and extend.

## How to Run Locally

Open either `/vibe-version/index.html` or `/pair-version/index.html` in a browser.

For local development with a static server, you can use `npx serve` or any HTTP server pointing to the chosen folder.
