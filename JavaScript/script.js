const botao = document.getElementById('criarCard');
const cards = document.getElementById('cardsContainer');

botao.addEventListener('click', function criarCard(e) {
    e.preventDefault();

    // aqui você pega o input de arquivo corretamente
    const input = document.getElementById('foto'); 
    const nomePerson = document.getElementById('nome').value;
    const habilidade = document.getElementById('habilidade').value;
    const poder = document.getElementById('poder').value;

    if (input.files && input.files[0] && nomePerson && habilidade && poder) {
        const div = document.createElement('div');
        div.classList.add('card');

        // cria URL da imagem
        const imgURL = URL.createObjectURL(input.files[0]);
        const img = document.createElement('img');
        img.src = imgURL;

        const nome = document.createElement('h1');
        nome.innerText = nomePerson;

        const hp = document.createElement('p');
        hp.innerHTML = `<span>Habilidade:</span> ${habilidade}`;

        const pp = document.createElement('p');
        pp.innerHTML = `<span>Poder:</span> ${poder}`;

        // monta card
        div.appendChild(img);
        div.appendChild(nome);
        div.appendChild(hp);
        div.appendChild(pp);

        cards.appendChild(div);

    } else {
        alert('Preencha todos os campos e escolha uma imagem');
    }
});
