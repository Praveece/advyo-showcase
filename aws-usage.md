# AWS Usage Summary — Advyo (Hackathon Submission)

This document outlines the AWS footprint used to build, refine, and host the Advyo public interface.  
The objective: demonstrate a credible, production-aligned workflow leveraging Amazon Q Developer and EC2.

---

## 1. EC2 Infrastructure

**Service:** Amazon EC2  
**Instance Role:** Primary development + deployment environment  
**OS:** Ubuntu 22.04  
**Purpose:**  
- Hosted the complete static frontend under `/var/www/html`  
- Served pages via Nginx  
- Enabled remote development from VS Code (SSH extension)  
- Allowed Q Developer to refine code directly on the remote workspace

**Key Outcomes:**  
- Stable, reproducible environment  
- Zero local–remote drift  
- Faster iteration through consistent cloud-hosted setup

---

## 2. Nginx Hosting Layer

**Service:** Nginx (on EC2)  
**Role:** Lightweight, production-style web server  
**Use:**  
- Served static public pages at `https://advyo.in`  
- Aligned with typical cloud deployment standards  
- Showcased real-world hosting patterns (not demo-grade localhost setup)

**Key Outcomes:**  
- Fast load times  
- Clean routing (`/`, `/login`, `/faq`)  
- Judge-ready live deployment

---

## 3. VS Code Remote SSH + Amazon Q Developer

**Workflow:**  
- Connected VS Code → EC2 server via Remote SSH  
- Ran Amazon Q Developer **directly inside the active EC2 workspace**  
- Used Q Developer to clean, optimize, and refine HTML/CSS/JS files  
- Compared manual coding vs. Q Developer–accelerated edits  
- All evidence captured via screen recordings + screenshots

**Key Outcomes:**  
- Demonstrated Q Developer value clearly  
- Reduced coding overhead for repetitive UI refinements  
- Delivered a cloud-native, audit-ready workflow

---

## 4. Domain + SSL

**Domain:** advyo.in  
**SSL Layer:** Let’s Encrypt (deployed on EC2)

**Purpose:**  
- Present a polished, live experience for judges  
- Validate end-to-end deployment readiness

---

## 5. What AWS Does *Not* Include in This Submission

- No backend API disclosure  
- No private React dashboards  
- No sensitive infrastructure credentials or schemas  

Only safe, non-sensitive components are provided.

---

## 6. Cloud Infra Setup

- Real cloud-based development (EC2 + Q Developer synergy)  
- Production-style hosting (Nginx + domain + SSL)  
- Clean separation between public demo and private intellectual property  
- Evidence artifacts supporting each step

---

## Contact  
Maintainer: **PRAVEEN KUMAR**  
Email: **praveengdr1@gmail.com**
