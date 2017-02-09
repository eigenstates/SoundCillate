var Sound = (function(){

    var oscillator = function(freq){
        var osc = audioCtx.createOscillator();
        osc.type = 'square';
        osc.frequency.value = freq;
        return osc;
    }

    return{
        oscillator:oscillator
    }
}())
