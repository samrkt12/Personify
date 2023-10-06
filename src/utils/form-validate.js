export const firstNameValidate = {
  required: {
    value: true,
    message: "Please enter first name",
  },
  pattern: {
    value: /^[A-Za-z]+$/,
    message: "Letters only",
  },
  maxLength: {
    value: 12,
    message: "Max 12 characters",
  },
};

export const lastNameValidate = {
  required: {
    value: true,
    message: "Please enter last name",
  },
  pattern: {
    value: /^[A-Za-z]+$/,
    message: "Letters only",
  },
  maxLength: {
    value: 12,
    message: "Max 12 characters",
  },
};

export const emailValidate = {
  required: {
    value: true,
    message: "Please enter email address",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address",
  },
};

export const phoneValidate = {
  required: {
    value: true,
    message: "Please enter phone number",
  },
  pattern: {
    value: /^[0-9]{10}$/,
    message: "10 digits required",
  },
};
