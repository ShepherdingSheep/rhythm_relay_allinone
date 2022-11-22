let gacha_number = [];
for (var i = 1; i<=40; i++){
    gacha_number.push(i);
}
gacha_number.splice(gacha_number.indexOf(targetnumber_1), 1);
gacha_number.splice(gacha_number.indexOf(targetnumber_2), 1);
gacha_number.splice(gacha_number.indexOf(targetnumber_3), 1);

open_target_1.onclick = () => {
    coin += 1;
    document.getElementById('paper_'+targetnumber_1).click();
    document.getElementById('open_target_1').innerHTML = '누름';
    document.getElementById('open_target_1').style.pointerEvents = 'none';
}

open_target_2.onclick = () => {
    coin += 1;
    document.getElementById('paper_'+targetnumber_2).click();
    document.getElementById('open_target_2').innerHTML = '누름';
    document.getElementById('open_target_2').style.pointerEvents = 'none';
}

open_target_3.onclick = () => {
    coin += 1;
    document.getElementById('paper_'+targetnumber_3).click();
    document.getElementById('open_target_3').innerHTML = '누름';
    document.getElementById('open_target_3').style.pointerEvents = 'none';
}

open_nonetarget.onclick = () => {
    var gesu_value = document.getElementById('nonetarget_gesu').value;
    for (var i = 0; i < gesu_value; i++){
        coin += 1;
        var touch_target = Math.floor(Math.random()*gacha_number.length);
        var selected_target = gacha_number[touch_target];
        document.getElementById('paper_'+selected_target).click();
        gacha_number.splice(touch_target, 0);
    }
    document.getElementById('nonetarget_gesu').value = '';
    document.getElementById('left_bomb').innerHTML = gacha_number.length;
}