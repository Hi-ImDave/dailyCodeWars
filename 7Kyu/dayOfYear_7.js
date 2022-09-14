function toDayOfYear(arr) {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    months[1] = ((arr[2] % 4 === 0 && arr[2] % 100 !== 0) || arr[2] % 400 === 0) ? 29 : 28;
    return months.slice(0, arr[1] - 1).reduce((a, b) => a + b, 0) + arr[0];
  }