'use strict'

const img = ['p012.png', 'p013.png', 'p014.png', 'p022.png', 'p023.png', 'p024.png', 'p032.png', 'p033.png'];
var plateNo = ['plate011', 'plate012', 'plate013', 'plate021', 'plate022', 'plate023', 'plate031', 'plate032'];
var setout = 0;
var box = [];
var e = 0;
var notimg = 'plate033';
var x = 0;
var y = 0;
var l = 0;
var checkpushin = [];
const plateNocheck = ['plate011', 'plate012', 'plate013', 'plate021', 'plate022', 'plate023', 'plate031', 'plate032'];
var okcount = 0;

function start() {
    if (e === 0) {
        const nine = document.getElementById('plate033');
        nine.querySelector("img").remove();
        let i = 8;
        let k = 0;
        while (i !== 0) {
            var boxpo = Math.floor(Math.random() * i);
            var pushName = plateNo[boxpo];
            box.push(pushName);
            plateNo.splice(boxpo, 1);
            var set = document.getElementById(box[k])
            set.querySelector("img").remove();
            var imgreset = document.createElement('img');
            imgreset.src = ('./img/' + img[k]);
            set.appendChild(imgreset);
            k = k + 1;
            i = i - 1;
            // console.log(k + '回目 i= ' + i + box)
        }
        e = 1;
    }
}

function chenge() {
    var chbox = document.getElementById('plate031');
    var chimg = document.createDocumentFragment();
    var chbox2 = document.getElementById('plate032');
    var chimg2 = document.createDocumentFragment();
    var itemch;
    var itemch2;
    while (itemch = chbox.firstChild) {
        chimg.appendChild(itemch);
    };
    while (itemch2 = chbox2.firstChild) {
        chimg2.appendChild(itemch2);
    };
    chbox.appendChild(chimg2);
    chbox2.appendChild(chimg);
};



//キーが押されたときに呼び出される関数
addEventListener("keydown", keydownfunc);
function keydownfunc(event) {
    if (e === 1) {

        x = 0;
        y = 0;

        var key_code = event.keyCode;
        console.log(notimg);
        if (key_code === 39) {
            if (notimg === 'plate011' || notimg === 'plate021' || notimg === 'plate031') {
                x = 0;
            } else { x = x - 1 }
        };	//左ボタン

        if (key_code === 40) {
            if (notimg === 'plate011' || notimg === 'plate012' || notimg === 'plate013') {
                y = 0;
            } else { y = y - 1 }
        };	//上ボタン

        if (key_code === 37) {
            if (notimg === 'plate013' || notimg === 'plate023' || notimg === 'plate033') {
                x = 0;
            } else { x = x + 1 }
        };	//右ボタン

        if (key_code === 38) {
            if (notimg === 'plate033' || notimg === 'plate032' || notimg === 'plate031') {
                y = 0;
            } else { y = y + 1 }
        };	//下ボタン

        var cut1 = notimg.substring(notimg.indexOf('e') + 2);
        cut1 = Number(cut1) + y * 10 + x;
        var nextnot = ('plate0' + cut1);
        var outbox = document.getElementById(notimg);
        var inbox = document.getElementById(nextnot);
        var inimg = document.createDocumentFragment();
        var item;
        while (item = inbox.firstChild) {
            inimg.appendChild(item);
        }
        outbox.appendChild(inimg);
        notimg = nextnot;

        if (notimg === 'plate033') {
            while (l !== 8) {
                let name = plateNocheck[l];
                console.log(name);
                let check = document.getElementById(name);
                let check2 = check.querySelector('img');
                let src = check2.getAttribute('src');
                let checkpush = src.substring(src.indexOf('g/') + 2)
                checkpushin.push(checkpush);

                if (checkpushin[l] === img[l]) {
                    okcount = okcount + 1;
                }
                l = l + 1;
            }
        }
        if (okcount === 8) {
            var cong = document.getElementById('plate033');
            var congimg = document.createElement('img');
            congimg.src = ('./img/p034.png');
            cong.appendChild(congimg);
            console.log('完成したよ');
            e = 0;
            plateNo = plateNocheck
            notimg = 'plate033';
        }
    }

    checkpushin = [];
    l = 0;
    okcount = 0;
};