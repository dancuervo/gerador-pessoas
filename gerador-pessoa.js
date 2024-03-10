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

/*gerar pessoas*/
lista_pessoas = []
for(let i=0;i<10;i++){
   pessoa = nomePessoa(nomes, genero)
    lista_pessoas.push( {   "nome": pessoa[0],
                            "genero":pessoa[1],
                            "sobrenome": sobrenomePessoa(nomes),
                            "data_nascimento": dataNascimento(),
                            "cpf": cpf()
                        } )
}
