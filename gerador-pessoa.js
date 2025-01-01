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
function dataNascimento(genero) {
    if (genero !== "masculino" && genero !== "feminino") {
        throw new Error("O parâmetro 'genero' deve ser 'masculino' ou 'feminino'.");
    }

    // Faixas etárias e probabilidades aproximadas para homens e mulheres no Brasil
    const distribuicaoIdade = {
        masculino: [
            { faixa: [0, 14], probabilidade: 23.5 },
            { faixa: [15, 24], probabilidade: 15.4 },
            { faixa: [25, 39], probabilidade: 25.3 },
            { faixa: [40, 59], probabilidade: 25.8 },
            { faixa: [60, 100], probabilidade: 10.0 }
        ],
        feminino: [
            { faixa: [0, 14], probabilidade: 21.8 },
            { faixa: [15, 24], probabilidade: 14.3 },
            { faixa: [25, 39], probabilidade: 23.8 },
            { faixa: [40, 59], probabilidade: 25.7 },
            { faixa: [60, 100], probabilidade: 14.4 }
        ]
    };

    // Selecionar a distribuição com base no gênero
    const distribuicao = genero === "masculino" ? distribuicaoIdade.masculino : distribuicaoIdade.feminino;

    // Gerar um número aleatório para decidir a faixa etária
    const totalProbabilidade = distribuicao.reduce((acc, curr) => acc + curr.probabilidade, 0);
    const random = Math.random() * totalProbabilidade;

    let faixaEtaria;
    let acumulado = 0;
    for (const faixa of distribuicao) {
        acumulado += faixa.probabilidade;
        if (random <= acumulado) {
            faixaEtaria = faixa.faixa;
            break;
        }
    }

    // Determinar um ano de nascimento aleatório com base na faixa etária
    const anoAtual = new Date().getFullYear();
    const idadeMinima = faixaEtaria[0];
    const idadeMaxima = faixaEtaria[1];
    const anoNascimento = anoAtual - randomIntFromInterval(idadeMinima, idadeMaxima);

    // Gerar dia e mês aleatórios
    const dia = randomIntFromInterval(1, 28); // Evitar problemas com fevereiro
    const mes = randomIntFromInterval(1, 12);

    // Formatar a data
    return `${String(dia).padStart(2, "0")}/${String(mes).padStart(2, "0")}/${anoNascimento}`;
}
// Função auxiliar para calcular a idade com base na data de nascimento
function calcularIdade(dataNascimento) {
    const [dia, mes, ano] = dataNascimento.split("/").map(Number);
    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;

    // Ajustar caso o aniversário ainda não tenha ocorrido este ano
    if (
        hoje.getMonth() + 1 < mes || 
        (hoje.getMonth() + 1 === mes && hoje.getDate() < dia)
    ) {
        idade--;
    }

    return idade;
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
//
function gerarNumeroCelular(estado) {
    const prefixos = {
        AC: [68], AL: [82], AM: [92, 97], AP: [96], BA: [71, 73, 74, 75, 77],
        CE: [85, 88], DF: [61], ES: [27, 28], GO: [62, 64], MA: [98, 99],
        MG: [31, 32, 33, 34, 35, 37, 38], MS: [67], MT: [65, 66],
        PA: [91, 93, 94], PB: [83], PE: [81, 87], PI: [86, 89],
        PR: [41, 42, 43, 44, 45, 46], RJ: [21, 22, 24], RN: [84],
        RO: [69], RR: [95], RS: [51, 53, 54, 55], SC: [47, 48, 49],
        SE: [79], SP: [11, 12, 13, 14, 15, 16, 17, 18, 19], TO: [63]
    };

    if (!prefixos[estado]) {
        throw new Error("Estado inválido. Use uma sigla válida no formato 'XX'.");
    }

    const prefixo = prefixos[estado][Math.floor(Math.random() * prefixos[estado].length)];
    const numero = `${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`; // Gera um número no formato XXXX-XXXX

    return `(${prefixo}) 9${numero}`;
}
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

// Lista de doenças com prevalência estimada (hipotética)
const doencas = [

        { 
            nome: "Hipertensão", 
            prevalencia: { 
                masculino: [0.1, 0.3, 0.5], // Jovens, Adultos, Idosos
                feminino: [0.1, 0.4, 0.6] 
            } 
        },
        { 
            nome: "Diabetes", 
            prevalencia: { 
                masculino: [0.05, 0.2, 0.3], 
                feminino: [0.04, 0.15, 0.25] 
            } 
        },
        { 
            nome: "Asma", 
            prevalencia: { 
                masculino: [0.1, 0.05, 0.02], 
                feminino: [0.12, 0.06, 0.03] 
            } 
        },
        { 
            nome: "Depressão", 
            prevalencia: { 
                masculino: [0.02, 0.1, 0.15], 
                feminino: [0.05, 0.2, 0.25] 
            } 
        },
        { 
            nome: "Colesterol Alto", 
            prevalencia: { 
                masculino: [0.05, 0.25, 0.4], 
                feminino: [0.04, 0.3, 0.5] 
            } 
        },
        { 
            nome: "Artrite", 
            prevalencia: { 
                masculino: [0.01, 0.05, 0.3], 
                feminino: [0.02, 0.1, 0.4] 
            } 
        },
        { 
            nome: "Obesidade", 
            prevalencia: { 
                masculino: [0.1, 0.25, 0.35], 
                feminino: [0.15, 0.3, 0.4] 
            } 
        },
        { 
            nome: "Osteoporose", 
            prevalencia: { 
                masculino: [0.01, 0.02, 0.1], 
                feminino: [0.05, 0.1, 0.3] 
            } 
        },
        { 
            nome: "Doença Pulmonar Obstrutiva Crônica (DPOC)", 
            prevalencia: { 
                masculino: [0.02, 0.1, 0.2], 
                feminino: [0.01, 0.05, 0.15] 
            } 
        },
        { 
            nome: "Insuficiência Cardíaca", 
            prevalencia: { 
                masculino: [0.01, 0.05, 0.15], 
                feminino: [0.02, 0.07, 0.2] 
            } 
        }
    ];
    

/**
 * Função para calcular a probabilidade de uma pessoa ter doenças com base na prevalência.
 * @param {string} genero - "masculino" ou "feminino".
 * @param {number} idade - Idade da pessoa.
 * @returns {Array} - Lista de doenças com probabilidades ordenadas.
 */
function probabilidadeDoencas(genero, idade) {
    if (!["masculino", "feminino"].includes(genero)) {
        throw new Error("Gênero inválido. Use 'masculino' ou 'feminino'.");
    }
// Determinar o índice da faixa etária com base na idade
    let faixaEtaria;
    if (idade < 18) faixaEtaria = 0; // Crianças e adolescentes
    else if (idade < 60) faixaEtaria = 1; // Adultos
    else faixaEtaria = 2; // Idosos

    // Calcular as probabilidades
    const probabilidades = doencas.map((doenca) => {
        const prevalencia = doenca.prevalencia[genero][faixaEtaria];
        return {
            nome: doenca.nome,
            probabilidade: prevalencia,
        };
    });

    // Ordenar por probabilidade (descendente)
    probabilidades.sort((a, b) => b.probabilidade - a.probabilidade);

    return probabilidades;
}


/*gerar pessoas*/
lista_pessoas = []
for(let i=0;i<10;i++){
    pessoa = nomePessoa(nomes, genero)
    data_nascimento = dataNascimento(pessoa[1])
    estado = estadoNascimento()
    idade = calcularIdade(data_nascimento)
    lista_pessoas.push( {   "nome": pessoa[0],
                            "genero":pessoa[1],
                            "sobrenome": sobrenomePessoa(nomes),
                            "data_nascimento": data_nascimento,
                            "grupo_sanguineo": gerarTipoSanguineo(),
                            "cpf": cpf(),
                            "estado_nascimento": estado,
                            "celular": gerarNumeroCelular(estado),
                            "idade": calcularIdade(data_nascimento),
                            "possiveis_doencas": probabilidadeDoencas(pessoa[1], idade)
                        } )
}

