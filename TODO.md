INTERACTION PAGE - 

2. **Founder Personality Quiz**  
   “What kind of founder are you?” Result types like Builder, Pitcher, Operator, Designer, Hacker.

6. **Digital Confession Booth**  
   Anonymous prompts like “My startup idea is…”, “I failed at…”, “I need a cofounder who…”.

9. **Paper Plane Message Sender**  
   Type a message, fold it into a paper plane, and it flies onto a public message board.

10. **E-Cell Arcade Cabinet**  
   Small arcade-style hub containing mini interactions/games.

18. **Polaroid Memory Wall**  
   Photos/cards scattered like physical Polaroids; drag, flip, zoom.




25. **Poll Station**  
   Quick campus polls: “Next workshop topic?”, “Best event format?”, “Hackathon theme?”


27. **Startup Hot Takes Wall**  
   Users post spicy opinions; others upvote/react.

29. **Build Buddy Match Prompt**  
   Lightweight form: “I’m good at X, looking for Y.”



33. **Startup Survival Game**  
   Choose actions each round: hire, build, pitch, pivot, fundraise.

36. **Cofounder Compatibility Game**  
   Pick traits and get a “team chemistry” score.

42. **Startup Trading Cards**  
   Generate a card for yourself: role, power stat, weakness, special ability.



60. **E-Cell FAQ Bot Terminal**  
   Not full AI, just clickable questions in a terminal interface.

1. **Campus Icebreaker Roulette**  
   Spin a wheel and get a random conversation starter for meeting another E-Cell person.

2. **“Who Should I Talk To?” Matcher**  
   User selects what they need: design help, coding help, pitch help, confidence, team. It suggests a type of person to find.

8. **Skill Marketplace**  
   Cards like “I can make posters”, “I can edit reels”, “I can code frontend”, “I need pitch help.”

11. **“Roast My Idea” Booth**  
   Submit a startup idea and get funny pre-written roast-style feedback, not AI-heavy.

15. **Random Team Name Generator**  
   Generates hackathon/team names like “The Pivot Pirates”, “Bug to Business”, etc.

17. **Cofounder Red Flag / Green Flag Game**  
   Swipe cards: “Replies after 3 days”, “Ships fast”, “Only talks about funding.”

19. **Event Memory Capsule**  
   Students leave notes after events. Later it becomes an archive per event.

28. **E-Cell Wall of Questions**  
   Anonymous questions people are scared to ask about startups, careers, team, pitching.

29. **Founder Myth or Fact**  
   Quick interactive cards breaking myths: “You need funding first”, “You need a perfect idea.”-

43. **Mentor Wishlist Wall**  
   Students vote on what mentors they want: founder, designer, investor, developer, marketer.

44. **Event Afterparty Wall**  
   After each event: photos, ratings, quotes, funniest moment, best learning.


WEBSITE - 

Replace dummy data with actual data

certificate generation + feedback after event
UPDATE admin panel

domain setup
security check in
rate limiting

TESTING


4. **SEO basics missing** — no favicon, no meta description, no Open Graph/Twitter card tags, no `sitemap.xml`, no `robots.txt`.
5. **No tests** — zero test files or test setup (Jest/Vitest/Playwright/Cypress).
6. **No CI/CD** — no `.github/workflows`, no committed `vercel.json`/`netlify.toml`.
7. **No README** — nothing documenting setup, scripts, or contribution process.



|
| File storage | Cloudflare R2 (generated ticket PDFs, backups) |
| Image storage | Cloudinary (event posters, media, CDN) |

| Analytics | Cloudflare Web Analytics (privacy-friendly, no cookies) |


update and test admin dashboard 


- CAPTCHA / spam protection on registrations, rate limiting


- Mobile scanner app (Flutter) as an alternative to the web scanner