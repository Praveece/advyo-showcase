# System Architecture – ADVYO

This document outlines the streamlined system blueprint showcasing practical AWS adoption, optimized delivery, and Q Developer–assisted development cycles.

---

## 🔹 High-Level Architecture

### **1. Client Layer**
- Static HTML pages authored manually and refined using Q Developer
- Inline CSS + JS for lean delivery
- Hosted directly under `/var/www/html` on the EC2 instance
- Zero dependency footprint ensures predictable performance

### **2. Web Server Layer**
- Nginx configured as a lightweight static server
- Direct file serving from the EC2 filesystem
- No API gateway or server-side rendering involved
- Minimal latency + simple caching rules

### **3. Compute Layer**
- AWS EC2 (Ubuntu) acts as the single execution surface
- VS Code Remote SSH drives real-time authoring, updates, and validation
- Deployment pipeline simplified to direct file edits → instant Nginx availability

### **4. Development Workflow**
- Base pages created manually
- Q Developer used for:
  - rapid UI structuring
  - HTML/CSS cleanup
  - layout optimization
  - fast iteration of content blocks
- Finalized assets exported into GitHub for judge review
- No backend logic exposed; only safe and static components included

---

## 🔹 Architecture Diagram (Text Representation)

Diagram: static client pages → Nginx → EC2 dev workspace → Q Developer-assisted refinement workflow.

```
+-----------------------------------------------+
|                CLIENT LAYER                   |
|    Static HTML / Inline CSS / Inline JS       |
+-----------------------------------------------+
                     |
                     v
+-----------------------------------------------+
|               NGINX WEB SERVER                |
|    Serves static assets from /var/www/html    |
+-----------------------------------------------+
                     |
                     v
+-----------------------------------------------+
|               AWS EC2 INSTANCE                |
|  Ubuntu + VS Code Remote SSH (dev workspace)  |
+-----------------------------------------------+
                     |
                     v
+-----------------------------------------------+
|          Q DEVELOPER + MANUAL WORKFLOW        |
|   UI refinement, HTML/CSS cleanup, exports    |
+-----------------------------------------------+
```


