class Kindergarden {
    constructor() {
        this.kidsLimit = 3;
        this.Kindergarden = ('Barsukai');
    }

    intro() {
        console.log(`"${this.Kindergarden}" can accept ${this.kidsLimit} kids.`);
    }
    updateKidsLimit(updatedKidsLimit) {
        this.updatedKidsLimit = updatedKidsLimit;
        console.log(`"${this.Kindergarden}" can accept ${updatedKidsLimit} kids now.`);
    }
    addKid(kidName) {
        this.kidName = kidName;
        console.log(`${this.kidName} has entered "${this.Kindergarden}" kindergarden.`);
    }
}

module.exports = Kindergarden;