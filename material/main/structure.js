function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}

for(var i = 0; i < 6; i++){
    document.getElementsByClassName('contents').item(i).style.height = vh(100)+'px';
};

document.getElementById('bobgi_pan').style.height = vh(100)-300+'px';
document.getElementById('alpha_pan').style.height = vh(100)-300+'px';
document.getElementById('key_pick').style.height = vh(100)-300+'px';
document.getElementById('member_pick').style.height = vh(100)-300+'px';
document.getElementById('sudden_pick').style.height = vh(100)-300+'px';
document.getElementById('arcaea_machine').style.height = vh(100)-300+'px';
document.getElementById('fucked_pick').style.height = vh(100)+'px';

const reroad = () => {
    for(var i = 0; i < 6; i++){
        document.getElementsByClassName('contents').item(i).style.height = vh(100)+'px';
    };
    
    document.getElementById('bobgi_pan').style.height = vh(100)-300+'px';
    document.getElementById('alpha_pan').style.height = vh(100)-300+'px';
    document.getElementById('key_pick').style.height = vh(100)-300+'px';
    document.getElementById('member_pick').style.height = vh(100)-300+'px';
    document.getElementById('sudden_pick').style.height = vh(100)-300+'px';
    document.getElementById('arcaea_machine').style.height = vh(100)-300+'px';
}

window.onresize = () =>{
    reroad();
}

items_gachasanai.onclick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

items_alphabet.onclick = () => {
    goforthe(1);
};

items_keygacha.onclick = () => {
    goforthe(2);
    key_restart();
};

items_membergacha.onclick = () => {
    goforthe(3);
    muse_restart();
};

items_arcaeagacha.onclick = () => {
    goforthe(4);
    arcaea_restart();
};

items_sudden.onclick = () => {
    goforthe(5);
    sudden_restart();
};

items_setting.onclick = () => {
    goforthe(6);
};

items_credit.onclick = () => {
    alert('제작: 양치기양 \n코딩: 양치기양 \n기획: 양치기양 \n디자인: 양치기양 \n대부분 모든 거: 양치기양\n뽑기에 나오는 갈하는 김편집 사진: Kaere 님')
};

const goforthe = (num) => {
    height = window.innerHeight;
    var goto = num * window.innerHeight;
    window.scrollTo({top: goto, behavior: 'smooth'});
};