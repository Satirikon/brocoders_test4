const getSeconds = time => time.getSeconds() + time.getMinutes() * 60;

export const getMinutesPerHour = (start, duration) => {
  const end = new Date(start + duration);
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
      hour: current.getHours(),
      minutes: Math.round((seconds / 60) * 100) / 100
    });
    current = nextHour;
  }

  return outp;
};
