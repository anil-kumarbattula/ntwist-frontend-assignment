# ntwist-frontend-assignment

This project consists of a multi-page static website with different components demonstrating form interaction tracking, list sorting, and an FAQ accordion. It was developed for NTWIST Software Test as an interactive and styled frontend showcase.

---

## 📄 Pages Implemented

### 1. `index.html` – Responsive Form with Validation
- A user-friendly form with:
  - **Name, Email, Message** fields.
  - Client-side validation using HTML `pattern` attributes.
  - Timer logic to calculate how long a user takes to fill the form.
- Includes a sidebar with instructions.
- Displays a confirmation message and time taken upon form submission.

### 2. `sort.html` – Sortable Name List
- Displays a pre-filled list of names.
- A "Sort" button allows the user to sort the names alphabetically using JavaScript.
- Includes a styled sidebar for contextual guidance.

### 3. `faq.html` – FAQ Accordion with Rating
- Collapsible FAQ section using HTML `<details>` and `<summary>`.
- Each question expands to show detailed information about Finmee Technologies.
- Includes a star rating form (visual only).

---

## ✨ Features

- **Fully Responsive**: Pages are mobile-friendly using CSS media queries.
- **Modern UI Styling**:
  - Clean typography and layout.
  - Soft shadows and brand color palettes.
- **Accessible Markup**:
  - Uses semantic HTML tags (`aside`, `main`, `section`, `header`, `details`, `summary`).
- **Client-side Interactivity**:
  - Form timer and confirmation message via `timeTaken.js`.
  - Dynamic name list sorting via `sort.js`.

---

## 🚀 How to Run Locally

### Prerequisites
- Web browser (Chrome, Firefox, etc.)
- Optional: Live Server extension (VS Code or similar) for better development experience.

### Steps

1. **Clone or download** the project files to your local machine.

2. **Directory structure** should look like:

    ```
    your-folder/
    ├── index.html
    ├── sort.html
    ├── faq.html
    ├── assets/
        ├── css/
        │   ├── index.css
        │   ├── sort.css
        │   └── faq.css
        └── js/
            ├── timeTaken.js
            └── sort.js
    ```

3. **Open the HTML files**:
   - Double-click `index.html`, `sort.html`, or `faq.html` to open in browser.
   - Or, right-click and choose **"Open with Live Server"** in VS Code.

---

## 📁 File Overview

| File                  | Purpose                          |
|-----------------------|----------------------------------|
| `index.html`          | Main form page                   |
| `sort.html`           | Name sorting interface           |
| `faq.html`            | FAQ section with rating UI       |
| `index.css`           | Styles for form page             |
| `sort.css`            | Styles for sortable list         |
| `faq.css`             | Styles for FAQ accordion         |
| `timeTaken.js`        | JS for tracking form submission time |
| `sort.js`             | JS for sorting the name list     |

---

## 📬 Contact

For questions about the project, contact [Anil Kumar Battula](mailto:anilkumarbattula1120@gmail.com).

---
