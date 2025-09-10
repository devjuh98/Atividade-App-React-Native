export function registrarAgua(ml: number, atual: number): number {
  return atual + ml / 1000; // ml → litros
}

export function calcularIntervalo(imc: number): number {
  return imc < 25 ? 2 : 1.5; // horas
}