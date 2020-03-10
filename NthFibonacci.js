const fib = N => {
  if (1 >= N) {
    return N;
  }

  if (N > 1) {
    return fib(N - 1) + fib(N - 2);
  }
};
