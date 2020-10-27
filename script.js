
let a = 10;
function back() {
   if (a > 0) {
      document.querySelector('.st').style.left = a + 'px';
      document.querySelector('.st').style.transform = 'scale(-1, 1)';
      a--;
      setTimeout(back, 20)
   } else {
      if (a = 10) {
         move();
      }
   }
};
function move() {
   if (a < 150) {
      document.querySelector('.st').style.left = a + 'px';
      document.querySelector('.st').style.transform = 'scale(1,1)';

      a++;
      setTimeout(move, 20)
   }

   else {
      if (a = 150) {
         back();
      }
   };
};
move();
