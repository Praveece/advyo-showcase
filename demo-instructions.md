Advyo – Demo Instructions (Public Pages + Dashboard Evidence) (Judge Walkthrough)

Objective: This document gives judges a quick, streamlined way to evaluate the live Advyo frontend already deployed at https://advyo.in. No local setup is required. Judges can use the public URLs to experience the workflow.

Live Pages: Homepage: https://advyo.in Login: https://advyo.in/login FAQ: https://advyo.in/faq

Purpose of this Demo: Showcase how the Advyo UI was:

First manually coded

Then refined using Amazon Q Developer

Finally deployed on a live AWS EC2 instance with Nginx

What Judges Should Review:

Homepage Review Open https://advyo.in Check the hero section, layout, messaging clarity, and how Q Developer refined the UI structure and spacing.

Login Page Review Open https://advyo.in/login Shows form structuring, validation logic, and UX improvements assisted by Q Developer.

FAQ Page Review Open https://advyo.in/faq Demonstrates structured content formatting and page-level cleanup generated with Q Developer support.

Code Review (in repo) Open the src folder in this repository. This contains the exact pages that were: (a) initially manually written (b) then optimized with Q Developer prompts (c) cleaned and restructured for readability

Assets Review Open the assets folder. Contains screenshots of the UI components, snippet examples, and short clips demonstrating the Q Developer refinement workflow.

Demo Folder Review Open the demo folder. Contains a minimal safe-to-run snippet for judges who want a local preview of component behavior without backend logic. To run locally:

Install dependencies if package.json exists

Run “npm run dev” OR use “npx http-server ./src”

Open the displayed localhost URL

AWS Usage Overview See aws-usage.md. Covers use of EC2, Nginx hosting, file movements via VS Code Remote SSH, and how Q Developer accelerated page iterations.

Judging Perspective Summary This submission demonstrates: – Real usage of Q Developer to accelerate and optimize frontend code – Real deployment inside an AWS EC2 environment – A fully working, publicly accessible site – Clean frontend pages ready for inspection, evaluation, and scoring
