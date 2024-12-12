# Portfolio Website

This project is a dynamic and interactive portfolio website designed to showcase your skills, experience, and projects. It includes features like a responsive navigation menu, animated sections, and download functionality for CVs.

---

## **Features**
- **Responsive Design:** Fully responsive layout compatible with all devices.
- **Interactive Navigation:** Smooth transitions and active section highlights.
- **Portfolio Gallery:** Showcase your projects with a carousel and details.
- **Downloadable CVs:** Allows users to download two versions of your CV with a single click.
- **Social Media Integration:** Quick links to your GitHub, LinkedIn, and other platforms.
- **Custom Animations:** Active page and section transitions for an engaging experience.

---

## **Technologies Used**

### **Frontend:**
- HTML
- CSS
- JavaScript

### **Icons:**
- Boxicons for social media and menu icons.

---

## **How to Use**

### **Prerequisites:**
Ensure you have a basic web server to run the project locally or use your preferred hosting platform (e.g., GitHub Pages).

### **Steps to Run Locally:**
1. Clone the repository:
   ```bash
   git clone https://github.com/nisch-mhrzn/Responsive-Portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Responsive-Portfolio
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   # For example, using Python's SimpleHTTPServer:
   python -m http.server
   ```

4. Access the site in your browser at `http://localhost:5173`.

---
https://github.com/user-attachments/assets/2c092836-0162-4929-9c94-88e5b5a0f2b0
## **File Structure**
```
- **`index.html`**: Main HTML file.
- **`style.css`**: Stylesheet for the website.
- **`script.js`**: JavaScript file for interactivity.
- **`cv`**: Folder containing CV files.
- **`me1.png`**: Profile image.

---

## **Key Functionalities**

### **Navigation Menu**
The responsive menu toggles visibility on smaller screens and highlights the active section.
```javascript
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
```

### **CV Download**
Allows users to download two CV files simultaneously:
```javascript
document.getElementById("download-cv").addEventListener("click", (e) => {
  e.preventDefault();

  const cv1 = document.createElement("a");
  cv1.href = "assets/cv/cv1.pdf";
  cv1.download = "Nischal_Maharjan_CV1.pdf";
  cv1.click();

  const cv2 = document.createElement("a");
  cv2.href = "assets/cv/cv2.pdf";
  cv2.download = "Nischal_Maharjan_CV2.pdf";
  cv2.click();
});
```

### **Portfolio Carousel**
Enables navigation between portfolio items with smooth transitions:
```javascript
arrowRight.addEventListener("click", () => {
  if (index < 6) index++;
  activePortfolio();
});
```

---

## **Customizations**
- Replace `me1.png` with your own profile image.
- Update `assets/cv/cv1.pdf` and `assets/cv/cv2.pdf` with your CV files.
- Modify `index.html` to personalize content and links.

---




