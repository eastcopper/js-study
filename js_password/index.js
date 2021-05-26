const pw = ['0', '1', '0', '2', '0', '3'];

const body = document.getElementById('body');
const input = document.getElementById('input')

window.onload = function () {
    for (let i = 0; i < body.children.length; i++) {
        for (let j = 0; j < body.children[i].children.length; j++) {
            if (i * 3 + j + 1 != 10) {
                body.children[i].children[j].innerHTML = i * 3 + j + 1;
            }
            else {
                body.children[i].children[j].innerHTML = 0;
            }
        }
    }
}

let value = [];
let sum = 0;

for (let i = 0; i < body.children.length; i++) {
    for (let j = 0; j < body.children[i].children.length; j++) {
        body.children[i].children[j].addEventListener('click', function () {
            value.push(body.children[i].children[j].innerHTML);
            if (value.length == pw.length) {
                for (let k = 0; k < pw.length; k++) {
                    if (value[k] == pw[k]) {
                        sum += 1;
                    }
                    else {
                        alert('fail');
                        sum = 0;
                        value = [];
                        break;
                    }
                }
                if (sum == pw.length) {
                    alert('success');
                    sum = 0;
                    value = [];
                }
            }
        })

    }
}