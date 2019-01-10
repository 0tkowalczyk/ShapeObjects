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
        let a = this.sideLength^2;
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
        let a = 3.14*(this.radius^2);
        return a;
    }
}

//Dont forget about box and sphere

let box {
    length: 4,
    width: 4,
    height: 4,

    volume: function(){
       let p = length * width * height;
       return p;
    },

    surfaceArea: function(){
        let s = 6*(width*length);
        return s;
    }
}



let sphere = {
    radius = 4,

    let volume: function(){
        let v = 4/3(3.14*radius^3)
    },

    let surfaceArea: function(){
        4(3.14*r^2)
    }

}

//------------------------------------------------
//copy paste test code when you finish under here
