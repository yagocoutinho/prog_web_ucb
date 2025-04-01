let contador = 0;
    const spanContador = document.getElementById("contador");
    const btnInc = document.getElementById("btnInc");
    const btnDec = document.getElementById("btnDec");
    const campoTexto = document.getElementById("campoTexto");
    const charCount = document.getElementById("charCount");
    const output = document.getElementById("output");
    const tipoItem = document.getElementById("tipoItem");
    const btnAddItem = document.getElementById("btnAddItem");
    const btnReset = document.getElementById("btnReset");

    btnInc.addEventListener("click", () => {
      contador++;
      spanContador.textContent = contador;
    });

    btnDec.addEventListener("click", () => {
      if (contador > 0) {
        contador--;
        spanContador.textContent = contador;
      } else {
        alert("O contador já está em zero.");
      }
    });

    campoTexto.addEventListener("keyup", (e) => {
      const semEspacos = campoTexto.value.replace(/\s/g, "");
      charCount.textContent = `Caracteres (sem espaços): ${semEspacos.length}`;

      if (e.key === "Enter" && campoTexto.value.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = campoTexto.value;
        output.appendChild(p);
        campoTexto.value = "";
        charCount.textContent = "Caracteres (sem espaços): 0";
      }
    });

    btnAddItem.addEventListener("click", () => {
      const tipo = tipoItem.value;
      const lista = document.createElement(tipo);
      for (let i = 1; i <= 3; i++) {
        const item = document.createElement("li");
        item.textContent = `Item ${i}`;
        lista.appendChild(item);
      }
      output.appendChild(lista);
    });

    btnReset.addEventListener("click", () => {
      contador = 0;
      spanContador.textContent = "0";
      output.innerHTML = "";
      campoTexto.value = "";
      charCount.textContent = "Caracteres (sem espaços): 0";
    });