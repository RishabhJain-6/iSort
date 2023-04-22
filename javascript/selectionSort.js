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

async function selectionSort() {
    count = 0;
    let bars = document.querySelectorAll(".bar");

    var l0 = document.getElementById("line0");
    var l1 = document.getElementById("line1");
    var l2 = document.getElementById("line2");
    var l3 = document.getElementById("line3");
    var l4 = document.getElementById("line4");
    var l5 = document.getElementById("line5");
    var l6 = document.getElementById("line6");
    var l7 = document.getElementById("line7");
    l0.style.backgroundColor = "lightgreen";

    for (var i = 0; i < bars.length - 1; i++) {
        l1.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l1.style.backgroundColor = null;

        var min_idx = i;
        bars[i].style.backgroundColor="red";
        l2.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l2.style.backgroundColor = null;

        for (var j = i + 1; j < bars.length; j++) {
            l3.style.backgroundColor = "cyan";

            while (isPlaying) {
                if (terminate) {
                    l3.style.backgroundColor = null;
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
                l3.style.backgroundColor = null;
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
            var value2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

            if (value1 < value2) {
                await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
                l4.style.backgroundColor = "cyan";
                await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
                l4.style.backgroundColor = null;
                 
                if(min_idx!=i){
                    bars[min_idx].style.backgroundColor="rgb(236, 190, 53)";
                }
            
                min_idx = j;
                
                await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));      
                bars[j].style.backgroundColor="red";
                l5.style.backgroundColor = "cyan";
                await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
                l5.style.backgroundColor = null;
            }
            count++;
        }
        l6.style.backgroundColor = "cyan";
        l3.style.backgroundColor = null;
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l6.style.backgroundColor = null;       

        if (min_idx != i) {

            bars[min_idx].style.backgroundColor = "red";
            bars[i].style.backgroundColor = "red";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

            var temp1 = bars[min_idx].style.height;
            var temp2 = bars[min_idx].childNodes[0].innerText;

            l7.style.backgroundColor = "cyan";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

            bars[min_idx].style.height = bars[i].style.height;
            bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
            bars[i].style.height = temp1;
            bars[i].childNodes[0].innerText = temp2;

            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

            l7.style.backgroundColor = null;

            bars[min_idx].style.backgroundColor = "rgb(236, 190, 53)";
            bars[i].style.backgroundColor = "rgb(236, 190, 53)";
        }

        bars[i].style.backgroundColor = "rgb(236, 190, 53)";

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        compare.textContent=' ' + " No of Comparisons: "+count;
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    }


for (var x = 0; x < bars.length; x++) {
    bars[x].style.backgroundColor = "rgb(49, 226, 13)";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
}

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
