const regExpNameService = /^[A-Za-z\s?]+$/;
const regExpNameTeacher = /^[A-Za-z\s?]+$/;
const regExpDate = /^(lunes|martes|miercoles|jueves|viernes|sabado|domingo)(, (lunes|martes|miercoles|jueves|viernes|sabado|domingo)){0,2}|full$/;
const regExpTime = /^de (\d{1,2}:\d{2}) a (\d{1,2}:\d{2}|full)$/;
// const regExpDate = /^\d{4}\-(0?[1-9]|1[0-2])\-(0?[1-9]|[12][0-9]|3[01])$/;
// const regExpTime = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
const regExpImage = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/;
const regExpPlaneType = /^[A-Za-z\-\s?]+$/;
const regExpDescription = /^.{1,500}$/;
const regExpPrice = /[0-9]+$/;

const validateNameService = (field) => {
  if (regExpNameService.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde NOMBRE');
    return false;
  }
};

const validateNameTeacher = (field) => {
  if (regExpNameTeacher.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde PROFESOR');
    return false;
  }
};

const validateDate = (field) => {
  if (regExpDate.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde DATE');
    return false;
  }
};

const validateTime = (field) => {
  if (regExpTime.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde TIME');
    return false;
  }
};

const validateImage = (field) => {
  if (regExpImage.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde IMAGE');
    return false;
  }
};

const validatePlaneType = (field) => {
  if (regExpPlaneType.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde TIPO DE PLAN');
    return false;
  }
};

const validateDescription = (field) => {
  if (regExpDescription.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde DESCRIPTION');
    return false;
  }
};

const validatePrice = (field) => {
  if (
    regExpPrice.test(field) &&
    field.trim() !== "" &&
    field.trim() <= 999999 &&
    field.trim() >= 0
  ) {
    return true;
  } else {
    console.log('Valor invalido desde PRICE');
    return false;
  }
};

export {
  validateNameService,
  validateNameTeacher,
  validateDate,
  validateTime,
  validateImage,
  validatePlaneType,
  validateDescription,
  validatePrice,
};
