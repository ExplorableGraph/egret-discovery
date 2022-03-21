function getCurrentSlideNumber() {
  const scrollTop = document.body.scrollTop;
  const slides = [...document.body.children];
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].offsetTop >= scrollTop) {
      return i;
    }
  }
  return -1;
}

function updateHashFromSlide() {
  const slideNumber = getCurrentSlideNumber();
  const newHash = `#${slideNumber}`;
  if (location.hash !== newHash) {
    location.hash = newHash;
  }
}

function updateSlideFromHash() {
  const currentSlideNumber = getCurrentSlideNumber();
  const hash = location.hash;
  const hashSlideNumber = hash ? parseInt(hash.substring(1)) : -1;
  if (hashSlideNumber >= 0 && hashSlideNumber !== currentSlideNumber) {
    document.body.children[hashSlideNumber].scrollIntoView();
  }
}

window.addEventListener("hashchange", () => {
  updateSlideFromHash();
});

window.addEventListener("load", () => {
  document.body.addEventListener("scroll", () => {
    setTimeout(updateHashFromSlide);
  });
  updateSlideFromHash();
});
