const employee: { employeeNames: string[], hitPoint: (hours: number) => string } = {
  employeeNames: ['Minerva McGonagall', 'Severo Snape', 'Rubeus Hagrid'],
  hitPoint: (hours) => {
    if (hours <= 8) {
      return 'Ponto normal';
    }

    return 'Fora do horário';
  },
};
