import throttle from 'lodash.throttle';
const formInputRef = document.querySelector('.feedback-form');

formInputRef.addEventListener('submit', onFormSubmit);
formInputRef.addEventListener('input', throttle(onTextareaInput, 500));

const dataLS = localStorage.getItem('feedback-form-state');

if (dataLS) {
  const data = JSON.parse(dataLS);
  formInputRef.elements.email.value = data.email;
  formInputRef.elements.message.value = data.message;
}

function onTextareaInput(e) {
  const formData = {
    email: formInputRef.elements.email.value,
    message: formInputRef.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  const consoleLogValue = localStorage.getItem('feedback-form-state');

  console.log(JSON.parse(consoleLogValue));
  e.target.reset();

  localStorage.removeItem('feedback-form-state');
}
