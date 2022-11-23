const arcaea_restart = () => {
    var arcaea_target = ['normal', 'hard', 'zekari', 'pakari', 'tempest'];
    for (var i = 0; i < 5; i++){
        var arcaea_random = Math.floor(Math.random()*arcaea_target.length);
        document.getElementById('arcaea_goods_'+(i+1)).setAttribute('src', `./material/arcaea_select/arcaea_drink/arcaea_${arcaea_target[arcaea_random]}.png`);
        arcaea_target.splice(arcaea_random, 1);
    }
    for (var i = 1; i < 6; i++){
        var target_img = 'arcaea_goods_'+i;
        document.getElementById(target_img).style.visibility = 'hidden';
    }
    document.getElementById('arcaea_menu_1').style.backgroundImage = "url('./material/arcaea_select/arcaea_drink/arcaea_can.png')";
    document.getElementById('arcaea_menu_2').style.backgroundImage = "url('./material/arcaea_select/arcaea_drink/arcaea_ddungcan.png')";
    document.getElementById('arcaea_menu_3').style.backgroundImage = "url('./material/arcaea_select/arcaea_drink/arcaea_pet.png')";
    document.getElementById('arcaea_menu_4').style.backgroundImage = "url('./material/arcaea_select/arcaea_drink/arcaea_ionpet.png')";
    document.getElementById('arcaea_menu_5').style.backgroundImage = "url('./material/arcaea_select/arcaea_drink/arcaea_powder.png')";
    document.getElementById('arcaea_machine').style.pointerEvents = 'all';
}

const arcaea_recollect = () => {
    for (var i = 1; i < 6; i++){
        arcaea_buy(i);
    }
    setTimeout(function(){arcaea_restart();},500);
    
}

const arcaea_show = () => {
    for (var i = 1; i < 6; i++){
        arcaea_buy(i);
    }
}

const arcaea_buy = (num) => {
    var target_id = 'arcaea_menu_'+num;
    var target_img = 'arcaea_goods_'+num;
    document.getElementById(target_id).style.backgroundImage = 'none';
    document.getElementById(target_img).style.visibility = 'visible';
}

arcaea_select_1.onclick = () => {
    document.getElementById('arcaea_machine').style.pointerEvents = 'none';
    arcaea_buy(1);
}

arcaea_select_2.onclick = () => {
    document.getElementById('arcaea_machine').style.pointerEvents = 'none';
    arcaea_buy(2);
}

arcaea_select_3.onclick = () => {
    document.getElementById('arcaea_machine').style.pointerEvents = 'none';
    arcaea_buy(3);
}

arcaea_select_4.onclick = () => {
    document.getElementById('arcaea_machine').style.pointerEvents = 'none';
    arcaea_buy(4);
}

arcaea_select_5.onclick = () => {
    document.getElementById('arcaea_machine').style.pointerEvents = 'none';
    arcaea_buy(5);
}

arcaea_reroll.onclick = () => {
    arcaea_recollect();
}

arcaea_all_show.onclick = () => {
    arcaea_show();
}