
/////////////////   1   //////////////////////////////////////////////

function IsEmpty(object){
    for(let key in object){
        if(object.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
}

const emptyUser = {};
const notEmptyUser = {firstName:'Viktor', surname:'Kondol0vskiy'};
alert(IsEmpty(emptyUser));
alert(IsEmpty(notEmptyUser));


/////////////////   2   //////////////////////////////////////////////

function createUser(name,age){
    return{
        name: name,
        age: age,

        sayHello: function(){
            return  `Привіт, я ${this.name}, мені ${this.age} років`;
        }
    };
    
}

const newUser = createUser (prompt('Будь ласка, введіть ваше ім\'я:', 'ім\'я'),prompt('Будь ласка, введіть ваш вік:', 18));
alert(newUser.sayHello());


/////////////////   3   //////////////////////////////////////////////

function createCalc(){
    return{
        firstNumber:'',
        secondNumber:'',
        ask: function(){
            this.firstNumber = prompt('Будь ласка, введіть перше число:', 100);
            this.secondNumber = prompt('Будь ласка, введіть перше число:', 100);
            if (this.firstNumber=='' || this.secondNumber=='' || Number.isNaN(Number(this.firstNumber)) || Number.isNaN(Number(this.secondNumber))){
                return alert('Потрібно вводити числа');
            }
            return this.firstNumber, this.secondNumber;
        },
        sum: function(){
            return (Number(this.firstNumber)+Number(this.secondNumber));
        },
        mul: function(){
            return (Number(this.firstNumber)*Number(this.secondNumber));
        }
    };
}


const newCalc = createCalc();
newCalc.ask();
alert(`Результат додавання: ${newCalc.sum()}`);
alert(`Результат множення: ${newCalc.mul()}`);

