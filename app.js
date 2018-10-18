var webApp = {
    version : '1.0.0',
    song         : null,
    triggerEvent : 'click',
    audioFile    : 'fanfare3.ogg', 
    wavFile      : 'ice_cream_truck.wav',
    buddyFile    : 'BuddyHolly-Everyday.ogg',

    //
    hook : function () {
        document.getElementById('playOther').addEventListener(webApp.triggerEvent,
            function () { webApp.song.src = webApp.wavFile; webApp.song.play(); },
            false);
        document.getElementById('playBuddy').addEventListener(webApp.triggerEvent,
            function () { webApp.song.src = webApp.buddyFile; webApp.song.play(); },
            false);
    },
    //
    onDOMContentLoaded : function () {
        document.getElementById('navCodeName').innerHTML = navigator.appCodeName;
        document.getElementById('navName').innerHTML     = navigator.appName;
        document.getElementById('navVersion').innerHTML  = navigator.appVersion;
        document.getElementById('navPlatform').innerHTML = navigator.platform;
        //
        webApp.hook();
        webApp.song = new Audio();
        webApp.song.src = webApp.audioFile;
        webApp.song.play();
    }
}
