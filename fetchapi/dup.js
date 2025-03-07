async function fetchdata(){
    try{
const response= await fetch('https://fake-json-api.mock.beeceptor.com/users');
const data=  await response.json();
     transfer(data);
     return array;
}
    catch(error){
        console.error('Error:', error);

    }
}

let array;

function transfer(data) {
    array = data.map(element => {
        return {
            image: element.photo,
            userName: element.name,
            email: element.email,
            phone: element.phone
        };
    });
}

const cardContainer = document.getElementById("cardscont");
    function displayDetails(array)
    {
        
        
          array.forEach(element=>{

            let  card = document.createElement("div");
            card.classList.add("card");
    
            let  img = document.createElement("img");
            img.classList.add("displayImage");
            img.src = element.image;
    
            let  name = document.createElement("p");
            name.classList.add("displayName");
            name.innerText = element.userName;
    
            let  phone = document.createElement("p");
            phone.classList.add("displayPhone");
            phone.innerText = element.phone;
            
    
            let email = document.createElement("p");
            email.classList.add("displayEmail");
            email.innerText = element.email;
    
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(phone);
            card.appendChild(email);
            cardContainer.appendChild(card);
           
            hover(card,phone,email,name);
           
          
          });
          
     }
     function hover(card,phone,email,name)
     { 
       
        array.forEach(element=>{

        card.addEventListener("mouseover", () => {
            name.style.display = "block";
            phone.style.display = "block";
            email.style.display = "block";
        });
        card.addEventListener("mouseout", () => {
            name.style.display = "none";
            phone.style.display = "none";
            email.style.display = "none";
            
        });
    });
    
     }
//  function hover(){
//     const cards = document.getElementsByClassName('card');
//     const displayName = document.getElementsByClassName('displayName');
//     const displayEmail = document.getElementsByClassName('displayEmail');
//     const displayPhone = document.getElementsByClassName('displayPhone');
//     cards.addEventListener('mouseover', () => {
//         displayPhone.style.display="block";
//       });
//  }
fetchdata()
.then(array=>{displayDetails(array);

    // document.getElementsByClassName("card")[0].addEventListener("mouseover",mouseOver);
})
.catch(error=>console.error("error:",error));

// function mouseOver(){
//     document.getElementsByClassName("displayEmail").style.display="block";
// }