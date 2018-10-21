window.onload = function () {
    //JS_VAR
    var monitor = document.getElementById('monitor');
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

    var operand1 = 0;
    var operand2 = null;
    var cur_op = null;
    var eq_operand2 = null;
    var eq_op = null;

    //
    function updateDisplay(x) {
        monitor.innerText = x;
    }

    bclr.onclick = function () {
        operand1 = 0;
        operand2 = null;
        cur_op = null;
        eq_operand2 = null;
        eq_op = null;
        updateDisplay("0");
    }

    function onDigit(d) {
        if (cur_op != null) {
            if (operand2 == null)
                operand2 = 0;
            operand2 = operand2 * 10 + d;
            updateDisplay(operand2);
        } else {
            // save to operand1
            if (eq_operand2 != null) {
                operand1 = d;
            } else {
                operand1 = operand1 * 10 + d;
            }
            updateDisplay(operand1);
        }
        eq_operand2 = null;
        eq_op = null;
    }

    //BUTTON_INPUT

    n1.onclick = function () {
        onDigit(1);
    }

    n2.onclick = function () {
        onDigit(2);
    }

    n3.onclick = function () {
        onDigit(3);
    }

    n4.onclick = function () {
        onDigit(4);
    }

    n5.onclick = function () {
        onDigit(5);
    }

    n6.onclick = function () {
        onDigit(6);
    }

    n7.onclick = function () {
        onDigit(7);
    }

    n8.onclick = function () {
        onDigit(8);
    }

    n9.onclick = function () {
        onDigit(9);
    }

    n0.onclick = function () {
        onDigit(0);
    }

    //BUTTON_CULCULATE
    function calc(x, y, op) {
        var res;
        switch (op) {
            case '+': // if (op=='+')
                res = x + y;
                break;
            case '-':
                res = x - y;
                break;
            case '*':
                res = x * y;
                break;
            case '/':
                res = x / y;
                break;
        }
        return res;
    }

    function onOp(op) {
        if (cur_op != null && operand2 != null) {
            var res = calc(operand1, operand2, cur_op);
            updateDisplay(res);
            operand1 = res;
        }
        cur_op = op;
        operand2 = null;
        eq_operand2 = null;
        eq_op = null;
    }



    bplu.onclick = function () {
        onOp("+");
    }

    bmi.onclick = function () {
        onOp("-");
    }

    bmul.onclick = function () {
        onOp("*");
    }

    bex.onclick = function () {
        onOp("/");
    }



    beql.onclick = function () {
        if (cur_op != null) {
            eq_op = cur_op;
        }

        if (eq_operand2 == null) {
            if (operand2 == null) {
                eq_operand2 = operand1;
            } else {
                eq_operand2 = operand2;
            }
        }

        if (eq_op != null) {
            var res = calc(operand1, eq_operand2, eq_op);
            updateDisplay(res);
            operand1 = res;
        }
        cur_op = null;
        operand2 = null;
    }
}