

function setPicOpacityOnScrollDown() {
  let pic = document.getElementById("pic");
  pic.style.opacity = `${window.scrollY / document.documentElement.scrollHeight}`;
  console.log(window.scrollY / document.documentElement.scrollHeight)
}
window.addEventListener("scroll", setPicOpacityOnScrollDown);
