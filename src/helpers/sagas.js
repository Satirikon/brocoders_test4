import { getItem } from './localStorage';
import { ACTIVE_TIMER } from '../constants/timer.constants';
import { TASKS } from '../constants/dataTasks.constants';

export const reHydrateStore = t => {
  let tasks = getItem(TASKS);
  let activeTimer = getItem(ACTIVE_TIMER);

  let store = {};
  if (tasks) store.tasks = JSON.parse(tasks);
  if (activeTimer) store.activeTimer = JSON.parse(activeTimer);
  return store;
};
