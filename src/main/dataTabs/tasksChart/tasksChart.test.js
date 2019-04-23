import { getChartData } from './taskChart.service';

it('Should return correct array values for tasks chart.', () => {
  const start = new Date();
  const currentHours = start.getHours();
  const duration = 10;
  const timers = [{ start, duration: duration * 60 * 1000 }];
  const result = getChartData(timers);
  expect(result[currentHours].minutes).toEqual(duration);
});
