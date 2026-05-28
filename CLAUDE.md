# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static restaurant website for ThaiThai'm (Loveland, CO). Hosted on GitHub Pages at https://jsiwa-nineonesix.github.io/ThaiThaim/

**IMPORTANT:** This repo belongs to the personal GitHub account `jsiwa-nineonesix` at github.com. Never push to or interact with the Allianz company GitHub (github.developer.allianz.io).

Always prefix GitHub CLI commands with `GH_HOST=github.com`.

## Architecture

Pure static HTML/CSS/JS — no build tools, no frameworks, no dependencies.

- `css/style.css` — all styles (dark gold theme: `#2c1f0e` bg, `#e6b84c` gold, `#1e1508` nav)
- `js/app.js` — language toggle (EN/TH), menu tab switching, active nav highlighting
- Five HTML pages: `index.html`, `menu.html`, `about.html`, `hours.html`, `contact.html`
- Menu images (`001_Drinks.png` … `014_Desserts.png`) served via `raw.githubusercontent.com`

## Language Toggle

All user-facing text is duplicated with `.lang-en` / `.lang-th` spans. `app.js` toggles `body.thai` class to switch languages. Default is English.

## Menu Images

Images already uploaded to the repo root. URL pattern:
`https://raw.githubusercontent.com/jsiwa-nineonesix/ThaiThaim/main/001_Drinks.png`

Filenames with spaces must be URL-encoded in HTML: `005_Noodle%20Dishes%2001.png`

## Deploying

Push to `main` branch. GitHub Pages auto-deploys from root. No build step needed.

## Restaurant Details

- Address: 1360 E Eisenhower Blvd, Loveland, CO 80537
- Hours: Every day 11:00 AM–2:30 PM & 4:00 PM–8:30 PM
- Phone: (970) 800-3685 and (970) 800-3429
- Toast: https://order.toasttab.com/online/thai-thai-m-loveland-1360-east-eisenhower-boulevard
- Facebook: https://www.facebook.com/ThaiThaimRestaurant
