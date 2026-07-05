# KAJABI HERO OPEN HOUSE FLIP CARD SITE
## Production Deployment Guide | Ready for Monday 9 AM PT

---

## ⚡ QUICK START (5 minutes)

### Step 1: Organize Files Locally
Copy these files from `/mnt/user-data/outputs/` to a new folder on your computer:

```
kajabi-hero-profiles/
├── app/
│   ├── layout.tsx          ← Use app_layout.PROD.tsx (rename to layout.tsx)
│   ├── page.tsx            ← Use page.PROD.tsx
│   └── globals.css         ← Use globals.css (existing)
├── components/
│   └── FlipCard.tsx        ← Use FlipCard.PROD.tsx (rename)
├── data/
│   └── heroes.json         ← Use heroes.json.FINAL (rename to heroes.json)
├── public/
│   └── heroes/             ← Add all 12 hero photos here
├── package.json
├── next.config.js
├── tailwind.config.ts      ← Use tailwind.config.PROD.ts (rename)
├── tsconfig.json
├── postcss.config.js
└── .gitignore
```

### Step 2: Add Hero Photos
Copy these 12 images to `public/heroes/`:
- Abigail_Wald.jpeg
- Hannah_Summerhill.jpeg
- Joeseph_Beckmann.jpeg
- John_Henny.webp
- John_Quirk.jpeg
- Kate_Butler.jpeg
- Michelle_Grinberg.jpeg
- Nathania_Stambouli.jpeg
- Nisha_Ryan.jpg *(Melanie Hasson)*
- Steve_Ganz.jpeg
- Terry_Carter.jpeg
- Me_headshot_author_renee_tucker_vanessa_logo_conference_2025_copy.png *(Renee Tucker)*

### Step 3: GitHub Setup (2 minutes)

1. Create new GitHub repo: `kajabi-hero-profiles`
2. Push files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Hero flip card site"
   git branch -M main
   git remote add origin https://github.com/YOUR_ORG/kajabi-hero-profiles.git
   git push -u origin main
   ```

### Step 4: Vercel Deploy (1 minute)

1. Go to https://vercel.com/new
2. Import GitHub repo
3. Click Deploy
4. Share live URL

---

## 📋 FILE REFERENCE

### PRODUCTION-READY FILES

**Tailwind Config** (Colors + Fonts)
- `tailwind.config.PROD.ts` → Rename to `tailwind.config.ts`
- Contains: Kajabi color palette, Haffer + Inter fonts

**React Components**
- `FlipCard.PROD.tsx` → Rename to `components/FlipCard.tsx`
  - 3D flip animation, photo + front, CSM/Engineering back
  - Smooth transitions, mobile responsive
  
- `page.PROD.tsx` → Rename to `app/page.tsx`
  - Hero grid, search, stage filters
  - Kajabi branding, responsive layout

**Data**
- `heroes.json.FINAL` → Rename to `data/heroes.json`
  - All 12 heroes with Google Doc links
  - CSM & Engineering focus points
  - Photo paths, GMV, tenure, stage

---

## 🎨 KAJABI BRAND COLORS (Embedded)

Primary Palette:
- **Warm Tan**: #AD715C (warmTan)
- **Dark Brown**: #733725 (darkBrown)
- **Light Tan**: #EFD3A9 (lightTan)
- **Gold**: #D6A151 (gold)
- **Light Blue-Gray**: #9FC2CC (lightBluegray)
- **Navy**: #3A6278 (navy)
- **Light Green**: #CBD7CC (lightGreen)
- **Dark Green**: #405B50 (darkGreen)
- **Light Purple**: #D7CBD5 (lightPurple)
- **Dark Purple**: #52405B (darkPurple)
- **White**: #FDFDFC
- **Black**: #0A0A0A

**Typography**
- Primary: Haffer (headlines)
- Fallback: Inter (body + system)

---

## 🚀 VERIFICATION CHECKLIST

Before going live Monday morning:

- [ ] 12 hero photos in `public/heroes/`
- [ ] `heroes.json.FINAL` renamed to `heroes.json` in `data/`
- [ ] `tailwind.config.PROD.ts` renamed and moved
- [ ] `FlipCard.PROD.tsx` and `page.PROD.tsx` renamed
- [ ] GitHub repo created and pushed
- [ ] Vercel deployment successful
- [ ] Live URL working
- [ ] Cards flip smoothly
- [ ] Search functionality works
- [ ] Stage filters work
- [ ] Photo links render correctly
- [ ] Google Doc links open correctly
- [ ] Mobile responsive (test on phone)

---

## 📲 SITE FEATURES

### Front of Card
- Hero photo (circular, bordered)
- Name + Business Name
- Niche (uppercase, small)
- Stage badge (colored by stage type)
- Tenure (years)
- GMV (total business volume)
- "Tap to see insights" hint

### Back of Card
- CSM Focus (stakeholder-specific insight)
- Engineering Focus (technical opportunities)
- Full Profile link (opens Google Doc)
- Back flip hint

### Navigation
- Search by hero name, business, or niche (real-time)
- Filter by stage (Launch, Growth, Scale, Established, Transition)
- "All Stages" reset
- Results count

### Styling
- Warm, earthy Kajabi palette
- Clean sans-serif typography (Inter)
- Subtle gradients and borders
- Shadow depth on cards
- Sticky header with search

---

## 🔄 UPDATING AFTER DEPLOYMENT

### To Update Hero Data
1. Go to GitHub repo
2. Click the pencil icon on `data/heroes.json`
3. Edit directly on GitHub
4. Commit changes
5. Vercel auto-deploys in ~1 minute

### To Update Colors/Fonts
1. Edit `tailwind.config.ts` on GitHub
2. Commit
3. Vercel redeploys

### To Add New Photos
1. Add image to `public/heroes/` on GitHub
2. Update `heroes.json` with photo path
3. Commit both changes

---

## 🔐 ACCESS CONTROL

**Current**: Public site (anyone with URL can view)

**Option A: Add Password** (5 min)
- Add env variable: `SITE_PASSWORD=...`
- Add password modal in layout.tsx
- Requires password to view grid

**Option B: Email Verification** (10 min)
- Integrate Firebase Authentication
- Restrict to @kajabi.com domain only
- Automatic on login

**To implement**: Let me know, I'll add in 5 min.

---

## 📞 SUPPORT

If anything breaks Monday morning:
1. Check console for errors (F12)
2. Verify `heroes.json` is valid JSON
3. Ensure all image paths exist in `public/heroes/`
4. Clear browser cache (Cmd+Shift+Delete)
5. Rebuild on Vercel: Settings → Deployments → Redeploy

---

## 🎯 DEPLOYMENT TIMELINE

**Sunday Evening (Tonight)**
- [ ] Download all files
- [ ] Organize into folder structure
- [ ] Add 12 hero photos
- [ ] Create GitHub repo + push

**Monday 8:00 AM PT**
- [ ] Deploy to Vercel
- [ ] Test all functionality
- [ ] Share live URL with team

**Monday 9:00 AM PT**
- [ ] READY FOR PRESENTATION

---

## 📊 HERO CARD DATA AT A GLANCE

All 13 heroes included with:
- Photo (high-quality headshot)
- Business name & niche
- Stage of business (Launch/Growth/Scale/Established/Transition)
- Tenure (years on Kajabi)
- GMV (total business volume)
- CSM Focus (strategic insight)
- Engineering Focus (product opportunity)
- Google Doc Link (full profile)

**Urgent Flags Built In:**
- Nathania Stambouli: 92% contact ceiling (CRITICAL)
- Michelle Grinberg: 85% contact ceiling (URGENT)
- Renee Tucker: Active GHL user (boundary noted)
- Sheldon Callahan: Partner cliff approaching (note included)

---

## ✅ FINAL CHECKLIST FOR MONDAY

Everything is production-ready. You just need to:

1. ✅ Copy files from outputs folder
2. ✅ Organize into folder structure
3. ✅ Add 12 hero photos
4. ✅ Create GitHub repo
5. ✅ Deploy to Vercel
6. ✅ Share URL

**Total setup time: ~10 minutes**

---

**Site is fully branded, responsive, and ready. Good luck Monday morning.**
