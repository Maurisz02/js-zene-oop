
let zenek = [];


class Zene{
    #cim;
    #hossz;

    constructor(cim,hossz){
        this.#cim = cim;
        this.#hossz=hossz;
    }

    get cim(){
        return this.#cim;
    }

    get hossz(){
        return this.#hossz;
    }

    static osszeadHossz(zenek){
        let sum = 0;
        for(let c of zenek){
            sum += c.#hossz;
        }
    }
}

function katt(){
    console.log('nyom')
    let title = document.getElementById('cim').value;
    let length =parseInt(document.getElementById('hossz').value);
    let zene = new Zene(title,length);
    console.log(zene);
    zenek = [];
    zenek.push(zene);

    zenek.forEach(e =>{
        let li = document.createElement("li");
        li.innerText=e.cim + " "+e.hossz;
        document.getElementById('result').appendChild(li);
    });
    
    let osszHossz = Zene.osszeadHossz(zenek);
    console.log(osszHossz);
}

function init(){
document.getElementById('postB').addEventListener('click',katt);
}

document.addEventListener('DOMContentLoaded',init);