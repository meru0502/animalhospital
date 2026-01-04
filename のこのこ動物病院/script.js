// ハンバーガーメニュー
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    nav.classList.toggle("show");
    overlay.classList.toggle("show");
  });


  // メニューのリンクを押したら閉じる
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
    hamburger.classList.remove("show");
    overlay.classList.remove('show');
  });
});