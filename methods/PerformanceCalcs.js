const { PerformanceObserver, performance } = require("perf_hooks");

var t0 = performance.now();

doSomething(); // <---- The function you're measuring time for

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
