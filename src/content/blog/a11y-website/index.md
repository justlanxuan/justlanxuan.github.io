---
title: 'Making My Website Accessible'
description: 'The technical decisions and design considerations behind rebuilding my personal website with accessibility in mind.'
date: 2026-02-08
tags: ['accessibility', 'tech']
lang: 'en'
---

# Why Accessibility: A Shift of Perspective

I used to treat accessibility only as a checklist. However, through a recent course, I’ve learned to see it differently: as a practice of standing in others' shoes. It is about inclusivity and equality: ensuring that no portion of the population is excluded from information, culture, or connection. For me, accessibility extends beyond physical disabilities to address language barriers, technical constraints, and cognitive differences. Ideally, I want to create a space where content is easy to understand and interact with, regardless of a user's situation.

# My Rebuild Objectives

Previously, my scope was limited. I focused primarily on basic visual accessibility, neglecting Assistive Technologies (AT), multi-language support, and visual comfort. This rebuild marks a significant shift in scope. I am moving beyond just "looking good" to ensuring the underlying structure works for everyone. My ultimate goal is simple in concept, though complex in implementation: **anyone** who visits this site should be able to perceive and interact with the content equally, regardless of their physical abilities or devices.

While universal design is challenging and it's hard to accommodate every single edge case, I am striving for the best possible baseline. Since I write in Chinese and English, I assume my audience knows one of these languages (or has a good translator). However, my technical goal is now to ensure the core structure of the website is accessible to most people and AT, including screen readers and voice control. Of course, it must also work flawlessly on mobile.

# Usability Checklist and POUR

The new features I added to support accessibility are listed as follows (following the [WCAG 2.2 guideline](https://www.w3.org/TR/WCAG22)):

1. **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive.
   - **Add accessible names for interactive elements**: Imagine trying to navigate a website with a screen reader with your eyes closed; if buttons only say "button", you are stuck; I used [WAVE (Web Accessibility Evaluation Tools)](https://wave.webaim.org/) to check missing aria labels and ALT text. I ensured all non-text elements (including images, buttons, icons, disclosure widgets) have text labels.
   - **Use semantic structure instead of visual tricks**: Imagine reading a document where the chapters act just like normal text; The key points are hard to follow. I replaced visual shortcuts (like `<br>`tags and bold text) with structural heading tags, and removed confusing animations. This ensures that the structure you see with your eyes is exactly the same structure assistive technology reads to the user.
   - **Adjust contrast and font for readability**: I used [WAVE (Web Accessibility Evaluation Tools)](https://wave.webaim.org/) to identify and fix low-contrast elements. Rather than adding a custom font resizer (which might be implemented in the future), I support native browser zooming up to 500%. A good practice is to implemente a constrained layout container (max-width). This allows text to wrap naturally at high magnification without breaking the layout or forcing horizontal scrolling. I also focused on strong defaults: a 20px font size, 1.5 line-height, and a clean sans-serif typography.
2. **Operable**: User interface components and navigation must be operable.
   - **Bypass repetitive navigation**: Imagine having to press the "Tab" key 20 times to slog through a long list of search filters just to read a single article; I implemented a "Skip to Main Content" link that appears on the first keystroke, while keeping my original navbar for quick access. This allows keyboard users to jump instantly past repetitive menus and filters to reach the primary content immediately, saving them from physical fatigue and frustration.
   - **Add link purpose, section heading, page location**: To help users navigate, find content, and determine their current position, I structured the site to build a clear mental model of the layout. I ensured every content section is defined by a descriptive heading. I also replace ambiguous navigation (e.g., "click here") with descriptive anchors like "my logs".
     > I am still prototyping a breadcrumb navigation system to provide users with a visual trail of their location within the site hierarchy. For example, the current page is Home > Blogs > Making My Website Accessible. One possible implementation is to trigger breadcrumb navigation when the navbar is hovered or activated.

3. **Understandable**: Information and the operation of the user interface must be understandable.
   - **Support multi-language contents**: Add `lang` attribute so that screen readers can correctly synthesize speech. However, this mechanism fails if the user lacks the installed voice pack. To ensure robustness, I avoid inline mixing by default. The interface filters content to a single language (English or Chinese), applying specific `lang` attributes to mixed content only when 'Select All' is explicitly triggered.
   - **Improve content consistency and predictability**: Remove the sticky positioning from the navigation bar to avoid obscuring focused elements. This also improve the tab order logic to eliminate unexpected scroll jumps when moving between the navbar and page content, ensuring a consistent visual context. Use the same style for all links/buttons for consistency.
   - **Improve input assisstant**: To help users avoid and correct mistakes, I added explicit instructions to the search block and feedback messages when no matching posts are found. A "Clear All" button is now dynamically provided when search yields no results, allowing users to easily reset filters.

4. **Robust**: Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.
   - **Standardize HTML components**: I replace generic `div` elements with semantic `button` and `a` (for link) tags. This ensures native keyboard accessibility and correct role announcements for assistive technologies.
