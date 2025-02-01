const btn = document.querySelector('#generate-btn');
const input = document.querySelector('#url-input');
const img = document.querySelector('#img');

btn.addEventListener('click', () => {
    if (input.value == "") {
        alert("Please enter any text or URL");
        img.innerHTML = `<img src="Screenshot 2024-03-19 145526.png" height="100px" width="100px">`;
    } else {
        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input.value)}`)
            .then(response => {
                return response.blob();
            })
            .then(blob => {
                const objectUrl = URL.createObjectURL(blob);
                img.innerHTML = `<img src="${objectUrl}" height="150px" width="150px">`;
            });

        alert("QR Generated");
    }
});
