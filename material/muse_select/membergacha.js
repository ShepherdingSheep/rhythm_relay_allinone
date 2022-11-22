const muse_reroll = () => {
    var muse_target = [1,2,3,4]
    for (var i=3; i>=0; i--){
        var targetnumber = Math.floor(Math.random()*(i+1));
        document.getElementById('member_'+(i+1)).style.backgroundImage = "url('./material/muse_select/member/member"+(i+1)+"_nonactive.png')";
        document.getElementById('member_'+(i+1)).setAttribute('member',muse_target[targetnumber]);
        muse_target.splice(targetnumber, 1);
    }
    document.getElementById('member_pick').style.pointerEvents = 'all';
}

const muse_selection = (num) => {
    var muse_id = 'member_'+num;
    var member_id = document.getElementById(muse_id).getAttribute('member');
    switch(member_id){
        case '1':
            document.getElementById(muse_id).style.backgroundImage = "url('./material/muse_select/member/member_1.png')";
            console.log('1');
            break;
        case '2':
            document.getElementById(muse_id).style.backgroundImage = "url('./material/muse_select/member/member_2.png')";
            console.log('2');
            break;
        case '3':
            document.getElementById(muse_id).style.backgroundImage = "url('./material/muse_select/member/member_3.png')";
            console.log('3');
            break;
        case '4':
            document.getElementById(muse_id).style.backgroundImage = "url('./material/muse_select/member/member_4.png')";
            console.log('4');
            break;
        default:
            break;
    }
    document.getElementById('member_pick').style.pointerEvents = 'none';
}

const muse_restart = () => {
    member_1.onmouseover = () => {
        document.getElementById('member_1').style.backgroundImage = "url('./material/muse_select/member/member1_hover.png')";
    }
    
    member_1.onmouseleave = () => {
        document.getElementById('member_1').style.backgroundImage = "url('./material/muse_select/member/member1_nonactive.png')";
    }

    member_2.onmouseover = () => {
        document.getElementById('member_2').style.backgroundImage = "url('./material/muse_select/member/member2_hover.png')";
    }
    
    member_2.onmouseleave = () => {
        document.getElementById('member_2').style.backgroundImage = "url('./material/muse_select/member/member2_nonactive.png')";
    }

    member_3.onmouseover = () => {
        document.getElementById('member_3').style.backgroundImage = "url('./material/muse_select/member/member3_hover.png')";
    }
    
    member_3.onmouseleave = () => {
        document.getElementById('member_3').style.backgroundImage = "url('./material/muse_select/member/member3_nonactive.png')";
    }
    
    member_4.onmouseover = () => {
        document.getElementById('member_4').style.backgroundImage = "url('./material/muse_select/member/member4_hover.png')";
    }
    
    member_4.onmouseleave = () => {
        document.getElementById('member_4').style.backgroundImage = "url('./material/muse_select/member/member4_nonactive.png')";
    }

    muse_reroll();
}

const muse_all_select = () => {
    for(var i=1; i<=4; i++){
        muse_selection(i)
    }
}

member_all_show.onclick = () => {
    muse_all_select();
}

member_1.onclick = () => {
    muse_selection(1);
    member_1.onmouseover = '';
    member_1.onmouseleave = '';
}

member_2.onclick = () => {
    muse_selection(2);
    member_2.onmouseover = '';
    member_2.onmouseleave = '';
}

member_3.onclick = () => {
    muse_selection(3);
    member_3.onmouseover = '';
    member_3.onmouseleave = '';
}

member_4.onclick = () => {
    member_4.onmouseover = '';
    member_4.onmouseleave = '';
    muse_selection(4);
}

member_reroll.onclick = () => {
    muse_all_select();
    setTimeout(function(){muse_restart();}, 500);
}