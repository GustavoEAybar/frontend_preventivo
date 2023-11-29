const regExpNameService = /^[A-Za-z\s?]+$/;
const regExpNameTeacher = /^[A-Za-z\s?]+$/;
const regExpDate = /^[A-Za-z\s?]+$/;
const regExpTime = /[0-9]+$/;
const regExpImage = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
const regExpPlaneType = /^[A-Za-z\-\s?]+$/;
const regExpDescription = /^[A-Za-z\-\s?]+$/;
const regExpPrice = /[0-9]+$/;

const validateNameService = (field) => {
  if (regExpNameService.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

const validateNameTeacher = (field) => {
  if (regExpNameTeacher.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

const validateDate = (field) => {
  if (regExpDate.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

const validateTime = (field) => {
  if (regExpTime.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

const validateImage = (field) => {
  if (regExpImage.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

const validatePlaneType = (field) => {
  if (regExpPlaneType.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

const validateDescription = (field) => {
  if (regExpDescription.test(field) && field.trim() !== "") {
    return true;
  } else {
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
