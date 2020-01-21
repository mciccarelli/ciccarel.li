import { add, formatRelative, format } from 'date-fns';

export const relativeTime = date => formatRelative(new Date(date), new Date());

export const addDays = days => format(add(new Date(), { days }), 'MM/dd/yyyy');

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
