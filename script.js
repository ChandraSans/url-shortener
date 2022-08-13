const quoteText = document.querySelector(".hasil"),

quoteBtn = document.querySelector("button"),
inputUrl = document.querySelector("#inputUrl"),
copyBtn = document.querySelector(".copy"),
whatsappBtn = document.querySelector(".whatsapp");


function createUrl(){
    fetch("http://tinyurl.com/api-create.php?url=" + inputUrl.value)
    .then(res => res.text())
    .then(body =>
    {
     quoteText.innerText = body;
    });
}

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

whatsappBtn.addEventListener("click", ()=>{
    let weaUrl = `https://api.whatsapp.com/send?phone=&text=${quoteText.innerText}`;
    window.open(weaUrl, "_blank");
});

quoteBtn.addEventListener("click", createUrl);