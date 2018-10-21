window.onload = function () {
    //JS_VAR
    var monitor = document.getElementById('monitor');

    var n = "";

    var n1 = document.getElementById('b1');
    var n2 = document.getElementById('b2');
    var n3 = document.getElementById('b3');
    var n4 = document.getElementById('b4');
    var n5 = document.getElementById('b5');
    var n6 = document.getElementById('b6');
    var n7 = document.getElementById('b7');
    var n8 = document.getElementById('b8');
    var n9 = document.getElementById('b9');
    var n0 = document.getElementById('b0');

    var bplu = document.getElementById('bplu');
    var bmi = document.getElementById('bmi');
    var bmul = document.getElementById('bmul');
    var bex = document.getElementById('bex');
    var bclr = document.getElementById('bclr');
    var beql = document.getElementById('beql');

    var dec = 0;

    var res;
    var res1;
    var res2;
    var sym1;
    var sym2;
    var res2_con;
    var sym1_con;
    //
    (n1, n2, n3, n4, n5, n6, n7, n8, n9, n0).value = (1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
    //BUTTON_INPUT
    function click(x) {
        monitor.innerText = n + x;
        n = n + x;
    }

    n1.onclick = function () {
        click("1");
    }
    n2.onclick = function () {
        click("2");
    }
    n3.onclick = function () {
        click("3");
    }
    n4.onclick = function () {
        click("4");
    }
    n5.onclick = function () {
        click("5");
    }
    n6.onclick = function () {
        click("6");
    }
    n7.onclick = function () {
        click("7");
    }
    n8.onclick = function () {
        click("8");
    }
    n9.onclick = function () {
        click("9");
    }
    n0.onclick = function () {
        click("0");
    }
    //BUTTON_CULCULATE
    bclr.onclick = function () {
        n = "\u0020";
        res = undefined;
        res1 = undefined;
        res2 = undefined;
        sym1 = undefined;
        sym2 = undefined;
        var dec = 0;
        document.getElementById("monitor").innerText = "0";
    }

    function cal() {
        if (sym1 == "plu") {
            res = res1 + res2
        } else if (sym1 == "mi")
        {
            res = res1 - res2
        } else if (sym1 == "mul")
        {
            res = res1 * res2
        } else if (sym1 == "ex")
        {
            res = res1 / res2
        }
        document.getElementById("monitor").innerText = res;
        res2_con = res2;
        sym1_con = sym1;
        res1 = res;
        sym1 = sym2;
    }

    function sym(sy) {
        if (sym1 == "eql" && n == "\u0020") {
            dec = dec + 1
            res1 = res;
            sym1 = sy;
        } else {
            dec = dec + 1
            if (dec == 1) {
                res1 = parseInt(n, 10);
                sym1 = sy;
            } else {
                res2 = parseInt(n, 10);
                sym2 = sy;
                cal();
            }
            n = "\u0020";
        }
    }

    bplu.onclick = function () {
        sym("plu");
    }
    bmi.onclick = function () {
        sym("mi");
    }
    bmul.onclick = function () {
        sym("mul");
    }
    bex.onclick = function () {
        sym("ex");
    }

    beql.onclick = function () {
        if (sym2 == "eql") {
            if (n != "\u0020") {
                if (dec == 0) {
                    monitor.innerText = n;
                } else {
                    res2 = parseInt(n, 10);
                    sym2 = "eql";
                    cal();
                    n = "\u0020";
                    res1 = 0;
                    res2 = 0;
                    dec = 0;
                }
            } else {
                res1 = res;
                res2 = res2_con;
                sym1 = sym1_con;
                cal();
                n = "\u0020";
                res1 = 0;
                res2 = 0;
                dec = 0;
            }
        } else {
            if (dec == 0) {
                monitor.innerText = n;
            } else {
                res2 = parseInt(n, 10);
                sym2 = "eql";
                cal();
                n = "\u0020";
                res1 = 0;
                res2 = 0;
                dec = 0;
            }
        }
    }
}