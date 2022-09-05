class Animal {
    constructor (nama, spesies, habitat){
        this.nama = nama
        this.spesies = spesies
        this.habitat = habitat
    }
    introduction (){
        return `Halo, saya ${this.nama}, saya adalah seekor ${this.spesies}, saya tinggal di ${this.habitat}`
    }
}

class Hiu extends Animal {
    constructor (nama, spesies, habitat){
        super (nama, spesies, habitat)
    }
    introduction (){
        console.log(`Halo, nama saya ${this.nama}, saya adalah seekor ${this.spesies}, saya tinggal di ${this.habitat}`); 
    }
}

class Kucing extends Animal {
    constructor (nama, spesies, habitat){
        super (nama, spesies, habitat)
    }
    introduction (){
        console.log(`Halo, nama saya ${this.nama}, saya adalah seekor ${this.spesies}, saya tinggal di ${this.habitat}`); 
    }
}

class Anjing extends Animal {
    constructor (nama, spesies, habitat, pemilik){
        super (nama, spesies, habitat)
        this.pemilik = pemilik
    }
    introduction (){
        console.log(`Halo, nama saya ${this.nama}, saya adalah seekor ${this.spesies}, saya tinggal di ${this.habitat}, pemilik saya bernama ${this.pemilik}`); 
    }
}

const hiu = new Hiu('Hiu', 'Ikan', 'Lautan');
hiu.introduction()

const kucing = new Kucing('Kucing', 'Mamalia', 'Daratan');
kucing.introduction()

const anjing = new Anjing('Anjing', 'Mamalia', 'Daratan', 'Wira');
anjing.introduction()

// console.info(hiu);
// console.info(kucing);
// console.info(anjing);