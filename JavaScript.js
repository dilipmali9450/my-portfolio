let tablink = document.getElementsByClassName("tab-link");
let tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabName) {
    for (tablinks of tablink) {
        tablinks.classList.remove("active-link");
    }
    for (tabcontents of tabcontent) {
        tabcontents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")
}
// -------------------------for menu------------------------------------
let sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px"
}
// ---------------------------------Required--------------------------------

  const scriptURL = 'https://script.google.com/macros/s/AKfycbx2mTMYtcPtvTVAqE0cQy19MQA8IMaf0z0_-5pMafFPzNkOAFZDJpfV-zjovdVkTdqs3g/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent Successfully";
        setTimeout(() => {
            msg.innerHTML="";
        }, 5000);
        form.reset();
      })
      
      .catch(error => console.error('Error!', error.message))
  })
