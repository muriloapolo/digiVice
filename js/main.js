// const url = "https://digimon-api.com/api/v1/digimon/";
const home = document.querySelector(".btn-home");
const next = document.querySelector(".btn-next");
const prev = document.querySelector(".btn-prev");
const digiId = document.querySelector(".digiId");
const digiName = document.querySelector(".digiName");
const tela = document.querySelector(".digi-echo");
// let ind = 0;
let id = 1;

const dataBase = async (digi) => {
  //digiData é o paramentro da API [id Digimon unique id ] [name Digimon's name]

  const data = await fetch(`https://digimon-api.com/api/v1/digimon/${digi}`);
  if (data.status == 200) {
    const dataString = await data.json();
    return dataString;
  }

  // console.log(dataString);
  // digiTela(dataString);
};
const digiConsole = async (digi) => {
  const dataD = await dataBase(digi);
  if (dataD) {
    digiId.innerText = dataD.id;
    digiName.innerText = dataD.name;
    digiTela(dataD);
  }
};

const digiTela = (dataD) => {
  // tela.src = `${dataD.images[0].href}`;
  tela.src = dataD.images[0].href;
};

next.addEventListener("click", () => {
  if (id > 1422) {
    id = 1;
    digiConsole(id);
  }
  id++
  digiConsole(id);

});

prev.addEventListener("click", () => {
  if (id > 1) {
    id--
    digiConsole(id);
  }

});
//RENDER POKE
digiConsole(id);