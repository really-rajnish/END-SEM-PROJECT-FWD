# Remote Internship Management & Evaluation System 🎓

**Project ID:** FEDF-PS37  
**Institution:** KL University  
**Theme:** Onyx & Gold (Bold Luxury)

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</div>

<br />

## 📖 Overview
The **Remote Internship Management System** is a unified web platform designed to streamline the remote internship process. It connects **Students**, **Employers**, and **Mentors** in a single ecosystem. 

The application facilitates task tracking, progress reporting, and performance evaluation, all wrapped in a high-contrast **"Onyx & Gold"** aesthetic designed for a professional, premium user experience.

---

## 🚀 Key Features

### 👨‍🎓 Student Dashboard
* **Task Tracker:** View assigned tasks and current status (Pending/Completed).
* **Progress Reporting:** Submit daily work logs and GitHub links.
* **Feedback View:** Read comments and grades assigned by mentors.

### 💼 Employer Panel (Admin)
* **Job Posting:** Create and publish new internship opportunities with stipend details.
* **Talent Tracking:** View a list of active interns and their current status.
* **Management:** Monitor the overall internship lifecycle.

### 📝 Mentor Evaluation Hub
* **Grading System:** Review student submissions and assign grades (A-D).
* **Feedback Mechanism:** Provide constructive written feedback.
* **Command Center:** A centralized view of pending reviews.

### 🔐 Authentication & Security
* **Role-Based Navigation:** Specific dashboards for different user types.
* **Local Storage Auth:** Securely saves User Registration and Login sessions locally without a backend.
* **Session Management:** Auto-redirects if not logged in; Logout functionality included.

---

## 🛠️ Technology Stack

* **Frontend:** HTML5, CSS3 (Flexbox, Grid, CSS Variables)
* **Scripting:** Vanilla JavaScript (ES6+)
* **Storage:** Browser LocalStorage (No database required for demo)
* **Fonts:** Google Fonts (*Cinzel* for headers, *Lato* for body)
* **Design:** Custom "Bold Luxury" Design System (Dark Mode)

---

## 📂 Project Structure

```bash
├── index.html              # Homepage (Landing Page)
├── login.html              # User Authentication (Login)
├── register.html           # New User Registration
├── student-dashboard.html  # Student Area
├── employer-panel.html     # Admin/Employer Area
├── mentor-eval.html        # Mentor Grading Area
├── contact.html            # Team Contact Page
├── style.css               # Global Styling (Onyx & Gold Theme)
└── script.js               # Global Logic (Auth, Navigation, DOM)
