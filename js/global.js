const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector(".icon"); 

  question.addEventListener("click", () => {

    const isActive = item.classList.contains("active");

    // fecha todos
    items.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "▼"; // reseta todos
    });

    // se NÃO estava aberto, abre
    if (!isActive) {
      item.classList.add("active");
      icon.textContent = "▲";
    } else {
      item.classList.remove("active");
      icon.textContent = "▼";
    }
  });
});