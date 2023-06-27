const nameForm = document.querySelector("#name-form"); // Seleciona o formulário pelo ID
const welcomeContainer = document.querySelector("#welcome"); // Seleciona o container de boas-vindas pelo ID
const logoutBtn = document.querySelector("#logout"); // Seleciona o botão de logout pelo ID

function checkUser() {
  const userName = localStorage.getItem("name"); // Obtém o nome armazenado no localStorage

  if (userName) {
    // Se o nome estiver definido
    nameForm.style.display = "none"; // Oculta o formulário de nome
    welcomeContainer.style.display = "block"; // Exibe o container de boas-vindas

    const userNameElement = document.querySelector("#username"); // Seleciona o elemento que exibe o nome do usuário
    userNameElement.textContent = userName; // Define o texto do elemento como o nome do usuário
  } else {
    // Se o nome não estiver definido
    nameForm.style.display = "block"; // Exibe o formulário de nome
    welcomeContainer.style.display = "none"; // Oculta o container de boas-vindas
  }
}

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#name"); // Seleciona o campo de entrada do nome
  localStorage.setItem("name", nameInput.value); // Armazena o valor do nome no localStorage

  nameInput.value = ""; // Limpa o campo de entrada do nome

  checkUser(); // Verifica o estado do usuário após enviar o formulário
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("name"); // Remove o nome armazenado no localStorage
  checkUser(); // Verifica o estado do usuário após fazer logout
});

checkUser(); // Verifica o estado do usuário ao carregar a página
