//Your code

let Rectangle = {
    length: 4,
    width: 10,
    
    perimeter: function(){
        let p = 2*this.length + 2*this.width;
        return p;
    },
    area: function(){
        let a = this.lenngth * this.width;
        return a;
    }

}

let Square = {
    sideLength = 4,

    perimeter: function(){
        let p = 4*this.sideLength;
        return p;
    },

    area: function(){
        let a = this.sideLength*this.sideLength;
        return a;
    }
}

let Circle = {
    radius = 4, 

    circumference: function(){
        let c = 2*3.14 * this.radius;
    return c;
    },
    
    area: function(){
        let a = 3.14*(this.radius*this.sideLength);
        return a;
    }
}

//Dont forget about box and sphere

let box = {
    length: 4,
    width: 4,
    height: 4,

    volume: function(){
       let p = this.length * this.width * this.height;
       return p;
    },

    surfaceArea: function(){
        let s = 6*(this.width*this.length);
        return s;
    }
}



let sphere = {
    radius = 4,

    volume: function(){
        let v = 4/3*(3.14*this.radius*this.radius*this.radius)
    },

    surfaceArea: function(){
        4*(3.14*(this.radius*this.radius))
    }

}

//------------------------------------------------
//copy paste test code when you finish under here
function test(){

    console.log(`------ Rectangle Stuff ------`);
    console.log(`sides = ${Rectangle.length} by ${Rectangle.width}`);
    console.log(`perimeter = ${Rectangle.perimeter()}`);
    console.log(`area = ${Rectangle.area()}\n`);
    
    console.log(`------ Square Stuff ------`);
    console.log(`side length = ${Square.sideLength}`);
    console.log(`perimeter = ${Square.perimeter()}`);
    console.log(`area = ${Square.area()}\n`);
    
    console.log(`------ Circle Stuff ------`);
    console.log(`radius = ${Circle.radius}`);
    console.log(`circumference = ${Circle.circumference()}`);
    console.log(`area = ${Circle.area()}\n`);
    
    console.log(`------ Box Stuff ------`);
    console.log(`sides = ${Box.length} by ${Box.width} by ${Box.height}`);
    console.log(`perimeter = ${Rectangle.surfaceArea()}`);
    console.log(`area = ${Rectangle.volume()}\n`);
    
    console.log(`------ Sphere Stuff ------`);
    console.log(`radius = ${Sphere.radius}`);
    console.log(`circumference = ${Sphere.surfaceArea()}`);
    console.log(`area = ${Sphere.volume()}\n`);
    
    }
    //runs the test
    test();
    