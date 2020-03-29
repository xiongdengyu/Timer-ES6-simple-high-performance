# Timer

A implementation of timer.It offers pause,reverse,play,accelerate,jump methods

## use(es6 only for now

```javascript
import Timer from "pathToIndex/index.js";

const timer = new Timer();
//before use it, you have to start it, like this,
timer.start(); //now timer is 0ms

//get current time after start is called
timer.now();

//pause timer
timer.pause();

//play it again
timer.play();

//jump to any moment, for example, jump to 3000ms
timer.jump(3000);

//accelerate timer
timer.accelerate(rate);
//attention this rate is relative to realtime.
//So call timer.accelerate(2) twice, rate is still 2;

//reverse timer
timer.reverse();
```
