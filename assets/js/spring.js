/**
 * spring.js 
 */
export function createSpring(initial, options) {
  options = options || {};
  var stiffness = options.stiffness != null ? options.stiffness : 100;
  var damping = options.damping != null ? options.damping : 10;
  var mass = options.mass != null ? options.mass : 1;
  var restDelta = options.restDelta != null ? options.restDelta : 0.001;
  var restSpeed = options.restSpeed != null ? options.restSpeed : 0.01;
  var onUpdate = options.onUpdate || null;

  var value = initial;
  var velocity = 0;
  var target = initial;
  var rafId = null;
  var listeners = [];

  function notify() {
    if (onUpdate) onUpdate(value);
    for (var i = 0; i < listeners.length; i++) listeners[i](value);
  }

  function stop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  function tick() {
    // Fixed ~60fps step keeps behavior consistent across refresh rates,
    // matching the visual feel of the original spring-driven effects.
    var dt = 1 / 60;
    var acceleration = (-stiffness * (value - target) - damping * velocity) / mass;
    velocity += acceleration * dt;
    value += velocity * dt;
    notify();

    if (Math.abs(velocity) < restSpeed && Math.abs(target - value) < restDelta) {
      value = target;
      velocity = 0;
      notify();
      rafId = null;
      return;
    }
    rafId = requestAnimationFrame(tick);
  }

  return {
    set: function (newTarget) {
      target = newTarget;
      if (rafId === null) rafId = requestAnimationFrame(tick);
    },
    jump: function (newValue) {
      stop();
      value = newValue;
      target = newValue;
      velocity = 0;
      notify();
    },
    get: function () {
      return value;
    },
    getVelocity: function () {
      return velocity;
    },
    on: function (event, cb) {
      if (event === "change") listeners.push(cb);
      return function unsubscribe() {
        var idx = listeners.indexOf(cb);
        if (idx !== -1) listeners.splice(idx, 1);
      };
    },
    stop: stop
  };
}
