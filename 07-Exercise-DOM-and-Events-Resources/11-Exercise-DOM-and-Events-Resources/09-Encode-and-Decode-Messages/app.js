function encodeAndDecodeMessages() { 
    const mainDiv = document.getElementById('main');// get the main div
    const buttons = mainDiv.querySelectorAll('button');// get all buttons
    const textAreas = mainDiv.querySelectorAll('textarea'); // get all text areas

    buttons[0].addEventListener('click', encode); // add event listener to the first button
    buttons[1].addEventListener('click', decode);

    function encode() { // encode function
        const message = textAreas[0].value; // get the message from the first text area
        const encodedMessage = message.split('').map((char) => { // split the message and map each character
            return String.fromCharCode(char.charCodeAt(0) + 1); // return the character code of the character + 1
        }).join('');// join the characters
        textAreas[0].value = '';// clear the first text area
        textAreas[1].value = encodedMessage;// set the value of the second text area to the encoded message
    }

    function decode() {// decode function
        const encodedMessage = textAreas[1].value;// get the encoded message from the second text area
        const message = encodedMessage.split('').map((char) => {// split the encoded message and map each character
            return String.fromCharCode(char.charCodeAt(0) - 1);// return the character code of the character - 1
        }).join('');// join the characters
        textAreas[1].value = message;// set the value of the second text area to the decoded message
    }
}