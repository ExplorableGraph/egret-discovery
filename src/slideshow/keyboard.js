window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      document.getElementById("linkPrevious")?.click();
      break;

    case "ArrowRight":
      document.getElementById("linkNext")?.click();
      break;
  }
});
