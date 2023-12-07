const regExpNameProduct = /^[A-Za-z\s?]+$/;
const regExpImage = /^((http|https):\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
const regExpCategory = /^[A-Za-z\s?]+$/;
const regExpType = /^(lunes|martes|miercoles|jueves|viernes|sabado|domingo)(, (lunes|martes|miercoles|jueves|viernes|sabado|domingo)){0,2}|full$/;
const regExpSize = /^de (\d{1,2}:\d{2}) a (\d{1,2}:\d{2})|full$/;
const regExpWeight = /^[A-Za-z\-\s?]+$/;
const regExpDescription = /^.{1,500}$/;
const regExpStock = /[0-9]+$/;
const regExpPrice = /[0-9]+$/;

const validateNameProduct = (field) => {
  if (regExpNameProduct.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde NOMBRE');
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

const validateCategory = (field) => {
  if (regExpCategory.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde PROFESOR');
    return false;
  }
};

const validateType = (field) => {
  if (regExpType.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde DATE');
    return false;
  }
};

const validateSize = (field) => {
  if (regExpSize.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde Size');
    return false;
  }
};

const validateWeight = (field) => {
  if (regExpWeight.test(field) && field?.trim() !== "") {
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

const validateStock = (field) => {
  if (
    regExpStock.test(field) &&
    field.trim() !== "" &&
    field.trim() <= 999 &&
    field.trim() >= 0
  ) {
    return true;
  } else {
    console.log('Valor invalido desde PRICE');
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
  validateNameProduct,
  validateCategory,
  validateType,
  validateSize,
  validateImage,
  validateWeight,
  validateDescription,
  validateStock,
  validatePrice,
};