function insertNav(currentPage)
{
   document.getElementByID("navbar").innerHTML = `
   <link rel="stylesheet" href="navbar.css">
      <div class="navbar">
         <a href="/">Home</a>
         <div class="dropdown">
            <button class="dropbtn">Advent of Code
               <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
               <a href="/AoC/2015/AoC2015.html">2015</a>
               <a href="/AoC/2023/AoC2023.html">2023</a>
            </div>
         </div>
      </div>`;
}
