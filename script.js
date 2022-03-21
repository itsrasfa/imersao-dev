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


const check = document.getElementById("check");
check.addEventListener('change', () => {
  document.body.classList.toggle('light');
})
