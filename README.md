# Kajabi Hero Open House - Flip Card Site

A Next.js site for the Kajabi Hero Open House event. Features interactive cards showing all the Heroes attending, with search and filtering.

## What This Does

Shows 13 Kajabi Heroes on flip cards. Click a card to see CSM and engineering insights. Search by name or business. Filter by business stage.

Built for the July 13 event at Kajabi HQ in Irvine.

## Features

Interactive flip cards with hero photo, business info, tenure, and GMV on the front. Back side shows strategic insights for CSM and engineering teams, plus a link to the full profile.

Real-time search works by name, business name, or niche. Filters by business stage. Mobile responsive, so it works on phones too.

## Tech Stack

Next.js 14, React, Tailwind CSS. Images are optimized. Deploys to Vercel. Hero data lives in a JSON file.

## Project Structure

kajabi-hero-profiles/
├── app/
│   ├── layout.tsx          - Site wrapper
│   ├── page.tsx            - Hero grid
│   └── globals.css         - Styles
├── components/
│   └── FlipCard.tsx        - Card component
├── data/
│   └── heroes.json         - Hero data
├── public/
│   └── heroes/             - Photos
└── tailwind.config.ts      - Colors

## Getting Started

Node 18 or higher. Clone the repo.

```bash
git clone https://github.com/tiagamble/kajabi-hero-profiles.git
cd kajabi-hero-profiles
npm install
npm run dev
```

Then open http://localhost:3000

## Deployment

Deploy to Vercel. Either use the Vercel CLI or import the repo via the Vercel dashboard.

```bash
npm i -g vercel
vercel --confirm
```

Or go to vercel.com/dashboard, add a new project, select this repo, and deploy.

Site builds in about 2 minutes. You get a live URL after that.

## The Colors

Using the Kajabi brand palette. Warm tans, golds, navies, and greens. Typography is Haffer for headlines and Inter for body text.

## Updating the Data

Edit data/heroes.json to add or change hero info. Commit and push. Vercel redeploys automatically in about a minute.

## The Heroes

Abigail Wald, Hannah Summerhill, Joseph Beckmann, John Henny, John Quirk, Kate Butler, Melanie Hasson, Michelle Grinberg, Nathania Stambouli, Renee Tucker, Sheldon Callahan, Steve Ganz, Terry Carter.

Each has a photo, business name, niche, stage, tenure, and GMV. The back of the card has specific notes for CSM and engineering teams.

## Access

Right now it's public. Anyone with the URL can see it. If you want to add a password or restrict to kajabi.com email addresses, that takes about 5 minutes to set up.

## Performance

Fast. Images are optimized. No layout shift. Works well on mobile.

## The Event

Kajabi Hero Open House on July 13, 2026 at 400 Spectrum Center Drive in Irvine. 9:30 AM to 5:00 PM. About 16 Heroes attending.

This site has all the confirmed Heroes.

---

Questions? Contact Tia.
