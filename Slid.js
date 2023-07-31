let degreeInput = document.getElementById('Degree');
let degreeValue = document.getElementById('degreeValue');

degreeInput.addEventListener('input', function() {
    degreeValue.textContent = degreeInput.value;
});