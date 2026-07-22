# Mobile Optimization Prompt — E-Cell VJIT Website (Astro 5)

You are a senior Frontend Engineer and UI/UX specialist. Your task is **NOT to redesign the website**, but to make the **entire application fully optimized for mobile devices** while preserving the existing desktop design and functionality.

The project is an Astro 5 application using Tailwind CSS, deployed on Vercel, with multiple interactive pages, admin dashboard, scanner interface, and server-rendered API routes.

---

# Goal

Make **every page, every component, every interaction, every modal, every form, every table, and every layout** responsive and polished across all mobile devices.

The final experience should feel like a professionally built production website similar to Stripe, Linear, Notion, or Vercel.

Desktop appearance should remain unchanged unless absolutely necessary.

---

# General Rules

Do NOT redesign the UI.

Do NOT change colors.

Do NOT change branding.

Do NOT remove animations.

Do NOT simplify layouts unnecessarily.

Only improve responsiveness, spacing, usability, accessibility, and mobile interaction.

---

# Target Devices

Support all modern screen sizes.

320px

360px

375px

390px

414px

430px

480px

768px

1024px

Desktop

No horizontal scrolling anywhere.

No overflowing content.

No clipped text.

No broken cards.

No overlapping elements.

No layout shifts.

Everything should adapt smoothly.

---

# Layout Optimization

Inspect every page.

Fix

• width issues

• padding

• margins

• spacing

• alignment

• flex layouts

• grid layouts

• overflow

• stacking order

• z-index issues

• container widths

Ensure every section looks intentional on mobile.

---

# Typography

Optimize all typography.

Automatically adjust

Headings

Subheadings

Paragraphs

Buttons

Captions

Labels

Navigation

Hero text

Statistics

Cards

Forms

Tables

Prevent

Text clipping

Text overflow

Words leaving the screen

Oversized headings

Tiny unreadable text

Maintain proper hierarchy.

---

# Navigation

Optimize navigation completely.

Requirements

Responsive navigation

Touch-friendly buttons

Proper spacing

Accessible menu

Close on navigation

Smooth animations

No accidental taps

Correct safe-area spacing

Large tap targets

Sticky behavior should remain smooth.

---

# Hero Sections

Optimize every hero section.

Ensure

Titles wrap correctly

Buttons stack when needed

Images scale properly

Background effects remain intact

Spacing feels premium

Nothing is cropped

---

# Cards

Optimize all cards.

Cards should

Scale naturally

Maintain equal spacing

Wrap correctly

Never overflow

Maintain shadows

Maintain hover effects

Maintain glass effects

Touch interactions should feel natural.

---

# Forms

Optimize every form.

Registration forms

Admin forms

Login pages

Question box

Sticky wall

Wishlist

Cofounder forms

Contact forms

Requirements

Full width inputs

Proper spacing

Comfortable keyboard usage

Correct input zoom behavior

Buttons always visible

Validation messages positioned correctly

No clipped labels

No horizontal scrolling

---

# Tables

Optimize all tables.

For mobile

Convert large tables into responsive layouts.

If necessary

Horizontal scroll containers

Card-based representation

Collapsible rows

Sticky headers

Preserve usability.

---

# Admin Dashboard

Optimize every admin page.

Dashboard

Event management

Registration lists

CSV export

Analytics

Forms

Edit pages

Requirements

Responsive grids

Proper sidebar behavior

Cards stack vertically

Buttons remain accessible

Filters remain usable

No compressed controls

---

# Scanner Pages

Scanner pages must feel like native mobile apps.

Optimize

Camera viewport

Buttons

Permissions

Status badges

Result cards

QR preview

Landscape support

Portrait support

Touch interaction

No camera overflow.

---

# Interactive Pages

Optimize all interaction pages.

Sticky Wall

Event Wishlist

Question Box

Cofounder Board

Idea Machine

Glossary

Would You Rather

TV

Ensure

Cards stack correctly

Animations remain smooth

Inputs stay usable

Buttons stay reachable

Long text wraps correctly

No clipping

---

# Event Pages

Optimize

Event listing

Event details

Registration

Confirmation

Ticket page

Requirements

Responsive banners

Image scaling

Timeline spacing

Speaker sections

Schedule layout

QR display

Download buttons

Everything should remain visually balanced.

---

# Team Pages

Optimize

Team grid

Member cards

Profile pages

Images

Social icons

Descriptions

Cards should wrap naturally.

---

# Contact Page

Optimize

Map

Forms

Contact cards

Social links

Spacing

---

# Footer

Optimize footer completely.

Ensure

Links wrap correctly

Social icons align

No overflow

Proper spacing

Good readability

---

# Buttons

Every button should

Scale properly

Have comfortable tap targets

Maintain hover effects

Maintain active states

Maintain disabled states

Never overflow

---

# Images

Optimize every image.

Requirements

Responsive sizing

Correct aspect ratios

Lazy loading where applicable

No stretching

No clipping

No unexpected cropping

---

# Icons

Ensure icons

Remain centered

Scale properly

Maintain spacing

Never overlap text

---

# Glass Effects

Preserve all glassmorphism.

Optimize blur performance.

Ensure glass cards look good on mobile.

---

# Animations

Keep existing animations.

Reduce animation intensity where needed on mobile.

Ensure animations never cause layout shifts.

---

# Performance

Reduce unnecessary re-renders.

Avoid layout thrashing.

Avoid expensive CSS.

Optimize rendering.

Minimize CLS.

Maintain fast scrolling.

---

# Accessibility

Ensure

Readable font sizes

Accessible contrast

Keyboard navigation

Screen reader compatibility

Proper labels

Touch targets

Focus states

---

# Safe Areas

Support

iPhone Dynamic Island

Safe area insets

Notches

Rounded corners

Bottom gesture navigation

No content should sit under system UI.

---

# Responsive Utilities

Use proper Tailwind breakpoints.

Prefer

sm

md

lg

xl

Avoid fixed widths whenever possible.

Prefer

max-width

min-width

flex

grid

gap

aspect-ratio

clamp()

fluid typography

relative units

---

# Overflow Audit

Inspect the entire project.

Remove

overflow-x

unexpected scrollbars

fixed-width containers

negative margins causing issues

clipped shadows

cropped dropdowns

---

# Testing

Manually verify every page on

320px

360px

375px

390px

414px

430px

768px

1024px

Desktop

Nothing should break.

No console errors.

No hydration issues.

No responsiveness regressions.

---

# Code Quality

Keep components clean.

Avoid duplicate responsive styles.

Reuse utilities.

Remove unnecessary CSS.

Prefer Tailwind utilities over custom media queries where appropriate.

---

# Final Deliverable

Perform a complete mobile optimization audit of the entire project.

Update every page, component, layout, and interaction for a polished mobile-first experience while preserving the existing desktop design.

The final result should feel production-ready, with no visual inconsistencies, no overflow issues, smooth interactions, excellent spacing, and professional responsiveness across all supported devices.