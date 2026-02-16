# 🚀 Resume Analyzer Pro

A SaaS-style Resume Analyzer web application built with Node.js, Express, MongoDB, and EJS.

This project simulates a real-world production system with authentication, file uploads, resume parsing, and modular architecture designed for future AI integration.

---

## 🧠 Project Overview

Resume Analyzer Pro allows users to:

- Register & Login securely
- Upload resume files (PDF)
- Store resume history per user
- Extract raw text from resumes
- View dashboard with uploaded resume records

The system is built using a scalable backend architecture and professional Git workflow.

---

## 🏗 Architecture

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
JWT (JSON Web Token) stored in HTTP-only cookies

File Handling:
Multer → PDF Upload → pdf-parse → Text Extraction

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Local → Future: Atlas)
- Mongoose
- EJS
- JWT Authentication
- bcrypt Password Hashing
- Multer (File Upload)
- pdf-parse (PDF Text Extraction)

---

## 🔐 Authentication System (Completed)

✔ User Registration  
✔ Password Hashing using bcrypt  
✔ JWT-based Login  
✔ HTTP-only Cookie Storage  
✔ Protected Routes Middleware  
✔ Logout functionality  

This simulates a real SaaS authentication flow.

---

## 📂 Resume Upload System (Completed)

✔ PDF-only upload validation  
✔ Unique filename storage  
✔ Resume linked to user (ObjectId reference)  
✔ Resume history stored in database  
✔ Dashboard shows user's uploaded resumes  
✔ PDF text extraction using pdf-parse  
✔ Raw resume text stored in MongoDB  

---

## 📊 Current Features Completed

### ✅ Foundation
- Professional folder structure
- Environment variable management
- MongoDB local development setup
- Git branch workflow (main / dev / feature branches)

### ✅ Authentication Module
- Secure password hashing
- JWT token generation
- Cookie-based auth
- Middleware route protection

### ✅ Resume Management Module
- File upload handling
- User-resume relationship
- Resume history dashboard
- PDF text extraction engine

---

## 🚧 Current Development Branch

Working branch:

This branch will implement:

- Skill extraction engine
- Keyword matching
- ATS scoring logic
- Resume scoring system
- Result visualization

---

## 🎯 Upcoming Features (In Progress)

🔲 Skill Extraction Engine  
🔲 Keyword Matching Algorithm  
🔲 Resume Score Calculation  
🔲 ATS Compliance Check  
🔲 Resume Analysis Result Page  
🔲 Job Description Matching  
🔲 Professional UI Styling  
🔲 Deployment on Render  
🔲 MongoDB Atlas Production Database  

---

## 🌿 Git Workflow Strategy

We follow professional branching:

main → Production-ready stable branch  
dev → Integration branch  
feature/* → Feature development branches  

Development process:

1. Build feature inside feature branch
2. Merge feature → dev
3. Test thoroughly
4. Merge dev → main
5. Deploy main

---

## 🖥 Installation (Local Development)

1️⃣ Clone repository
2️⃣ Install dependencies
3️⃣ Create `.env` file
4️⃣ Start MongoDB locally
5️⃣ Run application


---

## 🌍 Deployment Plan

Future deployment target: Render

Production Database: MongoDB Atlas

Environment variables will be configured inside Render dashboard.

---

## 🧠 Engineering Goals

This project is designed to demonstrate:

- Real-world backend architecture
- Authentication & security best practices
- File handling & validation
- Data modeling with relationships
- Modular service design
- Scalable upgrade path for AI integration

---

## 🚀 Future Enhancements

- AI-based resume analysis
- Semantic job matching
- Embedding-based similarity scoring
- Resume improvement suggestions
- Admin dashboard
- Resume report export (PDF)
- Subscription model integration

---

## 👨‍💻 Development Status

Current Stage:  
Core infrastructure + authentication + resume parsing complete.

Next Stage:  
Resume Analysis Engine implementation.

---

## 📜 License

This project is for educational and portfolio demonstration purposes.

