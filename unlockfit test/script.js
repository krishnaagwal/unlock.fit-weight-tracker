var weightUnit = 'kg'; // Default weight unit is kilograms

document.getElementById('weightForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get user inputs
    var name = document.getElementById('nameInput').value;
    var weight = document.getElementById('weightInput').value;
    var height = document.getElementById('heightInput').value;
    var date = document.getElementById('dateInput').value;

    // Convert weight to kg if the unit is pounds
    if (weightUnit === 'lbs') {
      weight = poundsToKilograms(weight);
    }

  
    // Create table row
    var tableRow = document.createElement('tr');
  
    // Create and populate table cells
    var nameCell = document.createElement('td');
    nameCell.textContent = name;
    tableRow.appendChild(nameCell);

    var dateCell = document.createElement('td');
    dateCell.textContent = date;
    tableRow.appendChild(dateCell);
  
    var idealWeightCell = document.createElement('td');
    idealWeightCell.textContent = getIdealWeight(height); // Example function, replace with your logic
    tableRow.appendChild(idealWeightCell);
  
    var currentWeightCell = document.createElement('td');
    currentWeightCell.textContent = weight;
    tableRow.appendChild(currentWeightCell);
  
    // Determine weight status and apply color coding
    var weightStatus = getWeightStatus(weight, idealWeightCell.textContent);
    tableRow.classList.add(weightStatus);
  
    // Append table row to the weight table
    var weightTable = document.getElementById('weightTable');
    weightTable.appendChild(tableRow);
  
    // Clear input fields
    document.getElementById('nameInput').value = '';
    document.getElementById('weightInput').value = '';
    document.getElementById('heightInput').value = '';
    document.getElementById('dateInput').value = '';
});

    document.getElementById('unitToggle').addEventListener('change', function(event) {
    weightUnit = event.target.value;
    });
  
    function poundsToKilograms(pounds) {
        // Example conversion, replace with your logic
        var kilograms = pounds * 0.453592;
        return kilograms.toFixed(2);
    }
      

  function getIdealWeight(height) {
    // Example calculation, replace with your logic
    // This is just a placeholder to showcase the concept
    var idealWeight = (height - 100) * 0.9;
    return idealWeight.toFixed(2);
  }
  
  function getWeightStatus(currentWeight, idealWeight) {
    var weightDifference = currentWeight - idealWeight;
    if (weightDifference > 5) {
      return 'red';
    } else if (weightDifference < -5) {
      return 'orange';
    } else {
      return 'green';
    }
  }

  window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('transparent');
    } else {
      header.classList.remove('transparent');
    }
  });