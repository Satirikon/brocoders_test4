const getSeconds = time => time.getSeconds() + time.getMinutes() * 60;

const getMinutesPerHour = (start, duration) => {
  const end = new Date(+start + +duration);
  start = new Date(start);

  const outp = [];

  let current = start;

  while (current < end) {
    const secondsToNextHour = 60 * 60 - getSeconds(current);

    const nextHour = new Date(+current + secondsToNextHour * 1000);
    const seconds =
      nextHour > end
        ? getSeconds(end) - getSeconds(current)
        : secondsToNextHour;

    outp.push({
      chartHour: current.getHours(),
      chartMinutes: Math.trunc(seconds / 60),
      chartSeconds: seconds % 60
    });
    current = nextHour;
  }

  return outp;
};

export const getChartData = tasks => {
  let dataArr = [...new Array(24)].map(() => ({
    chartMinutes: 0,
    chartSeconds: 0
  }));
  tasks.forEach(task => {
    const minutesPerHour = getMinutesPerHour(task.start, task.duration);
    minutesPerHour.forEach(range => {
      dataArr[range.chartHour].chartMinutes = range.chartMinutes;
      dataArr[range.chartHour].chartSeconds = range.chartSeconds;
    });
  });
  return dataArr;
};
