class Kindergarden {
    constructor(name) {
        this.name = name;
        this.kidsLimit = 3;
        this.list = [];
    }

    intro() {
        console.log(`"${this.name}" can accept ${this.kidsLimit} kids.`);
    }
    updateKidsLimit(updatedLimit) {
        this.kidsLimit = updatedLimit;
        if (this.list.length > updatedLimit) {
            console.log(`"${this.name}" can not update kids limit right now.`);
        } else {
            console.log(`"${this.name}" can accept ${updatedLimit} kids now.`);
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
        let sayHi = '';
        for (let kidName of this.list) {
            if (kidName === this.list[this.list.length - 1] && this.list.length >= 2) {
                sayHi += `and ${kidName}`
                break
            }
            sayHi += this.list.length > 1 ? `${kidName}, ` : `${kidName} `;
        }
        console.log(`"${this.name}" is visited by: ${sayHi}.`);
    }
    removeKid(kidName) {
        let updatedList = [];
        for (let i = 0; i < this.list.length; i++) {
            if (i === kidName) {
                updatedList.push(kidName);
            } else {

                this.list = updatedList;
            }

        }
        console.log(`${kidName} has left "${this.name}" kindergarden.`);
    }
}

module.exports = Kindergarden;