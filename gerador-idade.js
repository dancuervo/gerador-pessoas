function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function cpf(){
    cpf = ""
    for (i=0;i<11;i++){
        if( i == 3 || i == 6 ){
            cpf += "."
        }if(i == 9){
            cpf += "-"
        }
        cpf += randomIntFromInterval(0,9)
    }
    return cpf
}
console.log(cpf())
