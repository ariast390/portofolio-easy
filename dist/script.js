// Ambil elemen tombol dan kartu menggunakan ID
const workButton = document.getElementById("workButton");
const schoolButton = document.getElementById("schoolButton");
const workCards = document.querySelectorAll("[id^='workCard']");
const schoolCards = document.querySelectorAll("[id^='schoolCard']");

// Tampilkan semua kartu pekerjaan saat halaman dimuat
workCards.forEach((card) => (card.style.display = "flex"));
schoolCards.forEach((card) => (card.style.display = "none")); // Sembunyikan kartu sekolah

// Tambahkan event listener pada tombol "Work"
workButton.addEventListener("click", function () {
  // Tampilkan kartu pekerjaan
  workCards.forEach((card) => (card.style.display = "flex"));
  // Sembunyikan kartu sekolah
  schoolCards.forEach((card) => (card.style.display = "none"));
});

// Tambahkan event listener pada tombol "School"
schoolButton.addEventListener("click", function () {
  // Tampilkan kartu sekolah
  schoolCards.forEach((card) => (card.style.display = "flex"));
  // Sembunyikan kartu pekerjaan
  workCards.forEach((card) => (card.style.display = "none"));
});

// modalbox1
const workCard = document.getElementById("workCard1");
const modal = document.getElementById("modal");
const modalCloseButton = document.getElementById("modalCloseButton");

workCard.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

modalCloseButton.addEventListener("click", () => {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }
});
// modalbox1 end

// modalbox2
const workCard2 = document.getElementById("workCard2");
const modal2 = document.getElementById("modal2");
const modalCloseButton2 = document.getElementById("modalCloseButton2");

workCard2.addEventListener("click", () => {
  modal2.classList.remove("hidden");
  modal2.classList.add("flex");
});

modalCloseButton2.addEventListener("click", () => {
  closeModal(modal2);
});

modal2.addEventListener("click", (event) => {
  if (event.target === modal2) {
    closeModal(modal2);
  }
});

function closeModal(modal) {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}
