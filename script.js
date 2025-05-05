var isStop = true;
    var s = 0;
    var min = 0;
    var hr = 0;

    function start() {
        console.log("starting");
        if (isStop == true) {
            isStop = false;
            timer();
        }
    }

    function timer() {
        if (isStop == false) {
            s++;
            if (s == 60) {
                s = 0;
                min++;
            }

            if (min == 60) {
                min = 0;
                hr++;
            }

            let displayS = s < 10 ? "0" + s : s;
            let displayMin = min < 10 ? "0" + min : min;
            let displayHr = hr < 10 ? "0" + hr : hr;

            document.getElementById("stopwatch").innerHTML = displayHr + " : " + displayMin + " : " + displayS;
            setTimeout(timer, 1000);
        }
    }

    function stop() {
        isStop = true;
    }

    function reset() {
        isStop = true;
        s = 0;
        min = 0;
        hr = 0;
        document.getElementById("stopwatch").innerHTML = "00 : 00 : 00";
    }