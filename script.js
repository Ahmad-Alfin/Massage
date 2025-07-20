const tidakBtn = document.getElementById("tidakBtn");
const iyaBtn = document.getElementById("iyaBtn");

tidakBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;
  tidakBtn.style.transform = `translate(${x}px, ${y}px)`;
});

iyaBtn.addEventListener("click", () => {
  window.location.href = "https://wa.me/6285895440744?text=Hai%20Aku%20mau%20jadi%20pacarmu%20%F0%9F%92%95";
});
