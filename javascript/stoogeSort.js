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

var l0 = document.getElementById("line0");
var l1 = document.getElementById("line1");
var l2 = document.getElementById("line2");
var l3 = document.getElementById("line3");
var l4 = document.getElementById("line4");
var l5 = document.getElementById("line5");
var l6 = document.getElementById("line6");
var l7 = document.getElementById("line7");
var l8 = document.getElementById("line8");

async function Sort() {
    count = 0;
    let bars = document.querySelectorAll(".bar");

    l0.style.backgroundColor="lightgreen";
    await StoogeSort(bars,0,bars.length-1);
    l0.style.backgroundColor=null;
    
    if (terminate) {
        terminate = !terminate;
    }
    else {
        for (var x = 0; x < bars.length; x++) {
            bars[x].style.backgroundColor = "rgb(49, 226, 13)";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
        compare.textContent=' ' + " No of Comparisons: "+count;
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
}

async function StoogeSort(bars,l,h) {
    if (l>=h || terminate) {
        if (terminate) {
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
            return;
        }
        l1.style.backgroundColor="lightgreen";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l1.style.backgroundColor=null;
        return;
    }

    while (isPlaying) {
        if (terminate) {
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
            return;
        }
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    }

    var value1 = parseInt(bars[l].childNodes[0].innerHTML);
    var value2 = parseInt(bars[h].childNodes[0].innerHTML);

    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

    if (value1>value2) {
        l2.style.backgroundColor="lightgreen";
        var temp1 = bars[l].style.height;
        var temp2 = bars[l].childNodes[0].innerText;

        bars[l].style.backgroundColor="red";
        bars[h].style.backgroundColor="red";

        l3.style.backgroundColor="lightgreen";
    
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

        bars[l].style.height = bars[h].style.height;
        bars[l].childNodes[0].innerText = bars[h].childNodes[0].innerText;
        bars[h].style.height = temp1;
        bars[h].childNodes[0].innerText = temp2;

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l3.style.backgroundColor=null;
        l2.style.backgroundColor=null;
    }
    count++;
    
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

    bars[l].style.backgroundColor="rgb(236, 190, 53)";
    bars[h].style.backgroundColor="rgb(236, 190, 53)";

    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

    if (h - l + 1 > 2) {
        l4.style.backgroundColor="lightgreen";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l4.style.backgroundColor=null;
        var t = Math.floor((h-l+1)/3);
        l5.style.backgroundColor="lightgreen";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l5.style.backgroundColor=null;

        if (terminate) {
            return;
        }

        l6.style.backgroundColor="lightgreen";

        for (let k=l;k<=(h-t);k++) {
            bars[k].style.backgroundColor="aqua";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        for (let k=l;k<=(h-t);k++) {
            bars[k].style.backgroundColor="rgb(236, 190, 53)";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l6.style.backgroundColor=null;

        await StoogeSort(bars,l,(h-t));

        if (terminate) {
            return;
        }

        l7.style.backgroundColor="lightgreen";

        for (let k=(l+t);k<=(h);k++) {
            bars[k].style.backgroundColor="aqua";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        for (let k=(l+t);k<=(h);k++) {
            bars[k].style.backgroundColor="rgb(236, 190, 53)";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l7.style.backgroundColor=null;

        await StoogeSort(bars,l+t,(h));

        if (terminate) {
            return;
        }

        l8.style.backgroundColor="lightgreen";

        for (let k=l;k<=(h-t);k++) {
            bars[k].style.backgroundColor="aqua";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        for (let k=l;k<=(h-t);k++) {
            bars[k].style.backgroundColor="rgb(236, 190, 53)";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l8.style.backgroundColor=null;

        await StoogeSort(bars,l,(h-t));
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    }
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
