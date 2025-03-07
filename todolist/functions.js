import { arr } from "./todo.js";


function getvalue(event) {
   
    const input = document.getElementById("input");
    const para = document.createElement("li");
    const dis = document.getElementById("tableContent");
    arr.push(input.value);
    

    if (input.value) {
        display(arr, para, dis);
    }
    input.value = '';
}


function display(arr, para, dis) {
    arr.forEach((element, index) => {
        let values = arr[index];
        para.innerText = values;
        dis.appendChild(para);
    });

}


function clear(){
  
   const list= document.getElementById('tableContent');
   while(list.hasChildNodes())
    {
   list.removeChild(list.firstChild);
    }
}

function checknum(){
    let checkValues=Number(document.getElementById('input').value)
     let num=/[0-9]/g;
   if(num.test(checkValues)){
    
    alert("Number")
    document.getElementById('input').value=null;
     }     
    else
    {
        document.getElementById('submitBtn').addEventListener('click', getvalue);
    }
}

document.getElementById('input').addEventListener('change',checknum);
document.getElementById('clearBtn').addEventListener('click', clear);