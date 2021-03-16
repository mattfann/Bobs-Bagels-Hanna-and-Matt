class Basket{
    constructor(){
        this._basket = [];
        this._capacity;
    }
    addToBasket(item){
        if(this._basket.length >= this._capacity){
            return 'Basket is full!'
        }
        if(this._basket.includes(item) === true){
            this._basket.push(item)
           return 'Bagel already in basket 1 time(s). Bagel added again so now in basket 2 times?'
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

    enlargeBasketCapacity(){
        if (this._basket.length < this._capacity){
            return 'Basket is not full!'
        }
        else
            this._capacity = this._capacity*2
            return 'Capacity Doubled'
    }
}
module.exports = Basket