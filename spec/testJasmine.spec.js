describe( "", function() {
    const Basket = require('../sourcecode.js')
    let basket
    beforeEach(function() {
        basket = new Basket();
        basket.addToBasket('NewYork')
        basket.addToBasket('Paris')
    })

    it("addToBasket() returns correct array", function() {
        basket.addToBasket('Cheese')
        expect(basket._basket).toEqual(['NewYork','Paris','Cheese'])
        });

    it("removeFromBasket() returns correct array", function() {
        basket.removeFromBasket('NewYork')
        expect(basket._basket).toEqual(['Paris'])
        });

    it("Check capacity", function() {
        expect(basket._capacity).toEqual(5)
        });

    it("changeCapacity() works a)", function() {
        basket._capacity = 2
        expect(basket.changeCapacity(10)).toEqual(`Capacity changed to 10`)
        });
            
    it("changeCapacity() works b)", function() {
        basket._capacity = 2
        basket.changeCapacity(10)
        expect(basket._capacity).toEqual(10)
        });
        
    it("Cannot add to full basket", function() {
        basket._capacity = 2
        expect(basket.addToBasket('Ham')).toEqual('Basket is full!')
        });
       
    it("Cannot remove bagel that isnt in basket", function() {
        expect(basket.removeFromBasket('Swiss')).toEqual('Bagel Type Not In Basket')
        });   

    it("Warning if adding bagel already in basket a)", function() {
        expect(basket.addToBasket('NewYork')).toEqual('Bagel already in basket. Bagel added again')
        });       

    it("Warning if adding bagel already in basket b)", function() {
        basket.addToBasket('NewYork')
        expect(basket._basket).toEqual(['NewYork', 'Paris', 'NewYork'])
        });   

    it("Can single price be called from literal", function() {
        expect(basket.singlePrice('NewYork')).toEqual(2.49)
        });   
    
    it("Can total price be called from literal", function() {
        expect(basket.totalPriceOfBasket()).toEqual(4.49)
        });   
        








    });