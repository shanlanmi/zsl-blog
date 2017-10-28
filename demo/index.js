(function () {
  var speedWatch = function (options) {
    this.creditIndex = 1000;
    this.maxIndex = 1000;
    this.currentIndex = 0;
    this.speed = 1000;
    this.timer = {};
    this.circleTimer = {};
    this.dom = "";
    this.loopTime = 1;

    this.onceAdd = function () {
      if (this.currentIndex > this.creditIndex) {
        clearInterval(this.timer);
        return;
      }
      document.querySelector(this.dom).innerHTML = this.currentIndex;
      this.currentIndex += 1;
    };

    this.circle = function() {
      var canvas = document.getElementById('circle');
      var ctx = canvas.getContext("2d");

      var circleObj = {
        ctx: ctx,
        x: 66,
        y: 66,
        radius: 60,
        lineWidth: 12,
        color: '#000'
      }

      circleObj.startAngle = -Math.PI*0.5;
      var maxCeil = Math.ceil(this.creditIndex / this.maxIndex * 24);
      var currentCeil = 0;
      var endAngle = -Math.PI*.5;
      this.circleTimer  = setInterval(function() {
        if (currentCeil >= maxCeil) {
          clearInterval(this.circleTimer);
          return;
        }
        drawCircle(circleObj, endAngle);
        endAngle += Math.PI/12
        currentCeil += 1;
      }, speed / maxCeil)
    }

    this.drawCircle = function(circleObj, endAngle) {
      var ctx = circleObj.ctx;
      ctx.clearRect(0, 0, 132, 132);
      ctx.beginPath();
      ctx.arc(circleObj.x, circleObj.y, circleObj.radius, circleObj.startAngle, endAngle, true);
      ctx.lineWidth = circleObj.lineWidth;
      ctx.strokeStyle = circleObj.color;
      ctx.lineCap = 'butt';
      ctx.stroke();
      ctx.closePath();
    }

    this.init = function () {
      this.creditIndex = options.creditIndex;
      this.currentIndex = options.currentIndex;
      this.speed = options.speed;
      this.dom = options.dom;
      this.loopTime = Math.ceil(creditIndex / speed * 4);
      this.timer = setInterval(function () {
        for (var index = 0; index < this.loopTime; index++) {
          this.onceAdd();
        }
      }, 1);
      this.circle();
    };
    this.init();

  };

  speedWatch({
    dom: "#num",
    creditIndex: 835,
    currentIndex: 0,
    speed: 800,
  })


})();
