class Basket{
    constructor(){
        this._priceList = {'NewYork': 2.49, 'London': 3.00, 'Paris': 2.00}
        this._basket = [];
        this._capacity = 5;
    }
    addToBasket(item){
        if(this._basket.length >= this._capacity){
            return 'Basket is full!'
        }
        if(this._basket.includes(item) === true){
            return this._basket.push(item) && 'Bagel already in basket. Bagel added again'
        } 
        else{
            return this._basket.push(item)
        }
    }

    removeFromBasket(item){
            if (this._basket.includes(item)){
                for (let i=0; i<this._basket.length; i++)
                if( this._basket[i]=item){
                this._basket.splice(i,1)
                break}
            }
            else{
                return 'Bagel Type Not In Basket'
            }
        
    }

    changeCapacity(number){
        if (this._basket.length < this._capacity){
            return 'Basket is not full!'
        }
        else
            this._capacity = number
            return `Capacity changed to ${number}`
    }

    singlePrice(input){
        return this._priceList[input]
    }

    totalPriceOfBasket(){
        let totalPrice = 0
        this._basket.forEach(element => totalPrice += this.singlePrice(element))
        return totalPrice
    }
}
module.exports = Basket