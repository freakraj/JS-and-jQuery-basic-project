let outputScreen = document.getElementById('output');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        // console.log("button text is ",buttonText);
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value += screenValue;
        }else if(buttonText=='C'){
            screenValue = "";
            screen.value = screenValue;
            
        }else if(buttonText == '='){
            screen.value = eval(screenValue);

        }else if(buttonText == '/'){
            screenValue += buttonText;
            screen.value += screenValue;

        }else if(buttonText == '-'){
            screenValue += buttonText;
            screen.value += screenValue;


        }else if(buttonText == '+'){
            screenValue += buttonText;
            screen.value += screenValue;
        }
        else{
            screenValue +=buttonText;
            screen.value = screenValue;
        };

    });

};







