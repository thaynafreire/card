'use strict'

const disciplinas = [
    {nome:'PWDE', cor: 'red', icon: 'pwde.png'},
    {nome:'PWFE', cor: 'purple', icon: 'pwfe.png'},
    {nome:'PPDM', cor: 'blue', icon: 'ppdm.png'},
    {nome:'PRO', cor: 'black', icon: 'pro.png'},
    {nome:'SOP', cor: 'pink', icon: 'sop.png'},
    {nome:'IOT', cor: 'grey', icon: 'iot.png'}
]

function criarItemMenu (disciplina) {
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novoImagem = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplina.nome
    novoLink.style = `--cor-hover: ${disciplina.cor}`


    novoImagem.src = `./img/${disciplina.icon}`

    novoItem.appendChild(novoImagem)
    novoItem.appendChild(novoLink)

    listaMenu.appendChild(novoItem)

}

disciplinas.forEach(criarItemMenu)
//__________________________________________atividade CARDS



const cardContainer = document.getElementById('card-container');
const cards = [
    { imagem: 'earpods.jpg', titulo: 'Earpods', descricao: 'Os Apple EarPods são fones de ouvido com fio, ergonômicos, com áudio de alta qualidade, microfone embutido e controle remoto. Disponíveis com conector Lightning ou P2 (3,5 mm).' },
    { imagem: 'airpods-1.jpg', titulo: 'Airpods 1', descricao: 'Os AirPods (1ª geração) são fones de ouvido sem fio da Apple, com design leve, conexão automática via Bluetooth, som de alta qualidade e estojo de recarga.' },
    { imagem: 'airpods-pro-2.jpg', titulo: 'Airpods pro 2', descricao: 'Os AirPods Pro (2ª geração) oferecem cancelamento de ruído ativo, modo ambiente, áudio espacial, ajuste confortável com pontas de silicone e estojo de recarga MagSafe.'},
    { imagem: 'airpods-4.jpg', titulo: 'Airpods 4', descricao: 'Os AirPods 4 oferecem áudio de alta qualidade com Equalização Adaptativa, Áudio Espacial Personalizado e Cancelamento Ativo de Ruído. Possuem controles por toque, resistência IP54 e conexão Bluetooth 5.3. O estojo de recarga USB-C garante até 30 horas de áudio.'},
    { imagem: 'airpods-max.jpg', titulo: 'Airpods Max', descricao: 'Os AirPods Max são fones de ouvido over-ear da Apple, com cancelamento de ruído ativo, áudio espacial, som de alta fidelidade e design premium, oferecendo conforto e imersão sonora.'}
];

cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
   
    const imgElement = document.createElement('img');
    imgElement.src = `./img/${card.imagem}`;
    imgElement.alt = 'Imagem do Card';
   
    const titleElement = document.createElement('h3');
    titleElement.textContent = card.titulo;  
   
    const descElement = document.createElement('p');
    descElement.textContent = card.descricao;
   
    cardElement.appendChild(imgElement);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(descElement);
    cardContainer.appendChild(cardElement);
});