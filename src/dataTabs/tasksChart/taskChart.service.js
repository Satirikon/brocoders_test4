export const getMinutesPerHour = (start, duration) => {
  const end = new Date(start + duration);
  start = new Date(start);

  const outp = [];

  let current = start;

  while (current < end) {
    const minutesToNextHour = 60 - current.getMinutes();
    const nextHour = new Date(+current + minutesToNextHour * 60 * 1000);
    const minutes =
      nextHour > end
        ? end.getMinutes() - current.getMinutes()
        : minutesToNextHour;
    outp.push({ hour: current.getHours(), minutes: minutes });
    current = nextHour;
  }

  return outp;
};

const generateRandomInt = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

export const generateTimers = () => {
  const range = generateRandomInt(10, 15);
  let tasks = [];
  const dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date();
  dayEnd.setHours(23, 59, 59, 999);
  for (let i = 0; i < range; i++) {
    const task = {
      name: `task ${i + 1}_${new Date().getTime()}`,
      start: generateRandomInt(dayStart.getTime(), dayEnd.getTime()),
      duration: generateRandomInt(10, 90) * 60 * 1000
    };
    tasks.push(task);
  }
  return tasks;
};
