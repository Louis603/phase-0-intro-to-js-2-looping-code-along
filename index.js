let newMsgs = []
//let names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, birthday) {
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${birthday} gift!`;
        newMsgs.push(message);
    
    }
    return newMsgs;
};

function countDown() {
    let countdown = 10;
    while (countdown > -1 ) {
        console.log(countdown--);
    }
};