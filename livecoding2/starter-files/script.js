// API
const API_ENDPOINT = 'https://yesno.wtf/api';

// Función para realizar la petición al API
async function fetchAnswer() {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data.answer;
  } catch (error) {
    console.error('Error fetching answer:', error);
    return null;
  }
}

// Función para mostrar la respuesta en el HTML
function displayAnswer(answer) {
  const answerElement = document.getElementById('answer');
  answerElement.textContent = answer;
}

// Función para limpiar la pregunta y la respuesta después de 5 segundos
function clearInputAndAnswer() {
  const inputElement = document.getElementById('input');
  const answerElement = document.getElementById('answer');
  const errorElement = document.getElementById('error');

  inputElement.value = '';
  answerElement.textContent = '';
  errorElement.textContent = '';
}

// Función para manejar el evento de click en el botón
async function handleButtonClick() {
  const inputElement = document.getElementById('input');
  const errorElement = document.getElementById('error');

  // Validar que se haya ingresado una pregunta
  if (inputElement.value.trim() === '') {
    errorElement.textContent = 'Por favor, ingresa una pregunta.';
    return;
  }

  // Realizar la petición al API y mostrar la respuesta
  const answer = await fetchAnswer();
  displayAnswer(answer);

  // Limpiar la pregunta y la respuesta después de 5 segundos
  setTimeout(clearInputAndAnswer, 5000);
}