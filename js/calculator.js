const result = document.getElementById("result");
const buttons = document.getElementById("buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.textContent === "CE") {
    result.textContent = "";
  } else if (e.target.textContent === "=") {
    let texto = result.textContent.replace("x", "*") || result.textContent;
    let resultado = eval(texto);
    if (resultado != NaN) result.textContent = resultado;
    else result.textContent = "Error";
  } else {
    result.textContent += e.target.textContent;
  }

  result.style.textAlign = "center";
});
