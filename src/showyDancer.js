var ShowyDancer = function (top, left, timeBetweenSteps) {
  BadDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('showy-dancer');
  this.dancersIndex = window.dancers.length;
  console.log(window.dancers.length);
}

ShowyDancer.prototype = Object.create(BadDancer.prototype);
ShowyDancer.prototype.constructor = ShowyDancer;

ShowyDancer.prototype.step = function () {
  BadDancer.prototype.step.call(this);
  var showingOff = false;
  for (var i = 0; i < window.dancers.length; i++) {
    if (this.dancersIndex !== i) {
      if (window.dancers[i].top - this.top)
    }
  }
}

ShowyDancer.prototype.showOff = function () {
  alert("I'm showing off!");
}
