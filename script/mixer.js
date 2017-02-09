var Mixer = (function(){
    var channels = [];
    var mute = false;
    var mainGain = audioCtx.createGain();
    mainGain.connect(audioCtx.destination);


    function addChannel (osc){
        var gain = audioCtx.createGain()
        osc.connect(gain);
        gain.connect(mainGain);
        gain.gain.value = .2;
        osc.start();
    }

    function muteAll(){
        if(mute){
            mainGain.disconnect(audioCtx.destination);
            mute = false;
        }   
        else{
            mainGain.connect(audioCtx.destination);
            mute = true;
        }
    }

    return{
        addChannel:addChannel,
        muteAll:muteAll
    }
}())