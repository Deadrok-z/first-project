window.onload = function menuF() {
   const menu = document.getElementById('myTopnav');
   if (!menu) { return; }
   menu.onclick = () => {
      menu.classList.contains('responsive') ?
         menu.classList.remove('responsive') : menu.classList.add('responsive');
   };
}