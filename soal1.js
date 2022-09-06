class Ship{
    constructor(draft, crew, draftTot){
        this.draft = draft
        this.crew = crew
        this.draftTot = draftTot

        draftTot = draft + crew * 1.5

        if (draftTot < 20){
            console.log("Banyak nih Muatannya");
            console.log(draft, crew, draftTot);
        } 
        else {
            console.log("Lebih banyak awak kapalnya");
            console.log(draft, crew, draftTot);
        }
    }
}

const emptyShip = new Ship (10, 15)