/*
    Funções necessárias para o trabalho de JavaScript.
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
*/

export function geradorDeTagsDeIdentificacao(nome) {
  // Retorna o nome do pet em letras maiúsculas.
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
    // Verifica se o pet pode ser adotado com base na idade e porte.
    if (idade >= 1 || porte === 'P') {
        return true;
    }
    return false;
}

export function calcularConsumoDeRacao(nome, idade, peso) {
    // Calcula o consumo diário de ração em gramas, Formula: peso * 300 gramas por kg.
    const consumoDiario = peso * 300;
    return consumoDiario;
}

export function decidirTipoDeAtividadePorPorte(porte) {
    // Decide a atividade adequada com base no porte do animal.
    switch (porte) {
        case 'pequeno':
            return 'brincar dentro de casa';
        case 'medio':
            return 'passeio no parque';
        case 'grande':
            return 'corrida ao ar livre';
        default:
            return 'atividade não definida';
    }
}

export async function buscarDadoAsync() {
    // Simula uma busca assíncrona que retorna um dado após 1 segundo.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Pipoca');
        }, 1000);
    });
}