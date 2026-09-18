$(document).ready(function () {

    const form = document.getElementById('calc-form');
    const leftInput = document.getElementById('left');
    const rightInput = document.getElementById('right');
    const operatorSelect = document.getElementById('operator');


      function isPositiveInteger(value) {
            return /^[0-9]+$/.test(value);
        }

        function calculate(left, operator, right) {
            switch (operator) {
                case '+':
                    return left + right;
                case '-':
                    return left - right;
                case '*':
                    return left * right;
                case '/':
                    return left / right;
                case '%':
                    return left % right;
            }
        }

        $(form).submit(function (e) {
            e.preventDefault();

            const leftValue = leftInput.value.trim();
            const rightValue = rightInput.value.trim();
            const operator = operatorSelect.value;

            if (!isPositiveInteger(leftValue) || !isPositiveInteger(rightValue)) {
               alert('Error :(');
                return;
            }

            const left = parseInt(leftValue, 10);
            const right = parseInt(rightValue, 10);

           if ((operator === '/' || operator === '%') && right === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }

            const result = calculate(left, operator, right);

            alert(result);
            console.log(result);
        });

        setInterval(() => {
            alert('Please, use me...');
        }, 30000);
});