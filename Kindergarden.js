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
        console.log(`"${this.name}" can accept ${updatedKidsLimit} kids now.`);

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
}

module.exports = Kindergarden;