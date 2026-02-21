# Xyzon Innovations — Internship Portal

A full-stack internship listing and application platform built for **Xyzon Innovations Private Limited**. Browse available internship programs, view detailed curricula, and apply directly — with automatic email confirmation on submission.

---

## Features

- **Internship Listings** — Frontend Developer, Data Analyst, Backend Developer, UI/UX Design
- **Detail Pages** — Duration, mode, tools, curriculum, and learning outcomes for each internship
- **Application Form** — Apply with your details; data is stored in MongoDB
- **Email Confirmation** — Automated confirmation email sent via Gmail (Nodemailer)
- **Comparison Table** — "Why choose Xyzon" habit/criteria comparison section
- **3D Background** — Interactive Three.js hero section using React Three Fiber
- **Responsive UI** — Tailwind CSS v4 with Framer Motion animations

---

## Tech Stack

| Layer    | Technology                                      |
| -------- | ----------------------------------------------- |
| Frontend | React 19, React Router, Tailwind CSS, Vite      |
| 3D/Anim  | Three.js, @react-three/fiber, Framer Motion     |
| Backend  | Express 5, Mongoose, Nodemailer                 |
| Database | MongoDB Atlas                                   |

---

## Project Structure

```
my-project/
├── backend/
│   ├── config/db.js          # MongoDB connection
│   ├── models/               # Mongoose schemas (Application, HabitData, Internship)
│   ├── routes/               # API routes (apply, habits, internships)
│   ├── utils/email.js        # Nodemailer transporter
│   └── server.js             # Express entry point
├── frontend/
│   ├── src/
│   │   ├── App.jsx           # Router setup
│   │   ├── HomePage.jsx      # Landing page
│   │   ├── InternshipDetailPage.jsx
│   │   ├── ApplyModal.jsx    # Application form modal
│   │   └── components/       # Hero, Hirings, Habit, ThreeBG
│   └── index.html
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** v18+
- **MongoDB Atlas** cluster (or local MongoDB)
- **Gmail App Password** for email notifications

### 1. Clone the repository

```bash
git clone https://github.com/sk21001/Intership_page-2.O.git
cd Intership_page-2.O/my-project
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
EMAIL=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000
FRONTEND_URL=http://localhost:5173
```

Start the server:

```bash
npm start
```

### 3. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

The app will be available at **http://localhost:5173**.

---

## API Endpoints

| Method | Endpoint        | Description                 |
| ------ | --------------- | --------------------------- |
| GET    | /internships    | List all internships        |
| GET    | /internships/:type | Get internship by type   |
| POST   | /apply          | Submit an application       |
| GET    | /habits         | Get comparison table data   |

---

## License

ISC
