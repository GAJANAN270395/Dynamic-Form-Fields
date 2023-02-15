let formfield = document.getElementById('formfield');

function add() {
  let newField = document.createElement('input');
  newField.setAttribute('type', 'text');
  newField.setAttribute('name', 'text');
  newField.setAttribute('class', 'text');
  newField.setAttribute('size', 50);
  newField.setAttribute('placeholder', 'Optional Field');
  formfield.appendChild(newField);
}
