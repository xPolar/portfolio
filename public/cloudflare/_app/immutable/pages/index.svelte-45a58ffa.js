import { _ as ls } from '../chunks/preload-helper-c28b9807.js';
import {
	S as an,
	i as on,
	s as ln,
	l as w,
	u as F,
	a as b,
	m as T,
	p as O,
	v as _,
	h as y,
	c as x,
	q as g,
	b as ee,
	J as c,
	w as K,
	n as nr,
	x as de,
	K as us,
	y as he,
	z as me,
	f as ye,
	t as ge,
	C as pe,
	o as cs,
	e as Mr,
	L as fs,
	M as ds,
	N as hs
} from '../chunks/index-44f85c91.js';
class ze extends Error {}
class ms extends ze {
	constructor(e) {
		super(`Invalid DateTime: ${e.toMessage()}`);
	}
}
class ys extends ze {
	constructor(e) {
		super(`Invalid Interval: ${e.toMessage()}`);
	}
}
class gs extends ze {
	constructor(e) {
		super(`Invalid Duration: ${e.toMessage()}`);
	}
}
class it extends ze {}
class un extends ze {
	constructor(e) {
		super(`Invalid unit ${e}`);
	}
}
class ne extends ze {}
class Ee extends ze {
	constructor() {
		super('Zone is an abstract class');
	}
}
const d = 'numeric',
	ce = 'short',
	X = 'long',
	sr = { year: d, month: d, day: d },
	cn = { year: d, month: ce, day: d },
	ps = { year: d, month: ce, day: d, weekday: ce },
	fn = { year: d, month: X, day: d },
	dn = { year: d, month: X, day: d, weekday: X },
	hn = { hour: d, minute: d },
	mn = { hour: d, minute: d, second: d },
	yn = { hour: d, minute: d, second: d, timeZoneName: ce },
	gn = { hour: d, minute: d, second: d, timeZoneName: X },
	pn = { hour: d, minute: d, hourCycle: 'h23' },
	wn = { hour: d, minute: d, second: d, hourCycle: 'h23' },
	Tn = { hour: d, minute: d, second: d, hourCycle: 'h23', timeZoneName: ce },
	vn = { hour: d, minute: d, second: d, hourCycle: 'h23', timeZoneName: X },
	Sn = { year: d, month: d, day: d, hour: d, minute: d },
	On = { year: d, month: d, day: d, hour: d, minute: d, second: d },
	En = { year: d, month: ce, day: d, hour: d, minute: d },
	kn = { year: d, month: ce, day: d, hour: d, minute: d, second: d },
	ws = { year: d, month: ce, day: d, weekday: ce, hour: d, minute: d },
	Nn = { year: d, month: X, day: d, hour: d, minute: d, timeZoneName: ce },
	Mn = { year: d, month: X, day: d, hour: d, minute: d, second: d, timeZoneName: ce },
	Dn = { year: d, month: X, day: d, weekday: X, hour: d, minute: d, timeZoneName: X },
	In = { year: d, month: X, day: d, weekday: X, hour: d, minute: d, second: d, timeZoneName: X };
function k(r) {
	return typeof r > 'u';
}
function Re(r) {
	return typeof r == 'number';
}
function xt(r) {
	return typeof r == 'number' && r % 1 === 0;
}
function Ts(r) {
	return typeof r == 'string';
}
function vs(r) {
	return Object.prototype.toString.call(r) === '[object Date]';
}
function bn() {
	try {
		return typeof Intl < 'u' && !!Intl.RelativeTimeFormat;
	} catch {
		return !1;
	}
}
function Ss(r) {
	return Array.isArray(r) ? r : [r];
}
function Dr(r, e, t) {
	if (r.length !== 0)
		return r.reduce((n, s) => {
			const i = [e(s), s];
			return n && t(n[0], i[0]) === n[0] ? n : i;
		}, null)[1];
}
function Os(r, e) {
	return e.reduce((t, n) => ((t[n] = r[n]), t), {});
}
function Ge(r, e) {
	return Object.prototype.hasOwnProperty.call(r, e);
}
function Te(r, e, t) {
	return xt(r) && r >= e && r <= t;
}
function Es(r, e) {
	return r - e * Math.floor(r / e);
}
function R(r, e = 2) {
	const t = r < 0;
	let n;
	return t ? (n = '-' + ('' + -r).padStart(e, '0')) : (n = ('' + r).padStart(e, '0')), n;
}
function ke(r) {
	if (!(k(r) || r === null || r === '')) return parseInt(r, 10);
}
function Le(r) {
	if (!(k(r) || r === null || r === '')) return parseFloat(r);
}
function fr(r) {
	if (!(k(r) || r === null || r === '')) {
		const e = parseFloat('0.' + r) * 1e3;
		return Math.floor(e);
	}
}
function dr(r, e, t = !1) {
	const n = 10 ** e;
	return (t ? Math.trunc : Math.round)(r * n) / n;
}
function ut(r) {
	return r % 4 === 0 && (r % 100 !== 0 || r % 400 === 0);
}
function ot(r) {
	return ut(r) ? 366 : 365;
}
function Dt(r, e) {
	const t = Es(e - 1, 12) + 1,
		n = r + (e - t) / 12;
	return t === 2 ? (ut(n) ? 29 : 28) : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function hr(r) {
	let e = Date.UTC(r.year, r.month - 1, r.day, r.hour, r.minute, r.second, r.millisecond);
	return (
		r.year < 100 && r.year >= 0 && ((e = new Date(e)), e.setUTCFullYear(e.getUTCFullYear() - 1900)),
		+e
	);
}
function It(r) {
	const e = (r + Math.floor(r / 4) - Math.floor(r / 100) + Math.floor(r / 400)) % 7,
		t = r - 1,
		n = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7;
	return e === 4 || n === 3 ? 53 : 52;
}
function ir(r) {
	return r > 99 ? r : r > 60 ? 1900 + r : 2e3 + r;
}
function xn(r, e, t, n = null) {
	const s = new Date(r),
		i = {
			hourCycle: 'h23',
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit'
		};
	n && (i.timeZone = n);
	const a = { timeZoneName: e, ...i },
		o = new Intl.DateTimeFormat(t, a)
			.formatToParts(s)
			.find((l) => l.type.toLowerCase() === 'timezonename');
	return o ? o.value : null;
}
function Ft(r, e) {
	let t = parseInt(r, 10);
	Number.isNaN(t) && (t = 0);
	const n = parseInt(e, 10) || 0,
		s = t < 0 || Object.is(t, -0) ? -n : n;
	return t * 60 + s;
}
function Fn(r) {
	const e = Number(r);
	if (typeof r == 'boolean' || r === '' || Number.isNaN(e)) throw new ne(`Invalid unit value ${r}`);
	return e;
}
function bt(r, e) {
	const t = {};
	for (const n in r)
		if (Ge(r, n)) {
			const s = r[n];
			if (s == null) continue;
			t[e(n)] = Fn(s);
		}
	return t;
}
function lt(r, e) {
	const t = Math.trunc(Math.abs(r / 60)),
		n = Math.trunc(Math.abs(r % 60)),
		s = r >= 0 ? '+' : '-';
	switch (e) {
		case 'short':
			return `${s}${R(t, 2)}:${R(n, 2)}`;
		case 'narrow':
			return `${s}${t}${n > 0 ? `:${n}` : ''}`;
		case 'techie':
			return `${s}${R(t, 2)}${R(n, 2)}`;
		default:
			throw new RangeError(`Value format ${e} is out of range for property format`);
	}
}
function _t(r) {
	return Os(r, ['hour', 'minute', 'second', 'millisecond']);
}
const _n = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/,
	ks = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	],
	Vn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	Ns = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
function Cn(r) {
	switch (r) {
		case 'narrow':
			return [...Ns];
		case 'short':
			return [...Vn];
		case 'long':
			return [...ks];
		case 'numeric':
			return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
		case '2-digit':
			return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
		default:
			return null;
	}
}
const $n = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	An = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	Ms = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
function Ln(r) {
	switch (r) {
		case 'narrow':
			return [...Ms];
		case 'short':
			return [...An];
		case 'long':
			return [...$n];
		case 'numeric':
			return ['1', '2', '3', '4', '5', '6', '7'];
		default:
			return null;
	}
}
const Zn = ['AM', 'PM'],
	Ds = ['Before Christ', 'Anno Domini'],
	Is = ['BC', 'AD'],
	bs = ['B', 'A'];
function Un(r) {
	switch (r) {
		case 'narrow':
			return [...bs];
		case 'short':
			return [...Is];
		case 'long':
			return [...Ds];
		default:
			return null;
	}
}
function xs(r) {
	return Zn[r.hour < 12 ? 0 : 1];
}
function Fs(r, e) {
	return Ln(e)[r.weekday - 1];
}
function _s(r, e) {
	return Cn(e)[r.month - 1];
}
function Vs(r, e) {
	return Un(e)[r.year < 0 ? 0 : 1];
}
function Cs(r, e, t = 'always', n = !1) {
	const s = {
			years: ['year', 'yr.'],
			quarters: ['quarter', 'qtr.'],
			months: ['month', 'mo.'],
			weeks: ['week', 'wk.'],
			days: ['day', 'day', 'days'],
			hours: ['hour', 'hr.'],
			minutes: ['minute', 'min.'],
			seconds: ['second', 'sec.']
		},
		i = ['hours', 'minutes', 'seconds'].indexOf(r) === -1;
	if (t === 'auto' && i) {
		const m = r === 'days';
		switch (e) {
			case 1:
				return m ? 'tomorrow' : `next ${s[r][0]}`;
			case -1:
				return m ? 'yesterday' : `last ${s[r][0]}`;
			case 0:
				return m ? 'today' : `this ${s[r][0]}`;
		}
	}
	const a = Object.is(e, -0) || e < 0,
		o = Math.abs(e),
		l = o === 1,
		u = s[r],
		f = n ? (l ? u[1] : u[2] || u[1]) : l ? s[r][0] : r;
	return a ? `${o} ${f} ago` : `in ${o} ${f}`;
}
function Ir(r, e) {
	let t = '';
	for (const n of r) n.literal ? (t += n.val) : (t += e(n.val));
	return t;
}
const $s = {
	D: sr,
	DD: cn,
	DDD: fn,
	DDDD: dn,
	t: hn,
	tt: mn,
	ttt: yn,
	tttt: gn,
	T: pn,
	TT: wn,
	TTT: Tn,
	TTTT: vn,
	f: Sn,
	ff: En,
	fff: Nn,
	ffff: Dn,
	F: On,
	FF: kn,
	FFF: Mn,
	FFFF: In
};
class Q {
	static create(e, t = {}) {
		return new Q(e, t);
	}
	static parseFormat(e) {
		let t = null,
			n = '',
			s = !1;
		const i = [];
		for (let a = 0; a < e.length; a++) {
			const o = e.charAt(a);
			o === "'"
				? (n.length > 0 && i.push({ literal: s, val: n }), (t = null), (n = ''), (s = !s))
				: s || o === t
				? (n += o)
				: (n.length > 0 && i.push({ literal: !1, val: n }), (n = o), (t = o));
		}
		return n.length > 0 && i.push({ literal: s, val: n }), i;
	}
	static macroTokenToFormatOpts(e) {
		return $s[e];
	}
	constructor(e, t) {
		(this.opts = t), (this.loc = e), (this.systemLoc = null);
	}
	formatWithSystemDefault(e, t) {
		return (
			this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()),
			this.systemLoc.dtFormatter(e, { ...this.opts, ...t }).format()
		);
	}
	formatDateTime(e, t = {}) {
		return this.loc.dtFormatter(e, { ...this.opts, ...t }).format();
	}
	formatDateTimeParts(e, t = {}) {
		return this.loc.dtFormatter(e, { ...this.opts, ...t }).formatToParts();
	}
	resolvedOptions(e, t = {}) {
		return this.loc.dtFormatter(e, { ...this.opts, ...t }).resolvedOptions();
	}
	num(e, t = 0) {
		if (this.opts.forceSimple) return R(e, t);
		const n = { ...this.opts };
		return t > 0 && (n.padTo = t), this.loc.numberFormatter(n).format(e);
	}
	formatDateTimeFromString(e, t) {
		const n = this.loc.listingMode() === 'en',
			s = this.loc.outputCalendar && this.loc.outputCalendar !== 'gregory',
			i = (h, E) => this.loc.extract(e, h, E),
			a = (h) =>
				e.isOffsetFixed && e.offset === 0 && h.allowZ
					? 'Z'
					: e.isValid
					? e.zone.formatOffset(e.ts, h.format)
					: '',
			o = () => (n ? xs(e) : i({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod')),
			l = (h, E) => (n ? _s(e, h) : i(E ? { month: h } : { month: h, day: 'numeric' }, 'month')),
			u = (h, E) =>
				n
					? Fs(e, h)
					: i(E ? { weekday: h } : { weekday: h, month: 'long', day: 'numeric' }, 'weekday'),
			f = (h) => {
				const E = Q.macroTokenToFormatOpts(h);
				return E ? this.formatWithSystemDefault(e, E) : h;
			},
			m = (h) => (n ? Vs(e, h) : i({ era: h }, 'era')),
			p = (h) => {
				switch (h) {
					case 'S':
						return this.num(e.millisecond);
					case 'u':
					case 'SSS':
						return this.num(e.millisecond, 3);
					case 's':
						return this.num(e.second);
					case 'ss':
						return this.num(e.second, 2);
					case 'uu':
						return this.num(Math.floor(e.millisecond / 10), 2);
					case 'uuu':
						return this.num(Math.floor(e.millisecond / 100));
					case 'm':
						return this.num(e.minute);
					case 'mm':
						return this.num(e.minute, 2);
					case 'h':
						return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
					case 'hh':
						return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
					case 'H':
						return this.num(e.hour);
					case 'HH':
						return this.num(e.hour, 2);
					case 'Z':
						return a({ format: 'narrow', allowZ: this.opts.allowZ });
					case 'ZZ':
						return a({ format: 'short', allowZ: this.opts.allowZ });
					case 'ZZZ':
						return a({ format: 'techie', allowZ: this.opts.allowZ });
					case 'ZZZZ':
						return e.zone.offsetName(e.ts, { format: 'short', locale: this.loc.locale });
					case 'ZZZZZ':
						return e.zone.offsetName(e.ts, { format: 'long', locale: this.loc.locale });
					case 'z':
						return e.zoneName;
					case 'a':
						return o();
					case 'd':
						return s ? i({ day: 'numeric' }, 'day') : this.num(e.day);
					case 'dd':
						return s ? i({ day: '2-digit' }, 'day') : this.num(e.day, 2);
					case 'c':
						return this.num(e.weekday);
					case 'ccc':
						return u('short', !0);
					case 'cccc':
						return u('long', !0);
					case 'ccccc':
						return u('narrow', !0);
					case 'E':
						return this.num(e.weekday);
					case 'EEE':
						return u('short', !1);
					case 'EEEE':
						return u('long', !1);
					case 'EEEEE':
						return u('narrow', !1);
					case 'L':
						return s ? i({ month: 'numeric', day: 'numeric' }, 'month') : this.num(e.month);
					case 'LL':
						return s ? i({ month: '2-digit', day: 'numeric' }, 'month') : this.num(e.month, 2);
					case 'LLL':
						return l('short', !0);
					case 'LLLL':
						return l('long', !0);
					case 'LLLLL':
						return l('narrow', !0);
					case 'M':
						return s ? i({ month: 'numeric' }, 'month') : this.num(e.month);
					case 'MM':
						return s ? i({ month: '2-digit' }, 'month') : this.num(e.month, 2);
					case 'MMM':
						return l('short', !1);
					case 'MMMM':
						return l('long', !1);
					case 'MMMMM':
						return l('narrow', !1);
					case 'y':
						return s ? i({ year: 'numeric' }, 'year') : this.num(e.year);
					case 'yy':
						return s ? i({ year: '2-digit' }, 'year') : this.num(e.year.toString().slice(-2), 2);
					case 'yyyy':
						return s ? i({ year: 'numeric' }, 'year') : this.num(e.year, 4);
					case 'yyyyyy':
						return s ? i({ year: 'numeric' }, 'year') : this.num(e.year, 6);
					case 'G':
						return m('short');
					case 'GG':
						return m('long');
					case 'GGGGG':
						return m('narrow');
					case 'kk':
						return this.num(e.weekYear.toString().slice(-2), 2);
					case 'kkkk':
						return this.num(e.weekYear, 4);
					case 'W':
						return this.num(e.weekNumber);
					case 'WW':
						return this.num(e.weekNumber, 2);
					case 'o':
						return this.num(e.ordinal);
					case 'ooo':
						return this.num(e.ordinal, 3);
					case 'q':
						return this.num(e.quarter);
					case 'qq':
						return this.num(e.quarter, 2);
					case 'X':
						return this.num(Math.floor(e.ts / 1e3));
					case 'x':
						return this.num(e.ts);
					default:
						return f(h);
				}
			};
		return Ir(Q.parseFormat(t), p);
	}
	formatDurationFromString(e, t) {
		const n = (l) => {
				switch (l[0]) {
					case 'S':
						return 'millisecond';
					case 's':
						return 'second';
					case 'm':
						return 'minute';
					case 'h':
						return 'hour';
					case 'd':
						return 'day';
					case 'w':
						return 'week';
					case 'M':
						return 'month';
					case 'y':
						return 'year';
					default:
						return null;
				}
			},
			s = (l) => (u) => {
				const f = n(u);
				return f ? this.num(l.get(f), u.length) : u;
			},
			i = Q.parseFormat(t),
			a = i.reduce((l, { literal: u, val: f }) => (u ? l : l.concat(f)), []),
			o = e.shiftTo(...a.map(n).filter((l) => l));
		return Ir(i, s(o));
	}
}
class ue {
	constructor(e, t) {
		(this.reason = e), (this.explanation = t);
	}
	toMessage() {
		return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
	}
}
class ct {
	get type() {
		throw new Ee();
	}
	get name() {
		throw new Ee();
	}
	get ianaName() {
		return this.name;
	}
	get isUniversal() {
		throw new Ee();
	}
	offsetName(e, t) {
		throw new Ee();
	}
	formatOffset(e, t) {
		throw new Ee();
	}
	offset(e) {
		throw new Ee();
	}
	equals(e) {
		throw new Ee();
	}
	get isValid() {
		throw new Ee();
	}
}
let jt = null;
class Vt extends ct {
	static get instance() {
		return jt === null && (jt = new Vt()), jt;
	}
	get type() {
		return 'system';
	}
	get name() {
		return new Intl.DateTimeFormat().resolvedOptions().timeZone;
	}
	get isUniversal() {
		return !1;
	}
	offsetName(e, { format: t, locale: n }) {
		return xn(e, t, n);
	}
	formatOffset(e, t) {
		return lt(this.offset(e), t);
	}
	offset(e) {
		return -new Date(e).getTimezoneOffset();
	}
	equals(e) {
		return e.type === 'system';
	}
	get isValid() {
		return !0;
	}
}
let Nt = {};
function As(r) {
	return (
		Nt[r] ||
			(Nt[r] = new Intl.DateTimeFormat('en-US', {
				hour12: !1,
				timeZone: r,
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				era: 'short'
			})),
		Nt[r]
	);
}
const Ls = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 };
function Zs(r, e) {
	const t = r.format(e).replace(/\u200E/g, ''),
		n = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t),
		[, s, i, a, o, l, u, f] = n;
	return [a, s, i, o, l, u, f];
}
function Us(r, e) {
	const t = r.formatToParts(e),
		n = [];
	for (let s = 0; s < t.length; s++) {
		const { type: i, value: a } = t[s],
			o = Ls[i];
		i === 'era' ? (n[o] = a) : k(o) || (n[o] = parseInt(a, 10));
	}
	return n;
}
let vt = {};
class ve extends ct {
	static create(e) {
		return vt[e] || (vt[e] = new ve(e)), vt[e];
	}
	static resetCache() {
		(vt = {}), (Nt = {});
	}
	static isValidSpecifier(e) {
		return this.isValidZone(e);
	}
	static isValidZone(e) {
		if (!e) return !1;
		try {
			return new Intl.DateTimeFormat('en-US', { timeZone: e }).format(), !0;
		} catch {
			return !1;
		}
	}
	constructor(e) {
		super(), (this.zoneName = e), (this.valid = ve.isValidZone(e));
	}
	get type() {
		return 'iana';
	}
	get name() {
		return this.zoneName;
	}
	get isUniversal() {
		return !1;
	}
	offsetName(e, { format: t, locale: n }) {
		return xn(e, t, n, this.name);
	}
	formatOffset(e, t) {
		return lt(this.offset(e), t);
	}
	offset(e) {
		const t = new Date(e);
		if (isNaN(t)) return NaN;
		const n = As(this.name);
		let [s, i, a, o, l, u, f] = n.formatToParts ? Us(n, t) : Zs(n, t);
		o === 'BC' && (s = -Math.abs(s) + 1);
		const p = hr({
			year: s,
			month: i,
			day: a,
			hour: l === 24 ? 0 : l,
			minute: u,
			second: f,
			millisecond: 0
		});
		let h = +t;
		const E = h % 1e3;
		return (h -= E >= 0 ? E : 1e3 + E), (p - h) / (60 * 1e3);
	}
	equals(e) {
		return e.type === 'iana' && e.name === this.name;
	}
	get isValid() {
		return this.valid;
	}
}
let Jt = null;
class J extends ct {
	static get utcInstance() {
		return Jt === null && (Jt = new J(0)), Jt;
	}
	static instance(e) {
		return e === 0 ? J.utcInstance : new J(e);
	}
	static parseSpecifier(e) {
		if (e) {
			const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
			if (t) return new J(Ft(t[1], t[2]));
		}
		return null;
	}
	constructor(e) {
		super(), (this.fixed = e);
	}
	get type() {
		return 'fixed';
	}
	get name() {
		return this.fixed === 0 ? 'UTC' : `UTC${lt(this.fixed, 'narrow')}`;
	}
	get ianaName() {
		return this.fixed === 0 ? 'Etc/UTC' : `Etc/GMT${lt(-this.fixed, 'narrow')}`;
	}
	offsetName() {
		return this.name;
	}
	formatOffset(e, t) {
		return lt(this.fixed, t);
	}
	get isUniversal() {
		return !0;
	}
	offset() {
		return this.fixed;
	}
	equals(e) {
		return e.type === 'fixed' && e.fixed === this.fixed;
	}
	get isValid() {
		return !0;
	}
}
class Rs extends ct {
	constructor(e) {
		super(), (this.zoneName = e);
	}
	get type() {
		return 'invalid';
	}
	get name() {
		return this.zoneName;
	}
	get isUniversal() {
		return !1;
	}
	offsetName() {
		return null;
	}
	formatOffset() {
		return '';
	}
	offset() {
		return NaN;
	}
	equals() {
		return !1;
	}
	get isValid() {
		return !1;
	}
}
function Ne(r, e) {
	if (k(r) || r === null) return e;
	if (r instanceof ct) return r;
	if (Ts(r)) {
		const t = r.toLowerCase();
		return t === 'default'
			? e
			: t === 'local' || t === 'system'
			? Vt.instance
			: t === 'utc' || t === 'gmt'
			? J.utcInstance
			: J.parseSpecifier(t) || ve.create(r);
	} else
		return Re(r)
			? J.instance(r)
			: typeof r == 'object' && r.offset && typeof r.offset == 'number'
			? r
			: new Rs(r);
}
let br = () => Date.now(),
	xr = 'system',
	Fr = null,
	_r = null,
	Vr = null,
	Cr;
class z {
	static get now() {
		return br;
	}
	static set now(e) {
		br = e;
	}
	static set defaultZone(e) {
		xr = e;
	}
	static get defaultZone() {
		return Ne(xr, Vt.instance);
	}
	static get defaultLocale() {
		return Fr;
	}
	static set defaultLocale(e) {
		Fr = e;
	}
	static get defaultNumberingSystem() {
		return _r;
	}
	static set defaultNumberingSystem(e) {
		_r = e;
	}
	static get defaultOutputCalendar() {
		return Vr;
	}
	static set defaultOutputCalendar(e) {
		Vr = e;
	}
	static get throwOnInvalid() {
		return Cr;
	}
	static set throwOnInvalid(e) {
		Cr = e;
	}
	static resetCaches() {
		$.resetCache(), ve.resetCache();
	}
}
let $r = {};
function zs(r, e = {}) {
	const t = JSON.stringify([r, e]);
	let n = $r[t];
	return n || ((n = new Intl.ListFormat(r, e)), ($r[t] = n)), n;
}
let ar = {};
function or(r, e = {}) {
	const t = JSON.stringify([r, e]);
	let n = ar[t];
	return n || ((n = new Intl.DateTimeFormat(r, e)), (ar[t] = n)), n;
}
let lr = {};
function Ws(r, e = {}) {
	const t = JSON.stringify([r, e]);
	let n = lr[t];
	return n || ((n = new Intl.NumberFormat(r, e)), (lr[t] = n)), n;
}
let ur = {};
function qs(r, e = {}) {
	const { base: t, ...n } = e,
		s = JSON.stringify([r, n]);
	let i = ur[s];
	return i || ((i = new Intl.RelativeTimeFormat(r, e)), (ur[s] = i)), i;
}
let at = null;
function Hs() {
	return at || ((at = new Intl.DateTimeFormat().resolvedOptions().locale), at);
}
function Ps(r) {
	const e = r.indexOf('-u-');
	if (e === -1) return [r];
	{
		let t;
		const n = r.substring(0, e);
		try {
			t = or(r).resolvedOptions();
		} catch {
			t = or(n).resolvedOptions();
		}
		const { numberingSystem: s, calendar: i } = t;
		return [n, s, i];
	}
}
function Ys(r, e, t) {
	return (t || e) && ((r += '-u'), t && (r += `-ca-${t}`), e && (r += `-nu-${e}`)), r;
}
function Gs(r) {
	const e = [];
	for (let t = 1; t <= 12; t++) {
		const n = v.utc(2016, t, 1);
		e.push(r(n));
	}
	return e;
}
function js(r) {
	const e = [];
	for (let t = 1; t <= 7; t++) {
		const n = v.utc(2016, 11, 13 + t);
		e.push(r(n));
	}
	return e;
}
function St(r, e, t, n, s) {
	const i = r.listingMode(t);
	return i === 'error' ? null : i === 'en' ? n(e) : s(e);
}
function Js(r) {
	return r.numberingSystem && r.numberingSystem !== 'latn'
		? !1
		: r.numberingSystem === 'latn' ||
				!r.locale ||
				r.locale.startsWith('en') ||
				new Intl.DateTimeFormat(r.intl).resolvedOptions().numberingSystem === 'latn';
}
class Bs {
	constructor(e, t, n) {
		(this.padTo = n.padTo || 0), (this.floor = n.floor || !1);
		const { padTo: s, floor: i, ...a } = n;
		if (!t || Object.keys(a).length > 0) {
			const o = { useGrouping: !1, ...n };
			n.padTo > 0 && (o.minimumIntegerDigits = n.padTo), (this.inf = Ws(e, o));
		}
	}
	format(e) {
		if (this.inf) {
			const t = this.floor ? Math.floor(e) : e;
			return this.inf.format(t);
		} else {
			const t = this.floor ? Math.floor(e) : dr(e, 3);
			return R(t, this.padTo);
		}
	}
}
class Qs {
	constructor(e, t, n) {
		this.opts = n;
		let s;
		if (e.zone.isUniversal) {
			const a = -1 * (e.offset / 60),
				o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
			e.offset !== 0 && ve.create(o).valid
				? ((s = o), (this.dt = e))
				: ((s = 'UTC'),
				  n.timeZoneName
						? (this.dt = e)
						: (this.dt = e.offset === 0 ? e : v.fromMillis(e.ts + e.offset * 60 * 1e3)));
		} else e.zone.type === 'system' ? (this.dt = e) : ((this.dt = e), (s = e.zone.name));
		const i = { ...this.opts };
		s && (i.timeZone = s), (this.dtf = or(t, i));
	}
	format() {
		return this.dtf.format(this.dt.toJSDate());
	}
	formatToParts() {
		return this.dtf.formatToParts(this.dt.toJSDate());
	}
	resolvedOptions() {
		return this.dtf.resolvedOptions();
	}
}
class Ks {
	constructor(e, t, n) {
		(this.opts = { style: 'long', ...n }), !t && bn() && (this.rtf = qs(e, n));
	}
	format(e, t) {
		return this.rtf
			? this.rtf.format(e, t)
			: Cs(t, e, this.opts.numeric, this.opts.style !== 'long');
	}
	formatToParts(e, t) {
		return this.rtf ? this.rtf.formatToParts(e, t) : [];
	}
}
class $ {
	static fromOpts(e) {
		return $.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN);
	}
	static create(e, t, n, s = !1) {
		const i = e || z.defaultLocale,
			a = i || (s ? 'en-US' : Hs()),
			o = t || z.defaultNumberingSystem,
			l = n || z.defaultOutputCalendar;
		return new $(a, o, l, i);
	}
	static resetCache() {
		(at = null), (ar = {}), (lr = {}), (ur = {});
	}
	static fromObject({ locale: e, numberingSystem: t, outputCalendar: n } = {}) {
		return $.create(e, t, n);
	}
	constructor(e, t, n, s) {
		const [i, a, o] = Ps(e);
		(this.locale = i),
			(this.numberingSystem = t || a || null),
			(this.outputCalendar = n || o || null),
			(this.intl = Ys(this.locale, this.numberingSystem, this.outputCalendar)),
			(this.weekdaysCache = { format: {}, standalone: {} }),
			(this.monthsCache = { format: {}, standalone: {} }),
			(this.meridiemCache = null),
			(this.eraCache = {}),
			(this.specifiedLocale = s),
			(this.fastNumbersCached = null);
	}
	get fastNumbers() {
		return (
			this.fastNumbersCached == null && (this.fastNumbersCached = Js(this)), this.fastNumbersCached
		);
	}
	listingMode() {
		const e = this.isEnglish(),
			t =
				(this.numberingSystem === null || this.numberingSystem === 'latn') &&
				(this.outputCalendar === null || this.outputCalendar === 'gregory');
		return e && t ? 'en' : 'intl';
	}
	clone(e) {
		return !e || Object.getOwnPropertyNames(e).length === 0
			? this
			: $.create(
					e.locale || this.specifiedLocale,
					e.numberingSystem || this.numberingSystem,
					e.outputCalendar || this.outputCalendar,
					e.defaultToEN || !1
			  );
	}
	redefaultToEN(e = {}) {
		return this.clone({ ...e, defaultToEN: !0 });
	}
	redefaultToSystem(e = {}) {
		return this.clone({ ...e, defaultToEN: !1 });
	}
	months(e, t = !1, n = !0) {
		return St(this, e, n, Cn, () => {
			const s = t ? { month: e, day: 'numeric' } : { month: e },
				i = t ? 'format' : 'standalone';
			return (
				this.monthsCache[i][e] || (this.monthsCache[i][e] = Gs((a) => this.extract(a, s, 'month'))),
				this.monthsCache[i][e]
			);
		});
	}
	weekdays(e, t = !1, n = !0) {
		return St(this, e, n, Ln, () => {
			const s = t ? { weekday: e, year: 'numeric', month: 'long', day: 'numeric' } : { weekday: e },
				i = t ? 'format' : 'standalone';
			return (
				this.weekdaysCache[i][e] ||
					(this.weekdaysCache[i][e] = js((a) => this.extract(a, s, 'weekday'))),
				this.weekdaysCache[i][e]
			);
		});
	}
	meridiems(e = !0) {
		return St(
			this,
			void 0,
			e,
			() => Zn,
			() => {
				if (!this.meridiemCache) {
					const t = { hour: 'numeric', hourCycle: 'h12' };
					this.meridiemCache = [v.utc(2016, 11, 13, 9), v.utc(2016, 11, 13, 19)].map((n) =>
						this.extract(n, t, 'dayperiod')
					);
				}
				return this.meridiemCache;
			}
		);
	}
	eras(e, t = !0) {
		return St(this, e, t, Un, () => {
			const n = { era: e };
			return (
				this.eraCache[e] ||
					(this.eraCache[e] = [v.utc(-40, 1, 1), v.utc(2017, 1, 1)].map((s) =>
						this.extract(s, n, 'era')
					)),
				this.eraCache[e]
			);
		});
	}
	extract(e, t, n) {
		const s = this.dtFormatter(e, t),
			i = s.formatToParts(),
			a = i.find((o) => o.type.toLowerCase() === n);
		return a ? a.value : null;
	}
	numberFormatter(e = {}) {
		return new Bs(this.intl, e.forceSimple || this.fastNumbers, e);
	}
	dtFormatter(e, t = {}) {
		return new Qs(e, this.intl, t);
	}
	relFormatter(e = {}) {
		return new Ks(this.intl, this.isEnglish(), e);
	}
	listFormatter(e = {}) {
		return zs(this.intl, e);
	}
	isEnglish() {
		return (
			this.locale === 'en' ||
			this.locale.toLowerCase() === 'en-us' ||
			new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us')
		);
	}
	equals(e) {
		return (
			this.locale === e.locale &&
			this.numberingSystem === e.numberingSystem &&
			this.outputCalendar === e.outputCalendar
		);
	}
}
function je(...r) {
	const e = r.reduce((t, n) => t + n.source, '');
	return RegExp(`^${e}$`);
}
function Je(...r) {
	return (e) =>
		r
			.reduce(
				([t, n, s], i) => {
					const [a, o, l] = i(e, s);
					return [{ ...t, ...a }, o || n, l];
				},
				[{}, null, 1]
			)
			.slice(0, 2);
}
function Be(r, ...e) {
	if (r == null) return [null, null];
	for (const [t, n] of e) {
		const s = t.exec(r);
		if (s) return n(s);
	}
	return [null, null];
}
function Rn(...r) {
	return (e, t) => {
		const n = {};
		let s;
		for (s = 0; s < r.length; s++) n[r[s]] = ke(e[t + s]);
		return [n, null, t + s];
	};
}
const zn = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
	Xs = `(?:${zn.source}?(?:\\[(${_n.source})\\])?)?`,
	mr = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
	Wn = RegExp(`${mr.source}${Xs}`),
	yr = RegExp(`(?:T${Wn.source})?`),
	ei = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
	ti = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
	ri = /(\d{4})-?(\d{3})/,
	ni = Rn('weekYear', 'weekNumber', 'weekDay'),
	si = Rn('year', 'ordinal'),
	ii = /(\d{4})-(\d\d)-(\d\d)/,
	qn = RegExp(`${mr.source} ?(?:${zn.source}|(${_n.source}))?`),
	ai = RegExp(`(?: ${qn.source})?`);
function Ye(r, e, t) {
	const n = r[e];
	return k(n) ? t : ke(n);
}
function oi(r, e) {
	return [{ year: Ye(r, e), month: Ye(r, e + 1, 1), day: Ye(r, e + 2, 1) }, null, e + 3];
}
function Qe(r, e) {
	return [
		{
			hours: Ye(r, e, 0),
			minutes: Ye(r, e + 1, 0),
			seconds: Ye(r, e + 2, 0),
			milliseconds: fr(r[e + 3])
		},
		null,
		e + 4
	];
}
function ft(r, e) {
	const t = !r[e] && !r[e + 1],
		n = Ft(r[e + 1], r[e + 2]),
		s = t ? null : J.instance(n);
	return [{}, s, e + 3];
}
function dt(r, e) {
	const t = r[e] ? ve.create(r[e]) : null;
	return [{}, t, e + 1];
}
const li = RegExp(`^T?${mr.source}$`),
	ui =
		/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function ci(r) {
	const [e, t, n, s, i, a, o, l, u] = r,
		f = e[0] === '-',
		m = l && l[0] === '-',
		p = (h, E = !1) => (h !== void 0 && (E || (h && f)) ? -h : h);
	return [
		{
			years: p(Le(t)),
			months: p(Le(n)),
			weeks: p(Le(s)),
			days: p(Le(i)),
			hours: p(Le(a)),
			minutes: p(Le(o)),
			seconds: p(Le(l), l === '-0'),
			milliseconds: p(fr(u), m)
		}
	];
}
const fi = {
	GMT: 0,
	EDT: -4 * 60,
	EST: -5 * 60,
	CDT: -5 * 60,
	CST: -6 * 60,
	MDT: -6 * 60,
	MST: -7 * 60,
	PDT: -7 * 60,
	PST: -8 * 60
};
function gr(r, e, t, n, s, i, a) {
	const o = {
		year: e.length === 2 ? ir(ke(e)) : ke(e),
		month: Vn.indexOf(t) + 1,
		day: ke(n),
		hour: ke(s),
		minute: ke(i)
	};
	return (
		a && (o.second = ke(a)),
		r && (o.weekday = r.length > 3 ? $n.indexOf(r) + 1 : An.indexOf(r) + 1),
		o
	);
}
const di =
	/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function hi(r) {
	const [, e, t, n, s, i, a, o, l, u, f, m] = r,
		p = gr(e, s, n, t, i, a, o);
	let h;
	return l ? (h = fi[l]) : u ? (h = 0) : (h = Ft(f, m)), [p, new J(h)];
}
function mi(r) {
	return r
		.replace(/\([^)]*\)|[\n\t]/g, ' ')
		.replace(/(\s\s+)/g, ' ')
		.trim();
}
const yi =
		/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
	gi =
		/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
	pi =
		/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Ar(r) {
	const [, e, t, n, s, i, a, o] = r;
	return [gr(e, s, n, t, i, a, o), J.utcInstance];
}
function wi(r) {
	const [, e, t, n, s, i, a, o] = r;
	return [gr(e, o, t, n, s, i, a), J.utcInstance];
}
const Ti = je(ei, yr),
	vi = je(ti, yr),
	Si = je(ri, yr),
	Oi = je(Wn),
	Hn = Je(oi, Qe, ft, dt),
	Ei = Je(ni, Qe, ft, dt),
	ki = Je(si, Qe, ft, dt),
	Ni = Je(Qe, ft, dt);
function Mi(r) {
	return Be(r, [Ti, Hn], [vi, Ei], [Si, ki], [Oi, Ni]);
}
function Di(r) {
	return Be(mi(r), [di, hi]);
}
function Ii(r) {
	return Be(r, [yi, Ar], [gi, Ar], [pi, wi]);
}
function bi(r) {
	return Be(r, [ui, ci]);
}
const xi = Je(Qe);
function Fi(r) {
	return Be(r, [li, xi]);
}
const _i = je(ii, ai),
	Vi = je(qn),
	Ci = Je(Qe, ft, dt);
function $i(r) {
	return Be(r, [_i, Hn], [Vi, Ci]);
}
const Ai = 'Invalid Duration',
	Pn = {
		weeks: {
			days: 7,
			hours: 7 * 24,
			minutes: 7 * 24 * 60,
			seconds: 7 * 24 * 60 * 60,
			milliseconds: 7 * 24 * 60 * 60 * 1e3
		},
		days: { hours: 24, minutes: 24 * 60, seconds: 24 * 60 * 60, milliseconds: 24 * 60 * 60 * 1e3 },
		hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
		minutes: { seconds: 60, milliseconds: 60 * 1e3 },
		seconds: { milliseconds: 1e3 }
	},
	Li = {
		years: {
			quarters: 4,
			months: 12,
			weeks: 52,
			days: 365,
			hours: 365 * 24,
			minutes: 365 * 24 * 60,
			seconds: 365 * 24 * 60 * 60,
			milliseconds: 365 * 24 * 60 * 60 * 1e3
		},
		quarters: {
			months: 3,
			weeks: 13,
			days: 91,
			hours: 91 * 24,
			minutes: 91 * 24 * 60,
			seconds: 91 * 24 * 60 * 60,
			milliseconds: 91 * 24 * 60 * 60 * 1e3
		},
		months: {
			weeks: 4,
			days: 30,
			hours: 30 * 24,
			minutes: 30 * 24 * 60,
			seconds: 30 * 24 * 60 * 60,
			milliseconds: 30 * 24 * 60 * 60 * 1e3
		},
		...Pn
	},
	re = 146097 / 400,
	Pe = 146097 / 4800,
	Zi = {
		years: {
			quarters: 4,
			months: 12,
			weeks: re / 7,
			days: re,
			hours: re * 24,
			minutes: re * 24 * 60,
			seconds: re * 24 * 60 * 60,
			milliseconds: re * 24 * 60 * 60 * 1e3
		},
		quarters: {
			months: 3,
			weeks: re / 28,
			days: re / 4,
			hours: (re * 24) / 4,
			minutes: (re * 24 * 60) / 4,
			seconds: (re * 24 * 60 * 60) / 4,
			milliseconds: (re * 24 * 60 * 60 * 1e3) / 4
		},
		months: {
			weeks: Pe / 7,
			days: Pe,
			hours: Pe * 24,
			minutes: Pe * 24 * 60,
			seconds: Pe * 24 * 60 * 60,
			milliseconds: Pe * 24 * 60 * 60 * 1e3
		},
		...Pn
	},
	Ue = [
		'years',
		'quarters',
		'months',
		'weeks',
		'days',
		'hours',
		'minutes',
		'seconds',
		'milliseconds'
	],
	Ui = Ue.slice(0).reverse();
function Ze(r, e, t = !1) {
	const n = {
		values: t ? e.values : { ...r.values, ...(e.values || {}) },
		loc: r.loc.clone(e.loc),
		conversionAccuracy: e.conversionAccuracy || r.conversionAccuracy
	};
	return new N(n);
}
function Ri(r) {
	return r < 0 ? Math.floor(r) : Math.ceil(r);
}
function Yn(r, e, t, n, s) {
	const i = r[s][t],
		a = e[t] / i,
		o = Math.sign(a) === Math.sign(n[s]),
		l = !o && n[s] !== 0 && Math.abs(a) <= 1 ? Ri(a) : Math.trunc(a);
	(n[s] += l), (e[t] -= l * i);
}
function zi(r, e) {
	Ui.reduce((t, n) => (k(e[n]) ? t : (t && Yn(r, e, t, e, n), n)), null);
}
class N {
	constructor(e) {
		const t = e.conversionAccuracy === 'longterm' || !1;
		(this.values = e.values),
			(this.loc = e.loc || $.create()),
			(this.conversionAccuracy = t ? 'longterm' : 'casual'),
			(this.invalid = e.invalid || null),
			(this.matrix = t ? Zi : Li),
			(this.isLuxonDuration = !0);
	}
	static fromMillis(e, t) {
		return N.fromObject({ milliseconds: e }, t);
	}
	static fromObject(e, t = {}) {
		if (e == null || typeof e != 'object')
			throw new ne(
				`Duration.fromObject: argument expected to be an object, got ${
					e === null ? 'null' : typeof e
				}`
			);
		return new N({
			values: bt(e, N.normalizeUnit),
			loc: $.fromObject(t),
			conversionAccuracy: t.conversionAccuracy
		});
	}
	static fromDurationLike(e) {
		if (Re(e)) return N.fromMillis(e);
		if (N.isDuration(e)) return e;
		if (typeof e == 'object') return N.fromObject(e);
		throw new ne(`Unknown duration argument ${e} of type ${typeof e}`);
	}
	static fromISO(e, t) {
		const [n] = bi(e);
		return n
			? N.fromObject(n, t)
			: N.invalid('unparsable', `the input "${e}" can't be parsed as ISO 8601`);
	}
	static fromISOTime(e, t) {
		const [n] = Fi(e);
		return n
			? N.fromObject(n, t)
			: N.invalid('unparsable', `the input "${e}" can't be parsed as ISO 8601`);
	}
	static invalid(e, t = null) {
		if (!e) throw new ne('need to specify a reason the Duration is invalid');
		const n = e instanceof ue ? e : new ue(e, t);
		if (z.throwOnInvalid) throw new gs(n);
		return new N({ invalid: n });
	}
	static normalizeUnit(e) {
		const t = {
			year: 'years',
			years: 'years',
			quarter: 'quarters',
			quarters: 'quarters',
			month: 'months',
			months: 'months',
			week: 'weeks',
			weeks: 'weeks',
			day: 'days',
			days: 'days',
			hour: 'hours',
			hours: 'hours',
			minute: 'minutes',
			minutes: 'minutes',
			second: 'seconds',
			seconds: 'seconds',
			millisecond: 'milliseconds',
			milliseconds: 'milliseconds'
		}[e && e.toLowerCase()];
		if (!t) throw new un(e);
		return t;
	}
	static isDuration(e) {
		return (e && e.isLuxonDuration) || !1;
	}
	get locale() {
		return this.isValid ? this.loc.locale : null;
	}
	get numberingSystem() {
		return this.isValid ? this.loc.numberingSystem : null;
	}
	toFormat(e, t = {}) {
		const n = { ...t, floor: t.round !== !1 && t.floor !== !1 };
		return this.isValid ? Q.create(this.loc, n).formatDurationFromString(this, e) : Ai;
	}
	toHuman(e = {}) {
		const t = Ue.map((n) => {
			const s = this.values[n];
			return k(s)
				? null
				: this.loc
						.numberFormatter({ style: 'unit', unitDisplay: 'long', ...e, unit: n.slice(0, -1) })
						.format(s);
		}).filter((n) => n);
		return this.loc
			.listFormatter({ type: 'conjunction', style: e.listStyle || 'narrow', ...e })
			.format(t);
	}
	toObject() {
		return this.isValid ? { ...this.values } : {};
	}
	toISO() {
		if (!this.isValid) return null;
		let e = 'P';
		return (
			this.years !== 0 && (e += this.years + 'Y'),
			(this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + 'M'),
			this.weeks !== 0 && (e += this.weeks + 'W'),
			this.days !== 0 && (e += this.days + 'D'),
			(this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) &&
				(e += 'T'),
			this.hours !== 0 && (e += this.hours + 'H'),
			this.minutes !== 0 && (e += this.minutes + 'M'),
			(this.seconds !== 0 || this.milliseconds !== 0) &&
				(e += dr(this.seconds + this.milliseconds / 1e3, 3) + 'S'),
			e === 'P' && (e += 'T0S'),
			e
		);
	}
	toISOTime(e = {}) {
		if (!this.isValid) return null;
		const t = this.toMillis();
		if (t < 0 || t >= 864e5) return null;
		e = {
			suppressMilliseconds: !1,
			suppressSeconds: !1,
			includePrefix: !1,
			format: 'extended',
			...e
		};
		const n = this.shiftTo('hours', 'minutes', 'seconds', 'milliseconds');
		let s = e.format === 'basic' ? 'hhmm' : 'hh:mm';
		(!e.suppressSeconds || n.seconds !== 0 || n.milliseconds !== 0) &&
			((s += e.format === 'basic' ? 'ss' : ':ss'),
			(!e.suppressMilliseconds || n.milliseconds !== 0) && (s += '.SSS'));
		let i = n.toFormat(s);
		return e.includePrefix && (i = 'T' + i), i;
	}
	toJSON() {
		return this.toISO();
	}
	toString() {
		return this.toISO();
	}
	toMillis() {
		return this.as('milliseconds');
	}
	valueOf() {
		return this.toMillis();
	}
	plus(e) {
		if (!this.isValid) return this;
		const t = N.fromDurationLike(e),
			n = {};
		for (const s of Ue) (Ge(t.values, s) || Ge(this.values, s)) && (n[s] = t.get(s) + this.get(s));
		return Ze(this, { values: n }, !0);
	}
	minus(e) {
		if (!this.isValid) return this;
		const t = N.fromDurationLike(e);
		return this.plus(t.negate());
	}
	mapUnits(e) {
		if (!this.isValid) return this;
		const t = {};
		for (const n of Object.keys(this.values)) t[n] = Fn(e(this.values[n], n));
		return Ze(this, { values: t }, !0);
	}
	get(e) {
		return this[N.normalizeUnit(e)];
	}
	set(e) {
		if (!this.isValid) return this;
		const t = { ...this.values, ...bt(e, N.normalizeUnit) };
		return Ze(this, { values: t });
	}
	reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: n } = {}) {
		const s = this.loc.clone({ locale: e, numberingSystem: t }),
			i = { loc: s };
		return n && (i.conversionAccuracy = n), Ze(this, i);
	}
	as(e) {
		return this.isValid ? this.shiftTo(e).get(e) : NaN;
	}
	normalize() {
		if (!this.isValid) return this;
		const e = this.toObject();
		return zi(this.matrix, e), Ze(this, { values: e }, !0);
	}
	shiftTo(...e) {
		if (!this.isValid) return this;
		if (e.length === 0) return this;
		e = e.map((a) => N.normalizeUnit(a));
		const t = {},
			n = {},
			s = this.toObject();
		let i;
		for (const a of Ue)
			if (e.indexOf(a) >= 0) {
				i = a;
				let o = 0;
				for (const u in n) (o += this.matrix[u][a] * n[u]), (n[u] = 0);
				Re(s[a]) && (o += s[a]);
				const l = Math.trunc(o);
				(t[a] = l), (n[a] = (o * 1e3 - l * 1e3) / 1e3);
				for (const u in s) Ue.indexOf(u) > Ue.indexOf(a) && Yn(this.matrix, s, u, t, a);
			} else Re(s[a]) && (n[a] = s[a]);
		for (const a in n) n[a] !== 0 && (t[i] += a === i ? n[a] : n[a] / this.matrix[i][a]);
		return Ze(this, { values: t }, !0).normalize();
	}
	negate() {
		if (!this.isValid) return this;
		const e = {};
		for (const t of Object.keys(this.values)) e[t] = this.values[t] === 0 ? 0 : -this.values[t];
		return Ze(this, { values: e }, !0);
	}
	get years() {
		return this.isValid ? this.values.years || 0 : NaN;
	}
	get quarters() {
		return this.isValid ? this.values.quarters || 0 : NaN;
	}
	get months() {
		return this.isValid ? this.values.months || 0 : NaN;
	}
	get weeks() {
		return this.isValid ? this.values.weeks || 0 : NaN;
	}
	get days() {
		return this.isValid ? this.values.days || 0 : NaN;
	}
	get hours() {
		return this.isValid ? this.values.hours || 0 : NaN;
	}
	get minutes() {
		return this.isValid ? this.values.minutes || 0 : NaN;
	}
	get seconds() {
		return this.isValid ? this.values.seconds || 0 : NaN;
	}
	get milliseconds() {
		return this.isValid ? this.values.milliseconds || 0 : NaN;
	}
	get isValid() {
		return this.invalid === null;
	}
	get invalidReason() {
		return this.invalid ? this.invalid.reason : null;
	}
	get invalidExplanation() {
		return this.invalid ? this.invalid.explanation : null;
	}
	equals(e) {
		if (!this.isValid || !e.isValid || !this.loc.equals(e.loc)) return !1;
		function t(n, s) {
			return n === void 0 || n === 0 ? s === void 0 || s === 0 : n === s;
		}
		for (const n of Ue) if (!t(this.values[n], e.values[n])) return !1;
		return !0;
	}
}
const tt = 'Invalid Interval';
function Wi(r, e) {
	return !r || !r.isValid
		? A.invalid('missing or invalid start')
		: !e || !e.isValid
		? A.invalid('missing or invalid end')
		: e < r
		? A.invalid(
				'end before start',
				`The end of an interval must be after its start, but you had start=${r.toISO()} and end=${e.toISO()}`
		  )
		: null;
}
class A {
	constructor(e) {
		(this.s = e.start),
			(this.e = e.end),
			(this.invalid = e.invalid || null),
			(this.isLuxonInterval = !0);
	}
	static invalid(e, t = null) {
		if (!e) throw new ne('need to specify a reason the Interval is invalid');
		const n = e instanceof ue ? e : new ue(e, t);
		if (z.throwOnInvalid) throw new ys(n);
		return new A({ invalid: n });
	}
	static fromDateTimes(e, t) {
		const n = st(e),
			s = st(t),
			i = Wi(n, s);
		return i == null ? new A({ start: n, end: s }) : i;
	}
	static after(e, t) {
		const n = N.fromDurationLike(t),
			s = st(e);
		return A.fromDateTimes(s, s.plus(n));
	}
	static before(e, t) {
		const n = N.fromDurationLike(t),
			s = st(e);
		return A.fromDateTimes(s.minus(n), s);
	}
	static fromISO(e, t) {
		const [n, s] = (e || '').split('/', 2);
		if (n && s) {
			let i, a;
			try {
				(i = v.fromISO(n, t)), (a = i.isValid);
			} catch {
				a = !1;
			}
			let o, l;
			try {
				(o = v.fromISO(s, t)), (l = o.isValid);
			} catch {
				l = !1;
			}
			if (a && l) return A.fromDateTimes(i, o);
			if (a) {
				const u = N.fromISO(s, t);
				if (u.isValid) return A.after(i, u);
			} else if (l) {
				const u = N.fromISO(n, t);
				if (u.isValid) return A.before(o, u);
			}
		}
		return A.invalid('unparsable', `the input "${e}" can't be parsed as ISO 8601`);
	}
	static isInterval(e) {
		return (e && e.isLuxonInterval) || !1;
	}
	get start() {
		return this.isValid ? this.s : null;
	}
	get end() {
		return this.isValid ? this.e : null;
	}
	get isValid() {
		return this.invalidReason === null;
	}
	get invalidReason() {
		return this.invalid ? this.invalid.reason : null;
	}
	get invalidExplanation() {
		return this.invalid ? this.invalid.explanation : null;
	}
	length(e = 'milliseconds') {
		return this.isValid ? this.toDuration(e).get(e) : NaN;
	}
	count(e = 'milliseconds') {
		if (!this.isValid) return NaN;
		const t = this.start.startOf(e),
			n = this.end.startOf(e);
		return Math.floor(n.diff(t, e).get(e)) + 1;
	}
	hasSame(e) {
		return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
	}
	isEmpty() {
		return this.s.valueOf() === this.e.valueOf();
	}
	isAfter(e) {
		return this.isValid ? this.s > e : !1;
	}
	isBefore(e) {
		return this.isValid ? this.e <= e : !1;
	}
	contains(e) {
		return this.isValid ? this.s <= e && this.e > e : !1;
	}
	set({ start: e, end: t } = {}) {
		return this.isValid ? A.fromDateTimes(e || this.s, t || this.e) : this;
	}
	splitAt(...e) {
		if (!this.isValid) return [];
		const t = e
				.map(st)
				.filter((a) => this.contains(a))
				.sort(),
			n = [];
		let { s } = this,
			i = 0;
		for (; s < this.e; ) {
			const a = t[i] || this.e,
				o = +a > +this.e ? this.e : a;
			n.push(A.fromDateTimes(s, o)), (s = o), (i += 1);
		}
		return n;
	}
	splitBy(e) {
		const t = N.fromDurationLike(e);
		if (!this.isValid || !t.isValid || t.as('milliseconds') === 0) return [];
		let { s: n } = this,
			s = 1,
			i;
		const a = [];
		for (; n < this.e; ) {
			const o = this.start.plus(t.mapUnits((l) => l * s));
			(i = +o > +this.e ? this.e : o), a.push(A.fromDateTimes(n, i)), (n = i), (s += 1);
		}
		return a;
	}
	divideEqually(e) {
		return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
	}
	overlaps(e) {
		return this.e > e.s && this.s < e.e;
	}
	abutsStart(e) {
		return this.isValid ? +this.e == +e.s : !1;
	}
	abutsEnd(e) {
		return this.isValid ? +e.e == +this.s : !1;
	}
	engulfs(e) {
		return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
	}
	equals(e) {
		return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
	}
	intersection(e) {
		if (!this.isValid) return this;
		const t = this.s > e.s ? this.s : e.s,
			n = this.e < e.e ? this.e : e.e;
		return t >= n ? null : A.fromDateTimes(t, n);
	}
	union(e) {
		if (!this.isValid) return this;
		const t = this.s < e.s ? this.s : e.s,
			n = this.e > e.e ? this.e : e.e;
		return A.fromDateTimes(t, n);
	}
	static merge(e) {
		const [t, n] = e
			.sort((s, i) => s.s - i.s)
			.reduce(
				([s, i], a) =>
					i ? (i.overlaps(a) || i.abutsStart(a) ? [s, i.union(a)] : [s.concat([i]), a]) : [s, a],
				[[], null]
			);
		return n && t.push(n), t;
	}
	static xor(e) {
		let t = null,
			n = 0;
		const s = [],
			i = e.map((l) => [
				{ time: l.s, type: 's' },
				{ time: l.e, type: 'e' }
			]),
			a = Array.prototype.concat(...i),
			o = a.sort((l, u) => l.time - u.time);
		for (const l of o)
			(n += l.type === 's' ? 1 : -1),
				n === 1
					? (t = l.time)
					: (t && +t != +l.time && s.push(A.fromDateTimes(t, l.time)), (t = null));
		return A.merge(s);
	}
	difference(...e) {
		return A.xor([this].concat(e))
			.map((t) => this.intersection(t))
			.filter((t) => t && !t.isEmpty());
	}
	toString() {
		return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : tt;
	}
	toISO(e) {
		return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : tt;
	}
	toISODate() {
		return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : tt;
	}
	toISOTime(e) {
		return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : tt;
	}
	toFormat(e, { separator: t = ' \u2013 ' } = {}) {
		return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : tt;
	}
	toDuration(e, t) {
		return this.isValid ? this.e.diff(this.s, e, t) : N.invalid(this.invalidReason);
	}
	mapEndpoints(e) {
		return A.fromDateTimes(e(this.s), e(this.e));
	}
}
class Ot {
	static hasDST(e = z.defaultZone) {
		const t = v.now().setZone(e).set({ month: 12 });
		return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
	}
	static isValidIANAZone(e) {
		return ve.isValidZone(e);
	}
	static normalizeZone(e) {
		return Ne(e, z.defaultZone);
	}
	static months(
		e = 'long',
		{
			locale: t = null,
			numberingSystem: n = null,
			locObj: s = null,
			outputCalendar: i = 'gregory'
		} = {}
	) {
		return (s || $.create(t, n, i)).months(e);
	}
	static monthsFormat(
		e = 'long',
		{
			locale: t = null,
			numberingSystem: n = null,
			locObj: s = null,
			outputCalendar: i = 'gregory'
		} = {}
	) {
		return (s || $.create(t, n, i)).months(e, !0);
	}
	static weekdays(
		e = 'long',
		{ locale: t = null, numberingSystem: n = null, locObj: s = null } = {}
	) {
		return (s || $.create(t, n, null)).weekdays(e);
	}
	static weekdaysFormat(
		e = 'long',
		{ locale: t = null, numberingSystem: n = null, locObj: s = null } = {}
	) {
		return (s || $.create(t, n, null)).weekdays(e, !0);
	}
	static meridiems({ locale: e = null } = {}) {
		return $.create(e).meridiems();
	}
	static eras(e = 'short', { locale: t = null } = {}) {
		return $.create(t, null, 'gregory').eras(e);
	}
	static features() {
		return { relative: bn() };
	}
}
function Lr(r, e) {
	const t = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf('day').valueOf(),
		n = t(e) - t(r);
	return Math.floor(N.fromMillis(n).as('days'));
}
function qi(r, e, t) {
	const n = [
			['years', (o, l) => l.year - o.year],
			['quarters', (o, l) => l.quarter - o.quarter],
			['months', (o, l) => l.month - o.month + (l.year - o.year) * 12],
			[
				'weeks',
				(o, l) => {
					const u = Lr(o, l);
					return (u - (u % 7)) / 7;
				}
			],
			['days', Lr]
		],
		s = {};
	let i, a;
	for (const [o, l] of n)
		if (t.indexOf(o) >= 0) {
			i = o;
			let u = l(r, e);
			(a = r.plus({ [o]: u })),
				a > e ? ((r = r.plus({ [o]: u - 1 })), (u -= 1)) : (r = a),
				(s[o] = u);
		}
	return [r, s, a, i];
}
function Hi(r, e, t, n) {
	let [s, i, a, o] = qi(r, e, t);
	const l = e - s,
		u = t.filter((m) => ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(m) >= 0);
	u.length === 0 &&
		(a < e && (a = s.plus({ [o]: 1 })), a !== s && (i[o] = (i[o] || 0) + l / (a - s)));
	const f = N.fromObject(i, n);
	return u.length > 0
		? N.fromMillis(l, n)
				.shiftTo(...u)
				.plus(f)
		: f;
}
const pr = {
		arab: '[\u0660-\u0669]',
		arabext: '[\u06F0-\u06F9]',
		bali: '[\u1B50-\u1B59]',
		beng: '[\u09E6-\u09EF]',
		deva: '[\u0966-\u096F]',
		fullwide: '[\uFF10-\uFF19]',
		gujr: '[\u0AE6-\u0AEF]',
		hanidec: '[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]',
		khmr: '[\u17E0-\u17E9]',
		knda: '[\u0CE6-\u0CEF]',
		laoo: '[\u0ED0-\u0ED9]',
		limb: '[\u1946-\u194F]',
		mlym: '[\u0D66-\u0D6F]',
		mong: '[\u1810-\u1819]',
		mymr: '[\u1040-\u1049]',
		orya: '[\u0B66-\u0B6F]',
		tamldec: '[\u0BE6-\u0BEF]',
		telu: '[\u0C66-\u0C6F]',
		thai: '[\u0E50-\u0E59]',
		tibt: '[\u0F20-\u0F29]',
		latn: '\\d'
	},
	Zr = {
		arab: [1632, 1641],
		arabext: [1776, 1785],
		bali: [6992, 7001],
		beng: [2534, 2543],
		deva: [2406, 2415],
		fullwide: [65296, 65303],
		gujr: [2790, 2799],
		khmr: [6112, 6121],
		knda: [3302, 3311],
		laoo: [3792, 3801],
		limb: [6470, 6479],
		mlym: [3430, 3439],
		mong: [6160, 6169],
		mymr: [4160, 4169],
		orya: [2918, 2927],
		tamldec: [3046, 3055],
		telu: [3174, 3183],
		thai: [3664, 3673],
		tibt: [3872, 3881]
	},
	Pi = pr.hanidec.replace(/[\[|\]]/g, '').split('');
function Yi(r) {
	let e = parseInt(r, 10);
	if (isNaN(e)) {
		e = '';
		for (let t = 0; t < r.length; t++) {
			const n = r.charCodeAt(t);
			if (r[t].search(pr.hanidec) !== -1) e += Pi.indexOf(r[t]);
			else
				for (const s in Zr) {
					const [i, a] = Zr[s];
					n >= i && n <= a && (e += n - i);
				}
		}
		return parseInt(e, 10);
	} else return e;
}
function oe({ numberingSystem: r }, e = '') {
	return new RegExp(`${pr[r || 'latn']}${e}`);
}
const Gi = 'missing Intl.DateTimeFormat.formatToParts support';
function D(r, e = (t) => t) {
	return { regex: r, deser: ([t]) => e(Yi(t)) };
}
const ji = String.fromCharCode(160),
	Gn = `[ ${ji}]`,
	jn = new RegExp(Gn, 'g');
function Ji(r) {
	return r.replace(/\./g, '\\.?').replace(jn, Gn);
}
function Ur(r) {
	return r.replace(/\./g, '').replace(jn, ' ').toLowerCase();
}
function le(r, e) {
	return r === null
		? null
		: {
				regex: RegExp(r.map(Ji).join('|')),
				deser: ([t]) => r.findIndex((n) => Ur(t) === Ur(n)) + e
		  };
}
function Rr(r, e) {
	return { regex: r, deser: ([, t, n]) => Ft(t, n), groups: e };
}
function Bt(r) {
	return { regex: r, deser: ([e]) => e };
}
function Bi(r) {
	return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}
function Qi(r, e) {
	const t = oe(e),
		n = oe(e, '{2}'),
		s = oe(e, '{3}'),
		i = oe(e, '{4}'),
		a = oe(e, '{6}'),
		o = oe(e, '{1,2}'),
		l = oe(e, '{1,3}'),
		u = oe(e, '{1,6}'),
		f = oe(e, '{1,9}'),
		m = oe(e, '{2,4}'),
		p = oe(e, '{4,6}'),
		h = (I) => ({ regex: RegExp(Bi(I.val)), deser: ([M]) => M, literal: !0 }),
		L = ((I) => {
			if (r.literal) return h(I);
			switch (I.val) {
				case 'G':
					return le(e.eras('short', !1), 0);
				case 'GG':
					return le(e.eras('long', !1), 0);
				case 'y':
					return D(u);
				case 'yy':
					return D(m, ir);
				case 'yyyy':
					return D(i);
				case 'yyyyy':
					return D(p);
				case 'yyyyyy':
					return D(a);
				case 'M':
					return D(o);
				case 'MM':
					return D(n);
				case 'MMM':
					return le(e.months('short', !0, !1), 1);
				case 'MMMM':
					return le(e.months('long', !0, !1), 1);
				case 'L':
					return D(o);
				case 'LL':
					return D(n);
				case 'LLL':
					return le(e.months('short', !1, !1), 1);
				case 'LLLL':
					return le(e.months('long', !1, !1), 1);
				case 'd':
					return D(o);
				case 'dd':
					return D(n);
				case 'o':
					return D(l);
				case 'ooo':
					return D(s);
				case 'HH':
					return D(n);
				case 'H':
					return D(o);
				case 'hh':
					return D(n);
				case 'h':
					return D(o);
				case 'mm':
					return D(n);
				case 'm':
					return D(o);
				case 'q':
					return D(o);
				case 'qq':
					return D(n);
				case 's':
					return D(o);
				case 'ss':
					return D(n);
				case 'S':
					return D(l);
				case 'SSS':
					return D(s);
				case 'u':
					return Bt(f);
				case 'uu':
					return Bt(o);
				case 'uuu':
					return D(t);
				case 'a':
					return le(e.meridiems(), 0);
				case 'kkkk':
					return D(i);
				case 'kk':
					return D(m, ir);
				case 'W':
					return D(o);
				case 'WW':
					return D(n);
				case 'E':
				case 'c':
					return D(t);
				case 'EEE':
					return le(e.weekdays('short', !1, !1), 1);
				case 'EEEE':
					return le(e.weekdays('long', !1, !1), 1);
				case 'ccc':
					return le(e.weekdays('short', !0, !1), 1);
				case 'cccc':
					return le(e.weekdays('long', !0, !1), 1);
				case 'Z':
				case 'ZZ':
					return Rr(new RegExp(`([+-]${o.source})(?::(${n.source}))?`), 2);
				case 'ZZZ':
					return Rr(new RegExp(`([+-]${o.source})(${n.source})?`), 2);
				case 'z':
					return Bt(/[a-z_+-/]{1,256}?/i);
				default:
					return h(I);
			}
		})(r) || { invalidReason: Gi };
	return (L.token = r), L;
}
const Ki = {
	year: { '2-digit': 'yy', numeric: 'yyyyy' },
	month: { numeric: 'M', '2-digit': 'MM', short: 'MMM', long: 'MMMM' },
	day: { numeric: 'd', '2-digit': 'dd' },
	weekday: { short: 'EEE', long: 'EEEE' },
	dayperiod: 'a',
	dayPeriod: 'a',
	hour: { numeric: 'h', '2-digit': 'hh' },
	minute: { numeric: 'm', '2-digit': 'mm' },
	second: { numeric: 's', '2-digit': 'ss' },
	timeZoneName: { long: 'ZZZZZ', short: 'ZZZ' }
};
function Xi(r, e, t) {
	const { type: n, value: s } = r;
	if (n === 'literal') return { literal: !0, val: s };
	const i = t[n];
	let a = Ki[n];
	if ((typeof a == 'object' && (a = a[i]), a)) return { literal: !1, val: a };
}
function ea(r) {
	return [`^${r.map((t) => t.regex).reduce((t, n) => `${t}(${n.source})`, '')}$`, r];
}
function ta(r, e, t) {
	const n = r.match(e);
	if (n) {
		const s = {};
		let i = 1;
		for (const a in t)
			if (Ge(t, a)) {
				const o = t[a],
					l = o.groups ? o.groups + 1 : 1;
				!o.literal && o.token && (s[o.token.val[0]] = o.deser(n.slice(i, i + l))), (i += l);
			}
		return [n, s];
	} else return [n, {}];
}
function ra(r) {
	const e = (i) => {
		switch (i) {
			case 'S':
				return 'millisecond';
			case 's':
				return 'second';
			case 'm':
				return 'minute';
			case 'h':
			case 'H':
				return 'hour';
			case 'd':
				return 'day';
			case 'o':
				return 'ordinal';
			case 'L':
			case 'M':
				return 'month';
			case 'y':
				return 'year';
			case 'E':
			case 'c':
				return 'weekday';
			case 'W':
				return 'weekNumber';
			case 'k':
				return 'weekYear';
			case 'q':
				return 'quarter';
			default:
				return null;
		}
	};
	let t = null,
		n;
	return (
		k(r.z) || (t = ve.create(r.z)),
		k(r.Z) || (t || (t = new J(r.Z)), (n = r.Z)),
		k(r.q) || (r.M = (r.q - 1) * 3 + 1),
		k(r.h) || (r.h < 12 && r.a === 1 ? (r.h += 12) : r.h === 12 && r.a === 0 && (r.h = 0)),
		r.G === 0 && r.y && (r.y = -r.y),
		k(r.u) || (r.S = fr(r.u)),
		[
			Object.keys(r).reduce((i, a) => {
				const o = e(a);
				return o && (i[o] = r[a]), i;
			}, {}),
			t,
			n
		]
	);
}
let Qt = null;
function na() {
	return Qt || (Qt = v.fromMillis(1555555555555)), Qt;
}
function sa(r, e) {
	if (r.literal) return r;
	const t = Q.macroTokenToFormatOpts(r.val),
		n = Bn(t, e);
	return n == null || n.includes(void 0) ? r : n;
}
function ia(r, e) {
	return Array.prototype.concat(...r.map((t) => sa(t, e)));
}
function Jn(r, e, t) {
	const n = ia(Q.parseFormat(t), r),
		s = n.map((a) => Qi(a, r)),
		i = s.find((a) => a.invalidReason);
	if (i) return { input: e, tokens: n, invalidReason: i.invalidReason };
	{
		const [a, o] = ea(s),
			l = RegExp(a, 'i'),
			[u, f] = ta(e, l, o),
			[m, p, h] = f ? ra(f) : [null, null, void 0];
		if (Ge(f, 'a') && Ge(f, 'H'))
			throw new it("Can't include meridiem when specifying 24-hour format");
		return {
			input: e,
			tokens: n,
			regex: l,
			rawMatches: u,
			matches: f,
			result: m,
			zone: p,
			specificOffset: h
		};
	}
}
function aa(r, e, t) {
	const { result: n, zone: s, specificOffset: i, invalidReason: a } = Jn(r, e, t);
	return [n, s, i, a];
}
function Bn(r, e) {
	return r
		? Q.create(e, r)
				.formatDateTimeParts(na())
				.map((s) => Xi(s, e, r))
		: null;
}
const Qn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
	Kn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function se(r, e) {
	return new ue(
		'unit out of range',
		`you specified ${e} (of type ${typeof e}) as a ${r}, which is invalid`
	);
}
function Xn(r, e, t) {
	const n = new Date(Date.UTC(r, e - 1, t));
	r < 100 && r >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
	const s = n.getUTCDay();
	return s === 0 ? 7 : s;
}
function es(r, e, t) {
	return t + (ut(r) ? Kn : Qn)[e - 1];
}
function ts(r, e) {
	const t = ut(r) ? Kn : Qn,
		n = t.findIndex((i) => i < e),
		s = e - t[n];
	return { month: n + 1, day: s };
}
function cr(r) {
	const { year: e, month: t, day: n } = r,
		s = es(e, t, n),
		i = Xn(e, t, n);
	let a = Math.floor((s - i + 10) / 7),
		o;
	return (
		a < 1 ? ((o = e - 1), (a = It(o))) : a > It(e) ? ((o = e + 1), (a = 1)) : (o = e),
		{ weekYear: o, weekNumber: a, weekday: i, ..._t(r) }
	);
}
function zr(r) {
	const { weekYear: e, weekNumber: t, weekday: n } = r,
		s = Xn(e, 1, 4),
		i = ot(e);
	let a = t * 7 + n - s - 3,
		o;
	a < 1 ? ((o = e - 1), (a += ot(o))) : a > i ? ((o = e + 1), (a -= ot(e))) : (o = e);
	const { month: l, day: u } = ts(o, a);
	return { year: o, month: l, day: u, ..._t(r) };
}
function Kt(r) {
	const { year: e, month: t, day: n } = r,
		s = es(e, t, n);
	return { year: e, ordinal: s, ..._t(r) };
}
function Wr(r) {
	const { year: e, ordinal: t } = r,
		{ month: n, day: s } = ts(e, t);
	return { year: e, month: n, day: s, ..._t(r) };
}
function oa(r) {
	const e = xt(r.weekYear),
		t = Te(r.weekNumber, 1, It(r.weekYear)),
		n = Te(r.weekday, 1, 7);
	return e
		? t
			? n
				? !1
				: se('weekday', r.weekday)
			: se('week', r.week)
		: se('weekYear', r.weekYear);
}
function la(r) {
	const e = xt(r.year),
		t = Te(r.ordinal, 1, ot(r.year));
	return e ? (t ? !1 : se('ordinal', r.ordinal)) : se('year', r.year);
}
function rs(r) {
	const e = xt(r.year),
		t = Te(r.month, 1, 12),
		n = Te(r.day, 1, Dt(r.year, r.month));
	return e ? (t ? (n ? !1 : se('day', r.day)) : se('month', r.month)) : se('year', r.year);
}
function ns(r) {
	const { hour: e, minute: t, second: n, millisecond: s } = r,
		i = Te(e, 0, 23) || (e === 24 && t === 0 && n === 0 && s === 0),
		a = Te(t, 0, 59),
		o = Te(n, 0, 59),
		l = Te(s, 0, 999);
	return i
		? a
			? o
				? l
					? !1
					: se('millisecond', s)
				: se('second', n)
			: se('minute', t)
		: se('hour', e);
}
const Xt = 'Invalid DateTime',
	qr = 864e13;
function Et(r) {
	return new ue('unsupported zone', `the zone "${r.name}" is not supported`);
}
function er(r) {
	return r.weekData === null && (r.weekData = cr(r.c)), r.weekData;
}
function rt(r, e) {
	const t = { ts: r.ts, zone: r.zone, c: r.c, o: r.o, loc: r.loc, invalid: r.invalid };
	return new v({ ...t, ...e, old: t });
}
function ss(r, e, t) {
	let n = r - e * 60 * 1e3;
	const s = t.offset(n);
	if (e === s) return [n, e];
	n -= (s - e) * 60 * 1e3;
	const i = t.offset(n);
	return s === i ? [n, s] : [r - Math.min(s, i) * 60 * 1e3, Math.max(s, i)];
}
function Hr(r, e) {
	r += e * 60 * 1e3;
	const t = new Date(r);
	return {
		year: t.getUTCFullYear(),
		month: t.getUTCMonth() + 1,
		day: t.getUTCDate(),
		hour: t.getUTCHours(),
		minute: t.getUTCMinutes(),
		second: t.getUTCSeconds(),
		millisecond: t.getUTCMilliseconds()
	};
}
function Mt(r, e, t) {
	return ss(hr(r), e, t);
}
function Pr(r, e) {
	const t = r.o,
		n = r.c.year + Math.trunc(e.years),
		s = r.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3,
		i = {
			...r.c,
			year: n,
			month: s,
			day: Math.min(r.c.day, Dt(n, s)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
		},
		a = N.fromObject({
			years: e.years - Math.trunc(e.years),
			quarters: e.quarters - Math.trunc(e.quarters),
			months: e.months - Math.trunc(e.months),
			weeks: e.weeks - Math.trunc(e.weeks),
			days: e.days - Math.trunc(e.days),
			hours: e.hours,
			minutes: e.minutes,
			seconds: e.seconds,
			milliseconds: e.milliseconds
		}).as('milliseconds'),
		o = hr(i);
	let [l, u] = ss(o, t, r.zone);
	return a !== 0 && ((l += a), (u = r.zone.offset(l))), { ts: l, o: u };
}
function nt(r, e, t, n, s, i) {
	const { setZone: a, zone: o } = t;
	if (r && Object.keys(r).length !== 0) {
		const l = e || o,
			u = v.fromObject(r, { ...t, zone: l, specificOffset: i });
		return a ? u : u.setZone(o);
	} else return v.invalid(new ue('unparsable', `the input "${s}" can't be parsed as ${n}`));
}
function kt(r, e, t = !0) {
	return r.isValid
		? Q.create($.create('en-US'), { allowZ: t, forceSimple: !0 }).formatDateTimeFromString(r, e)
		: null;
}
function tr(r, e) {
	const t = r.c.year > 9999 || r.c.year < 0;
	let n = '';
	return (
		t && r.c.year >= 0 && (n += '+'),
		(n += R(r.c.year, t ? 6 : 4)),
		e
			? ((n += '-'), (n += R(r.c.month)), (n += '-'), (n += R(r.c.day)))
			: ((n += R(r.c.month)), (n += R(r.c.day))),
		n
	);
}
function Yr(r, e, t, n, s, i) {
	let a = R(r.c.hour);
	return (
		e
			? ((a += ':'), (a += R(r.c.minute)), (r.c.second !== 0 || !t) && (a += ':'))
			: (a += R(r.c.minute)),
		(r.c.second !== 0 || !t) &&
			((a += R(r.c.second)),
			(r.c.millisecond !== 0 || !n) && ((a += '.'), (a += R(r.c.millisecond, 3)))),
		s &&
			(r.isOffsetFixed && r.offset === 0 && !i
				? (a += 'Z')
				: r.o < 0
				? ((a += '-'), (a += R(Math.trunc(-r.o / 60))), (a += ':'), (a += R(Math.trunc(-r.o % 60))))
				: ((a += '+'), (a += R(Math.trunc(r.o / 60))), (a += ':'), (a += R(Math.trunc(r.o % 60))))),
		i && (a += '[' + r.zone.ianaName + ']'),
		a
	);
}
const is = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
	ua = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
	ca = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
	as = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
	fa = ['weekYear', 'weekNumber', 'weekday', 'hour', 'minute', 'second', 'millisecond'],
	da = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];
function Gr(r) {
	const e = {
		year: 'year',
		years: 'year',
		month: 'month',
		months: 'month',
		day: 'day',
		days: 'day',
		hour: 'hour',
		hours: 'hour',
		minute: 'minute',
		minutes: 'minute',
		quarter: 'quarter',
		quarters: 'quarter',
		second: 'second',
		seconds: 'second',
		millisecond: 'millisecond',
		milliseconds: 'millisecond',
		weekday: 'weekday',
		weekdays: 'weekday',
		weeknumber: 'weekNumber',
		weeksnumber: 'weekNumber',
		weeknumbers: 'weekNumber',
		weekyear: 'weekYear',
		weekyears: 'weekYear',
		ordinal: 'ordinal'
	}[r.toLowerCase()];
	if (!e) throw new un(r);
	return e;
}
function jr(r, e) {
	const t = Ne(e.zone, z.defaultZone),
		n = $.fromObject(e),
		s = z.now();
	let i, a;
	if (k(r.year)) i = s;
	else {
		for (const u of as) k(r[u]) && (r[u] = is[u]);
		const o = rs(r) || ns(r);
		if (o) return v.invalid(o);
		const l = t.offset(s);
		[i, a] = Mt(r, l, t);
	}
	return new v({ ts: i, zone: t, loc: n, o: a });
}
function Jr(r, e, t) {
	const n = k(t.round) ? !0 : t.round,
		s = (a, o) => (
			(a = dr(a, n || t.calendary ? 0 : 2, !0)), e.loc.clone(t).relFormatter(t).format(a, o)
		),
		i = (a) =>
			t.calendary
				? e.hasSame(r, a)
					? 0
					: e.startOf(a).diff(r.startOf(a), a).get(a)
				: e.diff(r, a).get(a);
	if (t.unit) return s(i(t.unit), t.unit);
	for (const a of t.units) {
		const o = i(a);
		if (Math.abs(o) >= 1) return s(o, a);
	}
	return s(r > e ? -0 : 0, t.units[t.units.length - 1]);
}
function Br(r) {
	let e = {},
		t;
	return (
		r.length > 0 && typeof r[r.length - 1] == 'object'
			? ((e = r[r.length - 1]), (t = Array.from(r).slice(0, r.length - 1)))
			: (t = Array.from(r)),
		[e, t]
	);
}
class v {
	constructor(e) {
		const t = e.zone || z.defaultZone;
		let n =
			e.invalid ||
			(Number.isNaN(e.ts) ? new ue('invalid input') : null) ||
			(t.isValid ? null : Et(t));
		this.ts = k(e.ts) ? z.now() : e.ts;
		let s = null,
			i = null;
		if (!n)
			if (e.old && e.old.ts === this.ts && e.old.zone.equals(t)) [s, i] = [e.old.c, e.old.o];
			else {
				const o = t.offset(this.ts);
				(s = Hr(this.ts, o)),
					(n = Number.isNaN(s.year) ? new ue('invalid input') : null),
					(s = n ? null : s),
					(i = n ? null : o);
			}
		(this._zone = t),
			(this.loc = e.loc || $.create()),
			(this.invalid = n),
			(this.weekData = null),
			(this.c = s),
			(this.o = i),
			(this.isLuxonDateTime = !0);
	}
	static now() {
		return new v({});
	}
	static local() {
		const [e, t] = Br(arguments),
			[n, s, i, a, o, l, u] = t;
		return jr({ year: n, month: s, day: i, hour: a, minute: o, second: l, millisecond: u }, e);
	}
	static utc() {
		const [e, t] = Br(arguments),
			[n, s, i, a, o, l, u] = t;
		return (
			(e.zone = J.utcInstance),
			jr({ year: n, month: s, day: i, hour: a, minute: o, second: l, millisecond: u }, e)
		);
	}
	static fromJSDate(e, t = {}) {
		const n = vs(e) ? e.valueOf() : NaN;
		if (Number.isNaN(n)) return v.invalid('invalid input');
		const s = Ne(t.zone, z.defaultZone);
		return s.isValid ? new v({ ts: n, zone: s, loc: $.fromObject(t) }) : v.invalid(Et(s));
	}
	static fromMillis(e, t = {}) {
		if (Re(e))
			return e < -qr || e > qr
				? v.invalid('Timestamp out of range')
				: new v({ ts: e, zone: Ne(t.zone, z.defaultZone), loc: $.fromObject(t) });
		throw new ne(
			`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
		);
	}
	static fromSeconds(e, t = {}) {
		if (Re(e)) return new v({ ts: e * 1e3, zone: Ne(t.zone, z.defaultZone), loc: $.fromObject(t) });
		throw new ne('fromSeconds requires a numerical input');
	}
	static fromObject(e, t = {}) {
		e = e || {};
		const n = Ne(t.zone, z.defaultZone);
		if (!n.isValid) return v.invalid(Et(n));
		const s = z.now(),
			i = k(t.specificOffset) ? n.offset(s) : t.specificOffset,
			a = bt(e, Gr),
			o = !k(a.ordinal),
			l = !k(a.year),
			u = !k(a.month) || !k(a.day),
			f = l || u,
			m = a.weekYear || a.weekNumber,
			p = $.fromObject(t);
		if ((f || o) && m)
			throw new it("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
		if (u && o) throw new it("Can't mix ordinal dates with month/day");
		const h = m || (a.weekday && !f);
		let E,
			L,
			I = Hr(s, i);
		h
			? ((E = fa), (L = ua), (I = cr(I)))
			: o
			? ((E = da), (L = ca), (I = Kt(I)))
			: ((E = as), (L = is));
		let M = !1;
		for (const q of E) {
			const Ke = a[q];
			k(Ke) ? (M ? (a[q] = L[q]) : (a[q] = I[q])) : (M = !0);
		}
		const C = h ? oa(a) : o ? la(a) : rs(a),
			V = C || ns(a);
		if (V) return v.invalid(V);
		const Z = h ? zr(a) : o ? Wr(a) : a,
			[ie, B] = Mt(Z, i, n),
			U = new v({ ts: ie, zone: n, o: B, loc: p });
		return a.weekday && f && e.weekday !== U.weekday
			? v.invalid(
					'mismatched weekday',
					`you can't specify both a weekday of ${a.weekday} and a date of ${U.toISO()}`
			  )
			: U;
	}
	static fromISO(e, t = {}) {
		const [n, s] = Mi(e);
		return nt(n, s, t, 'ISO 8601', e);
	}
	static fromRFC2822(e, t = {}) {
		const [n, s] = Di(e);
		return nt(n, s, t, 'RFC 2822', e);
	}
	static fromHTTP(e, t = {}) {
		const [n, s] = Ii(e);
		return nt(n, s, t, 'HTTP', t);
	}
	static fromFormat(e, t, n = {}) {
		if (k(e) || k(t)) throw new ne('fromFormat requires an input string and a format');
		const { locale: s = null, numberingSystem: i = null } = n,
			a = $.fromOpts({ locale: s, numberingSystem: i, defaultToEN: !0 }),
			[o, l, u, f] = aa(a, e, t);
		return f ? v.invalid(f) : nt(o, l, n, `format ${t}`, e, u);
	}
	static fromString(e, t, n = {}) {
		return v.fromFormat(e, t, n);
	}
	static fromSQL(e, t = {}) {
		const [n, s] = $i(e);
		return nt(n, s, t, 'SQL', e);
	}
	static invalid(e, t = null) {
		if (!e) throw new ne('need to specify a reason the DateTime is invalid');
		const n = e instanceof ue ? e : new ue(e, t);
		if (z.throwOnInvalid) throw new ms(n);
		return new v({ invalid: n });
	}
	static isDateTime(e) {
		return (e && e.isLuxonDateTime) || !1;
	}
	static parseFormatForOpts(e, t = {}) {
		const n = Bn(e, $.fromObject(t));
		return n ? n.map((s) => (s ? s.val : null)).join('') : null;
	}
	get(e) {
		return this[e];
	}
	get isValid() {
		return this.invalid === null;
	}
	get invalidReason() {
		return this.invalid ? this.invalid.reason : null;
	}
	get invalidExplanation() {
		return this.invalid ? this.invalid.explanation : null;
	}
	get locale() {
		return this.isValid ? this.loc.locale : null;
	}
	get numberingSystem() {
		return this.isValid ? this.loc.numberingSystem : null;
	}
	get outputCalendar() {
		return this.isValid ? this.loc.outputCalendar : null;
	}
	get zone() {
		return this._zone;
	}
	get zoneName() {
		return this.isValid ? this.zone.name : null;
	}
	get year() {
		return this.isValid ? this.c.year : NaN;
	}
	get quarter() {
		return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
	}
	get month() {
		return this.isValid ? this.c.month : NaN;
	}
	get day() {
		return this.isValid ? this.c.day : NaN;
	}
	get hour() {
		return this.isValid ? this.c.hour : NaN;
	}
	get minute() {
		return this.isValid ? this.c.minute : NaN;
	}
	get second() {
		return this.isValid ? this.c.second : NaN;
	}
	get millisecond() {
		return this.isValid ? this.c.millisecond : NaN;
	}
	get weekYear() {
		return this.isValid ? er(this).weekYear : NaN;
	}
	get weekNumber() {
		return this.isValid ? er(this).weekNumber : NaN;
	}
	get weekday() {
		return this.isValid ? er(this).weekday : NaN;
	}
	get ordinal() {
		return this.isValid ? Kt(this.c).ordinal : NaN;
	}
	get monthShort() {
		return this.isValid ? Ot.months('short', { locObj: this.loc })[this.month - 1] : null;
	}
	get monthLong() {
		return this.isValid ? Ot.months('long', { locObj: this.loc })[this.month - 1] : null;
	}
	get weekdayShort() {
		return this.isValid ? Ot.weekdays('short', { locObj: this.loc })[this.weekday - 1] : null;
	}
	get weekdayLong() {
		return this.isValid ? Ot.weekdays('long', { locObj: this.loc })[this.weekday - 1] : null;
	}
	get offset() {
		return this.isValid ? +this.o : NaN;
	}
	get offsetNameShort() {
		return this.isValid
			? this.zone.offsetName(this.ts, { format: 'short', locale: this.locale })
			: null;
	}
	get offsetNameLong() {
		return this.isValid
			? this.zone.offsetName(this.ts, { format: 'long', locale: this.locale })
			: null;
	}
	get isOffsetFixed() {
		return this.isValid ? this.zone.isUniversal : null;
	}
	get isInDST() {
		return this.isOffsetFixed
			? !1
			: this.offset > this.set({ month: 1, day: 1 }).offset ||
					this.offset > this.set({ month: 5 }).offset;
	}
	get isInLeapYear() {
		return ut(this.year);
	}
	get daysInMonth() {
		return Dt(this.year, this.month);
	}
	get daysInYear() {
		return this.isValid ? ot(this.year) : NaN;
	}
	get weeksInWeekYear() {
		return this.isValid ? It(this.weekYear) : NaN;
	}
	resolvedLocaleOptions(e = {}) {
		const {
			locale: t,
			numberingSystem: n,
			calendar: s
		} = Q.create(this.loc.clone(e), e).resolvedOptions(this);
		return { locale: t, numberingSystem: n, outputCalendar: s };
	}
	toUTC(e = 0, t = {}) {
		return this.setZone(J.instance(e), t);
	}
	toLocal() {
		return this.setZone(z.defaultZone);
	}
	setZone(e, { keepLocalTime: t = !1, keepCalendarTime: n = !1 } = {}) {
		if (((e = Ne(e, z.defaultZone)), e.equals(this.zone))) return this;
		if (e.isValid) {
			let s = this.ts;
			if (t || n) {
				const i = e.offset(this.ts),
					a = this.toObject();
				[s] = Mt(a, i, e);
			}
			return rt(this, { ts: s, zone: e });
		} else return v.invalid(Et(e));
	}
	reconfigure({ locale: e, numberingSystem: t, outputCalendar: n } = {}) {
		const s = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: n });
		return rt(this, { loc: s });
	}
	setLocale(e) {
		return this.reconfigure({ locale: e });
	}
	set(e) {
		if (!this.isValid) return this;
		const t = bt(e, Gr),
			n = !k(t.weekYear) || !k(t.weekNumber) || !k(t.weekday),
			s = !k(t.ordinal),
			i = !k(t.year),
			a = !k(t.month) || !k(t.day),
			o = i || a,
			l = t.weekYear || t.weekNumber;
		if ((o || s) && l)
			throw new it("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
		if (a && s) throw new it("Can't mix ordinal dates with month/day");
		let u;
		n
			? (u = zr({ ...cr(this.c), ...t }))
			: k(t.ordinal)
			? ((u = { ...this.toObject(), ...t }),
			  k(t.day) && (u.day = Math.min(Dt(u.year, u.month), u.day)))
			: (u = Wr({ ...Kt(this.c), ...t }));
		const [f, m] = Mt(u, this.o, this.zone);
		return rt(this, { ts: f, o: m });
	}
	plus(e) {
		if (!this.isValid) return this;
		const t = N.fromDurationLike(e);
		return rt(this, Pr(this, t));
	}
	minus(e) {
		if (!this.isValid) return this;
		const t = N.fromDurationLike(e).negate();
		return rt(this, Pr(this, t));
	}
	startOf(e) {
		if (!this.isValid) return this;
		const t = {},
			n = N.normalizeUnit(e);
		switch (n) {
			case 'years':
				t.month = 1;
			case 'quarters':
			case 'months':
				t.day = 1;
			case 'weeks':
			case 'days':
				t.hour = 0;
			case 'hours':
				t.minute = 0;
			case 'minutes':
				t.second = 0;
			case 'seconds':
				t.millisecond = 0;
				break;
		}
		if ((n === 'weeks' && (t.weekday = 1), n === 'quarters')) {
			const s = Math.ceil(this.month / 3);
			t.month = (s - 1) * 3 + 1;
		}
		return this.set(t);
	}
	endOf(e) {
		return this.isValid
			? this.plus({ [e]: 1 })
					.startOf(e)
					.minus(1)
			: this;
	}
	toFormat(e, t = {}) {
		return this.isValid
			? Q.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e)
			: Xt;
	}
	toLocaleString(e = sr, t = {}) {
		return this.isValid ? Q.create(this.loc.clone(t), e).formatDateTime(this) : Xt;
	}
	toLocaleParts(e = {}) {
		return this.isValid ? Q.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
	}
	toISO({
		format: e = 'extended',
		suppressSeconds: t = !1,
		suppressMilliseconds: n = !1,
		includeOffset: s = !0,
		extendedZone: i = !1
	} = {}) {
		if (!this.isValid) return null;
		const a = e === 'extended';
		let o = tr(this, a);
		return (o += 'T'), (o += Yr(this, a, t, n, s, i)), o;
	}
	toISODate({ format: e = 'extended' } = {}) {
		return this.isValid ? tr(this, e === 'extended') : null;
	}
	toISOWeekDate() {
		return kt(this, "kkkk-'W'WW-c");
	}
	toISOTime({
		suppressMilliseconds: e = !1,
		suppressSeconds: t = !1,
		includeOffset: n = !0,
		includePrefix: s = !1,
		extendedZone: i = !1,
		format: a = 'extended'
	} = {}) {
		return this.isValid ? (s ? 'T' : '') + Yr(this, a === 'extended', t, e, n, i) : null;
	}
	toRFC2822() {
		return kt(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', !1);
	}
	toHTTP() {
		return kt(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
	}
	toSQLDate() {
		return this.isValid ? tr(this, !0) : null;
	}
	toSQLTime({ includeOffset: e = !0, includeZone: t = !1, includeOffsetSpace: n = !0 } = {}) {
		let s = 'HH:mm:ss.SSS';
		return (t || e) && (n && (s += ' '), t ? (s += 'z') : e && (s += 'ZZ')), kt(this, s, !0);
	}
	toSQL(e = {}) {
		return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
	}
	toString() {
		return this.isValid ? this.toISO() : Xt;
	}
	valueOf() {
		return this.toMillis();
	}
	toMillis() {
		return this.isValid ? this.ts : NaN;
	}
	toSeconds() {
		return this.isValid ? this.ts / 1e3 : NaN;
	}
	toUnixInteger() {
		return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
	}
	toJSON() {
		return this.toISO();
	}
	toBSON() {
		return this.toJSDate();
	}
	toObject(e = {}) {
		if (!this.isValid) return {};
		const t = { ...this.c };
		return (
			e.includeConfig &&
				((t.outputCalendar = this.outputCalendar),
				(t.numberingSystem = this.loc.numberingSystem),
				(t.locale = this.loc.locale)),
			t
		);
	}
	toJSDate() {
		return new Date(this.isValid ? this.ts : NaN);
	}
	diff(e, t = 'milliseconds', n = {}) {
		if (!this.isValid || !e.isValid) return N.invalid('created by diffing an invalid DateTime');
		const s = { locale: this.locale, numberingSystem: this.numberingSystem, ...n },
			i = Ss(t).map(N.normalizeUnit),
			a = e.valueOf() > this.valueOf(),
			o = a ? this : e,
			l = a ? e : this,
			u = Hi(o, l, i, s);
		return a ? u.negate() : u;
	}
	diffNow(e = 'milliseconds', t = {}) {
		return this.diff(v.now(), e, t);
	}
	until(e) {
		return this.isValid ? A.fromDateTimes(this, e) : this;
	}
	hasSame(e, t) {
		if (!this.isValid) return !1;
		const n = e.valueOf(),
			s = this.setZone(e.zone, { keepLocalTime: !0 });
		return s.startOf(t) <= n && n <= s.endOf(t);
	}
	equals(e) {
		return (
			this.isValid &&
			e.isValid &&
			this.valueOf() === e.valueOf() &&
			this.zone.equals(e.zone) &&
			this.loc.equals(e.loc)
		);
	}
	toRelative(e = {}) {
		if (!this.isValid) return null;
		const t = e.base || v.fromObject({}, { zone: this.zone }),
			n = e.padding ? (this < t ? -e.padding : e.padding) : 0;
		let s = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
			i = e.unit;
		return (
			Array.isArray(e.unit) && ((s = e.unit), (i = void 0)),
			Jr(t, this.plus(n), { ...e, numeric: 'always', units: s, unit: i })
		);
	}
	toRelativeCalendar(e = {}) {
		return this.isValid
			? Jr(e.base || v.fromObject({}, { zone: this.zone }), this, {
					...e,
					numeric: 'auto',
					units: ['years', 'months', 'days'],
					calendary: !0
			  })
			: null;
	}
	static min(...e) {
		if (!e.every(v.isDateTime)) throw new ne('min requires all arguments be DateTimes');
		return Dr(e, (t) => t.valueOf(), Math.min);
	}
	static max(...e) {
		if (!e.every(v.isDateTime)) throw new ne('max requires all arguments be DateTimes');
		return Dr(e, (t) => t.valueOf(), Math.max);
	}
	static fromFormatExplain(e, t, n = {}) {
		const { locale: s = null, numberingSystem: i = null } = n,
			a = $.fromOpts({ locale: s, numberingSystem: i, defaultToEN: !0 });
		return Jn(a, e, t);
	}
	static fromStringExplain(e, t, n = {}) {
		return v.fromFormatExplain(e, t, n);
	}
	static get DATE_SHORT() {
		return sr;
	}
	static get DATE_MED() {
		return cn;
	}
	static get DATE_MED_WITH_WEEKDAY() {
		return ps;
	}
	static get DATE_FULL() {
		return fn;
	}
	static get DATE_HUGE() {
		return dn;
	}
	static get TIME_SIMPLE() {
		return hn;
	}
	static get TIME_WITH_SECONDS() {
		return mn;
	}
	static get TIME_WITH_SHORT_OFFSET() {
		return yn;
	}
	static get TIME_WITH_LONG_OFFSET() {
		return gn;
	}
	static get TIME_24_SIMPLE() {
		return pn;
	}
	static get TIME_24_WITH_SECONDS() {
		return wn;
	}
	static get TIME_24_WITH_SHORT_OFFSET() {
		return Tn;
	}
	static get TIME_24_WITH_LONG_OFFSET() {
		return vn;
	}
	static get DATETIME_SHORT() {
		return Sn;
	}
	static get DATETIME_SHORT_WITH_SECONDS() {
		return On;
	}
	static get DATETIME_MED() {
		return En;
	}
	static get DATETIME_MED_WITH_SECONDS() {
		return kn;
	}
	static get DATETIME_MED_WITH_WEEKDAY() {
		return ws;
	}
	static get DATETIME_FULL() {
		return Nn;
	}
	static get DATETIME_FULL_WITH_SECONDS() {
		return Mn;
	}
	static get DATETIME_HUGE() {
		return Dn;
	}
	static get DATETIME_HUGE_WITH_SECONDS() {
		return In;
	}
}
function st(r) {
	if (v.isDateTime(r)) return r;
	if (r && r.valueOf && Re(r.valueOf())) return v.fromJSDate(r);
	if (r && typeof r == 'object') return v.fromObject(r);
	throw new ne(`Unknown datetime argument: ${r}, of type ${typeof r}`);
}
function Qr(r) {
	let e, t, n;
	return {
		c() {
			(e = w('span')), (t = F('- ')), (n = F(r[2])), this.h();
		},
		l(s) {
			e = T(s, 'SPAN', { class: !0 });
			var i = O(e);
			(t = _(i, '- ')), (n = _(i, r[2])), i.forEach(y), this.h();
		},
		h() {
			g(e, 'class', 'dark:text-arc-400');
		},
		m(s, i) {
			ee(s, e, i), c(e, t), c(e, n);
		},
		p(s, i) {
			i & 4 && K(n, s[2]);
		},
		d(s) {
			s && y(e);
		}
	};
}
function ha(r) {
	let e,
		t,
		n,
		s,
		i = r[2] && Qr(r);
	return {
		c() {
			(e = w('li')), (t = w('a')), (n = F(r[1])), (s = b()), i && i.c(), this.h();
		},
		l(a) {
			e = T(a, 'LI', {});
			var o = O(e);
			t = T(o, 'A', { href: !0, target: !0, rel: !0, class: !0 });
			var l = O(t);
			(n = _(l, r[1])), l.forEach(y), (s = x(o)), i && i.l(o), o.forEach(y), this.h();
		},
		h() {
			g(t, 'href', r[0]),
				g(t, 'target', '_blank'),
				g(t, 'rel', 'noreferrer noopener'),
				g(t, 'class', 'dark:text-arc-300 underline');
		},
		m(a, o) {
			ee(a, e, o), c(e, t), c(t, n), c(e, s), i && i.m(e, null);
		},
		p(a, [o]) {
			o & 2 && K(n, a[1]),
				o & 1 && g(t, 'href', a[0]),
				a[2] ? (i ? i.p(a, o) : ((i = Qr(a)), i.c(), i.m(e, null))) : i && (i.d(1), (i = null));
		},
		i: nr,
		o: nr,
		d(a) {
			a && y(e), i && i.d();
		}
	};
}
function ma(r, e, t) {
	let { href: n } = e,
		{ name: s } = e,
		{ description: i = void 0 } = e;
	return (
		(r.$$set = (a) => {
			'href' in a && t(0, (n = a.href)),
				'name' in a && t(1, (s = a.name)),
				'description' in a && t(2, (i = a.description));
		}),
		[n, s, i]
	);
}
class we extends an {
	constructor(e) {
		super(), on(this, e, ma, ha, ln, { href: 0, name: 1, description: 2 });
	}
}
const ya = (r) => {
		var o, l, u, f, m, p;
		const e =
			(l = (o = r == null ? void 0 : r.activities) == null ? void 0 : o.find) == null
				? void 0
				: l.call(o, (h) => h.application_id === '732565262704050298');
		if (!e) return;
		if ((e == null ? void 0 : e.details) === 'Idling') return { idling: !0 };
		const n = (u = e.details) == null ? void 0 : u.substring(3).split(' - ')[0];
		let s = e.state.split('\u{1F4C2} ')[1];
		const i =
				(p =
					(m = (f = e.assets) == null ? void 0 : f.large_text) == null
						? void 0
						: m.split(' file')[0]) == null
					? void 0
					: p.toLocaleLowerCase(),
			a = s.split(' ');
		return a.shift(), (s = a.join(' ')), { lang: i, editing: n, folder: s };
	},
	ga = (r) => {
		var t, n, s;
		const e =
			(n = (t = r == null ? void 0 : r.activities) == null ? void 0 : t.filter) == null
				? void 0
				: n.call(t, (i) => i.application_id !== '732565262704050298' && i.type === 0);
		return (s = e == null ? void 0 : e.map) == null
			? void 0
			: s.call(e, (i) => ({
					name: i.name,
					start: i.timestamps ? new Date(i.timestamps.start) : void 0
			  }));
	};
function Kr(r, e, t) {
	const n = r.slice();
	return (n[19] = e[t]), n;
}
function pa(r) {
	let e, t, n, s, i, a;
	return {
		c() {
			(e = w('div')),
				(t = w('span')),
				(n = F(r[8])),
				(s = b()),
				(i = w('span')),
				(a = F(r[7])),
				this.h();
		},
		l(o) {
			e = T(o, 'DIV', { class: !0 });
			var l = O(e);
			t = T(l, 'SPAN', {});
			var u = O(t);
			(n = _(u, r[8])), u.forEach(y), (s = x(l)), (i = T(l, 'SPAN', {}));
			var f = O(i);
			(a = _(f, r[7])), f.forEach(y), l.forEach(y), this.h();
		},
		h() {
			g(e, 'class', 'flex flex-col items-start sm:items-end');
		},
		m(o, l) {
			ee(o, e, l), c(e, t), c(t, n), c(e, s), c(e, i), c(i, a);
		},
		p(o, l) {
			l & 256 && K(n, o[8]), l & 128 && K(a, o[7]);
		},
		d(o) {
			o && y(e);
		}
	};
}
function wa(r) {
	let e, t, n, s, i, a, o, l;
	return {
		c() {
			(e = w('div')),
				(t = w('span')),
				(n = F(r[8])),
				(s = b()),
				(i = w('span')),
				(a = F(r[7])),
				this.h();
		},
		l(u) {
			e = T(u, 'DIV', { class: !0 });
			var f = O(e);
			t = T(f, 'SPAN', {});
			var m = O(t);
			(n = _(m, r[8])), m.forEach(y), (s = x(f)), (i = T(f, 'SPAN', {}));
			var p = O(i);
			(a = _(p, r[7])), p.forEach(y), f.forEach(y), this.h();
		},
		h() {
			g(e, 'class', 'flex flex-col items-start sm:items-end hover:underline cursor-pointer');
		},
		m(u, f) {
			ee(u, e, f),
				c(e, t),
				c(t, n),
				c(e, s),
				c(e, i),
				c(i, a),
				o || ((l = hs(e, 'click', r[12])), (o = !0));
		},
		p(u, f) {
			f & 256 && K(n, u[8]), f & 128 && K(a, u[7]);
		},
		d(u) {
			u && y(e), (o = !1), l();
		}
	};
}
function Xr(r) {
	var h, E, L;
	let e,
		t,
		n = ((h = r[3].spotify) == null ? void 0 : h.song) + '',
		s,
		i,
		a,
		o = ((E = r[3].spotify) == null ? void 0 : E.artist) + '',
		l,
		u,
		f,
		m = ((L = r[3].spotify) == null ? void 0 : L.album) + '',
		p;
	return {
		c() {
			(e = w('div')),
				(t = w('span')),
				(s = F(n)),
				(i = b()),
				(a = w('span')),
				(l = F(o)),
				(u = b()),
				(f = w('span')),
				(p = F(m)),
				this.h();
		},
		l(I) {
			e = T(I, 'DIV', { class: !0 });
			var M = O(e);
			t = T(M, 'SPAN', { class: !0 });
			var C = O(t);
			(s = _(C, n)), C.forEach(y), (i = x(M)), (a = T(M, 'SPAN', { class: !0 }));
			var V = O(a);
			(l = _(V, o)), V.forEach(y), (u = x(M)), (f = T(M, 'SPAN', { class: !0 }));
			var Z = O(f);
			(p = _(Z, m)), Z.forEach(y), M.forEach(y), this.h();
		},
		h() {
			g(t, 'class', 'text-arc-900 dark:text-arc-100 font-extrabold'),
				g(a, 'class', 'text-arc-800 dark:text-arc-300'),
				g(f, 'class', 'text-arc-700 dark:text-arc-400'),
				g(e, 'class', 'flex flex-col items-start sm:items-end');
		},
		m(I, M) {
			ee(I, e, M), c(e, t), c(t, s), c(e, i), c(e, a), c(a, l), c(e, u), c(e, f), c(f, p);
		},
		p(I, M) {
			var C, V, Z;
			M & 8 && n !== (n = ((C = I[3].spotify) == null ? void 0 : C.song) + '') && K(s, n),
				M & 8 && o !== (o = ((V = I[3].spotify) == null ? void 0 : V.artist) + '') && K(l, o),
				M & 8 && m !== (m = ((Z = I[3].spotify) == null ? void 0 : Z.album) + '') && K(p, m);
		},
		d(I) {
			I && y(e);
		}
	};
}
function en(r) {
	let e, t, n, s, i, a;
	return {
		c() {
			(e = w('div')),
				(t = w('span')),
				(n = F('vsc')),
				(s = b()),
				(i = w('span')),
				(a = F('currently idling')),
				this.h();
		},
		l(o) {
			e = T(o, 'DIV', { class: !0 });
			var l = O(e);
			t = T(l, 'SPAN', { class: !0 });
			var u = O(t);
			(n = _(u, 'vsc')), u.forEach(y), (s = x(l)), (i = T(l, 'SPAN', { class: !0 }));
			var f = O(i);
			(a = _(f, 'currently idling')), f.forEach(y), l.forEach(y), this.h();
		},
		h() {
			g(t, 'class', 'text-arc-900 dark:text-arc-100 font-extrabold'),
				g(i, 'class', 'text-arc-700 dark:text-arc-400'),
				g(e, 'class', 'flex flex-col items-start sm:items-end');
		},
		m(o, l) {
			ee(o, e, l), c(e, t), c(t, n), c(e, s), c(e, i), c(i, a);
		},
		d(o) {
			o && y(e);
		}
	};
}
function tn(r) {
	var I;
	let e,
		t,
		n,
		s,
		i,
		a,
		o,
		l = ((I = r[6].folder) == null ? void 0 : I.toLocaleLowerCase()) + '',
		u,
		f,
		m,
		p,
		h,
		E = r[6].lang + '',
		L;
	return {
		c() {
			(e = w('div')),
				(t = w('span')),
				(n = F('vsc')),
				(s = b()),
				(i = w('span')),
				(a = F('working on ')),
				(o = w('span')),
				(u = F(l)),
				(f = b()),
				(m = w('span')),
				(p = F(`currently writing
					`)),
				(h = w('span')),
				(L = F(E)),
				this.h();
		},
		l(M) {
			e = T(M, 'DIV', { class: !0 });
			var C = O(e);
			t = T(C, 'SPAN', { class: !0 });
			var V = O(t);
			(n = _(V, 'vsc')), V.forEach(y), (s = x(C)), (i = T(C, 'SPAN', { class: !0 }));
			var Z = O(i);
			(a = _(Z, 'working on ')), (o = T(Z, 'SPAN', { class: !0 }));
			var ie = O(o);
			(u = _(ie, l)), ie.forEach(y), Z.forEach(y), (f = x(C)), (m = T(C, 'SPAN', { class: !0 }));
			var B = O(m);
			(p = _(
				B,
				`currently writing
					`
			)),
				(h = T(B, 'SPAN', { class: !0 }));
			var U = O(h);
			(L = _(U, E)), U.forEach(y), B.forEach(y), C.forEach(y), this.h();
		},
		h() {
			g(t, 'class', 'text-arc-900 dark:text-arc-100 font-extrabold'),
				g(o, 'class', 'text-arc-700 dark:text-arc-200'),
				g(i, 'class', 'text-arc-800 dark:text-arc-300'),
				g(h, 'class', 'text-arc-700 dark:text-arc-200'),
				g(m, 'class', 'text-arc-700 dark:text-arc-400'),
				g(e, 'class', 'flex flex-col items-start sm:items-end');
		},
		m(M, C) {
			ee(M, e, C),
				c(e, t),
				c(t, n),
				c(e, s),
				c(e, i),
				c(i, a),
				c(i, o),
				c(o, u),
				c(e, f),
				c(e, m),
				c(m, p),
				c(m, h),
				c(h, L);
		},
		p(M, C) {
			var V;
			C & 64 &&
				l !== (l = ((V = M[6].folder) == null ? void 0 : V.toLocaleLowerCase()) + '') &&
				K(u, l),
				C & 64 && E !== (E = M[6].lang + '') && K(L, E);
		},
		d(M) {
			M && y(e);
		}
	};
}
function rn(r) {
	let e,
		t = r[5],
		n = [];
	for (let s = 0; s < t.length; s += 1) n[s] = sn(Kr(r, t, s));
	return {
		c() {
			for (let s = 0; s < n.length; s += 1) n[s].c();
			e = Mr();
		},
		l(s) {
			for (let i = 0; i < n.length; i += 1) n[i].l(s);
			e = Mr();
		},
		m(s, i) {
			for (let a = 0; a < n.length; a += 1) n[a].m(s, i);
			ee(s, e, i);
		},
		p(s, i) {
			if (i & 34) {
				t = s[5];
				let a;
				for (a = 0; a < t.length; a += 1) {
					const o = Kr(s, t, a);
					n[a] ? n[a].p(o, i) : ((n[a] = sn(o)), n[a].c(), n[a].m(e.parentNode, e));
				}
				for (; a < n.length; a += 1) n[a].d(1);
				n.length = t.length;
			}
		},
		d(s) {
			fs(n, s), s && y(e);
		}
	};
}
function nn(r) {
	var s;
	let e,
		t =
			((s = v.fromJSDate(r[19].start).toRelative({ base: v.fromJSDate(r[1]) })) == null
				? void 0
				: s.replace(' ago', '')) + '',
		n;
	return {
		c() {
			(e = F('for ')), (n = F(t));
		},
		l(i) {
			(e = _(i, 'for ')), (n = _(i, t));
		},
		m(i, a) {
			ee(i, e, a), ee(i, n, a);
		},
		p(i, a) {
			var o;
			a & 34 &&
				t !==
					(t =
						((o = v.fromJSDate(i[19].start).toRelative({ base: v.fromJSDate(i[1]) })) == null
							? void 0
							: o.replace(' ago', '')) + '') &&
				K(n, t);
		},
		d(i) {
			i && y(e), i && y(n);
		}
	};
}
function sn(r) {
	let e,
		t,
		n,
		s,
		i = r[19].name + '',
		a,
		o,
		l,
		u = r[19].start && nn(r);
	return {
		c() {
			(e = w('div')),
				(t = w('span')),
				(n = F('playing ')),
				(s = w('span')),
				(a = F(i)),
				(o = b()),
				u && u.c(),
				(l = b()),
				this.h();
		},
		l(f) {
			e = T(f, 'DIV', { class: !0 });
			var m = O(e);
			t = T(m, 'SPAN', { class: !0 });
			var p = O(t);
			(n = _(p, 'playing ')), (s = T(p, 'SPAN', { class: !0 }));
			var h = O(s);
			(a = _(h, i)),
				h.forEach(y),
				(o = x(p)),
				u && u.l(p),
				p.forEach(y),
				(l = x(m)),
				m.forEach(y),
				this.h();
		},
		h() {
			g(s, 'class', 'text-arc-700 dark:text-arc-200'),
				g(t, 'class', 'text-arc-700 dark:text-arc-400'),
				g(e, 'class', 'flex flex-col items-start sm:items-end');
		},
		m(f, m) {
			ee(f, e, m), c(e, t), c(t, n), c(t, s), c(s, a), c(t, o), u && u.m(t, null), c(e, l);
		},
		p(f, m) {
			m & 32 && i !== (i = f[19].name + '') && K(a, i),
				f[19].start
					? u
						? u.p(f, m)
						: ((u = nn(f)), u.c(), u.m(t, null))
					: u && (u.d(1), (u = null));
		},
		d(f) {
			f && y(e), u && u.d();
		}
	};
}
function Ta(r) {
	var wr, Tr;
	let e,
		t,
		n,
		s,
		i,
		a,
		o,
		l,
		u,
		f,
		m,
		p,
		h,
		E = r[2].toPrecision(10) + '',
		L,
		I,
		M,
		C,
		V,
		Z,
		ie,
		B,
		U,
		q,
		Ke,
		Me,
		Ct,
		De,
		$t,
		Ie,
		At,
		be,
		We,
		Lt,
		Zt,
		qe,
		xe,
		Ut,
		Fe,
		He,
		Rt,
		zt,
		te,
		_e,
		Wt,
		Ve,
		qt,
		Ce,
		Ht,
		$e,
		Pt,
		W,
		Yt,
		ht,
		mt,
		yt,
		Xe;
	(q = new we({
		props: {
			href: 'https://spacedrive.com',
			name: 'spacedrive.com',
			description: 'a file explorer from the future'
		}
	})),
		(Me = new we({
			props: {
				href: 'https://tixte.com',
				name: 'tixte.com',
				description: 'home to your best moments'
			}
		})),
		(De = new we({
			props: {
				href: 'https://github.com/otterdevelopment/beemohelper',
				name: 'beemo helper',
				description: 'third party bot for beemo.gg'
			}
		})),
		(Ie = new we({
			props: {
				href: 'https://github.com/otterdevelopment/astro',
				name: 'astro',
				description: 'powerful discord suggestion bot'
			}
		})),
		(xe = new we({
			props: {
				href: 'https://github.com/otterdevelopment/positivepeter',
				name: 'positive peter',
				description: 'discord bot to uplift users'
			}
		})),
		(_e = new we({ props: { href: 'https://discord.gg/VvE5ucuJmW', name: 'discord' } })),
		(Ve = new we({ props: { href: 'https://twitter.com/xpolarrr', name: 'twitter' } })),
		(Ce = new we({ props: { href: 'https://github.com/xpolar', name: 'github' } })),
		($e = new we({ props: { href: 'mailto:polar@polar.blue', name: 'email' } }));
	function os(S, G) {
		return S[9] ? pa : wa;
	}
	let et = os(r)(r),
		H = ((wr = r[3]) == null ? void 0 : wr.spotify) && Xr(r),
		j = ((Tr = r[6]) == null ? void 0 : Tr.idling) && en(),
		P = r[6] && !r[6].idling && tn(r),
		Y = r[5] && rn(r);
	return {
		c() {
			(e = w('meta')),
				(t = w('meta')),
				(n = w('meta')),
				(s = w('meta')),
				(i = w('meta')),
				(a = b()),
				(o = w('section')),
				(l = w('div')),
				(u = w('div')),
				(f = w('h1')),
				(m = w('span')),
				(p = F('polar, ')),
				(h = w('span')),
				(L = F(E)),
				(I = F(' y/o')),
				(M = F(' software engineer')),
				(C = b()),
				(V = w('div')),
				(Z = w('h1')),
				(ie = F('projects')),
				(B = b()),
				(U = w('ul')),
				de(q.$$.fragment),
				(Ke = b()),
				de(Me.$$.fragment),
				(Ct = b()),
				de(De.$$.fragment),
				($t = b()),
				de(Ie.$$.fragment),
				(At = b()),
				(be = w('div')),
				(We = w('h1')),
				(Lt = F('old')),
				(Zt = b()),
				(qe = w('ul')),
				de(xe.$$.fragment),
				(Ut = b()),
				(Fe = w('div')),
				(He = w('h1')),
				(Rt = F('links')),
				(zt = b()),
				(te = w('ul')),
				de(_e.$$.fragment),
				(Wt = b()),
				de(Ve.$$.fragment),
				(qt = b()),
				de(Ce.$$.fragment),
				(Ht = b()),
				de($e.$$.fragment),
				(Pt = b()),
				(W = w('div')),
				et.c(),
				(Yt = b()),
				H && H.c(),
				(ht = b()),
				j && j.c(),
				(mt = b()),
				P && P.c(),
				(yt = b()),
				Y && Y.c(),
				this.h();
		},
		l(S) {
			const G = us('[data-svelte="svelte-1sjhxkb"]', document.head);
			(e = T(G, 'META', { name: !0, content: !0 })),
				(t = T(G, 'META', { name: !0, content: !0 })),
				(n = T(G, 'META', { name: !0, content: !0 })),
				(s = T(G, 'META', { name: !0, media: !0, content: !0 })),
				(i = T(G, 'META', { name: !0, media: !0, content: !0 })),
				G.forEach(y),
				(a = x(S)),
				(o = T(S, 'SECTION', { class: !0 }));
			var Ae = O(o);
			l = T(Ae, 'DIV', { class: !0 });
			var ae = O(l);
			u = T(ae, 'DIV', { class: !0 });
			var vr = O(u);
			f = T(vr, 'H1', { class: !0 });
			var Sr = O(f);
			m = T(Sr, 'SPAN', { class: !0 });
			var gt = O(m);
			(p = _(gt, 'polar, ')), (h = T(gt, 'SPAN', { class: !0 }));
			var Gt = O(h);
			(L = _(Gt, E)),
				(I = _(Gt, ' y/o')),
				Gt.forEach(y),
				(M = _(gt, ' software engineer')),
				gt.forEach(y),
				Sr.forEach(y),
				vr.forEach(y),
				(C = x(ae)),
				(V = T(ae, 'DIV', {}));
			var pt = O(V);
			Z = T(pt, 'H1', { class: !0 });
			var Or = O(Z);
			(ie = _(Or, 'projects')), Or.forEach(y), (B = x(pt)), (U = T(pt, 'UL', { class: !0 }));
			var Se = O(U);
			he(q.$$.fragment, Se),
				(Ke = x(Se)),
				he(Me.$$.fragment, Se),
				(Ct = x(Se)),
				he(De.$$.fragment, Se),
				($t = x(Se)),
				he(Ie.$$.fragment, Se),
				Se.forEach(y),
				pt.forEach(y),
				(At = x(ae)),
				(be = T(ae, 'DIV', {}));
			var wt = O(be);
			We = T(wt, 'H1', { class: !0 });
			var Er = O(We);
			(Lt = _(Er, 'old')), Er.forEach(y), (Zt = x(wt)), (qe = T(wt, 'UL', { class: !0 }));
			var kr = O(qe);
			he(xe.$$.fragment, kr), kr.forEach(y), wt.forEach(y), (Ut = x(ae)), (Fe = T(ae, 'DIV', {}));
			var Tt = O(Fe);
			He = T(Tt, 'H1', { class: !0 });
			var Nr = O(He);
			(Rt = _(Nr, 'links')), Nr.forEach(y), (zt = x(Tt)), (te = T(Tt, 'UL', { class: !0 }));
			var Oe = O(te);
			he(_e.$$.fragment, Oe),
				(Wt = x(Oe)),
				he(Ve.$$.fragment, Oe),
				(qt = x(Oe)),
				he(Ce.$$.fragment, Oe),
				(Ht = x(Oe)),
				he($e.$$.fragment, Oe),
				Oe.forEach(y),
				Tt.forEach(y),
				ae.forEach(y),
				(Pt = x(Ae)),
				(W = T(Ae, 'DIV', { class: !0 }));
			var fe = O(W);
			et.l(fe),
				(Yt = x(fe)),
				H && H.l(fe),
				(ht = x(fe)),
				j && j.l(fe),
				(mt = x(fe)),
				P && P.l(fe),
				(yt = x(fe)),
				Y && Y.l(fe),
				fe.forEach(y),
				Ae.forEach(y),
				this.h();
		},
		h() {
			(document.title = 'portfolio'),
				g(e, 'name', 'og:title'),
				g(e, 'content', 'portfolio'),
				g(t, 'name', 'description'),
				g(t, 'content', 'a collection of various things'),
				g(n, 'name', 'og:description'),
				g(n, 'content', 'a collection of various things'),
				g(s, 'name', 'theme-color'),
				g(s, 'media', '(prefers-color-scheme: light)'),
				g(s, 'content', '#f9f0f5'),
				g(i, 'name', 'theme-color'),
				g(i, 'media', '(prefers-color-scheme: dark)'),
				g(i, 'content', '#1C2433'),
				g(h, 'class', 'text-arc-700 dark:text-arc-200'),
				g(m, 'class', 'dark:text-arc-blue'),
				g(f, 'class', 'text-arc-700 dark:text-arc-300'),
				g(u, 'class', 'min-h-[3em] lg:min-h-0'),
				g(Z, 'class', 'text-arc-900 dark:text-arc-100 font-extrabold'),
				g(U, 'class', 'list-disc list-inside text-arc-700 dark:text-arc-blue'),
				g(We, 'class', 'text-arc-900 dark:text-arc-100 font-extrabold'),
				g(qe, 'class', 'list-disc list-inside text-arc-700 dark:text-arc-blue'),
				g(He, 'class', 'text-arc-900 dark:text-arc-100 font-extrabold'),
				g(te, 'class', 'list-disc list-inside text-arc-700 dark:text-arc-blue'),
				g(l, 'class', 'flex flex-col gap-7'),
				g(
					W,
					'class',
					'text-arc-900 dark:text-arc-300 flex flex-col items-start sm:items-end gap-3 sm:gap-7 sm:text-right'
				),
				g(
					o,
					'class',
					'p-8 sm:p-12 lg:p-24 lg:py-16 font-jetbrains z-10 flex flex-col sm:flex-row gap-y-10 justify-between'
				);
		},
		m(S, G) {
			c(document.head, e),
				c(document.head, t),
				c(document.head, n),
				c(document.head, s),
				c(document.head, i),
				ee(S, a, G),
				ee(S, o, G),
				c(o, l),
				c(l, u),
				c(u, f),
				c(f, m),
				c(m, p),
				c(m, h),
				c(h, L),
				c(h, I),
				c(m, M),
				c(l, C),
				c(l, V),
				c(V, Z),
				c(Z, ie),
				c(V, B),
				c(V, U),
				me(q, U, null),
				c(U, Ke),
				me(Me, U, null),
				c(U, Ct),
				me(De, U, null),
				c(U, $t),
				me(Ie, U, null),
				c(l, At),
				c(l, be),
				c(be, We),
				c(We, Lt),
				c(be, Zt),
				c(be, qe),
				me(xe, qe, null),
				c(l, Ut),
				c(l, Fe),
				c(Fe, He),
				c(He, Rt),
				c(Fe, zt),
				c(Fe, te),
				me(_e, te, null),
				c(te, Wt),
				me(Ve, te, null),
				c(te, qt),
				me(Ce, te, null),
				c(te, Ht),
				me($e, te, null),
				c(o, Pt),
				c(o, W),
				et.m(W, null),
				c(W, Yt),
				H && H.m(W, null),
				c(W, ht),
				j && j.m(W, null),
				c(W, mt),
				P && P.m(W, null),
				c(W, yt),
				Y && Y.m(W, null),
				(Xe = !0);
		},
		p(S, [G]) {
			var Ae, ae;
			(!Xe || G & 4) && E !== (E = S[2].toPrecision(10) + '') && K(L, E),
				et.p(S, G),
				(Ae = S[3]) != null && Ae.spotify
					? H
						? H.p(S, G)
						: ((H = Xr(S)), H.c(), H.m(W, ht))
					: H && (H.d(1), (H = null)),
				(ae = S[6]) != null && ae.idling
					? j || ((j = en()), j.c(), j.m(W, mt))
					: j && (j.d(1), (j = null)),
				S[6] && !S[6].idling
					? P
						? P.p(S, G)
						: ((P = tn(S)), P.c(), P.m(W, yt))
					: P && (P.d(1), (P = null)),
				S[5] ? (Y ? Y.p(S, G) : ((Y = rn(S)), Y.c(), Y.m(W, null))) : Y && (Y.d(1), (Y = null));
		},
		i(S) {
			Xe ||
				(ye(q.$$.fragment, S),
				ye(Me.$$.fragment, S),
				ye(De.$$.fragment, S),
				ye(Ie.$$.fragment, S),
				ye(xe.$$.fragment, S),
				ye(_e.$$.fragment, S),
				ye(Ve.$$.fragment, S),
				ye(Ce.$$.fragment, S),
				ye($e.$$.fragment, S),
				(Xe = !0));
		},
		o(S) {
			ge(q.$$.fragment, S),
				ge(Me.$$.fragment, S),
				ge(De.$$.fragment, S),
				ge(Ie.$$.fragment, S),
				ge(xe.$$.fragment, S),
				ge(_e.$$.fragment, S),
				ge(Ve.$$.fragment, S),
				ge(Ce.$$.fragment, S),
				ge($e.$$.fragment, S),
				(Xe = !1);
		},
		d(S) {
			y(e),
				y(t),
				y(n),
				y(s),
				y(i),
				S && y(a),
				S && y(o),
				pe(q),
				pe(Me),
				pe(De),
				pe(Ie),
				pe(xe),
				pe(_e),
				pe(Ve),
				pe(Ce),
				pe($e),
				et.d(),
				H && H.d(),
				j && j.d(),
				P && P.d(),
				Y && Y.d();
		}
	};
}
const Na = !0,
	rr = 'America/Los_Angeles',
	va = 1;
function Sa(r, e, t) {
	let n,
		s,
		i,
		a,
		o,
		l,
		u,
		f = nr,
		m = () => (f(), (f = ds(B, (q) => t(3, (u = q)))), B);
	r.$$.on_destroy.push(() => f());
	const p = Intl.DateTimeFormat().resolvedOptions().timeZone === rr;
	let h = !1,
		E = new Date();
	setInterval(() => {
		t(1, (E = new Date()));
	}, 100);
	const V = va * 1e3 * 60 * 60 * 24 * 365,
		Z = new Date('31 August 2005 00:00:00 PST');
	let ie = (Date.now() - Z.getTime()) / V;
	setInterval(() => {
		t(2, (ie = (Date.now() - Z.getTime()) / V));
	}, 100);
	let B;
	cs(async () => {
		const { useLanyard: q } = await ls(() => import('../chunks/index-27e7d065.js'), []);
		m(t(4, (B = q('619284841187246090', { type: 'rest', restInterval: 1e3 })))),
			console.log('lanyard mounted');
	});
	const U = () => t(0, (h = !h));
	return (
		(r.$$.update = () => {
			r.$$.dirty & 1 &&
				t(
					10,
					(n = new Intl.DateTimeFormat('en-US', {
						hour: 'numeric',
						minute: 'numeric',
						second: 'numeric',
						timeZone: h ? rr : void 0
					}))
				),
				r.$$.dirty & 1 &&
					t(
						11,
						(s = new Intl.DateTimeFormat('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric',
							timeZoneName: 'short',
							timeZone: h ? rr : void 0
						}))
					),
				r.$$.dirty & 2050 && t(8, (i = s.format(E))),
				r.$$.dirty & 1026 && t(7, (a = n.format(E))),
				r.$$.dirty & 4,
				r.$$.dirty & 8 && t(6, (o = ya(u))),
				r.$$.dirty & 8 && t(5, (l = ga(u)));
		}),
		[h, E, ie, u, B, l, o, a, i, p, n, s, U]
	);
}
class Ma extends an {
	constructor(e) {
		super(), on(this, e, Sa, Ta, ln, {});
	}
}
export { Ma as default, Na as prerender };
