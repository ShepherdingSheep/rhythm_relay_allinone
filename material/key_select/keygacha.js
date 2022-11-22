const key_turn = (num) => {
    var key_id = 'key_'+num;
    var key_img_id = 'key_img_'+num;
    var key_turn_target = document.getElementById(key_id);
    key_turn_target.classList.add('key_selected');
    setTimeout(function(){key_turn_target.classList.remove('key_selected');},2000);
    document.getElementById('key_pick').style.pointerEvents = 'none';
    setTimeout(function(){document.getElementById(key_img_id).style.visibility='visible';key_turn_target.style.backgroundImage="url('./material/key_select/rear_active.png')";}, 1000);
};

const key_restart = () => {
    var targetnum = [4,5,6,8];
    for(var i=3; i>=0; i--){
        var key_target = Math.floor(Math.random()*(i+1));
        var img_name = './material/key_select/key_img/key_img_'+targetnum[key_target]+'.png'
        targetnum.splice(key_target, 1);
        document.getElementById('key_img_'+(i+1)).setAttribute('src', img_name);
    }
    for(var i=1; i<5; i++){
        var key_id = 'key_'+i;
        var key_img_id = 'key_img_'+i;
        var key_turn_target = document.getElementById(key_id);
        key_turn_target.style.backgroundImage = '';
        document.getElementById(key_img_id).style.visibility = 'hidden';
    }
    document.getElementById('key_pick').style.pointerEvents = 'all';
};

key_1.onclick = key_b1.onclick = () => {
    key_turn(1);
}

key_2.onclick = key_b2.onclick = () => {
    key_turn(2);
}

key_3.onclick = key_b3.onclick = () => {
    key_turn(3);
}

key_4.onclick = key_b4.onclick = () => {
    key_turn(4);
}

key_reroll.onclick = () => {
    for(var i=1; i<5; i++){
        var key_id = 'key_'+i;
        var key_img_id = 'key_img_'+i;
        var key_turn_target = document.getElementById(key_id);
        key_turn_target.style.backgroundImage = 'url(./material/key_select/rear_active.png)';
        document.getElementById(key_img_id).style.visibility = 'visible';
    }
    setTimeout(function(){
        key_restart();
    }, 1000)
}