var body = document.getElementById('main');
body.style.width="50%";
body.style.left='24%';
body.style.borderColor="black";

var btn = document.getElementById("button");
btn.style.marginTop ="15px";

var form = document.getElementById('addForm');
// Form submit event
form.addEventListener('submit', addItem);
// Add item
function addItem(e){
    e.preventDefault();
    // Get username input value
    var name = document.getElementById('item1').value;
    // Get email input value
    var email = document.getElementById('item2').value;
    // Get contact number input value
    var number = document.getElementById('item3').value;
    // Check if there is existing data in local storage
    var existingData = localStorage.getItem('personsData');

    // If no data exists, create an empty string
    var personsData = existingData ? existingData : '';

    // Add the new person's information to the string
    var newPerson = name + ';' + email + ';' + number ;
    personsData += newPerson;
  
    // Save the updated array back to local storage
    localStorage.setItem('personsData',personsData);

}     