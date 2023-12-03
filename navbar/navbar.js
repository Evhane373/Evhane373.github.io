function insertNavbar() {
  const target = document.getElementById('navbar');

  fetch('/navbar/navbar.html')
    .then(response => response.text())
    .then(html => {
      target.innerHTML = html;
    })
    .catch(error => {
      console.log(error);
    });
}
