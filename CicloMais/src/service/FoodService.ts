const tabelaCalorias: Record<string, number> = {
  pão: 150,
  ovo: 80,
  arroz: 200,
  frango: 250,
  // você pode adicionar mais alimentos aqui
};

export function calcularCalorias(alimento: string, porcoes: number): number {
  const calPorPorcao = tabelaCalorias[alimento.toLowerCase()] || 150;
  return calPorPorcao * porcoes;
}

export function calcularGanhoPeso(totalCalorias: number): number {
  return totalCalorias / 7700; // 7700 kcal = 1kg
}