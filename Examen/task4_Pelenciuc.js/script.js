let timer

let i = 1

function startTimer() {
    timer = setInterval(function () {

        if (i === 20) {
            stopTimer()
        }

        let x = document.createElement("OL")
        x.setAttribute("id", "lista")
        document.body.appendChild(x)

        let y = document.createElement("LI")
        let t = document.createTextNode("Element Nr {" + i + "}")
        i++
        }
        y.appendChild(t);
        document.getElementById("lista").appendChild(y)
    }, 2000);
}

function stopTimer() {
    clearInterval(timer);
}


startTimer()


