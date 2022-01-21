// - Lo primero que hay que hacer es recuperar los elementos de nuestra página, ya sea el `input`, el `botón`, la `lista` e incluso el campo que queremos hacer desaparecer.
const input$$ = document.querySelector(".inputAddTask");
const btn$$ = document.querySelector(".btn-add");
const ul$$ = document.querySelector("ul");
const divEmpty$$ = document.querySelector(".empty");

// - Una vez tengamos todos los elementos capturados tendremos que darle funcionalidad al botón y crear un elemento `<li>` por cada texto introducido en nuestro input (de ahí que en `index.html` hubiera una lista vacía). Esto se puede hacer de diferentes formas y recomendamos que controléis "errores" como el no permitir capturar una tarea sin texto.

const addTask = (e) => {
  e.preventDefault();
  divEmpty$$.style.display = "none";
  const li$$ = document.createElement("li");
  li$$.innerHTML = `${input$$.value} <button class="btn-delete">X</button>`;
  console.log(input$$.value);
  ul$$.appendChild(li$$);
  input$$.value = "";
  const buttonDelete$$ = document.querySelectorAll(".btn-delete");
  for (const item of buttonDelete$$) {
    item.addEventListener("click", (e) => {
      e.preventDefault;
      item.parentNode.remove();
      if (ul$$.textContent == "") {
        divEmpty$$.style.display = "block";
      }
    });
  }
};

btn$$.addEventListener("click", addTask);

// - A estas tareas hay que adjuntarles un botón de borrado que nos elimine cada una de las tareas.
