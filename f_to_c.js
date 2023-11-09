function converttoCelsius(farenheight){
    const celsius = (farenheight - 32) / 1.8;
    return Math.round(celsius);
}


function createMessage(farenheight,celsius){
    return `You entered ${farenheight} farenheight. Thats equal to ${celsius} celsius.`;
 
}

const inputFarenheight = window.prompt('What is the temperature in Farenheight');

const convertedCelius = converttoCelsius(inputFarenheight);

console.log(createMessage(inputFarenheight, convertedCelius));

/* after you get the initial conversion working, use a if statement to tell us whether its hot or cold*/

if (inputFarenheight < 44.8 ){
    console.log("It is cold");
} else if (inputFarenheight > 44.8 && inputFarenheight < 79.1){
    console.log("It is nice outside");
} else if (inputFarenheight > 79.9){
    console.log("it is hot");
}

