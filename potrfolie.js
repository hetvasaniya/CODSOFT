var tablinks=document.getElementsByClassName("tab_links");
var tablcontains=document.getElementsByClassName("tabcontain");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active1");
    }
     for(tablcontain of tablcontains){
        tablcontain.classList.remove("tab1");
    }
    event.currentTarget.classList.add("active1")
    document.getElementById(tabname).classList.add("tab1");
}

document.querySelectorAll('input, textarea').forEach(input => {
    input.value = localStorage.getItem(input.id) || '';
    input.addEventListener('input', () => {
      localStorage.setItem(input.id, input.value);
    });
  });

  // Optional: clear localStorage on submit
  document.querySelector('.btn').addEventListener('click', () => {
    ['name', 'email', 'message'].forEach(id => localStorage.removeItem(id));
  });