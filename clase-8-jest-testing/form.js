function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function isValidName(name) {
  return typeof name === 'string' && name.trim().length >= 2;
}

function isValidAge(age) {
  return Number(age) >= 18;
}

module.exports = { isValidEmail, isValidName, isValidAge };

