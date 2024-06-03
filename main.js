const prop=document.getElementById("Prompt");

function ActionProp(){
    prop.classList.add('Visible')
}


document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('.SectionPassword input');
    
    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1) {
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                } else {
                    validateInputs();
                }
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value.length === 0) {
                const prevInput = inputs[index - 1];
                if (prevInput) {
                    prevInput.focus();
                }
            }
        });
    });

    function validateInputs() {
        const inp1 = document.getElementById('inp1').value;
        const inp2 = document.getElementById('inp2').value;
        const inp3 = document.getElementById('inp3').value;

        const inputValue = inp1 + inp2 + inp3;
        const expectedValue = "202";  // Aquí pones el valor esperado

        if (inputValue === expectedValue) {
            window.location.href = "202.html";

        } else {
           return
        }
    }
});