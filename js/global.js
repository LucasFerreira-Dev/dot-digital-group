const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector(".icon"); 

  question.addEventListener("click", () => {

    const isActive = item.classList.contains("active");

    // fecha todos
    items.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "▼";
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

const images = [
  "assets/images/Forest road.png",
  "assets/images/Cidade.jpg",
  "assets/images/Passagens aereas.jpg"
];

let currentIndex = 0;

const imgElement = document.getElementById("carousel-image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dots = document.querySelectorAll(".dot");

function updateImage() {
  imgElement.src = images[currentIndex];

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  updateImage();
});

// botão anterior
prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1; 
  }

  updateImage();
});

const raffleTexto = `Lorem ipsum dolor sit amet <br>
    consectetur adipisicing elit. <br>
    Saepe excepturi, dolores <br>
    perspiciatis commodi eum <br>
    dolore nesciunt tempore <br>
    similique at quas.`;

const raffleItems = document.querySelectorAll(".raffle_1, .raffle_2, .raffle_3");

raffleItems.forEach(item => {
    const btn = item.querySelector("button");
    const p = item.querySelector("p");

    btn.addEventListener("click", () => {
        const isActive = item.classList.contains("raffle-active");

        // fecha todos
        raffleItems.forEach(r => {
            r.classList.remove("raffle-active");
            r.querySelector("button").textContent = "Abrir";
            r.querySelector("p").innerHTML = "?";
        });

        // se não estava aberto, abre
        if (!isActive) {
            item.classList.add("raffle-active");
            btn.textContent = "Fechar";
            p.innerHTML = raffleTexto;
        }
    });
});

// abre o raffle_2 por padrão
const raffle2 = document.querySelector(".raffle_2");
raffle2.classList.add("raffle-active");
raffle2.querySelector("button").textContent = "Fechar";
raffle2.querySelector("p").innerHTML = raffleTexto;