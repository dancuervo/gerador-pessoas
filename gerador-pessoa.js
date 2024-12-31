/*lista de nomes*/
/*
variables
genero
nome_masculino
nome_feminino
*/


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

/* retorna nome e sexo */
nomePessoa = function (nomes, genero){
    /*masculino o feminino*/
    genero_pessoa = randomIntFromInterval(0, 1)
    sexo = genero[genero_pessoa]
    indice = genero_pessoa
    primeiro_nome = nomes[indice][randomIntFromInterval(0, nomes[indice].length -1 )]
    segundo_nome  = nomes[indice][randomIntFromInterval(0, nomes[indice].length -1 )]
    nome = primeiro_nome+" "+segundo_nome
    return [nome, sexo]
}
sobrenomePessoa = function(nomes){
    /*sobrenomes = nomes[2]*/
    primeiro_sobrenome = nomes[2][randomIntFromInterval(0, nomes[2].length - 1)]
    segundo_sobrenome = nomes[2][randomIntFromInterval(0, nomes[2].length - 1)]
    sobrenome = primeiro_sobrenome + " " + segundo_sobrenome
    return sobrenome
}
/*idade*/
function ano (){
    anoAleatorio = randomIntFromInterval(1924,2024)
    if(  anoAleatorio < 1954 ){
        anoAleatorio = randomIntFromInterval(1924,2024)
    }
    else{
        if(anoAleatorio  % 2 == 0 && anoAleatorio < 1954){
            anoAleatorio = randomIntFromInterval(1924,2024)
        }
    }
    if (anoAleatorio < 1974){
        anoAleatorio = randomIntFromInterval(1924,2024)
    }else{
        anoAleatorio = randomIntFromInterval(1924,2024) + 10
    }
   return anoAleatorio
}

function mes (){
    return randomIntFromInterval(1,12)
}

function dia(){
    diaAleatorio = 1

    if(mes == 4 || mes == 6 || mes == 8 || mes == 11){
        diaAleatorio = randomIntFromInterval(1,30)
    } else{
        if (mes == 2 && mes % 4 == 0){
            diaAleatorio = randomIntFromInterval(1,29)
        } else { 
            diaAleatorio = randomIntFromInterval(1,28)
        }
    }
    diaAleatorio = randomIntFromInterval(1,31)
    return diaAleatorio
}
function dataNascimento(){
    return `${dia()}/${mes()}/${ano()}`
}
/*CPF*/
function cpf(){
    numCpf = ""
    for (let i=0;i<14;i++){
        if( i == 3 || i == 7 ){
            numCpf += "."
        }else if(i == 11){
            numCpf += "-"
        }else{
            numCpf += randomIntFromInterval(0,9)
        }
    }
    return numCpf
}
/*tipo sanguineo*/

function gerarTipoSanguineo() {
    // Distribuição aproximada dos tipos sanguíneos na população global (em porcentagem)
    const tiposSanguineos = [
        { tipo: "O+", probabilidade: 37.4 },
        { tipo: "A+", probabilidade: 35.7 },
        { tipo: "B+", probabilidade: 8.5 },
        { tipo: "AB+", probabilidade: 3.4 },
        { tipo: "O-", probabilidade: 6.6 },
        { tipo: "A-", probabilidade: 6.3 },
        { tipo: "B-", probabilidade: 1.5 },
        { tipo: "AB-", probabilidade: 0.6 }
    ];

    // Converter as probabilidades para um intervalo cumulativo
    let acumulado = 0;
    const intervalo = tiposSanguineos.map(tipo => {
        acumulado += tipo.probabilidade;
        return { tipo: tipo.tipo, limite: acumulado };
    });

    // Gerar um número aleatório entre 0 e 100
    const aleatorio = Math.random() * 100;

    // Determinar o tipo sanguíneo com base no intervalo cumulativo
    for (const tipo of intervalo) {
        if (aleatorio <= tipo.limite) {
            return tipo.tipo;
        }
    }

    // Caso inesperado (fallback)
    return "Indefinido";
}


/*fim grupo sanguineo*/

/*estado de nascimento*/
const estadosPopulacao = [
    { estado: "AC", populacao: 0.9 },
    { estado: "AL", populacao: 3.3 },
    { estado: "AP", populacao: 0.9 },
    { estado: "AM", populacao: 4.3 },
    { estado: "BA", populacao: 15.5 },
    { estado: "CE", populacao: 9.4 },
    { estado: "DF", populacao: 3.1 },
    { estado: "ES", populacao: 4.2 },
    { estado: "GO", populacao: 7.2 },
    { estado: "MA", populacao: 7.2 },
    { estado: "MT", populacao: 3.6 },
    { estado: "MS", populacao: 2.8 },
    { estado: "MG", populacao: 21.4 },
    { estado: "PA", populacao: 8.7 },
    { estado: "PB", populacao: 4.1 },
    { estado: "PR", populacao: 11.5 },
    { estado: "PE", populacao: 9.6 },
    { estado: "PI", populacao: 3.3 },
    { estado: "RJ", populacao: 17.2 },
    { estado: "RN", populacao: 3.5 },
    { estado: "RS", populacao: 11.4 },
    { estado: "RO", populacao: 1.8 },
    { estado: "RR", populacao: 0.7 },
    { estado: "SC", populacao: 7.6 },
    { estado: "SP", populacao: 46.7 },
    { estado: "SE", populacao: 2.3 },
    { estado: "TO", populacao: 1.6 }
];

// Gerar número aleatório para determinar estado com base em proporção de população
function estadoNascimento() {
    // Calcular o total da população
    const totalPopulacao = estadosPopulacao.reduce((acc, curr) => acc + curr.populacao, 0);

    // Gerar número aleatório entre 0 e o total da população
    const randomPop = Math.random() * totalPopulacao;

    // Determinar o estado com base no número gerado
    let acumulado = 0;
    for (const estado of estadosPopulacao) {
        acumulado += estado.populacao;
        if (randomPop <= acumulado) {
            return estado.estado;
        }
    }

    // Caso inesperado (fallback)
    return "Indefinido";
}

// Função auxiliar para testar a distribuição
function testarDistribuicao(iteracoes = 10000) {
    const contador = {};
    for (let i = 0; i < iteracoes; i++) {
        const estado = estadoNascimento();
        contador[estado] = (contador[estado] || 0) + 1;
    }
    return contador;
}
/*fim estado de nascimento*/

/*gerar pessoas*/
lista_pessoas = []
for(let i=0;i<10;i++){
   pessoa = nomePessoa(nomes, genero)
    lista_pessoas.push( {   "nome": pessoa[0],
                            "genero":pessoa[1],
                            "sobrenome": sobrenomePessoa(nomes),
                            "data_nascimento": dataNascimento(),
                            "grupo_sanguineo": gerarTipoSanguineo(),
                            "cpf": cpf(),
                            "estado_nascimento": estadoNascimento()
                        } )
}
