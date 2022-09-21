document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
var submitted = false;
$("#gform").on("submit", function (e) {
  $("#gform *").fadeOut(1000);
  $("#gform").prepend("Your submission has been processed...");
});
var typed = new Typed(".heading_span", {
  strings: [
    "Hi, I'm Tirtharaj",
    "A Full Stack Developer",
    "Hi, I'm Tirtharaj"
  ],
  typeSpeed: 120,
  backSpeed: 120,
  loop: false,
  onComplete: function(self) { self.cursor.remove() }
});