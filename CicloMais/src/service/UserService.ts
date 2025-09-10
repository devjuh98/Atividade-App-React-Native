export function calcularIMC(peso: number, altura: number): number {
  return peso / (altura / 100) ** 2;
}

export function calcularMetaAgua(peso: number): number {
  return (peso * 35) / 1000; // litros por dia
}