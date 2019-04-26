import { getItem } from './localStorage';
import { ACTIVE_TIMER } from '../main/timer/timer.constants';
import { TASKS } from '../main/dataTabs/dataTabs.constants';

export const reHydrateStore = t => {
  let tasks = getItem(TASKS);
  let activeTimer = getItem(ACTIVE_TIMER);

  let store = {};
  if (tasks) store.tasks = JSON.parse(tasks);
  if (activeTimer) store.activeTimer = JSON.parse(activeTimer);
  return store;
};
