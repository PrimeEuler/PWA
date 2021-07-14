(function() {
  'use strict';
//#region DOM navigation panel and hash router
function openNav() {
  document.getElementById("Sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
//update nav-content on hashchange
window.addEventListener("hashchange", function(event){
  var hash = window.location.href.split('#')[1] || '';
  var content = document.getElementsByClassName("nav-content");
  for (var i = 0; i < content.length; i++) { content[i].style.display = "none";}
  document.getElementById( hash.split('/')[1] || "profile" ).style.display = "block";
  closeNav()
  console.log(event, hash)
})
//defualt panel
document.getElementById("profile").style.display = "block";
document.getElementById("avatar").src = "/icon/default.svg"
//#endregion

//#region DOM crypto tools
const spinner = document.getElementById("spinner");
function create_new_csr(){
  var csrFields = {
    //CN 2.5.4.3
    commonName: document.getElementById("commonName").value,
    //SAN 2.5.29.17 - 3
    subjectAltName_email: document.getElementById("subjectAltName_email").value,
    //SAN 2.5.29.17 - 2
    subjectAltName_dns: document.getElementById("subjectAltName_dns").value,
    //O 2.5.4.10
    organizationName: document.getElementById("organizationName").value,
    //OU 2.5.4.11
    organizationalUnitName: document.getElementById("organizationalUnitName").value,
    //L 2.5.4.7
    localityName: document.getElementById("localityName").value,
    //C 2.5.4.6
    countryName: document.getElementById("countryName").value
  }
  spinner.removeAttribute("hidden");
  gen_csr(csrFields)
  .then(function(csr_pem){
    spinner.setAttribute("hidden", "");
    document.getElementById("new_csr").value = csr_pem[0]
    document.getElementById("new_key").value = csr_pem[1]
  })
  .catch(function(e){
    spinner.setAttribute("hidden", "");
    document.getElementById("new_crt").value = e
    console.log(e)
  })
}
function create_new_ca(){
  spinner.removeAttribute("hidden");
  gen_ca(document.getElementById("commonName").value)
  .then(function(ca_pem){
    spinner.setAttribute("hidden", "");
    document.getElementById("new_ca_crt").value = ca_pem[0]
    document.getElementById("new_ca_key").value = ca_pem[1]
  })
  .catch(function(e){
    spinner.setAttribute("hidden", "");
    document.getElementById("new_crt").value = e
    console.log(e)
  })
}
function create_new_cert(){
  spinner.removeAttribute("hidden");
  gen_cert(
    document.getElementById("new_ca_crt").value,
    document.getElementById("new_ca_key").value,
    document.getElementById("new_csr").value
  )
  .then(function(cert_pem){
    spinner.setAttribute("hidden", "");
    document.getElementById("new_crt").value = cert_pem
  })
  .catch(function(e){
    spinner.setAttribute("hidden", "");
    document.getElementById("new_crt").value = e
    console.log(e)
  })
}
//#endregion

//#region serviceWorker PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js', {
        scope: '/'
    }).then(function() {
        console.info('service worker registered');
    }).catch(function(e) {
        console.error(e, 'service worker registration failed');
    });
}
//#endregion

//#exports
window.openNav = openNav;
window.closeNav = closeNav;
window.create_new_csr = create_new_csr;
window.create_new_ca = create_new_ca;
window.create_new_cert = create_new_cert;
//#endregion
})();
