window.addEventListener("load", () => {
  const directors = document.querySelectorAll(".director");

  console.log(directors);

  directors.forEach((director) => {
    const directorInfo = director.querySelector(".director-info");
    const directorQuote = director.querySelector(".director-quote");
    const dirPlus = directorInfo.querySelector(".dir-plus ");
    const dirClose = directorQuote.querySelector(".dir-close");
    const plusImage = dirPlus.querySelector("img");
    const closeImage = dirClose.querySelector("img");

    function toggle(onElement, offElement) {
      onElement.classList.remove("hidden");
      offElement.classList.add("hidden");
    }

    dirPlus.addEventListener("click", () =>
      toggle(directorQuote, directorInfo)
    );
    plusImage.addEventListener("click", () =>
      toggle(directorQuote, directorInfo)
    );

    dirClose.addEventListener("click", () =>
      toggle(directorInfo, directorQuote)
    );
    closeImage.addEventListener("click", () =>
      toggle(directorInfo, directorQuote)
    );
  });
});
