# INTERIA — Interior Design Studio Website

A responsive, single-page interior design studio website built with **HTML, CSS and vanilla JavaScript**.

## Features
- Responsive desktop, tablet and mobile layouts
- Smooth anchor navigation and mobile menu
- Scroll reveal animations using `IntersectionObserver`
- Animated project statistics counters
- Hover transitions on project and service cards
- Testimonial navigation controls
- FAQ accordion using native HTML `details` elements
- Demo enquiry and contact forms with an on-page confirmation toast
- Replaceable demo photography

## Run locally
1. Download or clone this repository.
2. Open `index.html` in your browser.
   - Recommended: use the **Live Server** extension in VS Code.

No build tools or dependencies are required.

## Project structure
```text
interia-website/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Customise the images
The current photos are demo images loaded from Unsplash. Search in `index.html` and `style.css` for `images.unsplash.com` and replace those image URLs with your own image URLs or local files in an `assets/` folder.

## Connect the forms
The forms are front-end demos only. They currently show a confirmation message and do not send data anywhere. Connect them to your preferred backend or form service before using the site for real enquiries.

## Deploy on GitHub Pages / Netlify
This is a static website. Push the project files to a GitHub repository, then deploy the repository with GitHub Pages or Netlify. No build command is needed; publish the project root folder.

---

**Note:** INTERIA, the project names, team names and contact details are sample demo content. Replace them with the real business information before publishing commercially.
