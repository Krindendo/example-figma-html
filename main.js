import "./style.css";

(() => {
  const formTop = document.getElementById("request_early_access_top");
  const formBottom = document.getElementById("request_early_access_bottom");
  const htmlTemplate = document.getElementById("request_early_access_template");
  const clone = htmlTemplate.content.cloneNode(true);

  const replaceFormWithMessage = (htmlElement) => {
    htmlElement.innerHTML = "";
    htmlElement.appendChild(clone);
  };

  const handleSubmitTop = (event) => {
    event.preventDefault();
    const formData = new FormData(formTop);
    const email = formData.get("email");
    console.log("formData", formData.get("email"));

    replaceFormWithMessage(formTop);
    replaceFormWithMessage(formBottom);
  };

  const handleSubmitBottom = (event) => {
    event.preventDefault();

    const formData = new FormData(formBottom);
    const email = formData.get("email");

    replaceFormWithMessage(formTop);
    replaceFormWithMessage(formBottom);
  };

  formTop?.addEventListener("submit", handleSubmitTop);
  formBottom?.addEventListener("submit", handleSubmitBottom);
})();

(() => {
  const menuButtonHTML = document.getElementById("menu-button");
  const closeMenuButtonHTML = document.getElementById("close-menu-button");
  const menuHTML = document.getElementById("menu");

  const handleOpen = () => {
    menuHTML.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");

    setTimeout(() => {
      menuHTML.children[0].classList.replace(
        "translate-x-full",
        "translate-x-0",
      );
    }, 1);
  };

  const handleClose = () => {
    document.body.classList.remove("overflow-hidden");
    menuHTML.children[0].classList.replace("translate-x-0", "translate-x-full");
    setTimeout(() => {
      menuHTML.classList.add("hidden");
    }, 500);
  };

  menuButtonHTML.addEventListener("click", handleOpen);
  closeMenuButtonHTML.addEventListener("click", handleClose);
})();
