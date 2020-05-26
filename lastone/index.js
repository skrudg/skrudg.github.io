
function contacts() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function menu() {
  document.getElementById("menuDropdown").classList.toggle("menuShow");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.menuButton')) {
    let dropdowns = document.getElementsByClassName("header__navBar");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('menuShow')) {
        openDropdown.classList.remove('menuShow');
      }
    }
  }
}
  
document.getElementById("defaultOpen").click();

function changeTab(evt, tabName) {
  let i, workersInfobox, tablinks;

  workersInfobox = document.getElementsByClassName("workersInfobox");
  for (i = 0; i < workersInfobox.length; i++) {
    workersInfobox[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "flex";

  evt.currentTarget.className += " active";
}