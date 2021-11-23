'use strict'

const MAX_PLACES = 50
let firstPlace,
    secondPlace

// максимальное к-во мест в зале 50
// каждое 3е место недоступно из-за ковида =(
// ввести номер места (через prompt) и записать в переменные firstPlace(введенное место) и в secondPlace следующее ближайшее местов интервале от 20 до 30
// если места выходят за рамки интервала / вывести алерт с предупреждением
// если место зарезервировано(тоесть каждое третее) выводим алерт с текстом 'место забронированно'
// решить задание 2-мя способами: if, switch...case

firstPlace = prompt ('Укажите место которое желаете забронировать?');
    secondPlace = +firstPlace + 1;


    // if (firstPlace >= 20 && firstPlace <= 30){
    //     if(firstPlace % 3 === 0) {
    //         secondPlace = +firstPlace + 1
    //         alert('Место забронировано,свободно следующее место ' + secondPlace);
    //     }else if(firstPlace > MAX_PLACES){
    //         alert('Таких мест нет');
    //     }else {
    //         alert('Ваше место № ' + firstPlace);
    //     }
    // }else if(firstPlace == ''){
    //     alert('Вы не указали место')
    // }else if (firstPlace == null){
    //     alert('Вы отменили!')
    // }else {
    //      alert('WARNING!!!')
    // }

   switch(true){
        case firstPlace == '':
           alert('Вы не выбрали место');
           break;
        case firstPlace == null:
           alert('Вы отменили выбор!');
           break;
        case firstPlace < 20 || firstPlace > 50:
            alert('Предупреждение!!!');
            break;
        case firstPlace % 3 ===0:
            alert('Это место занято! Ваше место ' + secondPlace);
            break;
        default:
            alert('Ваше место ' + firstPlace);
   }
