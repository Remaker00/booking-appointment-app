var itemlist = document.getElementById('Add item');
var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);
itemlist.addEventListener('click',removeitm);

function addItem(e){
    e.preventDefault();
    var amnt = document.getElementById('item1').value;
    var descrip = document.getElementById('item2').value;
    var categ = document.getElementById('item3').value;

    var li = document.createElement('li');
    var itms = amnt+'-'+descrip+ '-' +categ+' ' ;
    li.appendChild(document.createTextNode(itms));

    var delbtn = document.createElement('button');
    delbtn.appendChild(document.createTextNode('Delete Expense'));
    li.appendChild(delbtn);

    var edtbtn = document.createElement('button');
    edtbtn.appendChild(document.createTextNode('Edit Expense'));
    li.appendChild(edtbtn);

    itemlist.appendChild(li);

    var exp = {
      amnt: amnt,
      descrip: descrip,
      categ: categ
    };
    
    axios.post("https://crudcrud.com/api/b5835a91e64b4134bdef72b51e5cea62/appointmentData", exp)
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })

    //localStorage.setItem(descrip,JSON.stringify (exp));
    
  
    document.getElementById('item1').value = '';
    document.getElementById('item2').value = '';
    document.getElementById('item3').value = '';

    edtbtn.addEventListener('click', function(){
      document.getElementById('item1').value = amnt;
      document.getElementById('item2').value = descrip;
      document.getElementById('item3').value = categ;
    })
}
window.addEventListener("DOMContentLoaded", () => {
  axios.get("https://crudcrud.com/api/b5835a91e64b4134bdef72b51e5cea62/appointmentData")
  .then((response) => {
    console.log(response);
    response.data.forEach((appointment) => {
      var li = document.createElement('li');
      var itms = appointment.amnt + '-' + appointment.descrip + '-' + appointment.categ + ' ';
      li.appendChild(document.createTextNode(itms));

      var delbtn = document.createElement('button');
      delbtn.appendChild(document.createTextNode('Delete Expense'));
      li.appendChild(delbtn);

      var edtbtn = document.createElement('button');
      edtbtn.appendChild(document.createTextNode('Edit Expense'));
      li.appendChild(edtbtn);

      itemlist.appendChild(li);
    });
  })
  .catch((err) => {
    console.log(err);
  });
    
  })

function removeitm(e){
  if(e.target.textContent === 'Delete Expense' || e.target.textContent === 'Edit Expense'){
     var li= e.target.parentElement;
     var itemText = li.textContent.trim(); 
     var email = itemText.split('-')[1].trim();
     localStorage.removeItem(email);
     itemlist.removeChild(li);
  }
}
  
 