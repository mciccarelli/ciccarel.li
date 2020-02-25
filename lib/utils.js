import { formatRelative } from 'date-fns';

export const relativeTime = date => formatRelative(new Date(date), new Date());

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const scrollToTop = (top = 0) => {
  try {
    window.scroll({
      top,
      left: 0,
      behavior: 'smooth',
    });
  } catch (error) {
    console.error('window.scroll object not supported', error);
    window.scrollTo(0, 0);
  }
};
