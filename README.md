# WebAPI-Simplified-Audio
A simplified example for WebAPI Audio. This example app uses the least amount of javascript and css possible.

In the future, I may get this down to a single page example + audio samples. For now, download the bundle and load `index.html` into your webbrowser.

The app uses the WebAPI 'Audio' object, as well as BOM (Browser Object Model) Objects.

* https://www.w3schools.com/jsref/dom_obj_audio.asp 

The example expects everything to work.

* When the app starts, it plays a trumpet "fanfare" an `ogg` audio clip.
* The "Play Other" is the "ice cream truck" song - a `wav` audio clip.
* The "Play Buddy Holly" is Buddy Holly's song entitled "Everyday".

## BUGS

* I could not get `audio.duration` to work.

## Security
* The following excessive security permissions were set
```
    <meta http-equiv="Content-Security-Policy" 
             content="default-src *; 
                      style-src * 'self' 'unsafe-inline' 'unsafe-eval'; 
                      script-src * 'self' 'unsafe-inline' 'unsafe-eval';">
```
* For `style-src * 'self' 'unsafe-inline' 'unsafe-eval'`
    * `'unsafe-eval'` can be removed.
    * `'unsafe-inline'` is required anytime `style` is used.

* For `script-src * 'self' 'unsafe-inline' 'unsafe-eval'`
    * I did not really figure this out, but appears it wants just Objects.
    * It is unclear how to autoload code, or hook to autoload code.

This app does not address audio clips not the mobile device. Doing so will require setting CORS (Cross Origin Resource Sharing) [wikipedia](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - which, as of this date (2018-10-19), is still buggy.
