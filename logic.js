// logic.js
function determinarEstado(nota) {
  if (nota < 0 || nota > 100) return "ERROR: Nota inválida";
  if (typeof nota !== 'number') return "ERROR: Debe ser un número";
  if (nota >= 70) return "REPROBADO";  // ❌ cambio intencional
  return "APROBADO";                   // ❌ cambio intencional
}

