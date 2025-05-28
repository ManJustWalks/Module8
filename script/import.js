// Импорт карточек

const headerDiv = document.getElementById('header');
const footerDiv = document.getElementById('footer');

fetch('header.html')
  .then(responce => responce.text())
  .then(data => headerDiv.innerHTML = data);

fetch('footer.html')
  .then(responce => responce.text())
  .then(data => footerDiv.innerHTML = data);


  
