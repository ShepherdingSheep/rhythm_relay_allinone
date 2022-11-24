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

const shoot_1 = new Audio('./material/sound_archive/shoot_2.wav');
const shoot_2 = new Audio('./material/sound_archive/shoot_1.wav');
const shoot_3 = new Audio('./material/sound_archive/shoot_3.wav');
const shoot_4 = new Audio('./material/sound_archive/shoot_4.wav');

const don_shoot = () => {
    var sudden_shoot = Math.round(Math.random()*3)+1;
    switch(sudden_shoot){
        case 1:
            shoot_1.currentTime = 0;
            shoot_1.play();
            setTimeout(function(){shoot_1.pause();}, 1000);
            break;
        case 2:
            shoot_2.currentTime = 0;
            shoot_2.play();
            setTimeout(function(){shoot_2.pause();}, 1000);
            break;
        case 3:
            shoot_3.currentTime = 0;
            shoot_3.play();
            setTimeout(function(){shoot_3.pause();}, 1000);
            break;
        case 4:
            shoot_4.currentTime = 0;
            shoot_4.play();
            setTimeout(function(){shoot_2.pause();}, 1000);
            break;
        default:
            shoot_1.currentTime = 0;
            shoot_1.play();
            setTimeout(function(){shoot_1.pause();}, 1000);
            break;
    }
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
    don_shoot();
}

sudden_2.onclick = () => {
    sudden_attack(2);
    don_shoot();
}

sudden_3.onclick = () => {
    sudden_attack(3);
    don_shoot();
}

sudden_4.onclick = () => {
    sudden_attack(4);
    don_shoot();
}