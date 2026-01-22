// logic.test.js
const { determinarEstado } = require('./logic');
describe('Pruebas de Lógica de Evaluación', () => {
test('Debe aprobar con nota superior a 70', () => {
expect(determinarEstado(80)).toBe("APROBADO");
expect(determinarEstado(70)).toBe("APROBADO"); // Límite inferior
});
test('Debe reprobar con nota inferior a 70', () => {
expect(determinarEstado(50)).toBe("REPROBADO");
expect(determinarEstado(69.9)).toBe("REPROBADO"); // Decimales
});
test('Debe detectar notas inválidas (fuera de rango)', () => {
expect(determinarEstado(150)).toBe("ERROR: Nota inválida");
expect(determinarEstado(-1)).toBe("ERROR: Nota inválida");
});
// Aquí descubrimos si nuestra lógica maneja bien los no-números
test('Debe manejar entradas no numéricas', () => {
// En JS, parseFloat("texto") da NaN. NaN es type 'number' técnicamente pero...
// Este test puede revelar comportamientos interesantes del código original.
expect(determinarEstado(NaN)).toBe("REPROBADO"); // O lo que decidamos que sea correcto
});
});