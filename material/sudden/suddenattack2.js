const sudden_restart = () => {
    var target = ['ez', 'hd', 'nm', 'shd'];
    for (i = 4; i >= 1; i--){
        var sudden_target = Math.floor(Math.random()*target.length);
        document.getElementById('sudden_'+i).style.backgroundImage = "url('./material/sudden/target_"+i+".png')";
        document.getElementById('sudden_'+i).setAttribute('difficulty', target[sudden_target]);
        target.splice(sudden_target, 1);
    }
    document.getElementById('sudden_pick').style.pointerEvents = 'all';
}

const sudden_attack = (num) => {
    var target_id = 'sudden_'+num
    var sudden_diff = document.getElementById(target_id).getAttribute('difficulty');
    switch(sudden_diff){
        case 'ez':
            document.getElementById(target_id).style.backgroundImage = "url('./material/sudden/youselected_ez.png')";
            break;
        case 'nm':
            document.getElementById(target_id).style.backgroundImage = "url('./material/sudden/youselected_nm.png')";
            break;
        case 'hd':
            document.getElementById(target_id).style.backgroundImage = "url('./material/sudden/youselected_hd.png')";
            break;
        case 'shd':
            document.getElementById(target_id).style.backgroundImage = "url('./material/sudden/youselected_shd.png')";
            break;
        default:
            break;
    }
    document.getElementById('sudden_pick').style.pointerEvents = 'none';
}

sudden_all_show.onclick = () => {
    for (var i = 1; i <= 4; i++){
        sudden_attack(i);
    }
}

sudden_reroll.onclick = () => {
    for (var i = 1; i <= 4; i++){
        sudden_attack(i);
    }
    setTimeout(function(){sudden_restart();}, 500);
}

sudden_1.onclick = () => {
    sudden_attack(1);
}

sudden_2.onclick = () => {
    sudden_attack(2);
}

sudden_3.onclick = () => {
    sudden_attack(3);
}

sudden_4.onclick = () => {
    sudden_attack(4);
}