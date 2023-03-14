const container = document.querySelector(".data-container");

function generatebars(num = 20) {
    for (let i = 0; i < num; i += 1) {
	    const value = Math.floor(Math.random() * 100) + 1;

	    const bar = document.createElement("div");

	    bar.classList.add("bar");
	    bar.style.height = `${value * 3}px`;
	    bar.style.transform = `translateX(${i * 30}px)`;

	    const barLabel = document.createElement("label");
	    barLabel.classList.add("bar__id");
	    barLabel.innerHTML = value;

	    bar.appendChild(barLabel);
	    container.appendChild(bar);
    }
}

var delay = 1000;

async function BubbleSort() {
    console.log(delay);
    let bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            var value1 = parseInt(bars[j].childNodes[0].innerHTML);
            var value2 = parseInt(bars[j + 1].childNodes[0].innerHTML);
    
            if (value1 > value2) {
                bars[j].style.backgroundColor = "red";
                bars[j + 1].style.backgroundColor = "red";
    
                var temp1 = bars[j].style.height;
                var temp2 = bars[j].childNodes[0].innerText;
    
                await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    
                bars[j].style.height = bars[j + 1].style.height;
                bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
                bars[j + 1].style.height = temp1;
                bars[j + 1].childNodes[0].innerText = temp2;
            }
    
            bars[j].style.backgroundColor = "rgb(0, 183, 255)";
            bars[j + 1].style.backgroundColor = "rgb(0, 183, 255)";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
        bars[bars.length - i - 1].style.backgroundColor = "rgb(49, 226, 13)";
    }
    
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "rgb(49, 226, 13)";
    }
    
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";
    
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";

    document.getElementById("speeder").disable = false;
    
}

generatebars();

function generate() {
    window.location.reload();
}

function disable() {

    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#d8b6ff";

    document.getElementById("speeder").disable = true;
}

function delaySet() {
    var s = document.getElementById("speeder");
    var d = parseInt(s.value);
    delay=delay/d;
}
