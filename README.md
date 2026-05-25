# WikiKnowledge 📚

A modern full-stack knowledge-sharing platform built with **Java Spring Boot**, **React**, and **MongoDB**.
WikiKnowledge allows users to create, edit, search, and manage articles in a clean and user-friendly environment — similar to a lightweight wiki system.

---

## 🚀 Features

* 🔐 User Authentication & Authorization
* 📝 Create, Edit, and Delete Articles
* 🔎 Powerful Search Functionality
* 📂 Category-based Knowledge Organization
* 👤 User Profiles
* ❤️ Like / Bookmark Articles
* 📱 Responsive UI
* ⚡ REST API Architecture
* ☁️ MongoDB Database Integration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* React Router
* Tailwind CSS / CSS

### Backend

* Java Spring Boot
* Spring Security
* JWT Authentication
* REST APIs

### Database

* MongoDB

### Tools & Platforms

* Git & GitHub
* Postman
* VS Code
* IntelliJ IDEA

---

# 📁 Project Structure

```bash
WikiKnowledge/
│
├── backend/
│   ├── src/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   └── config/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── assets/
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/WikiKnowledge.git
cd WikiKnowledge
```

---

# 🔧 Backend Setup (Spring Boot)

## Navigate to backend folder

```bash
cd backend
```

## Configure MongoDB

Update `application.properties`

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/wikiknowledge
server.port=8080
```

## Run Backend

```bash
mvn spring-boot:run
```

Backend will run on:

```bash
http://localhost:8080
```

---

# 🎨 Frontend Setup (React)

## Navigate to frontend folder

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Start React App

```bash
npm start
```

Frontend will run on:

```bash
http://localhost:3000
```

---

# 🔐 Authentication

WikiKnowledge uses **JWT (JSON Web Token)** authentication for secure login and protected routes.

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

## Articles

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/api/articles`      | Get All Articles  |
| GET    | `/api/articles/{id}` | Get Article By ID |
| POST   | `/api/articles`      | Create Article    |
| PUT    | `/api/articles/{id}` | Update Article    |
| DELETE | `/api/articles/{id}` | Delete Article    |

---

# 📸 Screenshots

*Add your project screenshots here.*

Example:

```md
![Home Page](screenshots/home.png)
```

---

# 🌟 Future Improvements

* 🧠 AI-based Article Suggestions
* 🌐 Multi-language Support
* 💬 Comment System
* 📊 Admin Dashboard
* 🔔 Notifications
* 📖 Rich Text Editor

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Create Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed by **Nabeel Haleem**

* GitHub: `your-github-profile`
* LinkedIn: `your-linkedin-profile`

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!
