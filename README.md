
# 🔗 URL Shortener

A simple URL shortener built with Node.js, Express, MongoDB, and a plain HTML/CSS frontend.

---

## 📦 Features

- Shortens long URLs to compact codes
- Redirects users to the original URL
- Simple REST API (`/api/shorten` and `/:shortURL`)
- Frontend using plain HTML, CSS, and JavaScript
- MongoDB containerized with Docker

---

## ⚙️ Requirements

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/)
- A terminal (PowerShell, Bash, etc.)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

---

### 2. Start MongoDB with Docker

Run the command below to spin up MongoDB:

```bash
docker run -d   --name mongodb   -p 27017:27017   -e MONGO_INITDB_ROOT_USERNAME=user   -e MONGO_INITDB_ROOT_PASSWORD=password   mongo
```

---

### 3. Set up the backend

#### 3.1. Navigate to the backend folder

```bash
cd backend
```

#### 3.2. Create a `.env` file

```env
PORT=3000
MONGO_URI=mongodb://user:password@localhost:27017/ni?authSource=admin
```

#### 3.3. Install dependencies

```bash
npm install
```

#### 3.4. Start the backend

```bash
npm start
```

Server will be running at:  
`http://localhost:3000`

---

### 4. Run the frontend

You have a few options:

#### Option A: Open directly in browser

Double-click `frontend/index.html` or open it in your browser.

#### Option B: Run with a simple HTTP server (Python)

```bash
cd frontend
python -m http.server 8080
```

Visit:  
`http://localhost:8080`

#### Option C: Use live-server (Node.js)

Install globally:

```bash
npm install -g live-server
```

Then:

```bash
cd frontend
live-server
```

---

## 🧪 API Example

### POST `/api/shorten`

**Request:**

```json
{
  "originalURL": "https://example.com"
}
```

**Response:**

```json
{
  "shortURL": "abcde"
}
```

Visit `http://localhost:3000/abcde` to be redirected.

---

## 🗑️ Stopping and Removing Docker Container

```bash
docker stop mongodb
docker rm mongodb
```

---

## 📁 Project Structure

```
url-shortener/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── index.html
│   └── style.css
├── LICENSE           
├── README.md
└── .gitignore

```

---

## 📝 License

MIT
