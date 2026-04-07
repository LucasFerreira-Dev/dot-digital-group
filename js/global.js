const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector(".icon"); 

  question.addEventListener("click", () => {

    const isActive = item.classList.contains("active");

    items.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "▼";
    });

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

        raffleItems.forEach(r => {
            r.classList.remove("raffle-active");
            r.querySelector("button").textContent = "Abrir";
            r.querySelector("p").innerHTML = "?";
        });

        if (!isActive) {
            item.classList.add("raffle-active");
            btn.textContent = "Fechar";
            p.innerHTML = raffleTexto;
        }
    });
});

const raffle2 = document.querySelector(".raffle_2");
raffle2.classList.add("raffle-active");
raffle2.querySelector("button").textContent = "Fechar";
raffle2.querySelector("p").innerHTML = raffleTexto;

const textarea = document.querySelector(".input textarea");
const btnResponder = document.querySelector(".comment-button1");
const btnAlterar = document.querySelector(".comment-button2");
const commentReply = document.querySelector(".comment-reply");
const btnClose = document.querySelector(".comment-button-exit button");

btnResponder.disabled = false;
btnAlterar.disabled = true;

commentReply.style.display = "none";

btnResponder.addEventListener("click", () => {
  const text = textarea.value.trim();

  if (text !== "") {
    commentReply.style.display = "flex";

    sessionStorage.setItem("discursivaTexto", text);
    sessionStorage.setItem("discursivaRespondida", "true");

    btnResponder.disabled = true;
    btnAlterar.disabled = false;
  } else {
    alert("Digite algo antes de responder!");
  }
});

btnClose.addEventListener("click", () => {
  commentReply.style.display = "none";
});

btnAlterar.addEventListener("click", () => {
  commentReply.style.display = "none";

  sessionStorage.removeItem("discursivaTexto");
  sessionStorage.removeItem("discursivaRespondida");

  btnResponder.disabled = false;
  btnAlterar.disabled = true;
});

const atividade = document.querySelector(".atividade-objetiva");

if (atividade) {

  const options = atividade.querySelectorAll(".atividade-option");
  const btnResponder = atividade.querySelector(".comment-button1");
  const btnAlterar = atividade.querySelector(".comment-button2");
  const tentativa = atividade.querySelector(".tentativa");

  let selectedOption = null;

  btnResponder.disabled = true;

  options.forEach(option => {
    option.addEventListener("click", () => {

      options.forEach(opt => opt.classList.remove("selected"));

      option.classList.add("selected");
      selectedOption = option;

      btnResponder.disabled = false;

      const letra = option.textContent.trim().charAt(0);
      sessionStorage.setItem("objetivaSelecionada", letra);
    });
  });

  btnResponder.addEventListener("click", () => {

    const respostaCorreta = "B";

    if (!selectedOption) return;

    if (selectedOption.textContent.trim().startsWith(respostaCorreta)) {
      sessionStorage.setItem("objetivaRespondida", "true");
      
      alert("Resposta correta! ✅");
      tentativa.style.display = "none";

      btnResponder.disabled = true;
      btnAlterar.disabled = false;
    } else {
      sessionStorage.setItem("objetivaResultado", "errada");
      sessionStorage.setItem("objetivaRespondida", "true");
      
      tentativa.style.display = "block";

      btnResponder.disabled = true;
      btnAlterar.disabled = false;
    }
  });

  btnAlterar.addEventListener("click", () => {
    options.forEach(opt => opt.classList.remove("selected"));
    selectedOption = null;
    btnResponder.disabled = true;
    btnAlterar.disabled = true;
    tentativa.style.display = "none";

    sessionStorage.removeItem("objetivaSelecionada");
    sessionStorage.removeItem("objetivaRespondida");
    sessionStorage.removeItem("objetivaResultado");
  });

  const btnCloseTentativa = atividade.querySelector(".tentativa-close");

  btnCloseTentativa.addEventListener("click", () => {
    tentativa.style.display = "none";
  });
}

const textoSalvo = sessionStorage.getItem("discursivaTexto");
const respondeu = sessionStorage.getItem("discursivaRespondida");

if (textoSalvo && respondeu === "true") {
  textarea.value = textoSalvo;
  commentReply.style.display = "flex";

  btnResponder.disabled = true;
  btnAlterar.disabled = false;
}

const selecionada = sessionStorage.getItem("objetivaSelecionada");
const respondidaObj = sessionStorage.getItem("objetivaRespondida");
const resultado = sessionStorage.getItem("objetivaResultado");

if (atividade && selecionada) {
  const options = atividade.querySelectorAll(".atividade-option");
  const btnResponder = atividade.querySelector(".comment-button1");
  const tentativa = atividade.querySelector(".tentativa");

  options.forEach(opt => {
    if (opt.textContent.trim().startsWith(selecionada)) {
      opt.classList.add("selected");
    }
  });

  if (respondidaObj === "true") {
    btnResponder.disabled = true;
  }

  if (resultado === "errada") {
    tentativa.style.display = "block";
  }
}