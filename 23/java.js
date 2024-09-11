var liguagens = Array();

liguagens[0] = 'Dart';
liguagens[1] = 'PHP';
liguagens[2] = 'Java';
liguagens[3] = 'Pyton';
liguagens[4] = 'Perl';
liguagens[5] = 'Ruby on Rails';
liguagens[6] = 'C ++';

function criaListaLiguagens(){
  const container = document.getElementById('container');
   liguagens.forEach(function(item,index) {
    container.innerHTML += (index) +  ' - ' +item+'<br>'
  });    	 
}

function posicaoLiguagens(){
var indice = prompt('Qual posição da lista deseja consultar?');
alert(liguagens[indice]);
}

var frutas = Array();

frutas[0] = 'maçã';
frutas[1] = 'banana';
frutas[2] = 'laranja';
frutas[3] = 'melancia';
frutas[4] = 'manga';

function criaListaFrutas(){
  const containerFrutas = document.getElementById('containerFrutas');
   frutas.forEach(function(item,index) {
    containerFrutas.innerHTML += (index) +  ' - ' +item+'<br>'
  });    	 
}

function posicaoFrutas(){
var indice = prompt('Qual posição da lista deseja consultar?');
alert(frutas[indice]);
}

var lista_generica = {}; 

      lista_generica['frutas'] = ['maçã', 'banana', 'laranja','melancia','manga'];

      lista_generica['numeros'] = [100,88,39,87,3,52,98,1202];      

      lista_generica['linguagens'] = [];

          lista_generica['linguagens'][0] = 'Dart';
          lista_generica['linguagens'][1] = 'PHP';
          lista_generica['linguagens'][2] = 'Java';
          lista_generica['linguagens'][3] = 'Pyton';
          lista_generica['linguagens'][4] = 'Perl';

          function criaListaGenerica() {
            let categoria = prompt("Informe a categoria (frutas, numeros, linguagens):");
            
            if (lista_generica[categoria]) {
                categoriaSelecionada = categoria;
                let container = document.getElementById("containerGenerico");
                container.innerHTML = ""; 
                let ul = document.createElement("ul");
        
                lista_generica[categoria].forEach(function(item, index) {
                    let li = document.createElement("li");
                    li.textContent = index + ": " + item;
                    ul.appendChild(li);
                });
        
                container.appendChild(ul);
            } else {
                alert("Categoria não encontrada.");
            }
        }
        
        function posicaoItem() {
            if (categoriaSelecionada) {
                let posicao = prompt("Informe a posição do item no array (0 a " + (lista_generica[categoriaSelecionada].length - 1) + "):");
        
                
                posicao = parseInt(posicao);
        
                if (!isNaN(posicao) && posicao >= 0 && posicao < lista_generica[categoriaSelecionada].length) {
                    let item = lista_generica[categoriaSelecionada][posicao];
                    alert("O item na posição " + posicao + " é: " + item);
                } else {
                    alert("Posição inválida.");
                }
            } else {
                alert("Você deve primeiro selecionar uma categoria usando 'Criar Array'.");
            }
        }

var notas = [8.5, 6.2, 7.8, 9.1, 5.5, 4.3, 7.0, 6.8, 10.0, 3.9];

        
    function criaListaNotas() {
        let container = document.getElementById("containerNotas");
        container.innerHTML = "";
        let ul = document.createElement("ul");

            
        notas.forEach(function(nota, index) {
            let li = document.createElement("li");
            li.textContent = "Nota " + (index + 1) + ": " + nota;
            ul.appendChild(li);
        });

        container.appendChild(ul); 
    }
        
        function consultarNota() {
            let posicao = prompt("Informe a posição da nota (1 a 10):");

            
            posicao = parseInt(posicao) - 1;

            
            if (!isNaN(posicao) && posicao >= 0 && posicao < notas.length) {
                let nota = notas[posicao];

               
                if (nota >= 7.0) {
                    alert("A nota na posição " + (posicao + 1) + " - Nota Aprovativa: " + nota);
                } else {
                    alert("A nota na posição " + (posicao + 1) + " - Nota Reprovativa: " + nota);
                }
            } else {
                alert("Posição inválida.");
            }
        }

        window.onload = criaListaNotas;

var lista_boxes = [
    { cor: 'red', conteudo: 'Box 1', borderRadius: '10px', tamanho: '100px' },
    { cor: 'green', conteudo: 'Box 2', borderRadius: '15px', tamanho: '150px' },
    { cor: 'blue', conteudo: 'Box 3', borderRadius: '20px', tamanho: '200px' },
    { cor: 'purple', conteudo: 'Box 4', borderRadius: '25px', tamanho: '250px' },
    { cor: 'black', conteudo: 'Box 5', borderRadius: '30px', tamanho: '300px' },
];

function criaBox(itemBox) {
    var novaBox = document.createElement('div'); 
    novaBox.className = 'box'; 
    novaBox.style.backgroundColor = itemBox.cor;
    novaBox.textContent = itemBox.conteudo;
    novaBox.style.borderRadius = itemBox.borderRadius; 
    novaBox.style.width = itemBox.tamanho; 
    novaBox.style.height = itemBox.tamanho; 
    return novaBox;
}

function listaBox() {
    var containerBox = document.getElementById('containerBox');
    containerBox.innerHTML = ''; 
    lista_boxes.forEach(function(itemBox) { 
        var box = criaBox(itemBox);
        containerBox.appendChild(box);
    });
}

function verificarCor() {
    var position = prompt('Digite a posição da caixa:'); 
    var index = parseInt(position) - 1; 
    if (!isNaN(index) && index >= 0 && index < lista_boxes.length) {
        alert('A cor da caixa na posição ' + (index + 1) + ' é ' + lista_boxes[index].cor);
    } else {
        alert('Posição inválida. Insira um número entre 1 e ' + lista_boxes.length);
    }
}


document.getElementById('listarBox').addEventListener('click', listaBox);


document.getElementById('verificarCor').addEventListener('click', verificarCor);
