// const url = "https://digimon-api.com/api/v1/digimon/";
// const home = document.querySelector(".btn-home");
// const next = document.querySelector(".btn-next");
// const prev = document.querySelector(".btn-prev");
// const digiId = document.querySelector(".digiId");
// const digiName = document.querySelector(".digiName");
// const tela = document.querySelector(".digi-echo");
// let ind = 0;
// let id = 1;
const dataBase = async (digi) => {
  //digiData é o paramentro da API [id Digimon unique id ] [name Digimon's name]
  const data = await fetch(`https://digimon-api.com/api/v1/digimon/${digi}`);
  if (data.status == 200) {
    const dataString = await data.json();
    return dataString;
  }
};
class Digivice {
  constructor(dataBase) {
    this.ind = 1;
    this.digiId = dataBase.id;
    this.digiName = dataBase.name;
  }

  //Gera Botões
  buttons() {
    const home = document.querySelector(".btn-home");
    const next = document.querySelector(".btn-next");
    const prev = document.querySelector(".btn-prev");
    this.listeners(next, prev, home);
  }
  //Textos e Imagem
  display() {
    const digiId = document.querySelector(".digiId");
    const digiName = document.querySelector(".digiName");
    const tela = document.querySelector(".digi-echo");
    this.digiConsole(this.ind,digiId, digiName,tela);
    
  }
  listeners(next, prev, home) {
    //NEXT
    next.addEventListener("click", () => {    
      if (this.ind > 1422) {
        this.ind = 1;
        // this.digiConsole(this.ind);
        this.display()
       
      }
      this.ind++;
      // this.digiConsole(this.ind);
      this.display()
    });
    // PREV
    prev.addEventListener("click", () => {
    
      if (this.ind > 1) {
        this.ind--;
        // this.digiConsole(this.ind);
        this.display()
      }
    });
  }
  async digiConsole(digi,digiId,digiName,tela) {
    
    let dataD = await dataBase(digi);
    if (dataD) {
      digiId.innerText = dataD.id;
      digiName.innerText = dataD.name;
      tela.src = dataD.images[0].href;
    
    }
  }
}

const newDigivice = new Digivice(dataBase);
newDigivice.buttons();
newDigivice.display();


if (!localStorage.getItem("cookiesAccepted")) { 
  var cookieMessage = document.getElementById('cookie-notification');  
  var closeCookie = document.getElementById('cookie-notification-close');
  
  cookieMessage.style.display = 'block';  
  closeCookie.addEventListener("click", function(e) {  
    e.preventDefault();
    localStorage.setItem("cookiesAccepted", true);
    
    cookieMessage.style.display = 'none';
  });
}
