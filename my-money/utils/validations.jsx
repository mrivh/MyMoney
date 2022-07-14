const passwordValidation=/^(?=.*[a-z A-Z])(?=.*\d)(?=.*\W).{6,20}$/;

const userValidation = /^[A-Za-z]{6}$/

export { passwordValidation, userValidation };