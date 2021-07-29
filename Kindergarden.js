class Kindergarden {
    constructor(name) {
        this.name = name;
        this.kidsLimit = 3;
        this.list = [];
    }

    intro() {
        console.log(`"${this.name}" can accept ${this.kidsLimit} kids.`);
    }
    updateKidsLimit(updatedKidsLimit) {
        this.kidsLimit = updatedKidsLimit;
        if (this.list.length > updatedKidsLimit) {
            console.log(`"${this.name}" can not update kids limit right now.`);
        } else {
            console.log(`"${this.name}" can accept ${updatedKidsLimit} kids now.`);
        }
    }
    addKid(kidName) {
        if (this.list.length < this.kidsLimit) {
            this.list.push(kidName);
            console.log(`${kidName} has entered "${this.name}" kindergarden.`);
        }
        else {
            console.log(`${kidName} can not enter "${this.name}" kindergarden - it's at a full capacity of ${this.kidsLimit} kids.`);
        }
    }
    sayHi() {
        console.log(`"${this.name}" is visited by: Maryte, Jonukas, Stasyte, Kaziukas and Snaige.`);
    }
}

module.exports = Kindergarden;