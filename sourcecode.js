class Basket{
    constructor(){
        this._basket = [];

    }
    basketList(){
        return this._basket
    }

    addToBasket(item){
        return this._basket.push(item)

    }

    removeFromBasket(item){
        for(let i=0; i<this._basket.length; i++){
            if (this._basket[i] == item ){
                this._basket.splice(i,1)
                break
            }

        }
            


    }
}
module.exports = Basket