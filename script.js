class Animal {
    constructor(name) {
        this.name = name;

    }
    action() {
        document.getElementById(this.actionSoundName).play();
    }
    putInTheDocument() {
        var petsTable = document.getElementById("petsTable");
        var petTR = document.createElement("tr");

        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        petTR.appendChild(petNameTD);

        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        petTR.appendChild(petLegsTD);

        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        petTR.appendChild(petActionTD);

        petActionTDButton.onclick = this.action.bind(this);
        petsTable.querySelector("tbody").appendChild(petTR)
    }
    createImg(type) {
        const CAT_SRC = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg'
        const MONKEY_SRC = 'https://www.sciencenews.org/wp-content/uploads/2020/06/062520_bb_recursion_feat-1028x579.jpg'
        const isImgEl = document.querySelector('#animal-img');
        if (!isImgEl) {
            let newImgEl = document.createElement('img');
            newImgEl.setAttribute('id', 'animal-img');
            document.querySelector('body').appendChild(newImgEl);
        }
        const imgEl = document.querySelector('#animal-img');
        switch (type) {
            case 'scream':
                imgEl.setAttribute('src', MONKEY_SRC);
                break;
            case 'meow':
                imgEl.setAttribute('src', CAT_SRC);
                break;
        }
        document.querySelector('body').appendChild(imgEl);
    }
    getImg() {
        const audio = document.querySelector(`#${this.actionSoundName}`);
        audio.addEventListener('play', () => this.createImg(this.actionSoundName))
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.legs = 4;
        this.actionText = "Meoow"
        this.actionSoundName = "meow"
    }
}

class Monkey extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
        this.actionText = "Scream";
        this.actionSoundName = "scream";
    }

}

var Mila = new Cat("Mila");
Mila.putInTheDocument();
Mila.getImg();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
Charlie.getImg();

function clearImage() {
    const imgEl = document.getElementById('animal-img');
    if (imgEl) {
        imgEl.src = "";
    } else {
        alert('No Image');
    }
}