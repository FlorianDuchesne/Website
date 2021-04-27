var chewinggum = false;
var vautourKO = false;
var triche = false;
document.querySelector("#inventaire").innerHTML =
  "<li>Spray anti-requins (une dose)</li><li>Super soda (une bouteille)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";

document.querySelector("#modeTriche").addEventListener("click", function () {
  document.querySelector("#modeTriche").innerHTML =
    "<a href='lecture.html'>Désactiver mode Triche</a>";
  triche = true;
  document.querySelector("main").classList.add("mainTriche");
  document.querySelector("footer").classList.add("footerTriche");
  document.querySelectorAll(".clic").forEach((item) => {
    item.parentElement.parentElement.classList.remove("hidden");
    item.parentElement.parentElement.classList.add("triche");
  });
});

document.querySelectorAll(".clic").forEach((item) => {
  item.addEventListener("click", function (event) {
    if (triche === false) {
      event.preventDefault();
      this.parentElement.parentElement.classList.add("hidden");
    }
    console.log(this);
    // this.href.
    if (this.hash === "#planche1") {
      chewinggum = false;
      console.log(chewinggum);
      vautourKO = false;
      console.log(vautourKO);
      document.querySelector("#inventaire").innerHTML =
        "<li>Spray anti-requins (une dose)</li><li>Super soda (une bouteille)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";
    }
    if (this.parentElement.parentElement.id === "planche12") {
      chewinggum = true;
      console.log(chewinggum);
      document.querySelector("#inventaire").innerHTML += "<li>Chewing-gum</li>";
    }
    if (this.hash === "#planche6") {
      vautourKO = true;
      console.log(vautourKO);
      document.querySelector("#inventaire").innerHTML =
        "<li>Spray anti-requins : zéro dose !</li><li>Super soda (une bouteille)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";
      // if (chewinggum === true) {
      //   document.querySelector("#inventaire").innerHTML +=
      //     "<li>Chewing-gum</li>";
      // }
    }
    if (this.hash === "#planche20") {
      if (vautourKO === true) {
        document.querySelector("#inventaire").innerHTML =
          "<li>Spray anti-requins : zéro dose !</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";
      } else {
        document.querySelector("#inventaire").innerHTML =
          "<li>Spray anti-requins (une dose)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";
      }
      if (chewinggum === true) {
        document.querySelector("#inventaire").innerHTML +=
          "<li>Chewing-gum</li>";
      }
    }

    if (this.hash === "#planche35") {
      document.querySelector("#inventaire").innerHTML =
        "<li>Spray anti-requins : zéro dose !</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";
      if (chewinggum === true) {
        document.querySelector("#inventaire").innerHTML +=
          "<li>Chewing-gum</li>";
      }
    }

    if (this.hash === "#planche43") {
      document.querySelector("#inventaire").innerHTML =
        "<li>Spray anti-requins : zéro dose !</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";
    }

    if (this.parentElement.parentElement.id === "planche17") {
      if (vautourKO === true) {
        document.querySelector("#planche18").classList.remove("hidden");
      } else {
        document.querySelector("#planche26").classList.remove("hidden");
      }
    } else if (this.parentElement.parentElement.id === "planche33") {
      if (vautourKO === true) {
        document.querySelector("#planche34").classList.remove("hidden");
      } else {
        document.querySelector("#planche35").classList.remove("hidden");
      }
    } else if (this.parentElement.parentElement.id === "planche41") {
      if (chewinggum === true) {
        document.querySelector("#planche43").classList.remove("hidden");
      } else {
        document.querySelector("#planche42").classList.remove("hidden");
      }
    } else {
      document.querySelector(this.hash).classList.remove("hidden");
    }
  });
});
