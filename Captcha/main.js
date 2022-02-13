(function () {
  const fonts = ["cursive", "sans-serif", "serif", "monospace"];
  let captchaValue = "";
  function generateCaptcha() {
    let value = btoa(Math.random() * 1000000000);
    value = value.substr(0, 5 + Math.random() * 5);
    captchaValue = value;
  }

  function setCaptcha() {
    let html = captchaValue
      .split("")
      .map((char) => {
        const rotate = -20 + Math.trunc(Math.random() * 30);
        const font = Math.trunc(Math.random() * fonts.length);
        return `<span style = "
            transform: rotate(${rotate}deg)
            font-family: ${fonts[font]}
            ">${char}</span>`;
      })
      .join("");
    document.querySelector(".preview").innerHTML = html;
  }
  function initCaptcha() {
    document
      .querySelector(".captcha-refresh")
      .addEventListener("click", function () {
        console.log("hi");
        generateCaptcha();
        setCaptcha();
      });
    generateCaptcha();
    setCaptcha();
  }
  initCaptcha();
  document.querySelector("#login-btn").addEventListener("click", function () {
    let inputCaptchaValue = document.querySelector(".captcha input").value;
    if (inputCaptchaValue === captchaValue) {
      swal("", "Logging In!", "success");
    } else {
      swal("invalid captcha");
    }
  });
});
