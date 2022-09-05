class Ship{
    constructor(draft, crew, weight){
        this.draft = draft
        this.crew = crew
        this.weight = weight

        crew = 1.5 * draft

        if (crew < 20){
            console.log("Banyak nih Muatannya");
            console.log(crew);
        } 
        else {
            console.log("Lebih banyak awak kapalnya");
            console.log(crew);
        }
    }
}

const emptyShip = new Ship (10)