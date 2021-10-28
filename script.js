function meuNome(nome){
    console.log(nome)
    alert("Meu nome é: " + nome)
}

/*
    Aula 4/12
*/
//var nome = "Simone";

// Aula 8/12
//função entrar

function entrar(){
    var area2 = document.getElementById('area2');
    var texto = prompt('Digite seu nome:');

    if(texto == '' || texto == null){
        alert('Digite seu nome novamente!');
        area2.innerHTML = 'Bem vindo...';
    }else{
        area2.innerHTML = 'Bem vindo ' + texto;
    }

}

// Create an object:
//objetos são geralmente salvos em constantes

const person = {
    firstName: "Simone",
    lastName: "Salvi",
    age: 34,
    eyeColor: "negros"
  };

  //aula2 js
  
  const person2 ={
    nome: "Simone",
    idade: 34,
    sexo: "feminino",
    endereco: {
      logradouro: "AV 1",
      numero: 90,
      cidade: "Araraquara",
      cep: "14770-000"
    },
    familia: [
      marido,
      filha
    ]
  }