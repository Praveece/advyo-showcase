AWS Usage Summary — Advyo

This document outlines how AWS infrastructure was used during the development and refinement of the Advyo frontend for the AWS × DoraHacks Q Hackathon.

1. EC2 Instance for Development

A dedicated AWS EC2 Ubuntu instance was used as the primary development environment.

All frontend files were created, edited, and stored directly inside the EC2 machine.

The path used during build and refinement:

/var/www/html/advyo/

Using EC2 demonstrates:

Real cloud-based development

Remote editing workflow

Persistent cloud environment for Q Developer integration

2. Nginx for Hosting

The EC2 instance used Nginx to serve the frontend pages.

This enabled a clean preview of the live interface while refining the UI.

Nginx usage confirms:

Production-aligned hosting

Real deployment footprint

Judge-verifiable architecture

3. VS Code Remote Development

VS Code Remote SSH was used to connect directly to the EC2 machine.

All coding, manual edits, and Q Developer-assisted refinements were performed through this workflow.

Evidence included in assets/:

Screenshots showing:

VS Code connected to EC2

Editing HTML/CSS/JS inside /var/www/html/advyo/

Q Developer suggestions being applied

4. Why This Matters for the Hackathon

AWS services were used not just for hosting, but as an active development workspace, showing:

Practical EC2 usage

Real-world cloud development pattern

Clean integration with Amazon Q Developer
