//Day 06 :OOPS TASK 

/* class Movie
{
    constructor(title,studio,ratings="PG")
    {
        this.title = title;
        this.studio =studio;
        this.ratings =ratings
    }
    getPG()
    {
        console.log(`${this.title} ${this.studio} ${this.ratings}`)
    }
}

let film =new Movie("Casino Royale","Eon Productions","PG­13");
console.log(film); */

//q2 Convert the UML diagram to Typescript class. - use number for double
/* class  Circle
{
    constructor(radius,color)
    {
        this.radius = radius;
        this.color = color;
    }
   Circle()
    {
        console.log(this.radius,this.color)
    }
    getArea()
    {
       return Math.PI*Math.pow(this.radius,2);
    } 
   getcircumference()
   {
     return 2*Math.PI*(this.radius);
   }
}

let c= new Circle(20,"yellow");
console.log(c.getcircumference()); */

//3.Write a “person” class to hold all the details

/* class Person
{
    constructor(name,age,qualification,experience)
    {
        this.name = name;
        this.age= age;
        this.qualification= qualification;
        this.experience = this.experience
    }

} */

//4.write a class to calculate the uber price.
/* class uber
{
    constructor(source,distination,km)
    {
        this.source = source;
        this.distination = distination;
        this.km=km;
    }
    getPrice()
    {
        let price = this.km *15
        return `user source ${this.source} and distination ${this.distination} ${this.km}km so total price is ${price} `
    }

}
let l = new uber("chennai","thiruvallur",50);
console.log(l.getPrice()); */