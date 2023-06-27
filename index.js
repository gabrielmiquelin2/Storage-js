// // Inserir dados, passo o nome da chave e seu valor
// localStorage.setItem("name","Gabriel")

// //Resgar item do LocalStorage
// const x = localStorage.getItem("name")//Passo por parametro o nome da chave que quero resgatar 
// console.log(x)

// //Resgatar item que não existe no LocalStorage
// const sobreNome = localStorage.getItem("sobreNome")
// console.log(sobreNome);//Vai me retornar "null"
// if(!sobreNome){
//   console.log("Não tem Sobrenome!")
// }

// //Remover um item do localStorage
// localStorage.removeItem("name")//Passo por parametro o nome da chave que quero remover

// //Limpar todos os Itens
// localStorage.setItem("a", 1);
// localStorage.setItem("b", 2)
// localStorage.clear()//remove tudo


//SESSION STORAGE
// sessionStorage.setItem("number", 789)

// //Reiniciar e perder dados 
// //Fechar a aba!

// //Resgar dados da Session
// const n = sessionStorage.getItem("number")
// console.log(n)

// sessionStorage.clear()

// Salvar Objeto no STORAGE

const person = {
  name:"Gabriel",
  age: 18,
  job: "Web Developer"
}

//Prinero passo para salvar na SessionStorage é 
//converter o objeto para JSON
localStorage.setItem("person",JSON.stringify(person))

const getPerson = localStorage.getItem("Person")
console.log(getPerson);

const personObject = JSON.parse(getPerson)
console.log(typeof personObject)
console.log(personObject.job)