function insertNav(currentPage)
{
   document.getElementByID("navbar").innerHTML = loadNavbar();
}

async function loadNavbar() 
{
   let navbar = await fetch("navbar.html");
   let navHTML = await navbar.text();
   return(navHTML);
}
