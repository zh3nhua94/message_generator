function genRandonNum(length) {
    return Math.floor(Math.random() * length);
}

const messageArray = {
    sign: ['tree', 'energy', 'galaxy'],
    mood: ['happy', 'peace', 'calm', 'excited'],
    luck: ['good luck', 'full of joy all day', 'you will encounter great things', 'neutral', 'tomorrow will be better'],
}

let genWisdom = [];

for (let prop in messageArray) {
    let arrayLength = messageArray[prop].length;
    let randomMessage = genRandonNum(arrayLength);
    
    switch (prop) {
        case 'sign':
            genWisdom.push('Your sign is: ' + messageArray[prop][randomMessage]);
            break;

        case 'mood':
            genWisdom.push('Your mood will be: ' + messageArray[prop][randomMessage]);
            break;
''
        case 'luck':
            genWisdom.push('Your luck today is: ' + messageArray[prop][randomMessage]);
            break;

        default:
            genWisdom.push('Missing info');
    }
}

function showWisdom(arr) {
    return console.log(arr.join('\n'));
}

showWisdom(genWisdom);