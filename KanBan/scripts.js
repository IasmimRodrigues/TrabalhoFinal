// função para mudar do dark para o light mode
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark-mode")
}

function addFontSize(amountToAdd) {
  const style = window.getComputedStyle(document.body)
  let percent = Number(style.getPropertyValue("--font-size").split("%")[0])
  percent += amountToAdd
  document.documentElement.style.setProperty("--font-size", percent + "%")
}

function dimFontSize(amountToAdd) {
  const style = window.getComputedStyle(document.body)
  let percent = Number(style.getPropertyValue("--font-size").split("%")[0])
  percent -= amountToAdd
  document.documentElement.style.setProperty("--font-size", percent + "%")
}

// parte do drag and drop
const cards = document.querySelectorAll(".card")
const dropzones = document.querySelectorAll(".cards")

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart)
  card.addEventListener("drag", drag)
  card.addEventListener("dragend", dragend)
})

function dragstart() {
  dropzones.forEach((dropzone) => dropzone.classList.add("highlights"))

  this.classList.add("is-dragging")
}

function drag() {}

function dragend() {
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlights"))

  this.classList.remove("is-dragging")
}

// local onde vai soltar os cartões

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter)
  dropzone.addEventListener("dragover", dragover)
  dropzone.addEventListener("dragleave", dragleave)
  dropzone.addEventListener("drop", drop)
})

function dragenter() {}

function dragover() {
  this.classList.add("over")

  const cardBeingDragged = document.querySelector(".is-dragging")
  this.appendChild(cardBeingDragged)
}

function dragleave() {
  this.classList.remove("over")
}

function drop() {}

// modal cadastrar cards

const button = document.getElementById("buttonOpen")
const modal = document.querySelector("dialog")
const buttonClose = document.getElementById("buttonClose")

button.onclick = function () {
  modal.showModal()
}

buttonClose.onclick = function () {
  modal.close()
}

// inserir cartão
function inserirCard() {
  let titulo = document.getElementById("titulo").value
  let descricao = document.getElementById("descricao").value
  let tag = document.getElementById("tag").value

  document.getElementById("todo").innerHTML +=
    '<div class="card" draggable="true"> <h3>' +
    titulo +
    "</h3> <p>" +
    descricao +
    '</p> <div class="tags"> <span>' +
    tag +
    "</span> </div> </div>"

  modal.close()

  const cards = document.querySelectorAll(".card")
  const dropzones = document.querySelectorAll(".cards")

  cards.forEach((card) => {
    card.addEventListener("dragstart", dragstart)
    card.addEventListener("drag", drag)
    card.addEventListener("dragend", dragend)
  })

  function dragstart() {
    dropzones.forEach((dropzone) => dropzone.classList.add("highlights"))

    this.classList.add("is-dragging")
  }

  function drag() {}

  function dragend() {
    dropzones.forEach((dropzone) => dropzone.classList.remove("highlights"))

    this.classList.remove("is-dragging")
  }

  cardsFilter = document.querySelectorAll(".card");
}

// Filtrar cartões
const filterElements = document.querySelector(".filter .input-wrapper input")
let cardsFilter = document.querySelectorAll(".card")

console.log(cardsFilter)

filterElements.addEventListener("input", filterCards)

function filterCards() {
  const filterText = filterElements.value.toLowerCase()

  for (let card of cardsFilter) {
    let isMatch = false
    const cardContent = card.textContent.toLowerCase()

    if (cardContent.includes(filterText)) {
      isMatch = true
    }

    card.style.display = isMatch ? "block" : "none"
  }
}
