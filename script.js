const inputId = document.querySelector('#inputId');
const inputNome = document.querySelector('#inputNome');
const inputNumero = document.querySelector('#inputNumero');
const botaoSalvar = document.querySelector('#botaoSalvar');
const lista = document.querySelector('#listaDeContatos');

botaoSalvar.addEventListener('click', function() {
    const id = inputId.value;
    const nome = inputNome.value;
    const numero = inputNumero.value;
    salvarItemNaLista(id, nome, numero);
    inputId.value = '';
    inputNome.value = '';
    inputNumero.value = '';
});

function salvarItemNaLista(id, nome, numero) {
    let li = document.getElementById(id);
    if (li) {
        // editar contato
    } else {
        // novo contato
        id = gerarId();
        li = document.createElement('li');
        li.id = id;
        lista.append(li);
    }
    // salva/atualiza informações no <li>
    li.textContent = nome + ' : ' + numero;
    // cria botão para editar
    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.addEventListener(
        'click', () => selecionarParaEdicao(
            id, nome, numero
        )
    );
    li.append(btnEditar);
    // cria botão para remover
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.addEventListener(
        'click', () => li.remove()
    );
    li.append(btnRemover);
}

function gerarId() {
    return new Date().getTime();
}

function selecionarParaEdicao(id, nome, numero) {
    inputId.value = id;
    inputNome.value = nome;
    inputNumero.value = numero;
}