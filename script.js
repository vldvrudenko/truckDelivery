document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      breakpoints: {
        375: {
          slidesPerView: 1.75,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const toggle = navbar.querySelector(".toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        navbar.classList.toggle("collapsed");
      });
    }

    window.addEventListener("scroll", () => {
      const windowY = window.pageYOffset;
      const navbarHeight = navbar.offsetHeight;
      if (windowY > navbarHeight) navbar.classList.add("sticky");
      else navbar.classList.remove("sticky");
    });
  }

  const url = "https://65182dcd582f58d62d357a76.mockapi.io/clients";

  const form = document.getElementById("userForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const data = {
        name: document.getElementById("name").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim(),
        phoneNumber: Number(document.getElementById("phoneNumber").value),
      };

      if (!data.name || !data.lastName || !data.email || !data.message || !data.phoneNumber) {
        document.getElementById("status").textContent = "Please fill in all fields correctly";
        return;
      }

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Network error");
          return response.json();
        })
        .then(() => {
          document.getElementById("status").textContent = "Data sent successfully!";
          form.reset();
        })
        .catch((err) => {
          document.getElementById("status").textContent = "Error: " + err.message;
        });
    });
  }

  const container = document.getElementById("clientsContainer");

  if (container) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((client) => {
          const card = document.createElement("div");
          card.className = "client-card";

          card.innerHTML = `
            <h2>Client</h2>
            <h3><span class="clientLabel">Name:</span>  ${client.name}</h3>
            <h3><span class="clientLabel">Last name:</span>  ${client.lastName}</h3>
            <h3><span class="clientLabel">Email:</span>  ${client.email}</h3>
            <h3><span class="clientLabel">Phone: </span> ${client.phoneNumber}</h3>
            <h3><span class="clientLabel">Message: </span> ${client.message}</h3>
          `;

          const closeButton = document.createElement("button");
          closeButton.textContent = "Delete Client";
          closeButton.className = "close-btn btn";

          closeButton.addEventListener("click", () => {
            closeButton.disabled = true;
            fetch(`${url}/${client.id}`, {
              method: "DELETE"
            })
              .then((res) => {
                if (res.ok || res.status === 404) {
                  card.remove();
                } else {
                  console.error("Error deleting client:");
                }
              })
              .catch((err) => console.error("Network error", err));
          });

          card.appendChild(closeButton);

          container.appendChild(card);
        });
      })
      .catch((error) => console.error("Error retrieving data:", error));
  }
});
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});