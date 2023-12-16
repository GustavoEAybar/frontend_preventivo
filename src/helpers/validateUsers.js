const regExpImage = /^((http|https):\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
const regExpNameUser = /^[A-Za-z\s?]+$/;
const regExpLastnameUser = /^[A-Za-z\s?]+$/;
const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regExpPhone = /^(\+\s?54\s?9\s?\(\d{3}\)\s?\d{7}|\+\s?54\s?9\s?\d{9}|\(\d{5,}\)\s?\d{9}|\d{7,})$/;
const regExpPassword = /^(?=.*[a-zA-Z0-9@!$%&?]).{8,}$/;
const regExpClasses = /^[A-Za-z\s?]+$/;
const regExpContractedPlan = /^[a-fA-F0-9]{24}|[A-Za-z\s?]+$/;
const regExpRoll = /^(administrador|profesor|usuario)$/;


const validateImage = (field) => {
    if (regExpImage.test(field) && field?.trim() !== "") {
      return true;
    } else {
      console.log('Valor invalido desde IMAGE');
      return false;
    }
  };
const validateNameUser = (field) => {
  if (regExpNameUser.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde NOMBRE');
    return false;
  }
};

const validateLastnameUser = (field) => {
  if (regExpLastnameUser.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde APELLIDO');
    return false;
  }
};

const validateEmail = (field) => {
  if (regExpEmail.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde EMAIL');
    return false;
  }
};

const validatePhone = (field) => {
  if (regExpPhone.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde TELEFONO');
    return false;
  }
};

const validatePassword = (field) => {
  if (regExpPassword.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde CLAVE');
    return false;
  }
};

const validateClasses = (field) => {
  if (regExpClasses.test(field) && field?.trim() !== "") {
    return true;
  } else {
    console.log('Valor invalido desde CLASES');
    return false;
  }
};

const validateContractedPlan = (field) => {
    if (regExpContractedPlan.test(field) && field?.trim() !== "") {
        return true;
      } else {
        console.log('Valor invalido desde PLAN CONTRATADO');
        return false;
      }
};

const validateRoll = (field) => {
    if (regExpRoll.test(field) && field?.trim() !== "") {
        return true;
      } else {
        console.log('Valor invalido desde ROLL');
        return false;
      }
};

export {
  validateImage,
  validateNameUser,
  validateLastnameUser,
  validateEmail,
  validatePhone,
  validatePassword,
  validateClasses,
  validateContractedPlan,
  validateRoll,
};