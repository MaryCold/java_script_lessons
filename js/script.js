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

function mySubtraction(FirstNumber,SecondNumber){
    if(Number(FirstNumber)<Number(SecondNumber)){
        let decision = confirm('Перше число меньше другого. Ви впевнені, що хочете продовжити операцію?')
        if(decision){
            alert('Результат віднімання:'+ (Number(FirstNumber)-Number(SecondNumber)));
            return (Number(FirstNumber)-Number(SecondNumber));
        }
        else{
            return 'Перше число меньше другого';
        }
    }
}
function myDivision(FirstNumber,SecondNumber){
    if(Number(SecondNumber)=='0'){
        return 'Друге число дорівнює нулю';
    }
    else{
        return (Number(FirstNumber)/Number(SecondNumber));
    }

}


showResult('<strong>Перша частина завдання</strong>');
let FirstNumber = prompt('Будь ласка, введіть перше число:', 100);
let SecondNumber = prompt('Будь ласка, введіть перше число:', 100);
let Subtraction, Division;

if (FirstNumber=='' || SecondNumber=='' || Number.isNaN(Number(FirstNumber)) || Number.isNaN(Number(SecondNumber))){
    alert('Потрібно вводити числа');
}

else {
    showResult('Результат додавання:'+ (Number(FirstNumber)+Number(SecondNumber)));
    showResult('Результат віднімання:' + mySubtraction(FirstNumber,SecondNumber));
    showResult('Результат множення:' + Number(FirstNumber)*Number(SecondNumber));
    showResult('Результат ділення:' + myDivision(FirstNumber,SecondNumber));

    
}

showResult('<strong><br/>Друга частина завдання</strong>');

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

showResult('Мінімальний елемент масиву: ' + myMin(randomNumberArr));
showResult('Максимальний елемент масиву: ' + myMax(randomNumberArr));






