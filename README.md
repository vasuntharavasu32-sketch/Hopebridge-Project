# HopeBridge Trust — Website

A clean, responsive nonprofit website built with **HTML**, **CSS**, and **Vanilla JavaScript** — no frameworks or build tools required.

## 📁 Project Structure

```
hopebridge-trust/
├── index.html          # Main HTML page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # All JavaScript logic
└── README.md
```

## 🚀 How to Run

### Option 1 – Open directly in browser
Just double-click `index.html` — it works with no server needed.

### Option 2 – Local dev server (recommended)
Using VS Code **Live Server** extension:
1. Open the folder in VS Code
2. Right-click `index.html` → **Open with Live Server**

Using Python:
```bash
# Python 3
python -m http.server 8080
# then visit http://localhost:8080
```

Using Node.js:
```bash
npx serve .
# then visit the URL shown in terminal
```

## 🌐 Deploy to GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## ✨ Features

- Sticky responsive navigation with mobile hamburger menu
- Hero section with overlay image
- Animated live impact counter
- Dynamic project cards with progress bars (rendered from JS data)
- One-time / Monthly donation toggle with amount selector
- Volunteer sign-up form with validation feedback
- Contact form with feedback message
- Testimonials section
- News & gallery section
- Trust indicators (80G, Google.org, GDPR)
- Footer with social links

## 🛠 Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Markup     | HTML5                   |
| Styling    | CSS3 (Custom Properties)|
| Behaviour  | Vanilla JavaScript (ES6)|
| Icons      | Font Awesome 6          |
| Fonts      | Google Fonts – Inter    |

## 📄 License

MIT — free to use and adapt.
