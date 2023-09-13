export function navigation () {
   const audioBooksBtn = document.querySelector("#audiobooks-link");
   const stationeryBtn = document.querySelector("#stationery-link");
   const blogBtn = document.querySelector("#blog-link");

   function redirectToPage(url) {
      window.location.href = url;
   }

   audioBooksBtn.addEventListener("click", () => {
      redirectToPage('audiobooks.html');
   });

   stationeryBtn.addEventListener("click", () => {
      redirectToPage('stationery.html');
   });

   blogBtn.addEventListener("click", () => {
      redirectToPage('blog.html');
   })
}