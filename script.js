const storyBtn = document.querySelectorAll(".team__member--story-btn");
const story = document.querySelectorAll(".story");
console.log(storyBtn);
console.log(story);

storyBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("rotate");
    btn.nextElementSibling.classList.toggle("show");
  });
});
