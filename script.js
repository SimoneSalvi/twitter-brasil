




//******************************************************************************************** */
// Anotações de aulas: 

/*

function meuNome(nome){
    console.log(nome)
    alert("Meu nome é: " + nome)
}


    Aula 4/12

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
  
  const pessoa2 ={
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
      "Anderson",
      "Maria Alice"
    ]
  }

  */

/*
 console.log(pessoa2.familia.map((rest => rest)));

  console.log(pessoa2.familia.map(res=>{
      document.querySelector('familia').innerHTML = res
  }));
*/


// console.log(pessoa2.familia);

//*********************************************************** */
//Exemplo de aula, jogar no index: 

/*

              <!--Aulas exemplos--------------------------->
              <button onclick="window.location.href='https://sujeitoprogramador.com';">Ir ao sujeito Programador</button>
          
              <button onclick="window.location.href='window.location.href'">Atualizar a Página</button>
              <!--------------------->
              <div id="area">
                    Bem vindo!
              </div>
              <button onclick="document.getElementById('area').innerHTML=
              'Bem vindo! ' + prompt('Qual seu nome?');">Entrar</button>
              <!--------------------->
              <div id="area1">
                    Qual o nome do botão?
              </div>
              <button onclick="this.innerHTML=
              prompt('Qual o nome do botão?');">Qual meu nome?</button>
           
             <!--------------------->
             <div id="area2">
                Bem vindo!
          </div>
          <button onclick="entrar()">Entrar</button>


           <!--parei no vídeo 8-->
           <br><br>
           <!--Objeto-->
           <p id="pessoa"></p>
           <button onclick="document.getElementById('pessoa').innerHTML =
           person.firstName + ' tem ' + person.age + ' anos de idade.';">Dados da pessoa</button>
           
           <p id="pessoa2"></p>
           <button onclick="document.getElementById('pessoa2').innerHTML =
           pessoa2.nome + ' tem ' + pessoa2.idade + ' anos de idade. Mora em: '
           + pessoa2.endereco.cidade + pessoa2.endereco.logradouro + ', numero: ' + pessoa2.endereco.numero
           + '. Nome do marido: '+ pessoa2.familia[0] + ', nome da filha: '+ pessoa2.familia[1] ;">Dados da pessoa2</button>
 
           <!--map e rest-->
             <div id="area3">
              
             </div>
             <button onclick="">Familia</button>



         </div> 

         */

// fim exemplo de aula, jogar no index ****************************************************************//