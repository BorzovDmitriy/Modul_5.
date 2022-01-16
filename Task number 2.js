let x = 123;
switch (typeof x) {
    case 'number':
        console.log('Х - это число.');
    break;
    case 'string':
        console.log('Х - это строка.');
    break;
    case 'boolean':
        console.log('Х - это логический тип.');
    break;
    default:
        console.log('Тип x не определён.');
}