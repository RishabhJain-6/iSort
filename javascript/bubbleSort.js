const container = document.querySelector(".vrsplit1");

let isPlaying = false;
const pausePlayBtn = document.getElementById("pauseButton");

var count = 0;
const compare = document.getElementById("comp");

function generatebars(num) {
    container.innerHTML=""
    for (let i = 0; i < num; i += 1) {
	    const value = Math.floor(Math.random() * 200) + 1;

	    const bar = document.createElement("div");

	    bar.classList.add("bar");
	    bar.style.height = `${value * 3}px`;

		const barLabel = document.createElement("label");
		barLabel.classList.add("bar__id");
	    barLabel.innerHTML = value;

        if (num>80) {
            barLabel.style.display='none';
        }
		if (num<=40) {
			if (value>7 && num<=10) {
				barLabel.style.fontSize = 'xxx-large';
			}
            else if (num<=20) {
                barLabel.style.fontSize = 'xx-large';
            }
            if (num>20 && num<=30) {
				barLabel.style.fontSize = 'x-large';
			}
            else if (num<=40) {
                barLabel.style.fontSize = 'large';
            }
		}
		bar.appendChild(barLabel);
	    container.appendChild(bar);
    }
}

generatebars(25);

function generate() {
	var n = document.getElementById("nele");
	var numele = parseInt(n.value);
	generatebars(numele);
}

function generate2() {
	const value = Math.floor(Math.random() * 100) + 1;
	generatebars(value);
}
function disable() {

    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#d8b6ff";

    document.getElementById("Button3").disabled = true;
    document.getElementById("Button3").style.backgroundColor = "#d8b6ff";

    document.getElementById("speeder").disable = true;
}

var delay = 5000;

async function BubbleSort() {
    count = 0;
    let bars = document.querySelectorAll(".bar");

    var l0 = document.getElementById("line0");
    l0.style.backgroundColor = "lightgreen";

    for (let i = 0; i < bars.length; i++) {
        var l1 = document.getElementById("line1");
        l1.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l1.style.backgroundColor = null;

        var c2 = 1;

        for (let j = 0; j < bars.length - i - 1; j++) {

            var l2 = document.getElementById("line2");
            l2.style.backgroundColor = "cyan";

            while (isPlaying) {
                await new Promise((resolve) => setTimeout(() => { resolve(); }, 1000));
            }

            var value1 = parseInt(bars[j].childNodes[0].innerHTML);
            var value2 = parseInt(bars[j + 1].childNodes[0].innerHTML);
            
            var l3 = document.getElementById("line3");
            l3.style.backgroundColor = "cyan";

            if (value1 > value2) {

                await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
                var l4 = document.getElementById("line4");
                l4.style.backgroundColor = "cyan";

                bars[j].style.backgroundColor = "red";
                bars[j + 1].style.backgroundColor = "red";
    
                var temp1 = bars[j].style.height;
                var temp2 = bars[j].childNodes[0].innerText;
    
                await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    
                bars[j].style.height = bars[j + 1].style.height;
                bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
                bars[j + 1].style.height = temp1;
                bars[j + 1].childNodes[0].innerText = temp2;

                l4.style.backgroundColor = null;
            }
            c2 = c2+1;

            var l5 = document.getElementById("line5");
            l5.style.backgroundColor = "cyan";
            l3.style.backgroundColor = null;
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            l5.style.backgroundColor = null;
    
            bars[j].style.backgroundColor = "rgb(236, 190, 53)";
            bars[j + 1].style.backgroundColor = "rgb(236, 190, 53)";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

            l2.style.backgroundColor = null;
        }
        count = count + c2;

        var l6 = document.getElementById("line6");
        l6.style.backgroundColor = "cyan";

        bars[bars.length - i - 1].style.backgroundColor = "rgb(49, 226, 13)";

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l6.style.backgroundColor = null;
    }

    var l7 = document.getElementById("line7");
    l7.style.backgroundColor = "cyan";

    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "rgb(49, 226, 13)";
    }

    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l7.style.backgroundColor = null;
    
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#a54997";
    
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#c85cef";

    document.getElementById("Button3").disabled = false;
    document.getElementById("Button3").style.backgroundColor = "#c85cef";

    document.getElementById("speeder").disabled = false;

    compare.textContent=' ' + " No of Comparisons: "+count;
    
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l0.style.backgroundColor = null;
}

function delaySet() {
    delay = 5000;
    var s = document.getElementById("speeder");
    var d = parseInt(s.value);
    delay=delay/d;
}

pausePlayBtn.addEventListener('click', () => {
    if (isPlaying) {
      // Pause the sorting algorithm
      isPlaying = false;
      pausePlayBtn.textContent = 'Pause';
      // Code to pause the sorting algorithm goes here
    } else {
      // Resume the sorting algorithm
      isPlaying = true;
      pausePlayBtn.textContent = 'Resume';
      // Code to resume the sorting algorithm goes here
    }
  });