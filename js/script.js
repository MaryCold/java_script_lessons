
let FirstNumber = prompt('Будь ласка, введіть перше число:', 100);
let SecondNumber = prompt('Будь ласка, введіть перше число:', 100);
let Subtraction, Division;

if (FirstNumber=='' || SecondNumber=='' || Number.isNaN(Number(FirstNumber)) || Number.isNaN(Number(SecondNumber))){
    alert('Потрібно вводити числа');
}

else {
    Subtraction=Number(FirstNumber)-Number(SecondNumber);
    if(Number(FirstNumber)<Number(SecondNumber)){
        let decision = confirm('Перше число меньше другого. Ви впевнені, що хочете продовжити операцію?')
        if(decision){
            alert('Результат віднімання:'+ Subtraction);
        }
        else{
            Subtraction='Перше число меньше другого';
        }
    }
    if(Number(SecondNumber)=='0'){
        Division='Друге число дорівнює нулю';
    }
    else{
        Division=Number(FirstNumber)/Number(SecondNumber);
    }

    alert(' Результат додавання: ' + (Number(FirstNumber)+Number(SecondNumber)) + '\n Результат віднімання:' + Subtraction + '\n Результат множення:' + (Number(FirstNumber)*Number(SecondNumber)) + '\n Результат ділення:' + Division);
    
}




