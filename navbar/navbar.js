function insertNavbar() {
  const target = document.getElementById('navbar');

  fetch('home.html')
    .then(response => response.text())
    .then(html => {
      target.innerHTML = html;
    })
    .catch(error => {
      console.log(error);
    });
}
