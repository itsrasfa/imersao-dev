// máquina de escrever
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i)
  });
}

const titulo = document.querySelector("h1");
typeWriter(titulo)
typeWriter(document.querySelector(".texto"));

// ativar o tema light
const check = document.getElementById("check");
check.addEventListener('change', () => {
  document.body.classList.toggle('light');
})

// ativar scroll 
const btnBackToTop = document.querySelector("#back-to-top");
btnBackToTop.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", (e) => {
  btnBackToTop.style.display = window.scrollY > 20 ? "flex" : "none";
});