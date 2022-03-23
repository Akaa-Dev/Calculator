const buttons = document.querySelector('.all-buttons');
const operator = document.getElementById('sign-dsp');
const display = document.getElementById('main-dsp');
const numberDisplayRight = document.getElementById('num-dsp-right');
const numberDisplayLeft = document.getElementById('num-dsp-left');
const secDisp = document.getElementById('sec-dsp');
const historyBtn = document.getElementById('history');
const historyPanel = document.querySelector('history-panel');
let operatorIsDefined = false;
let operation = 'calculation';
let processed = false;
let backSpace = document.getElementById('backspace');


buttons.addEventListener('click', (event) => {
    switch (event.target.id) {
        case 'clear':
            numberDisplayRight.innerText = '';
            numberDisplayLeft.innerText = '';
            operator.innerText = '';
            operatorIsDefined = false;
            processed = false;
            break;
        case 'bracket':
            operator.innerText = '';
            break;
        case 'percent':
            operator.innerText = '%';
            operation = 'percent';
            operatorIsDefined = true;
            processed = false;
            break;

        case 'division':
            if (numberDisplayLeft.textContent != '') {
                operator.innerHTML = '<i class="fa-regular fa-divide"></i>';
                operatorIsDefined = true;
                operation = 'divide';
                processed = false;
            }
            break;
        case 'seven':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.') {
                numberDisplayLeft.innerText = '7';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '7';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '7';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '7';
                    } else {
                        numberDisplayRight.innerText += '7';
                    }
                }
            } else {
                numberDisplayLeft.innerText = '7';
                processed = false;
            }
            break;
        case 'eight':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.') {
                numberDisplayLeft.innerText = '8';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '8';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '8';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '8';
                    } else {
                        numberDisplayRight.innerText += '8';
                    }
                }
            } else {
                numberDisplayLeft.innerText = '8';
                processed = false;
            }
            break;
        case 'nine':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.') {
                numberDisplayLeft.innerText = '9';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '9';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '9';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '9';
                    } else {
                        numberDisplayRight.innerText += '9';
                    }
                }
            } else {
                numberDisplayLeft.innerText = '9';
                processed = false;
            }
            break;

        case 'multiply':
            if (numberDisplayLeft.textContent != '') {
                operator.innerHTML = '<i class="fa-regular fa-xmark"></i>';
                operatorIsDefined = true;
                operation = 'multiply';
                processed = false;
            }
            break;

        case 'four':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.') {
                numberDisplayLeft.innerText = '4';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '4';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '4';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '4';
                    } else {
                        numberDisplayRight.innerText += '4';
                    }
                }
            } else {
                numberDisplayLeft.innerText = '4';
                processed = false;
            }
            break;

        case 'five':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.') {
                numberDisplayLeft.innerText = '5';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '5';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '5';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '5';
                    } else {
                        numberDisplayRight.innerText += '5';
                    }
                }
            } else {
                numberDisplayLeft.innerText = '5';
                processed = false;
            }
            break;

        case 'six':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.') {
                numberDisplayLeft.innerText = '6';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '6';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '6';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '6';
                    } else {
                        numberDisplayRight.innerText += '6';
                    }
                }
            } else {
                numberDisplayLeft.innerText = '6';
                processed = false;
            }
            break;

        case 'substract':
            if (numberDisplayLeft.textContent != '') {
                operator.innerHTML = '<i class="fa-regular fa-minus">';
                operatorIsDefined = true;
                processed = false;
                operation = 'substract';
            }
            break;

        case 'one':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.') {
                numberDisplayLeft.innerText = '1';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '1';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '1';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '1';
                    } else {
                        numberDisplayRight.innerText += '1';
                    }
                }
            } else {
                numberDisplayLeft.innerText = '1';
                processed = false;
            }
            break;

        case 'two':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.') {
                numberDisplayLeft.innerText = '2';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '2';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '2';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '2';
                    } else {
                        numberDisplayRight.innerText += '2';
                    }

                }
            } else {
                numberDisplayLeft.innerText = '2';
                processed = false;
            }
            break;

        case 'three':
            if (numberDisplayLeft.innerText[0] == '0' && numberDisplayLeft.innerText[1] != '.') {
                numberDisplayLeft.innerText = '3';
            } else if (numberDisplayRight.innerText[0] == '0' && numberDisplayRight.innerText[1] != '.') {
                numberDisplayRight.innerText = '3';
            } else if (!processed) {
                if (!operatorIsDefined) {
                    numberDisplayLeft.innerText += '3';
                } else {
                    if (operation == 'percent') {
                        operator.innerHTML = '% <i class="fa-regular fa-xmark"></i> ';
                        numberDisplayRight.innerText += '3';
                    } else {
                        numberDisplayRight.innerText += '3';
                    }
                }
            } else {
                numberDisplayLeft.innerText = '3';
                processed = false;
            }
            break;

        case 'add':
            if (numberDisplayLeft.textContent != '') {
                operator.innerHTML = '<i class="fa-regular fa-plus"></i>';
                operatorIsDefined = true;
                processed = false;
                operation = 'add';
            }
            break;

        case 'p_minus':
            operator.innerHTML = '';
            break;

        case 'zero':
            if (!processed) {
                if (!operatorIsDefined && numberDisplayLeft.innerText[0] != 0) {
                    numberDisplayLeft.innerText += '0';
                } else if (operatorIsDefined == true && numberDisplayRight.innerText[0] != 0) {
                    numberDisplayRight.innerText += '0';
                }
            } else {
                numberDisplayLeft.innerText = '0';
                processed = false;
            }
            break;

        case 'dot':
            if (!processed) {
                if (!operatorIsDefined) {
                    if (numberDisplayLeft.textContent == '') {
                        numberDisplayLeft.innerText = '0.';
                    } else {
                        for (let i = 0; i < numberDisplayLeft.innerText.length; i++) {
                            if (numberDisplayLeft.innerText.includes(".") == false) {
                                numberDisplayLeft.innerText += '.';
                            }
                        }
                    }

                } else {
                    if (numberDisplayRight.textContent == '') {
                        numberDisplayRight.innerText = '0.';
                    } else {
                        for (let i = 0; i < numberDisplayRight.innerText.length; i++) {
                            if (numberDisplayRight.innerText.includes(".") == false) {
                                numberDisplayRight.innerText += '.';
                            }
                        }
                    }
                }
            } else {
                numberDisplayLeft.innerText = '0.';
                processed = false;
            }
            break;

        case 'equals':
            if((operation != 'percent' && numberDisplayRight.innerText =='') || numberDisplayLeft.innerText ==''){
                numberDisplayLeft.innerText = numberDisplayLeft.innerText;
            }else{
                let result = (calculator(operation, numberDisplayLeft, numberDisplayRight)).toPrecision(10);
                numberDisplayRight.innerText = '';
                numberDisplayLeft.innerText = parseFloat(result).toPrecision();
                operator.innerText = '';
                operatorIsDefined = false;
                processed = true;
            }
            
            break;
    }

});

let calculator = (operation, numberDisplayLeft, numberDisplayRight) => {
    let result = 0;
    switch (operation) {
        case 'add':
            result = parseFloat(numberDisplayLeft.innerText) + parseFloat(numberDisplayRight.innerText);
            break;

        case 'substract':
            result = parseFloat(numberDisplayLeft.innerText) - parseFloat(numberDisplayRight.innerText);
            break;

        case 'multiply':
            result = (parseFloat(numberDisplayLeft.innerText) * parseFloat(numberDisplayRight.innerText));
            break;

        case 'divide':
            result = parseFloat(numberDisplayLeft.innerText) / parseFloat(numberDisplayRight.innerText);
            break;

        case 'percent':
            if (numberDisplayRight.innerText == '') {
                result = parseFloat(numberDisplayLeft.innerText) / 100;
            } else {
                result = (parseFloat(numberDisplayLeft.innerText) / 100) * parseFloat(numberDisplayRight.innerText);
            }
            break;
        default:
            result = parseFloat(numberDisplayLeft.innerText);
            break;
    }
    return result;
}
backSpace.addEventListener('click', () => {
    let inputed = '';
    let updated = '';
    if (!operatorIsDefined) {
        inputed = numberDisplayLeft.innerText.split('');
        inputed.pop();
        updated = inputed.join('');
        numberDisplayLeft.innerText = updated;
    } else {
        if (numberDisplayRight.textContent == '') {
            if (operator.innerHTML == '% <i class="fa-regular fa-xmark"></i> ') {
                operator.innerHTML = '%';
            } else {
                operator.innerHTML = '';
                operatorIsDefined = false;
            }
        } else {
            inputed = numberDisplayRight.innerText.split('');
            inputed.pop();
            updated = inputed.join('');
            numberDisplayRight.innerText = updated;
        }

    }
    processed =false;
});

historyBtn.addEventListener('click',()=>{
    
    if(historyBtn.innerHTML == '<i class="fa-2x fa-solid fa-calculator"></i>'){
   historyBtn.innerHTML = '<i class="fa-2x fa-solid fa-clock-rotate-left"></i>';
   }else{
    historyBtn.innerHTML = '<i class="fa-2x fa-solid fa-calculator"></i>';
   // historyPanel.= 'block';
   }
})