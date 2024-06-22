let btns = document.querySelectorAll("button");
let screen = document.getElementById("screen");
let history = document.getElementById("history");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(btn.getAttribute("id"));
        if (btn.getAttribute("id") == "clear") {
            screen.innerHTML = "0";
            history.innerHTML = "0";
        } else if (btn.getAttribute("id") == "del") {
            screen.innerHTML = screen.innerHTML.slice(0, -1);
            if (screen.innerHTML.length == 0) {
                screen.innerHTML = "0";
            }
            history.innerHTML = history.innerHTML.slice(0, -1);
            if (history.innerHTML.length == 0) {
                history.innerHTML = "0";
            }
        }
    

     else {
      if (screen.innerHTML == "0") {
          screen.innerHTML = "";
          history.innerHTML = "";
      }
        if (btn.getAttribute("id") == "equal") {
          try {
            screen.innerHTML = eval(screen.innerHTML);
          } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Please Enter Correct Calculations",
                text: `${error}`,
              });
          }
        
      } else {
        screen.innerHTML += btn.getAttribute("id");
        history.innerHTML += btn.getAttribute("id");
      }
    }
  });
});
