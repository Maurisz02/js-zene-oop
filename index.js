
let zenek = [];


class Zene{
    #cim;
    #hossz;

    constructor(cim,hossz){
        this.#cim = cim;
        this.#hossz=hossz;
    }

    set title(cim){
        this.#cim = cim;
    }

    set length(hossz){
        if(typeof hossz ==="number" && hossz > 0){
            this.#hossz= hossz;
        }else{
            throw new Error("Rossz hossz paraméter");
        }
    }
}

function katt(){
    console.log('nyom')
    let title = document.getElementById('cim').textContent;
    let length =parseInt(document.getElementById('hossz').textContent);
    let zene = new Zene(title,length);
    console.log(zene);
    zenek.concat(zene);
    for(let i = 0; i < zenek.length;i++){
        document.getElementById('result').textContent = zenek[i];
    }
    
}

function init(){
document.getElementById('postB'),addEventListener('click',katt);
}

document.addEventListener('DOMContentLoaded',init);