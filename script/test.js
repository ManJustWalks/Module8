// Импорт карточек

async function loadAndInsertHTML() {
  const response = await fetch("import/cards.html");
  const html = await response.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const targetDiv = document.getElementById("import_best_card");
  const newContent = doc.body.innerHTML;

  targetDiv.insertAdjacentHTML("beforeend", newContent);
}
loadAndInsertHTML();


// Открытие меню авторизации

const userBlock = document.getElementById('user_block'); 
const userPanel = document.getElementById('user-panel');
const closePanelBtn = document.getElementById('close-user-panel');
const loginBtn = document.getElementById('login-button');


userBlock.addEventListener('click', () => {
userPanel.classList.toggle('hidden');
});

closePanelBtn.addEventListener('click', () => {
userPanel.classList.add('hidden');
});

loginBtn.addEventListener('click', () => {
window.location.href = 'login.html'; 
});



// FAQ ответы

// document.querySelectorAll('.main__q_button').forEach(button => {
//   button.addEventListener('click', () => {
//     const block = button.parentElement;
//     block.classList.toggle('active');
//   });
// });