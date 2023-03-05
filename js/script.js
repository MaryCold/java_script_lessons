function showResult(mes) {
    const result = document.querySelector('.result');
    const newElement = document.createElement('div');
    newElement.innerHTML = `${mes}<br/>`;
    result.appendChild(newElement);
  }

function myMin(arr){
    let al = Number(arr.length);
    let minimum = arr[al-1];
    while (al--){
        if(isFinite(arr[al]) && arr[al] < minimum){
            minimum = arr[al];
        }
    }
    return minimum;
};

function myMax(arr){
    let al = Number(arr.length);
    let maximum = arr[al-1];
    while (al--){
        if(isFinite(arr[al]) && arr[al] > maximum){
            maximum = arr[al];
        }
    }
    return maximum;
};



let randomNumberArr = [];
let displayArr = ' ';
let sumArr = 0;

for (let i = 0; i < 10; i++) {
    randomNumberArr[i] = Math.floor(Math.random() * 100);
    if(i!=0){
        displayArr+=', ' + randomNumberArr[i];
    }
    else{
        displayArr+=randomNumberArr[i];
    }
}
displayArr+='\n';
showResult('Масив складається з:' + displayArr);


//randomNumberArr [Math.floor(Math.random() * 10)] = 'елемент масиву, що не є числом';

for (let i = 0; i < 10; i++) {
    if(isFinite(randomNumberArr[i])){
        sumArr=Number(sumArr)+Number(randomNumberArr[i]);
    }
}
showResult('Сума елементів масиву: ' + sumArr);

showResult('Мінімальний елемент масиву: ' + myMin(randomNumberArr));
showResult('Максимальний елемент масиву: ' + myMax(randomNumberArr));

let lines = Math.floor(Math.random() * 12+5); 
let elem = 1;
let mes='';

for(let i = 0; i < lines; i++){
    for(let j = 0; j < i; j++){
        mes+="#";
    }
    mes+="<br/>"
}
showResult(mes);




