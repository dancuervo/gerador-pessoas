/*CRIA ARQUIVO PARA DOWNLOAD*/
function createFile(){
    //create or obtain the file's content
    var content = JSON.stringify(lista_pessoas);
    //create a file and put the content, name and type
    var file = new File(["\ufeff"+content], 'dados_pessoas.txt', {type: "text/plain:charset=UTF-8"});
    //create a ObjectURL in order to download the created file
    url = window.URL.createObjectURL(file);
    //create a hidden link and set the href and click it
    var a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
  }