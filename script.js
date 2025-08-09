// const url = "https://65182dcd582f58d62d357a76.mockapi.io/clients";

// document.getElementById("userForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // чтобы не перезагружалась страница

//   const data = {
//     name: document.getElementById("name").value.trim(),
//     email: document.getElementById("nameS").value.trim(),
//     age: Number(document.getElementById("age").value),
//   };

//   // простая валидация, чтобы не отправлять пустые значения
//   if (!data.name || !data.email || !data.age) {
//     document.getElementById("status").textContent = "Пожалуйста, заполните все поля корректно";
//     return;
//   }

//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Ошибка сети");
//     }
//     return response.json();
//   })
//   .then(result => {
//     document.getElementById("status").textContent = "Данные успешно отправлены!";
//     // Можно очистить форму, если нужно
//     document.getElementById("userForm").reset();
//   })
//   .catch(error => {
//     document.getElementById("status").textContent = "Ошибка при отправке: " + error.message;
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  // Инициализация Swiper (если он есть на странице)
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

  // Навбар
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

  // === Обработка формы ===
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
      
      if (!data.name || !data.lastName || !data.email|| !data.message|| !data.phoneNumber) {
        document.getElementById("status").textContent = "Пожалуйста, заполните все поля корректно";
        return;
      }

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Ошибка сети");
          return response.json();
        })
        .then(() => {
          document.getElementById("status").textContent = "Данные успешно отправлены!";
          form.reset();
        })
        .catch((err) => {
          document.getElementById("status").textContent = "Ошибка: " + err.message;
        });
    });
  }

  // === Вывод карточек клиентов ===
  const container = document.getElementById("clientsContainer");

  if (container) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((client) => {
          const card = document.createElement("div");
          card.className = "client-card";

          // Содержимое карточки
          card.innerHTML = `
            <h2>Clients</h2>
            <h3>Name: ${client.name}</h3>
            <p>Last name: ${client.lastName}</p>
            <p>Email: ${client.email}</p>
            <p>Phone: ${client.phoneNumber}</p>
            <p>Message: ${client.message}</p>
            
          `;

          // Кнопка удаления
          const closeButton = document.createElement("button");
          closeButton.textContent = "Delete";
          closeButton.className = "close-btn";

          // Удаление клиента
          closeButton.addEventListener("click", () => {
            // Блокируем кнопку, чтобы не нажали повторно
            closeButton.disabled = true;

            // Отправляем DELETE-запрос
            fetch(`${url}/${client.id}`, {
              method: "DELETE"
            })
              .then((res) => {
                if (res.ok || res.status === 404) {
                  card.remove(); // удаляем карточку из DOM
                } else {
                  console.error("Ошибка при удалении клиента");
                }
              })
              .catch((err) => console.error("Ошибка сети:", err));
          });

          // Добавляем кнопку в карточку
          card.appendChild(closeButton);

          // Добавляем карточку в контейнер
          container.appendChild(card);
        });
      })
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }
});
