//utils
function timeNow() {
  return new Date().getTime();
}
function timePeriod(rate, time) {
  return (timeNow() - time) * rate;
}
class Timer {
  constructor() {
    this.init();
  }
  init() {
    this.startTime = 0;
    this.realTimePoint = 0;
    this.imaginTimepoint = 0;
    this.pauseFinishTimePoint = 0;
    this.accelerateTimePoint = 0;
    this.isPause = false;
    this.isJump = false;
    this.isStarted = false;
    this.isAcclerated = false;
    this.isChanged = false;
    this.output = 0;
    this.rate = 1;
  }
  start() {
    this.init();
    this.startTime = timeNow();
    this.isStarted = true;
    this.output = 0;
    return this;
  }
  now() {
    if (!this.isStarted) {
      return this.output;
    }
    if (this.isPause) {
      return this.output;
    }
    if (this.isJump) {
    }
    if (this.isAcclerated) {
      this.output =
        this.imaginTimepoint + timePeriod(this.rate, this.realTimePoint);
      return this.output;
    }
    if (this.isChanged) {
      this.output =
        this.imaginTimepoint + timePeriod(this.rate, this.realTimePoint);
      return this.output;
    }
    this.output = timePeriod(this.rate, this.startTime);
    return this.output;
  }
  jump(time) {
    this.realTimePoint = timeNow();
    this.output = this.imaginTimepoint = time;
    this.isChanged = true;
  }
  pause() {
    this.imaginTimepoint = this.now();
    this.realTimePoint = timeNow();
    this.isPause = true;
    this.isChanged = true;
  }
  play() {
    if (this.isPause) {
      this.realTimePoint = timeNow();
      this.imaginTimepoint = this.imaginTimepoint; //可以删除
      this.isPause = false;
      this.isChanged = true;
      return;
    }
    return;
  }
  accelerate(rate) {
    let tempRate = rate;
    if (this.rate == tempRate) {
      return;
    }
    if (this.rate < 0) {
      tempRate = -tempRate;
    }
    this.imaginTimepoint = this.now();
    this.realTimePoint = timeNow();
    this.rate = tempRate;
    this.isAcclerated = true;
    this.isChanged = true;
  }
  reverse() {
    this.imaginTimepoint = this.now();
    this.rate = -this.rate;
    this.realTimePoint = timeNow();
    this.isAcclerated = true;
    this.isChanged = true;
  }
  update(targets, callback) {
    //TODO:
    let len = targets.length;
    let cur = this.now();
    for (let i = 0; i < len; i++) {
      callback(targets[i], len, cur);
    }
  }
}
export default Timer;
