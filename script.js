const btn = document.querySelector('button');
const input = document.querySelector('input');
const img = document.querySelector('#img');

btn.addEventListener('click', ()=>{

    if(input.value == ""){
        alert("Please enter any text or Url"); 
        img.innerHTML = `<img src="Screenshot 2024-03-19 145526.png" height="100px" width="100px">`; 
    }
    else{
       fetch(` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="${input.value}"`)
    .then(response=>{
        return response.blob();
    })
    .then(blob=>{
        const ObjectUrl = URL.createObjectURL(blob);
        img.innerHTML = `<img src="${ObjectUrl}" height="100px" width="100px">`;
        }); 
        alert("QR Generated");
        }
        
        
})