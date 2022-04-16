class FreelanceContract {
    #rate;
    hours;
    taxRate;
    profit;
    taxes;
    constructor(hourlyRate, hours, taxRate) {
        this.#rate = hourlyRate;
        this.hours = hours;
        this.taxRate = taxRate;
    }
    calculateProfits(){
        this.profit = this.#rate * this.hours * (1 - this.taxRate)
        this.taxes = this.#rate * this.hours * this.taxRate
    }
    invoiceClient(){
        return `Your invoice total is ${this.#rate * this.hours}`
    }
}

let groverAccount = new FreelanceContract(250, 160, .35)
groverAccount.calculateProfits()
console.log(groverAccount.profit)
console.log(groverAccount.taxes)
console.log(groverAccount.invoiceClient())

console.log(groverAccount.hours)
console.log(groverAccount.hourlyRate)
