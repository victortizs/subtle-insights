const { isValidEmail, isValidName, isValidAge } = require('./form'); 

test('Email válido pasa', () => {
  expect(isValidEmail('test@correo.com')).toBe(true);
});

test('Email inválido no pasa', () => {
  expect(isValidEmail('correo.com')).toBe(false);
});

test('Nombre válido pasa', () => {
  expect(isValidName('Juan')).toBe(true);
}); 

test('Nombre corto no pasa', () => {
  expect(isValidName('A')).toBe(false);
});

test('Edad válida pasa', () => {
  expect(isValidAge(25)).toBe(true);
});

test('Edad menor no pasa', () => {
  expect(isValidAge(17)).toBe(false);
});