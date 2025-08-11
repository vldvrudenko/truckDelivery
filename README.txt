Project Overview: Truck Delivery
This is a web project featuring a one-page website for a trucking company, with a separate administration panel for managing requests.

Architecture and Structure
Pages:

index.html — The main landing page with company information, services, and testimonials.

aboutUs.html — The "About Us" page with the company's mission and history.

contactUs.html — A dedicated contact page with a form, company contact details, and a map.

admin.html — The administration panel for viewing, adding, and deleting client requests.

CSS:

reset.css — Resets browser default styles for cross-browser consistency.

styles.css — The main project styles, written using the BEM methodology (Block, Element, Modifier) for improved readability and maintainability.

Google Fonts are used: Archivo (for headings), Quicksand (for body text).

JavaScript:

Implements a mobile-friendly burger menu.

A "Scroll to Top" button with a smooth scroll function.

Sends contact form data to an external API (MockAPI.io).

Retrieves and displays requests on the admin page.

Initializes the Swiper.js library for the testimonial slider.

Technologies and Libraries Used
HTML5: Semantic page structure for better accessibility and SEO.

CSS3 (Flexbox/Grid): Responsive design with modern positioning methods and media queries.

JavaScript (Vanilla): Handles user interactions, animations, and asynchronous API requests.

Swiper.js: A cross-platform library for a responsive testimonial slider.

MockAPI.io: A mock backend used for storing and retrieving form data via a REST API.

Key Features and Technical Solutions
Semantic Markup and Accessibility

Structural HTML5 elements (<header>, <main>, <section>, <footer>) are used to organize content logically.

Image alternative texts are included for screen reader support.

A clear heading hierarchy (<h1>, <h2>, etc.) is used to properly structure content.

Responsive Design

The layout dynamically adapts to different screen sizes using media queries.

The navigation menu transforms into a burger menu on smaller screens.

Lazy loading is implemented for images to optimize page load times.

JavaScript Interactivity

The burger menu provides a smooth open/close animation.

The "Scroll to Top" button appears on scroll and ensures a smooth return to the top of the page.

The contact form sends data to MockAPI with client-side validation.

The admin panel dynamically loads and manages data from the API.

API Integration

The project is integrated with MockAPI to simulate a real backend.

Basic CRUD (Create, Read, Update, Delete) operations are implemented for client requests.

All requests are handled using the Fetch API.

Testimonial Slider

Swiper.js is used to create a responsive slider with navigation and pagination.

Testimonials are presented as individual cards with client images, text, and ratings.

Contact Information
LinkedIn: https://www.linkedin.com/in/volodymyr-rudenko-85a6a1144/

GitHub: https://github.com/vldvrudenko