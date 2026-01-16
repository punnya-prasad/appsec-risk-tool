# Application Security Risk Assessment Tool

A lightweight, browser-based tool to automate the internal security assessment process for enterprise applications.

# 📝 Overview

This tool replaces the old Excel-based security scoring sheet used by the Information Security Department.
It provides a clear, interactive UI for:

VAPT scoring

Risk assessment scoring

Security control evaluation

Weighted scoring calculations

Automated final security posture rating

Graphical visualization (Achieved vs Gap)

The tool is designed for internal use and simplifies the entire manual process into a dynamic, single-page web application.

# 🚀 Features
✔ 1. VAPT Assessment Module

Enter open & closed findings for each severity (Critical, High, Medium, Low)

Auto-calculates severity-wise score based on weight

Auto-updates control checklist and final score

Toggle to show/hide severity-level breakdown

✔ 2. Risk Assessment Module

Inputs for Open & Closed risks

Weighted scoring based on internal framework

Toggle for detailed score visibility

✔ 3. Security Control Checklist

15 controls (SDLC, SBOM, API Security, Encryption, etc.)

Applicability toggle (Yes/No)

Weighted dynamic score calculations

Automatic integration with VAPT & Risk modules

✔ 4. Dashboard

Final application security score

Auto-detected risk level (Critical / High / Medium / Normal)

Doughnut chart displaying Achieved vs Gap

✔ 5. Save & Load

Saves all inputs to browser localStorage

Enables loading previously saved assessments

✔ 6. PDF Export

One-click export of the complete assessment

# 🏗 Project Structure
root/
│── index.html
│── checklist.html
│── README.md
│── static/
│     ├── style.css
│     └── script.js
│── templates/ (optional for hosting)
│── requirements.txt (not required for static hosting)

# 🌐 Deployment

This project runs completely in the browser — no backend needed.
It can be hosted on:

GitHub Pages

Netlify

Vercel

Internal ESAF server

Local machine (open HTML file)

# Live Link:
👉 https://punnya-prasad.github.io/appsec-risk-tool/

# 🛠 How to Use

Open the application in your browser.

Enter findings in the VAPT section.

Enter open & closed risk details in Risk Assessment.

Fill in applicable security controls.

The tool auto-calculates all weighted scores.

View final security score and risk level.

Export as PDF or save for later.

# 🔐 Future Enhancements

Role-based views (Analyst, Auditor, Management)

Authentication with user roles

Admin dashboard for application history

CSV/Excel import-export

Server-based version for enterprise use

Integration with ESAF ticketing systems

# 📄 License

Internal Use Only – Not for external distribution.
