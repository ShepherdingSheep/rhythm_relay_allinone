let targetnumber_1 = Math.floor(Math.random()*40)+1;
let targetnumber_2 = Math.floor(Math.random()*40)+1;
let targetnumber_3 = Math.floor(Math.random()*40)+1;

do {
    targetnumber_1 = Math.floor(Math.random()*40)+1;
    targetnumber_2 = Math.floor(Math.random()*40)+1;
    targetnumber_3 = Math.floor(Math.random()*40)+1;
} while (targetnumber_1 != targetnumber_2 != targetnumber_3)

let starscore = 0;
let last_paper = 40;
let last_probable = 2.5;
let coin = 0;
const wrongsong = new Audio('./material/gacha_soldier/sound/Quiz-Wrong_Buzzer02-1.mp3');
const rightsong = new Audio('./material/gacha_soldier/sound/Quiz-Question02-1.mp3');

for (var i = 0; i < 40; i++){
    var selection = document.createElement('div');
    selection.className = 'paper';
    selection.innerHTML = (i+1);
    selection.id = 'paper_'+(i+1);
    var clickfunction = 'SelectPaper('+(i+1)+')';
    selection.setAttribute('onclick', clickfunction);
    document.getElementById('bobgi_pan').appendChild(selection);
};

const SelectPaper = (num) => {
    var targetid = 'paper_'+num
    if (num == targetnumber_1 || num == targetnumber_2 || num == targetnumber_3){
        document.getElementById(targetid).classList.add('youwin');
        document.getElementById(targetid).innerHTML = '☆'
        last_paper -= 1;
        starscore += 1;
        coin -= 1;
        last_probable = (1/last_paper*100).toFixed(2);
        document.getElementById('status_lastPaper').innerHTML = last_paper;
        document.getElementById('status_probable').innerHTML = last_probable;
        setTimeout(function(){rightsong.play();}, 300);
        setTimeout(function(){rightsong.pause(); rightsong.currentTime = 0;}, 2000);
        getscore();
        coin_action();
    } else{
        document.getElementById(targetid).classList.add('notover');
        document.getElementById(targetid).innerHTML = '아냐~';
        last_paper -= 1;
        last_probable = (1/last_paper*100).toFixed(2);
        coin -= 1;
        document.getElementById('status_lastPaper').innerHTML = last_paper;
        document.getElementById('status_probable').innerHTML = last_probable;
        gacha_number.splice(gacha_number.indexOf(num), 1);
        setTimeout(function(){wrongsong.play();}, 300);
        coin_action();
        setTimeout(function(){document.getElementById(targetid).style.visibility='hidden';}, 2000);
        setTimeout(function(){wrongsong.pause(); wrongsong.currentTime = 0;}, 800);
    }
    document.getElementById('left_bomb').innerHTML = gacha_number.length;
};

const getscore = () => {
    if(starscore == 3){
        for (i = 0; i < document.getElementsByClassName('youwin').length; i++){
            document.getElementsByClassName('youwin').item(i).innerHTML = '끝!'
        }
        coin = 0;
        document.getElementById('dragon_ball').innerHTML = '★ 퇴 ★ 근 ★';
        document.getElementById('bobgi_pan').style.pointerEvents = 'none';
    } else if (starscore == 2){
        document.getElementById('dragon_ball').innerHTML = '★ ★ ☆ (1개 찾으면 퇴근)';
    } else if (starscore == 1){
        document.getElementById('dragon_ball').innerHTML = '★ ☆ ☆ (2개 찾으면 퇴근)';
    } 

    
}

const coin_action = () => {
    if(coin >= 1){
        document.getElementById('bobgi_pan').style.pointerEvents = 'all';
        document.getElementById('credit_coin').innerHTML = coin;
    } else{
        document.getElementById('bobgi_pan').style.pointerEvents = 'none';
        document.getElementById('credit_coin').innerHTML = coin;
    }
}

const coin_in = (num) => {
    coin += num;
    coin_action();
}