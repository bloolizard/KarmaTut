define(['calculator'], function(calculator){

    var calc = new Calculator();

    describe("Math Test Suite", function(){

        it("should add correctly", function(){
            var total = calc.add(1,2);
            expect(total).toBe(3);
        });

        it("should subtract correctly", function(){
            var total = calc.subtract(3,1);
            expect(total).toBe(2);
        });

        it("should multiply correctly", function(){
            var total = calc.multiply(2,2);
            expect(total).toBe(4);

        });

        it("should divide correctly", function(){
            var total = calc.divide(4,2);
            expect(total).toBe(2);
        })

    });

});
