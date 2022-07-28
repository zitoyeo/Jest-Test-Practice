const Calculator = require('../calculator')

describe('Calculator', ()=> {
    let cal;
    beforeEach(() => { //독립성 유지하면서 before each를 중복요소 실행 가능
        cal = new Calculator();
    })

    it('inits with 0', ()=> {
        
        expect(cal.value).toBe(0)
    })

    it('sets', ()=> {
        
        cal.set(9)
        expect(cal.value).toBe(9)
    });

    it('clear', ()=> {
        
        cal.set(9)
        cal.clear()
        expect(cal.value).toBe(0)
    });

    it('adds', ()=> {
        
        cal.set(1),
        cal.add(2),        
        expect(cal.value).toBe(3)
    });

    //에러를 예상 하는 코드 작성
    it('add should thorw an error if value is gerater than 100', () => {
        expect(() => {
            cal.add(101);
        }).toThrow('Value can not be greater than 100')
    })



    it('subtracts', ()=> {
        
        cal.set(3),
        cal.subtract(1)        
        expect(cal.value).toBe(2)
    });

    it('multiplies', ()=> {       
        cal.set(4),
        cal.multiply(5)        
        expect(cal.value).toBe(20)
    });

    //나누기의 경우 describe안에 또다른 describe를 만들어서 실행해야함 이유는 여러가지 상황이 있기 때문
    //0을 0으로 나누면 NaN이 나오고 n/0의 형태의 경우 infinity가 나옴
    describe('divides', ()=> {
        it('4 / 4 === 1', () => {
            cal.set(4)
            cal.divide(4);
            expect(cal.value).toBe(1)
        })
        it('1 / 0 === Infinity', () => {
            cal.set(1)
            cal.divide(0);
            expect(cal.value).toBe(Infinity)
        })
        
        it('0 / 0 === NaN', () => {
            cal.set(0)
            cal.divide(0);
            expect(cal.value).toBe(NaN)
        })
    })

}) 


//describe는 그룹함수로 묶어서 콜백으로 쏴줄수있음.
//각각의 테스트는 독립적으로 구성시키는것이 중요함 
