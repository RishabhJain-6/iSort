
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

function generatebarsBest(num) {
    container.innerHTML=""
    const a = Math.floor(Math.random() * (50-9)+9) + 1;
    let values = Array(num).fill().map(() => a);
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

async function heapify(bars, n, i) {

    var l7 = document.getElementById("line7");
    l7.style.backgroundColor = "grey";

    var l8 = document.getElementById("line8");
    l8.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l8.style.backgroundColor = null;

    var largest = i;

    var l9 = document.getElementById("line9");
    l9.style.backgroundColor = "cyan";
    l9.style.backgroundColor = null;

    var left = 2 * i + 1;

    var l10 = document.getElementById("line10");
    l10.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l10.style.backgroundColor = null;

    var right = 2 * i + 2;

    var l11 = document.getElementById("line11");
    l11.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l11.style.backgroundColor = null;

    if (left < n && parseInt(bars[left].style.height) > parseInt(bars[largest].style.height)) {
        var l12 = document.getElementById("line12");
        l12.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l12.style.backgroundColor = null;

        largest = left;

    }
    count++;

    if (right < n && parseInt(bars[right].style.height) > parseInt(bars[largest].style.height)) {
        var l13 = document.getElementById("line13");
        l13.style.backgroundColor = "cyan";

        var l14 = document.getElementById("line14");
        l14.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l14.style.backgroundColor = null;

        largest = right;

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l13.style.backgroundColor = null;
    }
    count++;

    if (largest !== i) {
        var l15 = document.getElementById("line15");
        l15.style.backgroundColor = "cyan";

        var l16 = document.getElementById("line16");
        l16.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l16.style.backgroundColor = null;

        var temp1 = bars[i].style.height;
        var temp2 = bars[i].childNodes[0].innerText;

        bars[i].style.backgroundColor="blue";
        bars[largest].style.backgroundColor="blue";

        bars[i].style.height = bars[largest].style.height;
        bars[i].childNodes[0].innerText = bars[largest].childNodes[0].innerText;
        bars[largest].style.height = temp1;
        bars[largest].childNodes[0].innerText = temp2;

        count++;

        var l17 = document.getElementById("line17");
        l17.style.backgroundColor = "grey";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l17.style.backgroundColor = null;

        await heapify(bars, n, largest);
        while (isPlaying) {
            if (terminate) {
                l15.style.backgroundColor=null;
                l7.style.backgroundColor=null;
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
    
                compare.textContent = ' ' + " No of Comparisons: ";
    
                for (let k = 0; k < bars.length; k++) {
                    bars[k].style.backgroundColor = "rgb(236, 190, 53)";
                }
                return;
            }
            await new Promise((resolve) => setTimeout(() => { resolve(); }, 1000));
        }
    
        if (terminate) {
            l15.style.backgroundColor=null;
            l7.style.backgroundColor=null;
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
    
            for (let k = 0; k < bars.length; k++) {
                bars[k].style.backgroundColor = "rgb(236, 190, 53)";
            }
    
            compare.textContent = ' ' + " No of Comparisons: ";
            return;
        }

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l15.style.backgroundColor = null;
    }

    bars[i].style.backgroundColor="rgb(236, 190, 53)";
    bars[largest].style.backgroundColor="rgb(236, 190, 53)";

    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l7.style.backgroundColor = null;
}

async function heapSort(bars) {

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

            compare.textContent = ' ' + " No of Comparisons: ";

            for (let k = 0; k < bars.length; k++) {
                bars[k].style.backgroundColor = "rgb(236, 190, 53)";
            }
            return;
        }
        await new Promise((resolve) => setTimeout(() => { resolve(); }, 1000));
    }

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

        for (let k = 0; k < bars.length; k++) {
            bars[k].style.backgroundColor = "rgb(236, 190, 53)";
        }

        compare.textContent = ' ' + " No of Comparisons: ";
        return;
    }

    var n = bars.length;

    var l1 = document.getElementById("line1");
    l1.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l1.style.backgroundColor = null;

    
    var l2 = document.getElementById("line2");
    l2.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l2.style.backgroundColor = null;

    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {

        var l3 = document.getElementById("line3");
        l3.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l3.style.backgroundColor = null;

        if (terminate) {
            return;
        }

        await heapify(bars, n, i);
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

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
    
                compare.textContent = ' ' + " No of Comparisons: ";
    
                for (let k = 0; k < bars.length; k++) {
                    bars[k].style.backgroundColor = "rgb(236, 190, 53)";
                }
                return;
            }
            await new Promise((resolve) => setTimeout(() => { resolve(); }, 1000));
        }
    
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
    
            for (let k = 0; k < bars.length; k++) {
                bars[k].style.backgroundColor = "rgb(236, 190, 53)";
            }
    
            compare.textContent = ' ' + " No of Comparisons: ";
            return;
        }

        if (terminate) {
            return;
        }
    }

    for (var i = n - 1; i >= 0; i--) {

        var l4 = document.getElementById("line4");
        l4.style.backgroundColor = "greenyellow";

        var l5 = document.getElementById("line5");
        l5.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l5.style.backgroundColor = null;
    
        var tem1 = bars[0].style.height;
        var tem2 = bars[0].childNodes[0].innerText;

        bars[0].style.backgroundColor="red";
        bars[i].style.backgroundColor="red";

        bars[0].style.height = bars[i].style.height;
        bars[0].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].style.height = tem1;
        bars[i].childNodes[0].innerText = tem2;

        var l6 = document.getElementById("line6");
        l6.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l6.style.backgroundColor = null;

        bars[0].style.backgroundColor="rgb(236, 190, 53)";
        bars[i].style.backgroundColor="Grey";

        if (terminate) {
            return;
        }
        
        await heapify(bars, i, 0);

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

        while (isPlaying) {
            if (terminate) {
                l4.style.backgroundColor = null;
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
    
                compare.textContent = ' ' + " No of Comparisons: ";
    
                for (let k = 0; k < bars.length; k++) {
                    bars[k].style.backgroundColor = "rgb(236, 190, 53)";
                }
                return;
            }
            await new Promise((resolve) => setTimeout(() => { resolve(); }, 1000));
        }
    
        if (terminate) {
            l4.style.backgroundColor = null;
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
    
            for (let k = 0; k < bars.length; k++) {
                bars[k].style.backgroundColor = "rgb(236, 190, 53)";
            }
    
            compare.textContent = ' ' + " No of Comparisons: ";
            return;
        }

        l4.style.backgroundColor = null;
    }

    var l18 = document.getElementById("line18");
    l18.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l18.style.backgroundColor = null;
}

  async function HeapSort() {

    count = 0;

    let bars = document.querySelectorAll(".bar");
    var l0 = document.getElementById("line0");
    l0.style.backgroundColor = "lightgreen";

    
    await heapSort(bars);

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

        for (let k = 0; k < bars.length; k++) {
            bars[k].style.backgroundColor = "rgb(236, 190, 53)";
        }

        compare.textContent = ' ' + " No of Comparisons: ";
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
        
    l0.style.backgroundColor = null

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
