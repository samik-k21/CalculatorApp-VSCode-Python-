function calculate(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;

    fetch('http://localhost:3000/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num1, num2, operation })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = data.result ?? data.error;
    })
}