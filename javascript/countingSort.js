const container = document.querySelector(".mainarray");
let C_container = document.querySelector(".countarray");

let isPlaying = false;
const pausePlayBtn = document.getElementById("pauseButton");

let terminate = false;

var max = 0;

function generatebars(num) {
    container.innerHTML="";
    max = 0;
    for (let i = 0; i < num; i += 1) {
	    const value = Math.floor(Math.random() * (50-9)+9) + 1;
        if (value > max) {
            max = value;
        }

	    const bar = document.createElement("div");

	    bar.classList.add("bar");
	    bar.style.height = `${1.5*value}%`;

		const barLabel = document.createElement("label");
		barLabel.classList.add("bar__id");
	    barLabel.innerHTML = value;

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
    if (numele>100) {
        window.alert("Upper bound is 100 bars. Kindly choose a value in that range!");
        n.value=100;
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
    container.innerHTML="";
    const a = Math.floor(Math.random() * (50-9)+9) + 1;
    let values = Array(num).fill().map(() => a);
    for (let i = 0; i < num; i += 1) {
        const value = values[i];
	    const bar = document.createElement("div");

	    bar.classList.add("bar");
	    bar.style.height = `${1.5*value}%`;

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
    const value = Math.floor(Math.random() * 70) + 1;
    generatebarsBest(value);
}

function generateCountArray() {
    C_container.innerHTML="";
    for (let i = 10; i <= max; i += 1) {
	    const bar = document.createElement("div");

	    bar.classList.add("bar2");
	    bar.style.height = `${1.5*i}%`;

		const barLabel = document.createElement("label");
		barLabel.classList.add("bar__id");
	    barLabel.innerHTML = i+","+00;

		bar.appendChild(barLabel);
	    C_container.appendChild(bar);
    }
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

async function CountingSort() {
    var l0 = document.getElementById("line0");
    var l1 = document.getElementById("line1");
    var l2 = document.getElementById("line2");
    var l3 = document.getElementById("line3");
    var l4 = document.getElementById("line4");
    var l5 = document.getElementById("line5");
    var l6 = document.getElementById("line6");
    var l7 = document.getElementById("line7");
    var l8 = document.getElementById("line8");

    l0.style.backgroundColor="lightgreen";
    l1.style.backgroundColor="lightgreen";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    generateCountArray();
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l1.style.backgroundColor=null;

    let bars = document.querySelectorAll(".bar");
    let countA = document.querySelectorAll(".bar2");
    var countB = Array.from({length: 51}, (_, i) => 0);

    while (isPlaying) {
        if (terminate) {
            l0.style.backgroundColor=null;
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
	    
	    terminate = !terminate;

            compare.textContent=' ' + " No of Comparisons: ";

            for (let k=0;k<bars.length;k++) {
                bars[k].style.backgroundColor="rgb(236, 190, 53)";
            }

            terminate = !terminate;
            return;
        }
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    }

    if (terminate) {
        l0.style.backgroundColor=null;
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

    l2.style.backgroundColor="lightgreen";

    for (var i=0;i<bars.length;i++) {
        ++countB[bars[i].childNodes[0].innerHTML];
        bars[i].style.backgroundColor="red";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        countA[bars[i].childNodes[0].innerHTML - 10].style.backgroundColor="red";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

        countA[bars[i].childNodes[0].innerHTML - 10].childNodes[0].innerHTML = (bars[i].childNodes[0].innerHTML)+","+countB[bars[i].childNodes[0].innerHTML];
        l3.style.backgroundColor="lightgreen";

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        countA[bars[i].childNodes[0].innerHTML - 10].style.backgroundColor="rgb(236, 190, 53)";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l3.style.backgroundColor=null;
        bars[i].style.backgroundColor="rgb(236, 190, 53)";

        while (isPlaying) {
            if (terminate) {
                l0.style.backgroundColor=null;
                l2.style.backgroundColor=null;
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
		    
		terminate = !terminate;
    
                compare.textContent=' ' + " No of Comparisons: ";
    
                for (let k=0;k<bars.length;k++) {
                    bars[k].style.backgroundColor="rgb(236, 190, 53)";
                }
    
                terminate = !terminate;
                return;
            }
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
    
        if (terminate) {
            l0.style.backgroundColor=null;
            l2.style.backgroundColor=null;
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
    }
    l2.style.backgroundColor=null;

    for (var i=11;i<countB.length;i++) {
        countB[i] += countB[i-1];;
    }

    l4.style.backgroundColor="lightgreen";

    for (var i=0;i<countA.length;i++) {
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        countA[i].style.backgroundColor="red";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        countA[i].childNodes[0].innerHTML = (i+10)+","+countB[i+10];
        l5.style.backgroundColor="lightgreen";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        countA[i].style.backgroundColor="rgb(236, 190, 53)";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

        l5.style.backgroundColor=null;

        while (isPlaying) {
            if (terminate) {
                l0.style.backgroundColor=null;
                l4.style.backgroundColor=null;
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
		    
		terminate = !terminate;
    
                compare.textContent=' ' + " No of Comparisons: ";
    
                for (let k=0;k<bars.length;k++) {
                    bars[k].style.backgroundColor="rgb(236, 190, 53)";
                }
    
                terminate = !terminate;
                return;
            }
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
    
        if (terminate) {
            l0.style.backgroundColor=null;
            l4.style.backgroundColor=null;
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
    }
    l4.style.backgroundColor=null;

    let ans = [];
    let countB_copy = countB.slice();

    for (var i=bars.length-1;i>=0;i--) {
        ans[countB_copy[bars[i].childNodes[0].innerHTML]-1] = bars[i].childNodes[0].innerHTML;
        countB_copy[i]--;
    }
    let array = [];
    for (var i = 0;i<bars.length;i++) {
        array[i]=bars[i].childNodes[0].innerHTML;
    }

    l6.style.backgroundColor="lightgreen";

    for (var i = bars.length - 1;i>=0;i--) {
        countA[array[i] - 10].style.backgroundColor="red";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        bars[countB[array[i]]-1].style.backgroundColor="red";
        l7.style.backgroundColor="lightgreen";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        bars[countB[array[i]]-1].style.height=`${1.5*array[i]}%`;
        bars[countB[array[i]]-1].childNodes[0].innerHTML=array[i];
        l7.style.backgroundColor=null;
        var t = countB[array[i]];
        countB[array[i]]--;
        l8.style.backgroundColor="lightgreen";
        countA[array[i]-10].childNodes[0].innerHTML = array[i]+","+countB[array[i]-1];
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l8.style.backgroundColor=null;
        countA[array[i]-10].style.backgroundColor="rgb(236, 190, 53)";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        bars[t-1].style.backgroundColor="rgb(236, 190, 53)";

        while (isPlaying) {
            if (terminate) {
                l0.style.backgroundColor=null;
                l6.style.backgroundColor=null;
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
		    
		terminate = !terminate;
    
                compare.textContent=' ' + " No of Comparisons: ";
    
                for (let k=0;k<bars.length;k++) {
                    bars[k].style.backgroundColor="rgb(236, 190, 53)";
                }
    
                terminate = !terminate;
                return;
            }
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
    
        if (terminate) {
            l0.style.backgroundColor=null;
            l6.style.backgroundColor=null;
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
    }
    l6.style.backgroundColor=null;

    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "rgb(49, 226, 13)";
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
