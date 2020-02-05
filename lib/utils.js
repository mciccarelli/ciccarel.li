import { formatRelative } from 'date-fns';

export const relativeTime = date => formatRelative(new Date(date), new Date());

export const getPeriodInYears = items => {
  const oldest = items.sort(
    (d1, d2) => new Date(d1.date).getTime() - new Date(d2.date).getTime()
  )[0];

  return `${new Date(oldest.date).getFullYear()} - ${new Date().getFullYear()}`;
};

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
