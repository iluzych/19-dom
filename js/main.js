const submitDOM = document.querySelector('button');
const orderDOM = document.querySelector('.order');
const nameDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const gerimaiDOM = document.querySelectorAll('input[name="gerimas"]');

function arNoriu(DOM) {
    return DOM.checked ? 'nori' : 'nenori';
}

function kurisPazymetas(DOMlist) {
    for (const itemDOM of DOMlist) {
        if (itemDOM.checked) {
            return itemDOM.value;
        }
    }
}

submitDOM.addEventListener('click', (e) => {
    e.preventDefault();

    orderDOM.innerText = `Uzsakovas vardu ${nameDOM.value} ${arNoriu(sriubaDOM)} sriubos, ${arNoriu(patiekalasDOM)} pagrindinio patiekalo, ${arNoriu(desertasDOM)} deserto ir ${kurisPazymetas(gerimaiDOM)} yra pasirinktas gerimas.`;
    
})