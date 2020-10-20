export const toWeekDay = (data) =>{
    const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    const day = new Date(data);
    return days[day.getDay()]
};
export const toDayPlusMonth = (data) =>{
    const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая' ,'Июня' ,'Июля' ,'Августа',
        'Сентября', 'Октября' ,'Ноября', 'Декабря'];
    const day = new Date(data);
    const monthDay = day.getDate();
    const monthName = month[day.getMonth()];
    return `${monthDay} ${monthName}`;
}