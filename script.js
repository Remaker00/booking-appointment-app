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

    // Create an object to represent the new person
    var newPerson = {
      name: name,
      email: email,
      number: number
    };
  
    // Save the updated array back to local storage
    localStorage.setItem(email,JSON.stringify (newPerson));
  
    // Clear input fields for the next entry
    document.getElementById('item1').value = '';
    document.getElementById('item2').value = '';
    document.getElementById('item3').value = '';
}

 