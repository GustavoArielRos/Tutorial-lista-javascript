/* -acessar pela id usa o "getElementById" 
   -os "creates" criam algo novo quando rodado
   -"appendchild" armazena algo na variável
   -"addEventListener" chama uma função quando um evento acontece
*/
/*criando as variáveis*/ 

var enterButton = document.getElementById("enter");/*pegar o elemento de acordo com a id dele*/
var input = document.getElementById("userInput");/*recebe o que o usuário escreve */ 
var ul = document.getElementById("ul");/*é a lista que será adicionada,começa vazia*/
var item = document.getElementsByTagName("li");/* não foi por Id pq não tem o elemento cadastrado e vamos ter vários(com vários usasse tagname*/

/*---------------------Criando funções----------------------*/

/* função que ver a quantidade de caracter */
/*é importante pq as vezes o usuário pode escrever nada e apertar enter */
function inputLength(){
    return input.value.length;/*vai pegar o valor dela e a quantidade de letras que ele escreve*/
}

/*função que cria a lista */
/* - o li recebe a informação
   - é colocado na ul
   - depois disso reseta o valor do input(para ele ficar vazio novamente)
   - cria uma função que da o efeito de clique
   - */
function createListElement(){
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));/*vai colocar no li o valor do input recebido no li, pegar no modo text */
    ul.appendChild(li);/*colocando a li na ul*/

    input.value = "";
    
    /*função que faz o efeito de clicar, mudar de cor rápido */
    function crossOut(){
        li.classList.toggle("done");/*verifica o argumento e ve se ta presente, se a classe existir entao remove ela se não existir não faz nada */
    }

    li.addEventListener("click",crossOut);/* chama o id e o que vai acontecer com ele, no caso roda a função acima */

    var dBtn = document.createElement("button");/*criando o botão deletar aqui*/
    dBtn.appendChild(document.createTextNode("X"));/*cria um "x" no dBtn(botão deletar)*/
    li.appendChild(dBtn);/*botão delete vai aparecer na lista */
    dBtn.addEventListener("click",deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");/*no css ela deixa none a lista*/
    }

}

/*fazer o botão de registrar a lista se tornar funcionável*/
enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

function addListAfterClick(){
    /*verificar se tem algo escrito*/
    if(inputLength() > 0){
        createListElement();
    };
}

function addListAfterKeypress(){
    /*"13" é o código chave do botão enter do teclado */
    if(inputLength() > 0 && event.which === 13){
        createListElement();

    };
}
