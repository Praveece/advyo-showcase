# Advyo — Q Developer Frontend Showcase

Advyo is an AI-first supply-chain assistant.  
This repository showcases the **public static pages** (homepage, login, FAQ) that were **manually built and later refined using Amazon Q Developer**.  
All backend logic and authenticated React dashboards remain private; only safe screenshots are provided for judges.

---

## What this repo contains
- `src/` — static public pages (homepage, login, FAQ)
- `assets/` — screenshots (including dashboard UI) + short demo clip
- `demo/` — minimal standalone HTML snippet for judges
- `aws-usage.md` — summary of AWS EC2 + Nginx + SSH workflow
- `q-workflow.md` — manual → Q Developer refinement steps
- `demo-instructions.md` — judge walkthrough for reviewing the project

---

## Live Demo
The public UI is deployed on AWS:

- **Homepage:** https://advyo.in  
- **Login:** https://advyo.in/login  
- **FAQ:** https://advyo.in/faq  

These are served through **Nginx on an AWS EC2 instance**.

---

## How to preview locally (optional)
No build step required. The project is fully static.

Open any of the files in `src/` directly in a browser:
- `index.html`
- `login.html`
- `faq.html`

---

## Why this submission fits the hackathon
- Demonstrates **Q Developer–assisted development**
- Uses **AWS EC2 + Nginx** for hosting and workflow
- Provides **screenshots + evidence artifacts** for verification
- Fully functional **live demo** accessible publicly
- Backend and dashboards remain private and sanitized for security

---

## Contact
**PRAVEEN KUMAR**  
Email: **praveengdr1@gmail.com**
