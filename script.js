const resultData = document.querySelector(".hasil");
    let copyBtn = document.querySelector(".copy");
    let whatsappBtn = document.querySelector(".whatsapp");
    
    function createUrl() {
      let url = "http://tinyurl.com/api-create.php?url=";
      let data = document.getElementById("inputUrl");
      let input = data.value;
      fetch(url + input)
      .then((response) => response.text())
      .then((hasil) => { 
        // console.log(hasil); 
          resultData.innerHTML = hasil;
      });
    }
    
    
    copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(resultData.innerHTML);
    });
  
    whatsappBtn.addEventListener("click", ()=>{
    let weaUrl = `https://api.whatsapp.com/send?phone=&text=${resultData.innerHTML}`;
    window.open(weaUrl, "_blank");
    });