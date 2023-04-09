
function Accumulator(InitialNumber) {
    this.Number=InitialNumber;

}

Accumulator.prototype.increment = function(){
    return ++this.Number;
}
Accumulator.prototype.decrement = function(){
    return --this.Number;
}

Accumulator.prototype.addInitialItem = function(){
    this.Number = prompt('Enter a number, please:', 100);
    if (this.Number=='' || Number.isNaN(Number(this.Number))){
        alert('Enter a number, please');
        this.Number = 0;
        return this.Number;
    }
    else{
        return this.Number;
    }
}




let firstAccumulator = new Accumulator('0');

function initialItem(){
    showResult(firstAccumulator.addInitialItem(),'.result');
}
function setIncrement(){
    showResult(firstAccumulator.increment(),'.result');
}
function setDecrement(){
    showResult(firstAccumulator.decrement(),'.result');
}


function showResult(mes,className) {
    const result = document.querySelector(className);
    result.innerHTML = `<br />Сurrent value: ${mes}`;
    
}



function cancelableAccumulator(initialNumber) {
    Accumulator.call(this,initialNumber);
    this.originalNumber = initialNumber;
}

cancelableAccumulator.prototype = Object.create(Accumulator.prototype);

cancelableAccumulator.prototype.clear = function(){
    this.Number=this.originalNumber;
    return this.Number;
}

let secondAccumulator = new cancelableAccumulator('0');

function initialItemCancelable(){
    secondAccumulator.originalNumber=secondAccumulator.addInitialItem();
    showResult(secondAccumulator.originalNumber,'.result2');
}
function setIncrementCancelable(){
    showResult(secondAccumulator.increment(),'.result2');
}
function setDecrementCancelable(){
    showResult(secondAccumulator.decrement(),'.result2');
}
function setClear(){
    showResult(secondAccumulator.clear(),'.result2');;
}