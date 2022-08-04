export const MILLISECOND = 1;
export const SECOND = MILLISECOND * 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

const bday = new Date('31 August 2005 00:00:00 PST');

export let age = (Date.now() - bday.getTime()) / YEAR;

setInterval(() => {
	age = (Date.now() - bday.getTime()) / YEAR;
}, 1000);
