# Cine-Stream 🎬

A React-based movie discovery application built as part of the internship project. The app allows users to explore movies, search for titles, add movies to favorites, and receive movie recommendations based on their mood.

---

## 🚀 Features

* **Movie Grid Display** – Movies are shown in a responsive grid with posters, titles, release year, and ratings.
* **Search with Debounce** – Users can search movies efficiently with optimized input handling.
* **Infinite Scroll** – More movies load automatically as the user scrolls down.
* **Favorites System** – Users can add movies to a favorites list.
* **Remove Favorites** – Movies can also be removed from the favorites page.
* **Lazy Loading** – Movie posters load only when they appear on the screen for better performance.
* **Mood-Based Recommendation** – Users can type their mood and get a suggested movie.

---

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6)**
* **CSS**
* **React Router**
* **LocalStorage**

---

## 📂 Project Structure

```
cine-stream
│
├─ prompts.md
├─ README.md
├─ package.json
│
├─ src
│   ├─ components
│   │   └─ MovieCard.jsx
│   │
│   ├─ pages
│   │   ├─ Home.jsx
│   │   └─ Favorites.jsx
│   │
│   └─ hooks
│       └─ useDebounce.js
```

---

## 💡 How It Works

1. Movies are displayed in a grid layout on the home page.
2. Users can search for movies using the search bar.
3. Infinite scrolling loads more movies automatically.
4. Movies can be added to the favorites list.
5. Favorites are stored in **localStorage**.
6. Users can type their mood to receive a movie recommendation.

---

## ▶️ Running the Project

Clone the repository:

```
git clone https://github.com/your-username/cine-stream.git
```

Install dependencies:

```
npm install
```

Run the project:

```
npm run dev
```

---

## 📌 Internship Project

This project was built to practice React concepts such as:

* Component-based architecture
* Custom hooks
* Performance optimization
* State management
* UI improvements

---

## 👩‍💻 Author

**Diya Gupta**

Final Year Student
Interested in Web Development and Software Development
