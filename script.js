
// Variables
const MENU = document.querySelector(".menu");
const MENU_ITEMS = document.querySelectorAll(".menuItem");
const HAMBURGER = document.querySelector(".hamburger");
const CLOSE_ICON = document.querySelector(".closeIcon");
const MENU_ICON = document.querySelector(".menuIcon");

// Hidden text
function text1(){
    document.getElementById('asikaleTextP').innerText = "We are the most influence in the barber world, with 20.000 establishment around the whole world, if you want to look like Brad Pitt, you know where find us";
}

function text2(){
    document.getElementById('asikaleTextP').innerText = "We have many luxury centers throughout the island, but our main headquarters is in Los Alisios. We'll be waiting for you there";
}


// Hidden images
function firstImage(){
    const IMAGE_SELECTOR = document.getElementById("image-selector");
    IMAGE_SELECTOR.src = "img/cut-1.jpg";
}
function secondImage(){
    const IMAGE_SELECTOR = document.getElementById("image-selector");
    IMAGE_SELECTOR.src = "img/cut-2.jpg";
}
function thirdImage(){
    const IMAGE_SELECTOR = document.getElementById("image-selector");
    IMAGE_SELECTOR.src = "img/cut-3.jpg";
}
function fourthImage(){
    const IMAGE_SELECTOR = document.getElementById("image-selector");
    IMAGE_SELECTOR.src = "img/cut-4.jpg";
}
function fifthImage(){
    const IMAGE_SELECTOR = document.getElementById("image-selector");
    IMAGE_SELECTOR.src = "img/cut-5.jpg";
}

// Hamburger menú
function toggleMenu() {
  if (MENU.classList.contains("showMenu")) {
    MENU.classList.remove("showMenu");
    CLOSE_ICON.style.display = "none";
    MENU_ICON.style.display = "block";
  } else {
    MENU.classList.add("showMenu");
    CLOSE_ICON.style.display = "block";
    MENU_ICON.style.display = "none";
  }
}

HAMBURGER.addEventListener("click", toggleMenu);

MENU_ITEMS.forEach( 
    function(MENU_ITEM) { 
      MENU_ITEM.addEventListener("click", toggleMenu);
    }
  )
  

// Parallax effect
window.onscroll = function(){
  let position = window.scrollY || document.documentElement.scrollTop;

  let elemento = document.getElementById("parallaxEffects");

  elemento.style.top = position * 0.45 + "px";
}

// Reveal Effect
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }


window.addEventListener("scroll", reveal);
  

// form
function validateForm(){
  const EMAIL = document.getElementById("inputEmail").value;
  const NAME = document.getElementById("inputName").value;
  const PHONE = document.getElementById("inputPhone").value;

  if(EMAIL == ""){
    alert("El campo correo es requerido")
    return false;
  } else if(!EMAIL.includes("@")){
    return false;
  }

  if(NAME == ""){
    alert("El nombre es requerido")
    return false;
  } 
  if(PHONE == ""){
    alert("El teléfono es requerido")
    return false;
  } 

  return true;
}

function readData(){
  let listPeople;

  if(localStorage.getItem("listPeople") == null ){
    listPeople = [];
  } else{
    listPeople = JSON.parse(localStorage.getItem("listPeople"))
  }

  let html = "";

  listPeople.forEach(function(element, index){
    html += "<tr>";
    html += "<td>" + element.EMAIL + "</td>";
    html += "<td>" + element.NAME + "</td>";
    html += "<td>" + element.PHONE + "</td>";
    html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Eliminate appointment</button> <button onclick="editData(' + index + ')" class="btn btn-warning">Edit appointment</button></td>';
    html +="</tr>";
  })

  document.querySelector("#tableData").innerHTML = html;
}

document.onload = readData()

function addData(){
  if(validateForm() == true){
    const EMAIL = document.getElementById("inputEmail").value;
    const NAME = document.getElementById("inputName").value;
    const PHONE = document.getElementById("inputPhone").value;

    let listPeople;

    if(localStorage.getItem("listPeople") == null){
      listPeople = []
    } else{
      listPeople = JSON.parse(localStorage.getItem("listPeople"))
    }

    listPeople.push({
      EMAIL: EMAIL,
      NAME: NAME,
      PHONE: PHONE,
    });

    localStorage.setItem('listPeople', JSON.stringify(listPeople));

    readData();

    document.getElementById("inputEmail").value= "";
    document.getElementById("inputName").value= "";
    document.getElementById("inputPhone").value= "";
  }
}

function deleteData(index){
  let listPeople;

  if(localStorage.getItem("listPeople") == null ){
    listPeople = [];
  } else{
    listPeople = JSON.parse(localStorage.getItem("listPeople"))
  }

  listPeople.splice(index, 1);
  localStorage.setItem('listPeople', JSON.stringify(listPeople));

  readData();

}

function editData(index){
  document.getElementById('btnAdd').style.display = "none";
  document.getElementById("btnUpdate").style.direction = "block"

  let listPeople;

  if(localStorage.getItem("listPeople") == null){
    listPeople = []
  } else{
    listPeople = JSON.parse(localStorage.getItem("listPeople"))
  }

  document.getElementById("inputEmail").value = listPeople[index].EMAIL;
  document.getElementById("inputName").value = listPeople[index].NAME;
  document.getElementById("inputPhone").value = listPeople[index].PHONE;

  document.querySelector("#btnUpdate").onclick = function () {
    if (validateForm() == true){
      listPeople[index].EMAIL = document.getElementById("inputEmail").value;
      listPeople[index].PHONE = document.getElementById("inputPhone").value;
      listPeople[index].NAME = document.getElementById("inputName").value;

      localStorage.setItem("listPeople", JSON.stringify(listPeople));
      readData();

      document.getElementById("inputEmail").value = "";
      document.getElementById("inputName").value = "";
      document.getElementById("inputPhone").value = "";

      document.getElementById("btnAdd").style.display = "block";
      document.getElementById("btnUpdate").style.display = "none";
    }
  };
}



