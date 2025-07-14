# 🧪 InsecureFormLab

**InsecureFormLab** is a deliberately vulnerable full-stack web application built with **React** (frontend) and **Django REST Framework** (backend). The goal of this project is to help beginners and aspiring cybersecurity professionals practice identifying and fixing common web vulnerabilities using tools like **OWASP ZAP**.

---

## 🎯 Project Goals

- Demonstrate common web security flaws in a full-stack app
- Practice vulnerability scanning with **OWASP ZAP**
- Learn secure coding practices by fixing issues step-by-step
- Build a strong, practical security project portfolio

---

## 🧱 Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | React, Axios, CSS      |
| Backend   | Django REST Framework  |
| Database  | SQLite                 |
| Security  | OWASP ZAP              |

---

## 🚨 Intentionally Included Vulnerabilities

- ❌ SQL Injection (via raw SQL)
- ❌ No CSRF Protection
- ❌ XSS risk from unsanitized input
- ❌ No secure session or token authentication
- ❌ Missing HTTPS and security headers

---

## ⚙️ How to Run the Project

### Backend

```bash
cd backend
python -m venv env
source env/bin/activate  # Use `env\Scripts\activate` on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

### Frontend

cd frontend
npm install
npm start
