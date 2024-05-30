document.getElementById('calculateBtn').addEventListener('click', function() {
    fetch('http://localhost:5000/numbers/e')
        .then(response => response.json())
        .then(data => {
            let output = document.getElementById('output');
            output.innerHTML = `
                <p>Previous State: ${data.windowPrevState.join(', ')}</p>
                <p>Current State: ${data.windowCurrState.join(', ')}</p>
                <p>Numbers: ${data.numbers.join(', ')}</p>
                <p>Average: ${data.avg.toFixed(2)}</p>
            `;
        })
        .catch(error => console.error('Error:', error));
});
