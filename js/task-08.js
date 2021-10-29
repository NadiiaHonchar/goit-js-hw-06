const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (!event.currentTarget.elements.email.value || !event.currentTarget.elements.password.value) {
    alert('Please, enter data');
  }
  const formData = new FormData(event.currentTarget);
  formData.forEach((email, password) => {
    console.log(email);
    console.log(password);
  });
  refs.form.reset();
}
