const nomes = ["cauã", "Ântonio", "Matheus", "Maria",
    "Rafaela", "Luna", "Pedro"];
    export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
    }
    export const nome = aleatorio(nomes)