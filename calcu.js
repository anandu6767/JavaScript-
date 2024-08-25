let displayElement = document.getElementById("display");
        let currentInput = "";

        function appendDigit(digit) {
            if (currentInput === "0" && digit !== ".") {
                currentInput = digit;
            } else {
                currentInput += digit;
            }
            updateDisplay();
        }

        function appendOperator(operator) {
            if (currentInput === "" && operator !== "-") return;
            if (isOperator(currentInput.slice(-1))) {
                currentInput = currentInput.slice(0, -1);
            }
            currentInput += operator;
            updateDisplay();
        }

        function appendDot() {
            if (currentInput === "") {
                currentInput = "0.";
            } else if (!currentInput.includes(".")) {
                currentInput += ".";
            }
            updateDisplay();
        }

        function clearDisplay() {
            currentInput = "";
            updateDisplay();
        }

        function deleteDigit() {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }

        function calculateResult() {
            try {
                currentInput = eval(currentInput).toString();
            } catch (e) {
                currentInput = "Error";
            }
            updateDisplay();
        }

        function updateDisplay() {
            displayElement.textContent = currentInput || "0";
        }

        function isOperator(character) {
            return ["+", "-", "*", "/"].includes(character);
        }