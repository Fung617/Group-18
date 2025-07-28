document.addEventListener("DOMContentLoaded", ()=> {
  const heater = document.querySelector("header");


  function toggletteaderTransparency () {
    if (window.scrolly > 0) {
      header.classList.add("transparent");
    }else {
      header.classList.remove("transparent");
    }
  }

  window.addEventListener("scroll",toggletteaderTransparency);
});
