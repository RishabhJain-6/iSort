const container = document.querySelector(".vrsplit1");

let isPlaying = false;
const pausePlayBtn = document.getElementById("pauseButton");

let terminate = false;

var count = 0;
const compare = document.getElementById("comp");

function generatebars(num) {
    container.innerHTML=""
    for (let i = 0; i < num; i += 1) {
	    const value = Math.floor(Math.random() * (180-9)+9) + 1;

	    const bar = document.createElement("div");

	    bar.classList.add("bar");
	    bar.style.height = `${value/2}%`;

		const barLabel = document.createElement("label");
		barLabel.classList.add("bar__id");
	    barLabel.innerHTML = value;

        if (num>80) {
            barLabel.style.display='none';
        }

		if (num<=40) {
			if (num<=10) {
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
    if (numele>400) {
        window.alert("Upper bound is 400 bars. Kindly choose a value in that range!");
        n.value=400;
        generate();
    }
    else {
        generatebars(numele);
    }
}

function generate2() {
	const value = Math.floor(Math.random() * 80) + 1;
	generatebars(value);
}

function generatebarsWorst(num) {
    container.innerHTML=""
    let values = Array.from({length: num}, (_, i) => Math.max(num - i + 9, 10));
    for (let i = 0; i < num; i += 1) {
        const value = values[i];
	    const bar = document.createElement("div");

	    bar.classList.add("bar");
	    bar.style.height = `${value/2}%`;

		const barLabel = document.createElement("label");
		barLabel.classList.add("bar__id");
	    barLabel.innerHTML = value;

        if (num>80) {
            barLabel.style.display='none';
        }

		if (num<=40) {
			if (num<=10) {
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

function generatebarsBest(num) {
    container.innerHTML=""
    let values = Array.from({length: num}, (_, i) => i + 1 + 9);
    for (let i = 0; i < num; i += 1) {
        const value = values[i];
	    const bar = document.createElement("div");

	    bar.classList.add("bar");
	    bar.style.height = `${value/2}%`;

		const barLabel = document.createElement("label");
		barLabel.classList.add("bar__id");
	    barLabel.innerHTML = value;

        if (num>80) {
            barLabel.style.display='none';
        }

		if (num<=40) {
			if (num<=10) {
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

function generatebest() {
    const value = Math.floor(Math.random() * 80) + 1;
    generatebarsBest(value);
}

function generateworst() {
    const value = Math.floor(Math.random() * 80) + 1;
    generatebarsWorst(value);
}

function disable() {

    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#d8b6ff";

    document.getElementById("Button3").disabled = true;
    document.getElementById("Button3").style.backgroundColor = "#d8b6ff";

    document.getElementById("Button4").disabled = true;
    document.getElementById("Button4").style.backgroundColor = "#d8b6ff";

    document.getElementById("Button5").disabled = true;
    document.getElementById("Button5").style.backgroundColor = "#d8b6ff";
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
                if (terminate) {
                    l2.style.backgroundColor = null;
                    l0.style.backgroundColor = null;
                    document.getElementById("Button1").disabled = false;
                    document.getElementById("Button1").style.backgroundColor = "#a54997";
        
                    document.getElementById("Button2").disabled = false;
                    document.getElementById("Button2").style.backgroundColor = "#a54997";
    
                    document.getElementById("Button3").disabled = false;
                    document.getElementById("Button3").style.backgroundColor = "#a54997";

                    document.getElementById("Button4").disabled = false;
                    document.getElementById("Button4").style.backgroundColor = "#a54997";

                    document.getElementById("Button5").disabled = false;
                    document.getElementById("Button5").style.backgroundColor = "#a54997";
    
                    isPlaying = false;
                    pausePlayBtn.textContent = 'Pause';
			
		    compare.textContent=' ' + " No of Comparisons: ";

                    for (let k=0;k<bars.length;k++) {
                        bars[k].style.backgroundColor="rgb(236, 190, 53)";
                    }

                    terminate = !terminate;
                    return;
                }
                await new Promise((resolve) => setTimeout(() => { resolve(); }, 1000));
            }

            if (terminate) {
                l2.style.backgroundColor = null;
                l0.style.backgroundColor = null;
                document.getElementById("Button1").disabled = false;
                document.getElementById("Button1").style.backgroundColor = "#a54997";
    
                document.getElementById("Button2").disabled = false;
                document.getElementById("Button2").style.backgroundColor = "#a54997";

                document.getElementById("Button3").disabled = false;
                document.getElementById("Button3").style.backgroundColor = "#a54997";

                document.getElementById("Button4").disabled = false;
                document.getElementById("Button4").style.backgroundColor = "#a54997";

                document.getElementById("Button5").disabled = false;
                document.getElementById("Button5").style.backgroundColor = "#a54997";

                for (let k=0;k<bars.length;k++) {
                    bars[k].style.backgroundColor="rgb(236, 190, 53)";
                }
		    
		compare.textContent=' ' + " No of Comparisons: ";

                terminate = !terminate;
                return;
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
		await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
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
	    
	compare.textContent=' ' + " No of Comparisons: "+count;

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
    document.getElementById("Button2").style.backgroundColor = "#a54997";

    document.getElementById("Button3").disabled = false;
    document.getElementById("Button3").style.backgroundColor = "#a54997";

    document.getElementById("Button4").disabled = false;
    document.getElementById("Button4").style.backgroundColor = "#a54997";

    document.getElementById("Button5").disabled = false;
    document.getElementById("Button5").style.backgroundColor = "#a54997";

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
      isPlaying = false;
      pausePlayBtn.textContent = 'Pause';
    } else {
      isPlaying = true;
      pausePlayBtn.textContent = 'Resume';
    }
  });
