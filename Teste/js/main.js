const name = document.getElementById('nome');

const form = document.getElementById('form');

const submitedNome = document.getElementById('submitedNome');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (name === '') {
    alert('inválido');
  } else {
    submitedNome.value = name.value;
    name.value = '';
  }
});
