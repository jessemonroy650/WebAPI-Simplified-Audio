# WebAPI-Simplified-Audio
A simplified example for WebAPI Audio. This example uses less CSS, less Javascript.

This example app uses the least amount of javascript and css possible. It only uses `cordova-plugin-media`. The plugin `cordova-plugin-file` is loaded automatically by *Phonegap Build*.

* When the app starts it plays a trumpet "fanfare" audio clip.
* The "Play Other" is the "ice cream truck" song.
* The "Play Buddy Holly" is Buddy Holly's song entitled "Everyday".

## Reference

https://www.w3schools.com/jsref/dom_obj_audio.asp

## BUGS

* I could not get `audio.duration` to work.
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
