🚀 Resume Analyzer Pro

A SaaS-style Resume Analysis Platform built using Node.js, Express, MongoDB, and EJS.

This project simulates a real-world, production-grade backend system including authentication, resume parsing, ATS scoring, modular architecture, and future AI integration support.

🧠 Project Overview

Resume Analyzer Pro allows users to:

Securely register and login

Upload resume files (PDF only)

Store resume history per user

Extract raw text from resumes

Automatically detect technical skills

Calculate ATS-style resume score

Visualize analysis results on dashboard

Built using scalable backend architecture and professional Git workflow practices.

🏗 System Architecture
Client (Browser)
      ↓
Express Server
      ↓
Controllers
      ↓
Models
      ↓
MongoDB

Authentication Layer:
JWT → HTTP-only Cookies

File Processing Pipeline:
Multer → PDF Upload → pdf-parse → Text Extraction → Skill Engine → ATS Scoring
🛠 Tech Stack

Node.js

Express.js

MongoDB (Local → Future: MongoDB Atlas)

Mongoose

EJS

JWT Authentication

bcrypt (Password Hashing)

Multer (File Upload Handling)

pdf-parse (PDF Text Extraction)

🔐 Authentication System (Completed)

✔ User Registration

✔ Password Hashing using bcrypt

✔ JWT-based Login

✔ HTTP-only Cookie Storage

✔ Protected Routes Middleware

✔ Logout Functionality

Simulates a real SaaS authentication flow.

📂 Resume Upload & Parsing System (Completed)

✔ PDF-only upload validation

✔ Unique filename storage

✔ Resume linked to user (ObjectId reference)

✔ Resume history stored in database

✔ Dashboard display per user

✔ PDF text extraction using pdf-parse

✔ Raw resume text stored in MongoDB

📊 Resume Analysis Engine (Completed)

✔ Skill extraction engine

✔ Keyword matching algorithm

✔ Static skill database

✔ ATS-style scoring logic

✔ Score calculation (skill coverage + density + length quality)

✔ Dashboard integration

✔ Visual ATS progress bar

✔ Automatic analysis update (no duplicate records)

This simulates a lightweight production ATS system.

🧮 ATS Scoring Logic

Score Calculation Weights:

Skill Coverage Weight → 50%

Keyword Density Score → 30%

Resume Length Quality Score → 20%

Final score normalized to 100.

🌿 Git Workflow Strategy

Professional branching model:

main → Production-ready stable branch

dev → Integration branch

feature/* → Feature development branches

Development Process

Build feature inside feature/*

Merge feature → dev

Test thoroughly

Merge dev → main

Deploy from main

🖥 Installation (Local Development)
1️⃣ Clone Repository
git clone <repository-url>
2️⃣ Install Dependencies
npm install
3️⃣ Create .env File
PORT=5000
MONGO_URI=your_local_mongodb_uri
JWT_SECRET=your_secret_key
4️⃣ Start MongoDB Locally

Make sure MongoDB service is running.

5️⃣ Run Application
npm run dev

Visit:

http://localhost:5000
🌍 Deployment Plan

Hosting Platform → Render

Database → MongoDB Atlas

Environment variables configured via hosting dashboard

🧠 Engineering Goals

This project demonstrates:

Real-world backend architecture

Authentication & security best practices

File handling & validation

Data modeling with relationships

Modular service design

Resume parsing pipeline

Scoring engine logic

Production-style Git workflow

🚀 Future Enhancements

Job description matching engine

Category-weighted skill scoring

Semantic AI-based resume analysis

Resume improvement suggestions

Resume export as PDF report

Admin dashboard

Subscription model integration

Deployment pipeline automation

👨‍💻 Development Status

Current Stage:
Core infrastructure + authentication + resume parsing + ATS scoring engine complete.

Next Stage:
Advanced job description matching & intelligent analysis expansion.

📜 License

This project is for educational and portfolio demonstration purposes.