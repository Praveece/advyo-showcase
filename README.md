Advyo — Q Developer + AWS Showcase

Advyo is an AI-first supply-chain assistant.
This repository showcases the public-facing static pages (homepage, login, FAQ) that were initially written manually and later refined using Amazon Q Developer.
The private backend and authenticated React dashboards are excluded; only safe screenshots and evidence are provided.

What this repo contains

src/ — static public pages (homepage, login, FAQ)

assets/ — screenshots (including internal dashboard visuals) + short demo clips

demo/ — minimal standalone UI snippet (HTML-only)

aws-usage.md — how EC2 + Nginx + VS Code Remote SSH were used

q-workflow.md — manual → Q Developer refinement workflow

demo-instructions.md — judge walkthrough of the live demo

Live Demo (Recommended for Judges)

Homepage → https://advyo.in

Login → https://advyo.in/login

FAQ → https://advyo.in/faq

These pages are served from AWS EC2 + Nginx and reflect Q Developer–refined code.

How to preview locally (optional)

Since the project is static:

Open any file inside /src/ directly in your browser

homepage.html

login.html

faq.html

No build steps, no dependencies.

Why this project is relevant

This submission demonstrates:

Real Amazon Q Developer usage for UI refinement

Real AWS infrastructure (EC2, Nginx, SSH workflow)

A functioning live product accessible publicly

Clear separation of safe public pages vs. private business logic

Contact

PRAVEEN KUMAR
praveengdr1@gmail.com
