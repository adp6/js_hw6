//1) Створити функцію яка отримує невизначену кількість аргументів і вираховує їх суму

function sum(...arg) {
    let sum = 0;
    for (let iterator of arg) {
        sum+=iterator  
    }
    return sum;
}

console.log(sum(5,4,9,10))

//2)Створити функцію яка отримує від користувача день народження,місяць, рік і повертає рік народження і якщо сьогодні день народження користувача то вивести привітання

function birthday() {
    let day = prompt("Введіть день народження");
    let month = prompt("Введіть місяць народження");
    let year = prompt("Введіть рік народження");
    let birthday = new Date(year, month-1, day);
    const today = new Date();
    if(((birthday.getDay()-1 || birthday.getDay()+1 || birthday.getDay() == today.getDay())) && (birthday.getMonth() == today.getMonth())) {
        return("Happy Birthday!")
    }
    
}
// console.log(birthday())

//3) Створити функцію яка з массиву вибирає всі булеві значення
const sort = [true, 'false', 111, -0, 'true', false, {a:false}, [true, 'false', false, 'true', true]];
function bool(arr) {
    let res = [];
    let f = [0,1,2]
    for (let i = 0; i<arr.length;i++) {
        if(typeof arr[i] === 'boolean' || typeof arr[i].a === 'boolean') {
            res.push(arr[i]);
        }
        else if (typeof arr[i] === 'object') {
            for(let r = 0; r<10; r++){
                if(typeof arr[i][r] === 'boolean') {
                    res.push(arr[i][r])
                }
            }
            
        }
    }
    return res
}

console.log(bool(sort))

//4) Створити функцію яка повертає сторіччя, функція отримує рік 1810->19 

function centuary(year) {
    let str = year.toString();
    let cent = str[0] + str[1];
    let res = parseInt(cent)
    return res + 1
}

console.log(centuary(1810))

// 5) Створити функцію яка повертає скільки днів в цьому місяці а також в наступному  ( В цьому місяці 30 днів в наступному 31 )

function monthDay() {
    const date = new Date();
    let month = date.getMonth()+1;
    switch (month) {
        case 10: 
        return "В цьому місяці 30 днів в наступному 31"
    }
}
console.log(monthDay())