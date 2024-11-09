# User Profile Web Application

This project is a web application built with **React.js** for the frontend and **FastAPI** for the backend. It allows users to input their profile information, including name, email, date of birth, country code for contact number, and more. The data is then displayed on a second page.

## Prerequisites

- **Node.js** (for React app)
- **Python 3.7+** (for FastAPI backend)
- **pip** (Python package manager)
- **npm** (Node package manager)

## Setup Instructions

### Backend Setup (FastAPI)

1. Clone the repository:
   ```bash
   git clone https://github.com/deshmukhor9/Rig-Assignment.git
Navigate to the Backend directory:

bash
cd user/src/Backend

**Install dependencies:**
bash
pip install -r requirements.txt

**Run the FastAPI server:**
bash
uvicorn main:app --reload
The backend will be running at http://localhost:8000.

**Frontend Setup (React.js)**
**Navigate to the Frontend directory:**
bash
cd user/src/
**Install dependencies:**
bash
npm install

**Start the React app:**
bash
npm start
The frontend will be available at http://localhost:3000.

How to Use
Open http://localhost:3000 in your browser.
Fill in the profile form with the required fields (DOB and country code).
Upon submitting, you will be redirected to a second page where the entered data is displayed.
