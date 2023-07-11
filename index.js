// Write your code here
class Breakfast{
    constructor(mfd, mdrnk)
    {
        this.food = mfd;
        this.drink = mdrnk;
    }
}

class Lunch{
    constructor(sld, sp, mdrnk)
    {
        this.salad = sld;
        this.soup = sp;
        this.drink = mdrnk; 
    }
}

class Dinner{
    #dessert;
    constructor(sld, sp, mnml, mdsrt)
    {
        this.salad = sld;
        this.soup = sp;
        this.entree = mnml;
        this.#dessert = mdsrt;
    }
}
