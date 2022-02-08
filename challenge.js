// Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos surpevisores
        - Função de bater ponto que recebe a hora (número)
            e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/
var employee = {
    employeeNames: ['Minerva McGonagall', 'Severo Snape', 'Rubeus Hagrid'],
    hitPoint: function (point) {
        if (point <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário';
    }
};
console.log(employee);
