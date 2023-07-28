var body = document.getElementById('main');
body.style.width="50%";
body.style.left='24%';
body.style.borderColor="black";

var btn = document.getElementById("button");
btn.style.marginTop ="15px";

var itemlist = document.getElementById('Add item');

var form = document.getElementById('addForm');
// Form submit event
form.addEventListener('submit', addItem);
//Delete Event
itemlist.addEventListener('click',removeitm);
// Add item
function addItem(e){
    e.preventDefault();
    // Get username input value
    var Name = document.getElementById('item1').value;
    // Get email input value
    var email = document.getElementById('item2').value;
    // Get contact number input value
    var number = document.getElementById('item3').value;
    // creating an empty li
    var li = document.createElement('li');
    // Get user's details
    var itms = Name+'-'+email+ '-' +number+' ' ;
    //Append in li 
    li.appendChild(document.createTextNode(itms));

    //Create a delete button
    var delbtn = document.createElement('button');
    //append text node
    delbtn.appendChild(document.createTextNode('DELETE'));
    //add btn to li
    li.appendChild(delbtn);

    //Create a edit button
    var edtbtn = document.createElement('button');
    //append text node
    edtbtn.appendChild(document.createTextNode('EDIT'));
    //add btn to li
    li.appendChild(edtbtn);

    //Append in ul cointaing id-Add items
    itemlist.appendChild(li);

    // Create an object to represent the new person
    var newPerson = {
      name: Name,
      email: email,
      number: number
    };
    
  
    // Save the updated array back to local storage
    localStorage.setItem(email,JSON.stringify (newPerson));
  
    // Clear input fields for the next entry
    document.getElementById('item1').value = '';
    document.getElementById('item2').value = '';
    document.getElementById('item3').value = '';

    edtbtn.addEventListener('click', function(){
      document.getElementById('item1').value = Name;
      document.getElementById('item2').value = email;
      document.getElementById('item3').value = number;
    })
}

  function removeitm(e){
    if(e.target.textContent === 'DELETE' || e.target.textContent === 'EDIT'){
      var li= e.target.parentElement;
      // Get the text content of the li element
      var itemText = li.textContent.trim(); 

      // Extract the email from the text content
      var email = itemText.split('-')[1].trim();
    
      // Remove the item from the local storage
      localStorage.removeItem(email);
      itemlist.removeChild(li);
    }
  }
  
 