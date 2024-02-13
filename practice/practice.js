const input = document.querySelector("input");

input.addEventListener("keypress", (e) => {
  // console.log(e.key);
  if (e.key === "Enter") {
    console.log(input.value);
  }
});
