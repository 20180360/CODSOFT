const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {

            string = '';
            resultInput.value = '';
        } else if (value === '=') {

            try {
                const result = eval(string);
                resultInput.value = result;
                expression = result.toString();
            } catch (error) {
                resultInput.value = 'Error';
                string = '';
            }
        } else if (value === 'DE') {
            string = string.substring(0, string.length - 1);
            resultInput.value = string;
        }
        else {
            string += value;
            resultInput.value = string;
        }
    });
});


