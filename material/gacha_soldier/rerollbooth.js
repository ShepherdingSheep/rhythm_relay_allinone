let alpha_target = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J' ,'K', 'L', 'M', 'O', 'P', 'Q', 'U', 'V', 'W', 'X', 'Z'];
let alpha_nonetarget = ['E', 'N', 'R', 'S', 'T', 'Y'];
const rolling_sound = new Audio('./material/sound_archive/rolling.wav');
const rolling_done_sound = new Audio('./material/sound_archive/rolling_done.wav');

const alpha_target_change = () => {
    document.getElementById('alpha_pan_target').innerHTML = '';
    document.getElementById('alpha_pan_ban').innerHTML = '';
    for (var i = 0; i < alpha_target.length; i++){
        document.getElementById('alpha_pan_target').innerHTML += alpha_target[i]+' ';
    }
    for (var i = 0; i < alpha_nonetarget.length; i++){
        document.getElementById('alpha_pan_ban').innerHTML += alpha_nonetarget[i]+' ';
    }
}

const alpha_reroll = (seed) => {
    var alpha_seed = 0;
    switch (true){
        case (seed <= 100):
            alpha_seed = seed * 20;
            break;
        case (seed <= 500):
            alpha_seed = seed * 4;
            break;
        case (seed <= 800):
            alpha_seed = seed * 2.5;
            break;
        case (seed <= 1000):
            alpha_seed = seed * 2;
            break;
    };
    rolling_sound.currentTime = 0;
    rolling_sound.play();
    var alpha_nowrolling = setInterval(function(){
        var random_number = 0;
        document.getElementById('alpha_roll').style.pointerEvents = 'none';
        random_number = Math.floor(Math.random()*alpha_target.length);
        if(alpha_target[random_number] == 'A'){
            document.getElementById('a_slot_1').innerHTML = alpha_target[alpha_target.length-1];
        } else {
            document.getElementById('a_slot_1').innerHTML = alpha_target[random_number-1];
        };
        document.getElementById('a_slot_2').innerHTML = alpha_target[random_number];
        if(alpha_target[random_number] == 'Z'){
            document.getElementById('a_slot_3').innerHTML = alpha_target[0];
        } else {
            document.getElementById('a_slot_3').innerHTML = alpha_target[random_number+1];
        };
    }, 50);
    setTimeout(function(){clearInterval(alpha_nowrolling); document.getElementById('alpha_roll').style.pointerEvents = 'all';rolling_sound.pause();rolling_done_sound.currentTime=0;rolling_done_sound.play();}, alpha_seed);
    setTimeout(function(){rolling_done_sound.pause();},alpha_seed+1000);
}

in_alphabet_ban.onkeyup = () => {
    if(window.event.keyCode == 13){
        document.getElementById('alpha_ban').click();
    }
}

in_alphabet_pick.onkeyup = () => {
    if(window.event.keyCode == 13){
        document.getElementById('alpha_pick').click();
    }
}

alpha_ban.onclick = () => {
    var ban_value = document.getElementById('in_alphabet_ban').value;
    if(alpha_target.indexOf(ban_value) != -1){
        alpha_target.splice(alpha_target.indexOf(ban_value), 1);
        alpha_nonetarget.push(ban_value);
        alpha_target.sort();
        alpha_nonetarget.sort();
        alpha_target_change();
    }
    document.getElementById('in_alphabet_ban').value = '';
}

alpha_pick.onclick = () => {
    var pick_value = document.getElementById('in_alphabet_pick').value;
    if(alpha_nonetarget.indexOf(pick_value) != -1){
        alpha_nonetarget.splice(alpha_nonetarget.indexOf(pick_value), 1);
        alpha_target.push(pick_value);
        alpha_nonetarget.sort();
        alpha_target.sort();
        alpha_target_change();
    }
    document.getElementById('in_alphabet_pick').value = '';
}

alpha_roll.onclick = () => {
    let seed_p = new Date().getMilliseconds();
    alpha_reroll(seed_p);
}