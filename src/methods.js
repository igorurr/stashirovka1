var DateToMonthYear = function(timestamp) {
    var now = new Date();
    var timestampDate = new Date(timestamp);

    const yearPath = (now.getYear() !== timestampDate.getYear()) ? 1900+timestampDate.getYear() : "";

    const month = timestampDate.getMonth();
    var monthPath = '';
    switch (month) {
        case 0:
            monthPath = 'Январь';
            break;
        case 1:
            monthPath =  'Февраль';
            break;
        case 2:
            monthPath =  'Март';
            break;
        case 3:
            monthPath =  'Апрель';
            break;
        case 4:
            monthPath =  'Май';
            break;
        case 5:
            monthPath =  'Июнь';
            break;
        case 6:
            monthPath =  'Июль';
            break;
        case 7:
            monthPath =  'Август';
            break;
        case 8:
            monthPath =  'Сентябрь';
            break;
        case 9:
            monthPath =  'Октябрь';
            break;
        case 10:
            monthPath =  'Ноябрь';
            break;
        case 11:
            monthPath =  'Декабрь';
            break;
    }

    return monthPath + ' ' + yearPath;
}

var DateToDayMonthYear = function(timestamp) {
    var timestampDate = new Date(timestamp);

    return timestampDate.getDay() + ' ' + DateToMonthYear(timestamp);
}

var DateToDayMonthYear = function(timestamp) {
    var timestampDate = new Date(timestamp);

    return timestampDate.getDay() + ' ' + DateToMonthYear(timestamp);
}

export { DateToMonthYear, DateToDayMonthYear }