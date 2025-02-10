class Atletas {
    constructor(nome, notas) {
        this.nome  = nome;
        this.notas = notas;
    }

    ordenarNotasCrescente() {
        let ordenado = this.notas;
        let aux;
        for(let i = 0; i < ordenado.length - 1; i++) {
            for(let j = i + 1; j < ordenado.length; j++) {
                if (ordenado[i] > ordenado[j]) {
                    aux = ordenado[i];
                    ordenado[i] = ordenado[j];
                    ordenado[j] = aux;
                }
            }
        }
        return ordenado;
    }

    calcularMedia() {
        let notasMeio = this.ordenarNotasCrescente().slice(1,4);
        let soma = notasMeio.reduce(function(total, atual) {
            return total + atual;
        }, 0);
        this.media = soma/3;
    }

    impressao() {
        console.log(`Atleta: ${this.nome}. \nNota Obtidas: ${this.notas.sort()}. \nMédia Válida: ${this.media}`);
    }
}

let atletas = [];
atletas.push(new Atletas("Cesar Abascal", [10, 9.34, 8.42, 10, 7.88]));
atletas.push(new Atletas("Fernando Puntel", [8, 10, 10, 7, 9.33]));
atletas.push(new Atletas("Daiane Jelinsky", [7, 10, 9.5, 9.5, 8]));
atletas.push(new Atletas("Bruno Castro", [10, 10, 10, 9, 9.5]));

atletas.forEach(function(atleta) {
    atleta.calcularMedia();
    atleta.impressao();
})