const container = document.querySelector(".vrsplit1");

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
    container.innerHTML = ""
    let values = Array.from({ length: num }, (_, i) => i + 1 + 9);
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

var l0 = document.getElementById("line0");
var l1 = document.getElementById("line1");
var l2 = document.getElementById("line2");
var l3 = document.getElementById("line3");
var l4 = document.getElementById("line4");
var l5 = document.getElementById("line5");
var l6 = document.getElementById("line6");
var l7 = document.getElementById("line7");
var l8 = document.getElementById('line8');
var l9 = document.getElementById('line9');
var l10 = document.getElementById('line10');
var l11 = document.getElementById('line11');
var l12 = document.getElementById('line12');
var l13 = document.getElementById('line13');
var l14 = document.getElementById('line14');
var l15 = document.getElementById('line15');
var l16 = document.getElementById('line16');
var l17 = document.getElementById('line17');
var l18 = document.getElementById('line18');
var l19 = document.getElementById('line19');

async function partition(bars, low, high) {
    l5.style.backgroundColor="lightgreen";
    var r = Math.floor(Math.random() * (high - low) + low);
    l6.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l6.style.backgroundColor = null;

    bars[r].style.backgroundColor = 'red';
    bars[low].style.backgroundColor = 'cyan';

    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));

    var t1 = bars[r].style.height;
    var t2 = bars[r].childNodes[0].innerText;
    bars[r].style.height = bars[low].style.height;
    bars[r].childNodes[0].innerText = bars[low].childNodes[0].innerText;
    bars[low].style.height = t1;
    bars[low].childNodes[0].innerText = t2;
    bars[r].style.backgroundColor = 'rgb(236, 190, 53)';
    bars[low].style.backgroundColor = 'rgb(236, 190, 53)'

    l7.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l7.style.backgroundColor = null;

    bars[low].style.backgroundColor = 'red';
    l8.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l8.style.backgroundColor = null;

    let small_no_count = 0;
    l9.style.backgroundColor = "cyan";
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l9.style.backgroundColor = null;


    l10.style.backgroundColor = 'cyan';
    while (isPlaying) {
        if (terminate) {
            l5.style.backgroundColor=null;
            l10.style.backgroundColor=null;
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
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    }

    if (terminate) {
        l5.style.backgroundColor=null;
        l10.style.backgroundColor=null;
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

    for (let i = low + 1; i <= high; i++) {
        var v1 = parseInt(bars[i].childNodes[0].innerText);
        var v2 = parseInt(bars[low].childNodes[0].innerText);

        l11.style.backgroundColor = 'cyan';
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l11.style.backgroundColor = null;
        if (v1 <= v2) {

            l12.style.backgroundColor = 'cyan';
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            l12.style.backgroundColor = null;
            small_no_count++;
            count++;
            
        }
        else{
            count++;
        }

        while (isPlaying) {
            if (terminate) {
                l5.style.backgroundColor=null;
                l10.style.backgroundColor=null;
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
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        }
    
        if (terminate) {
            l5.style.backgroundColor=null;
            l10.style.backgroundColor=null;
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
    }

    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l10.style.backgroundColor = null;

    l13.style.backgroundColor = 'cyan';

    bars[low + small_no_count].style.backgroundColor = 'cyan';
    var temp1 = bars[low + small_no_count].style.height;
    var temp2 = bars[low + small_no_count].childNodes[0].innerText;
    bars[low + small_no_count].style.height = bars[low].style.height;
    bars[low + small_no_count].childNodes[0].innerText = bars[low].childNodes[0].innerText;
    bars[low].style.height = temp1;
    bars[low].childNodes[0].innerText = temp2;
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay + 1000));
    l13.style.backgroundColor = null;

    bars[low].style.backgroundColor = 'rgb(236, 190, 53)';
    bars[low + small_no_count].style.backgroundColor = 'rgb(236, 190, 53)';


    let i = low;
    let j = high;

    l14.style.backgroundColor = 'cyan';

    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l14.style.backgroundColor = null;

    l15.style.backgroundColor = 'cyan';

    while (i < j) {
        let v3 = parseInt(bars[i].childNodes[0].innerText);
        let v4 = parseInt(bars[j].childNodes[0].innerText);
        let v5 = parseInt(bars[low + small_no_count].childNodes[0].innerText);

        if (v3 <= v5) {
            count++;
            l16.style.backgroundColor = 'cyan';
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            i++;
            l16.style.backgroundColor = null;
        }
        else if (v4 > v5) {
            count++;
            l17.style.backgroundColor = 'cyan';
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            j--;
            l17.style.backgroundColor = null;
        }
        else {
            l18.style.backgroundColor = 'cyan';
            var t1 = bars[i].style.height;
            var t2 = bars[i].childNodes[0].innerText;
            bars[i].style.backgroundColor = 'green';
            bars[j].style.backgroundColor = 'purple';
            bars[i].style.height = bars[j].style.height;
            bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
            bars[j].style.height = t1;
            bars[j].childNodes[0].innerText = t2;
            await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
            l18.style.backgroundColor = null;
            bars[i].style.backgroundColor = 'rgb(236, 190, 53)';
            bars[j].style.backgroundColor = 'rgb(236, 190, 53)';

            i++;
            j--;
        }

    }
    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l15.style.backgroundColor = null;

    l19.style.backgroundColor = 'cyan';

    await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
    l19.style.backgroundColor = null;
    l5.style.backgroundColor=null;
    return low + small_no_count;
}
async function Randomizedquicksort(bars, low, high) {
    if (low >= high || terminate) {
        count++;
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

            compare.textContent = ' ' + " No of Comparisons: ";

            for (let k = 0; k < bars.length; k++) {
                bars[k].style.backgroundColor = "rgb(236, 190, 53)";
            }
            return;
        }
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
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

        isPlaying = false;
        pausePlayBtn.textContent = 'Pause';
        
        compare.textContent = ' ' + " No of Comparisons: ";

        for (let k = 0; k < bars.length; k++) {
            bars[k].style.backgroundColor = "rgb(236, 190, 53)";
        }
        return;
    }

    if (low < high) {
        count++;

        l1.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l1.style.backgroundColor = null;

        var pidx = await partition(bars, low, high).then();

        l2.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l2.style.backgroundColor = null;

        await Randomizedquicksort(bars, low, pidx - 1);

        if (terminate) {
            return;
        }

        l3.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l3.style.backgroundColor = null;
        if (terminate) {
            return;
        }

        await Randomizedquicksort(bars, pidx + 1, high);

        l4.style.backgroundColor = "cyan";
        await new Promise((resolve) => setTimeout(() => { resolve(); }, delay));
        l4.style.backgroundColor = null;
    }
}

async function RandomizedQuickSort() {
    let bars = document.querySelectorAll(".bar");

    l0.style.backgroundColor = "lightgreen";

    let low = 0;
    let high = bars.length - 1;
    await Randomizedquicksort(bars, low, high);

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
    l0.style.backgroundColor=null;
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
