class fraction{
    constructor(numerator, denominator){
        this.denominator= denominator,
        this.numerator=numerator
    }
    multiplyBy(v){
        if (v.constructor === fraction){
            this.denominator = this.denominator * v.denominator,
            this.numerator = this.numerator * v.numerator
        } else{
            this.numerator = this.numerator * v
        }
    }
    multiply(x,y){
        this.denominator = this.denominator * y,
        this.numerator = this.numerator * x
    }
    print(){
        console.log(`༜${this.numerator}/${this.denominator}༜`);
    }
}

const fraction1 = new fraction(18,23)

fraction1.print()

fraction1.multiply(2,3)
fraction1.print()

fraction1.multiplyBy(new fraction(13,17))
fraction1.print()