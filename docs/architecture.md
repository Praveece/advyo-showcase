
# System Architecture – ADVYO

This document outlines the system blueprint, designed to demonstrate practical AWS adoption with Q Developer–enhanced development.

---

## 🔹 High-Level Architecture

**1. Client Layer**
- Static HTML pages generated manually and refined through Q Developer
- Inline CSS and JS for rapid delivery
- Hosted inside `/var/www/html` on EC2

**2. Web Server Layer**
- Nginx serves all assets directly from the EC2 instance
- Zero middleware footprint for optimal performance

**3. Compute Layer**
- AWS EC2 (Ubuntu)
- VS Code Remote SSH used for real-time editing and deployment

**4. Development Workflow**
- Initial coding executed manually  
- Q Developer leveraged to refactor UI, optimize structure, and accelerate page creation  
- Final assets uploaded to GitHub for public submission

---

## 🔹 Architecture Diagram (Text Representation)

