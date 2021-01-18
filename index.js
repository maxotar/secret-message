const { hash } = window.location;
const decoded = atob(hash.replace("#", ""));

if (decoded) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").innerHTML = decoded;
}

document.querySelector("#message-form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");
  const messageInput = document.querySelector("#message-input");
  const linkInput = document.querySelector("#link-input");
  const encrypted = btoa(messageInput.value);
  const url = `https://maxotar.github.io/secret-message/#${encrypted}`;
  // const url = `${window.location}#${encrypted}`;
  linkInput.value = url;
  linkInput.select();
});

document.querySelector("#link-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const linkInput = document.querySelector("#link-input");
  linkInput.select();
  document.execCommand("copy");
});
