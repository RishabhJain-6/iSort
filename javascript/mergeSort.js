const container = document.querySelector(".vrsplit1");
const container2 = document.querySelector(".vrsplit2");

let isPlaying = false;
const pausePlayBtn = document.getElementById("pauseButton");

let terminate = false;

var count = 0;
const compare = document.getElementById("comp");

function generatebars(num) {
    container.innerHTML = ""
    for (let i = 0; i < num; i += 1) {
        const value = Math.floor(Math.random() * (180 - 9) + 9) + 1;

        const bar = document.createElement("div");

        bar.classList.add("bar");
        bar.style.height = `${value / 2}%`;

        const barLabel = document.createElement("label");
        barLabel.classList.add("bar__id");
        barLabel.innerHTML = value;

        if (num > 80) {
            barLabel.style.display = 'none';
        }

        if (num <= 40) {
            if (num <= 10) {
                barLabel.style.fontSize = 'xxx-large';
            }
            else if (num <= 20) {
                barLabel.style.fontSize = 'xx-large';
            }
            if (num > 20 && num <= 30) {
                barLabel.style.fontSize = 'x-large';
            }
            else if (num <= 40) {
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
    if (numele > 400) {
        window.alert("Upper bound is 400 bars. Kindly choose a value in that range!");
        n.value = 400;
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
    container.innerHTML = ""
    let values = Array.from({ length: num }, (_, i) => Math.max(num - i + 9, 10));
    for (let i = 0; i < num; i += 1) {
        const value = values[i];
        const bar = document.createElement("div");

        bar.classList.add("bar");
        bar.style.height = `${value / 2}%`;

        const barLabel = document.createElement("label");
        barLabel.classList.add("bar__id");
        barLabel.innerHTML = value;

        if (num > 80) {
            barLabel.style.display = 'none';
        }

        if (num <= 40) {
            if (num <= 10) {
                barLabel.style.fontSize = 'xxx-large';
            }
            else if (num <= 20) {
                barLabel.style.fontSize = 'xx-large';
            }
            if (num > 20 && num <= 30) {
                barLabel.style.fontSize = 'x-large';
            }
            else if (num <= 40) {
                barLabel.style.fontSize = 'large';
            }
        }
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}

function generatebarsBest(num) {
    container.innerHTML = "";
    let b = Math.floor(Math.random() * (2-0)+0) + 1;
    let values;
    if (b==1) {
        const a = Math.floor(Math.random() * (50-9)+9) + 1;
        values = Array(num).fill().map(() => a);
    }
    else {
        values = Array.from({ length: num }, (_, i) => i + 1 + 9);
    }
    for (let i = 0; i < num; i += 1) {
        const value = values[i];
        const bar = document.createElement("div");

        bar.classList.add("bar");
        bar.style.height = `${value / 2}%`;

        const barLabel = document.createElement("label");
        barLabel.classList.add("bar__id");
        barLabel.innerHTML = value;

        if (num > 80) {
            barLabel.style.display = 'none';
        }

        if (num <= 40) {
            if (num <= 10) {
                barLabel.style.fontSize = 'xxx-large';
            }
            else if (num <= 20) {
                barLabel.style.fontSize = 'xx-large';
            }
            if (num > 20 && num <= 30) {
                barLabel.style.fontSize = 'x-large';
            }
            else if (num <= 40) {
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

count = 0;

var l0 = document.getElementById("line0");
var l1 = document.getElementById("line1");
var l2 = document.getElementById("line2");
var l3 = document.getElementById("line3");
var l4 = document.getElementById("line4");
var l5 = document.getElementById("line5");
var l6 = document.getElementById("line6");
var l7 = document.getElementById("line7");
var l8 = document.getElementById("line8");
var l9 = document.getElementById("line9");
var l10 = document.getElementById("line10");
var l11 = document.getElementById("line11");
var l12 = document.getElementById("line12");
var l13 = document.getElementById("line13");
var l14 = document.getElementById("line14");
var l15 = document.getElementById("line15");
var l16 = document.getElementById("line16");
var l17 = document.getElementById("line17");
var l18 = document.getElementById("line18");
var l19 = document.getElementById("line19");
var l20 = document.getElementById("line20");
var l21 = document.getElementById("line21");
var l22 = document.getElementById("line22");

async function merge(bars, p, q, r) {
   
    l5.style.backgroundColor = "cyan";
    
    l6.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l6.style.backgroundColor = null;
    let n1 = q - p + 1;
    let n2 = r - q;

    l7.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l7.style.backgroundColor = null;
    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = bars[p + i].childNodes[0].innerHTML;
    }

    for (let j = 0; j < n2; j++) {
        R[j] = bars[q + j + 1].childNodes[0].innerHTML;
    }

    l8.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l8.style.backgroundColor = null;
    let i = 0;
    let j = 0;
    let k = p;


    while (i < n1 && j < n2) {

        l9.style.backgroundColor = "cyan";

        var v1 = parseInt(L[i]);
        var v2 = parseInt(R[j]);


        if (v1 <= v2) {

            l10.style.backgroundColor = "cyan";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            l10.style.backgroundColor = null;

            l11.style.backgroundColor = "cyan";
            bars[k].style.height = `${L[i]/ 2}%`;
            bars[k].childNodes[0].innerText = L[i];

            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            l11.style.backgroundColor = null;

            l12.style.backgroundColor = "cyan";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            l12.style.backgroundColor = null;            
            i++;

        } else {

            l13.style.backgroundColor = "cyan";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            l13.style.backgroundColor = null;

            l14.style.backgroundColor = "cyan";
            bars[k].style.height = `${R[j]/ 2}%`;
            bars[k].childNodes[0].innerText = R[j];

            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            l14.style.backgroundColor = null;

            l15.style.backgroundColor = "cyan";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            l15.style.backgroundColor = null;
            j++;
        }
        count++;
        k++;

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l9.style.backgroundColor = null;
    }

    while (i < n1) {

        l16.style.backgroundColor = "cyan";

        l17.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l17.style.backgroundColor = null;

        bars[k].style.height = `${L[i]/ 2}%`;
        bars[k].childNodes[0].innerText = L[i];

        l18.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l18.style.backgroundColor = null;

        i++;
        k++;
        count++;

        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l16.style.backgroundColor = null;
    }

    while (j < n2) {

        l19.style.backgroundColor = "cyan";

        l20.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l20.style.backgroundColor = null;

        bars[k].style.height = `${R[j]/ 2}%`;
        bars[k].childNodes[0].innerText = R[j];

        l21.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l21.style.backgroundColor = null;
        j++;
        k++;
        count++;

        l19.style.backgroundColor = null;
    }

    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l5.style.backgroundColor = null;

}                       

async function mergeSort(bars, p, r) {
    
    if (p>=r || terminate) {
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

    l1.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l1.style.backgroundColor = null;

    if (p < r) {
        l2.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l2.style.backgroundColor = null;

        let q = Math.floor((p + r) / 2);
        
        if (terminate) {
            return;
        }

        for (let k=p;k<=(q);k++) {
            bars[k].style.backgroundColor="aqua";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        for (let k=p;k<=(q);k++) {
            bars[k].style.backgroundColor="rgb(236, 190, 53)";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }

        l3.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l3.style.backgroundColor = null;

        await mergeSort(bars, p, q);

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


        if (terminate) {
            return;
        }

        for (let k=q+1;k<=(r);k++) {
            bars[k].style.backgroundColor="aqua";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        for (let k=q+1;k<=(r);k++) {
            bars[k].style.backgroundColor="rgb(236, 190, 53)";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }

        l4.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l4.style.backgroundColor = null;

        await mergeSort(bars, q + 1, r);

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

        if (terminate) {
            return;
        }

        for (let k=p;k<=(r);k++) {
            bars[k].style.backgroundColor="aqua";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        for (let k=p;k<=(r);k++) {
            bars[k].style.backgroundColor="rgb(236, 190, 53)";
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }

        l5.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l5.style.backgroundColor = null;

        await merge(bars, p, q, r);
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

        if (terminate) {
            return;
        }
    }

    l22.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l22.style.backgroundColor = null;
}

async function MergeSort() {
    count = 0;
    let bars = document.querySelectorAll(".bar");

    l0.style.backgroundColor = "lightgreen";

    let p = 0;
    let r = bars.length - 1;

    await mergeSort(bars, p, r);

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

    l0.style.backgroundColor =null;

}


function delaySet() {
    delay = 5000;
    var s = document.getElementById("speeder");
    var d = parseInt(s.value);
    delay = delay / d;
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
