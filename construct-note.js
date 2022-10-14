// add whatever parameters you deem necessary
function constructNote(messages, letter) {
    const letters = {};
    const msg = {};

    for (let char of letter){
        letters[char] = ++letters[char] || 1;
    }

    for(let char of messages){
        msg[char] = ++msg[char] || 1;
    }

    for (let char in msg){
        if(!letters[char]){
            return false;
        }
        if (msg[char] > letters[char]){
            return false
        }
    }

    return true;
}
