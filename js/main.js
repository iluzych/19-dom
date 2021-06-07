const submitDOM = document.querySelector('button');
const orderDOM = document.querySelector('.order');

submitDOM.addEventListener('click', (e) => {
    e.preventDefault();
    orderDOM.innerText = 'Uzsakovas vardu [vardas] [nori/nenori] sriubos, [nori/nenori] pagrindinio patiekalo, [nori/nenori] deserto ir [gerimo pavadinimas] yra pasirinktas gerimas.';
    
})