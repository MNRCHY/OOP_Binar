class Animal {
    constructor (nama, umur, kaki, spesies, status){
        this.nama = nama
        this.umur = umur
        this.kaki = kaki
        this.spesies = spesies
        this.status = status
    }
    // introduction (){
    //     console.log(`Halo, nama saya ${this.nama}, saya adalah seekor ${this.spesies}, saya berumur ${this.umur}, saya ${this.status}.`); 
    // }
}

class Hiu extends Animal {
    constructor (nama, umur, kaki, spesies, status){
        super (nama, umur, kaki, spesies, status)
    }
    introduction (){
        console.log(`Halo, nama saya ${this.nama}, saya adalah seekor ${this.spesies}, saya berumur ${this.umur}, saya ${this.status}.`); 
    }
}

class Kucing extends Animal {
    constructor (nama, umur, kaki, spesies, status){
        super (nama, umur, kaki, spesies, status)
    }
    introduction (){
        console.log(`Halo, nama saya ${this.nama}, saya adalah seekor ${this.spesies}, saya berumur ${this.umur}, saya ${this.status}.`); 
    }
}

class Anjing extends Animal {
    constructor (nama, umur, kaki, spesies, status, pemilik){
        super (nama, umur, kaki, spesies, status)
        this.pemilik = pemilik
    }
    introduction (){
        console.log(`Halo, nama saya ${this.nama}, saya adalah seekor ${this.spesies}, saya berumur ${this.umur}, saya ${this.status}.`); 
    }
    greetMaster(){
        console.log(`Halo ${this.pemilik}`);
    }


}

const hiu = new Hiu('Hiu', 10, 0, 'Ikan', 'Berenang');
hiu.introduction()
console.info(hiu);

const kucing = new Kucing('Kucing', 6, 4, 'Mamalia', 'Berjalan');
kucing.introduction()
console.info(kucing);

const anjing = new Anjing('Anjing', 7, 4, 'Mamalia', 'Berjalan', 'Wira');
anjing.introduction()
anjing.greetMaster()
console.info(anjing);