import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as each } from "../../_app/immutable/chunks/index-511472e1.js";
import { DateTime } from "luxon";
const ProjectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { name } = $$props;
  let { description = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<li><a${add_attribute("href", href, 0)} target="${"_blank"}" rel="${"noreferrer noopener"}" class="${"dark:text-arc-300 underline"}">${escape(name)}</a>
	${description ? `<span class="${"dark:text-arc-400"}">- ${escape(description)}</span>` : ``}</li>`;
});
const getCodeData = (data) => {
  var _a, _b, _c, _d, _e, _f;
  const codeActivity = (_b = (_a = data == null ? void 0 : data.activities) == null ? void 0 : _a.find) == null ? void 0 : _b.call(
    _a,
    (a) => a.application_id === "732565262704050298"
  );
  if (!codeActivity) {
    return void 0;
  }
  const idling = (codeActivity == null ? void 0 : codeActivity.details) === "Idling";
  if (idling) {
    return {
      idling: true
    };
  }
  const editing = (_c = codeActivity.details) == null ? void 0 : _c.substring(3).split(" - ")[0];
  let folder = codeActivity.state.split("\u{1F4C2} ")[1];
  const lang = (_f = (_e = (_d = codeActivity.assets) == null ? void 0 : _d.large_text) == null ? void 0 : _e.split(" file")[0]) == null ? void 0 : _f.toLocaleLowerCase();
  const splitFolder = folder.split(" ");
  splitFolder.shift();
  folder = splitFolder.join(" ");
  return {
    lang,
    editing,
    folder
  };
};
const getOtherActivities = (data) => {
  var _a, _b, _c;
  const otherActivities = (_b = (_a = data == null ? void 0 : data.activities) == null ? void 0 : _a.filter) == null ? void 0 : _b.call(
    _a,
    (a) => a.application_id !== "732565262704050298" && a.type === 0
  );
  return (_c = otherActivities == null ? void 0 : otherActivities.map) == null ? void 0 : _c.call(otherActivities, (activity) => ({
    name: activity.name,
    start: activity.timestamps ? new Date(activity.timestamps.start) : void 0
  }));
};
const prerender = true;
const timeZone = "America/Los_Angeles";
const MILLISECOND = 1;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d;
  let timeFormatter;
  let dateFormatter;
  let date;
  let time;
  let codeData;
  let otherActivities;
  let $data;
  const isTimeZoneSame = Intl.DateTimeFormat().resolvedOptions().timeZone === timeZone;
  let now = new Date();
  setInterval(
    () => {
      now = new Date();
    },
    100
  );
  const SECOND = MILLISECOND * 1e3;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const YEAR = DAY * 365;
  const bday = new Date("31 August 2005 00:00:00 PST");
  let age = (Date.now() - bday.getTime()) / YEAR;
  setInterval(
    () => {
      age = (Date.now() - bday.getTime()) / YEAR;
    },
    100
  );
  timeFormatter = new Intl.DateTimeFormat(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: void 0
    }
  );
  dateFormatter = new Intl.DateTimeFormat(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZoneName: "short",
      timeZone: void 0
    }
  );
  date = dateFormatter.format(now);
  time = timeFormatter.format(now);
  codeData = getCodeData($data);
  otherActivities = getOtherActivities($data);
  return `${$$result.head += `${$$result.title = `<title>portfolio</title>`, ""}<meta name="${"og:title"}" content="${"portfolio"}" data-svelte="svelte-1sjhxkb"><meta name="${"description"}" content="${"a collection of various things"}" data-svelte="svelte-1sjhxkb"><meta name="${"og:description"}" content="${"a collection of various things"}" data-svelte="svelte-1sjhxkb"><meta name="${"theme-color"}" media="${"(prefers-color-scheme: light)"}" content="${"#f9f0f5"}" data-svelte="svelte-1sjhxkb"><meta name="${"theme-color"}" media="${"(prefers-color-scheme: dark)"}" content="${"#1C2433"}" data-svelte="svelte-1sjhxkb">`, ""}

<section class="${"p-8 sm:p-12 lg:p-24 lg:py-16 font-jetbrains z-10 flex flex-col sm:flex-row gap-y-10 justify-between"}"><div class="${"flex flex-col gap-7"}"><div class="${"min-h-[3em] lg:min-h-0"}"><h1 class="${"text-arc-700 dark:text-arc-300"}"><span class="${"dark:text-arc-blue"}">polar, <span class="${"text-arc-700 dark:text-arc-200"}">${escape(age.toPrecision(10))} y/o </span> software engineer</span></h1></div>
		<div><h1 class="${"text-arc-900 dark:text-arc-100"}">projects</h1>
			<ul class="${"list-disc list-inside text-arc-700 dark:text-arc-blue"}">${validate_component(ProjectItem, "ProjectItem").$$render(
    $$result,
    {
      href: "https://spacedrive.com",
      name: "spacedrive.com",
      description: "a file explorer from the future"
    },
    {},
    {}
  )}
				${validate_component(ProjectItem, "ProjectItem").$$render(
    $$result,
    {
      href: "https://tixte.com",
      name: "tixte.com",
      description: "home to your best moments"
    },
    {},
    {}
  )}
				${validate_component(ProjectItem, "ProjectItem").$$render(
    $$result,
    {
      href: "https://github.com/otterdevelopment/beemohelper",
      name: "beemo helper",
      description: "third party bot for beemo.gg"
    },
    {},
    {}
  )}
				${validate_component(ProjectItem, "ProjectItem").$$render(
    $$result,
    {
      href: "https://github.com/otterdevelopment/astro",
      name: "astro",
      description: "powerful discord suggestion bot"
    },
    {},
    {}
  )}</ul></div>
		<div><h1 class="${"text-arc-900 dark:text-arc-100"}">old</h1>
			<ul class="${"list-disc list-inside text-arc-700 dark:text-arc-blue"}">${validate_component(ProjectItem, "ProjectItem").$$render(
    $$result,
    {
      href: "https://github.com/otterdevelopment/positivepeter",
      name: "positive peter",
      description: "discord bot to uplift users"
    },
    {},
    {}
  )}</ul></div>
		<div><h1 class="${"text-arc-900 dark:text-arc-100"}">links</h1>
			<ul class="${"list-disc list-inside text-arc-700 dark:text-arc-blue"}">${validate_component(ProjectItem, "ProjectItem").$$render(
    $$result,
    {
      href: "https://discord.gg/VvE5ucuJmW",
      name: "discord"
    },
    {},
    {}
  )}
				${validate_component(ProjectItem, "ProjectItem").$$render(
    $$result,
    {
      href: "https://twitter.com/xpolarrr",
      name: "twitter"
    },
    {},
    {}
  )}
				${validate_component(ProjectItem, "ProjectItem").$$render(
    $$result,
    {
      href: "https://github.com/xpolar",
      name: "github"
    },
    {},
    {}
  )}
				${validate_component(ProjectItem, "ProjectItem").$$render(
    $$result,
    {
      href: "mailto:polar@polar.blue",
      name: "email"
    },
    {},
    {}
  )}</ul></div></div>
	<div class="${"text-arc-900 dark:text-arc-300 flex flex-col items-start sm:items-end gap-3 sm:gap-7 sm:text-right"}">${!isTimeZoneSame ? `<div class="${"flex flex-col items-start sm:items-end hover:underline cursor-pointer"}"><span>${escape(date)}</span>
				<span>${escape(time)}</span></div>` : `<div class="${"flex flex-col items-start sm:items-end"}"><span>${escape(date)}</span>
				<span>${escape(time)}</span></div>`}
		${($data == null ? void 0 : $data.spotify) ? `<div class="${"flex flex-col items-start sm:items-end"}"><span class="${"text-arc-900 dark:text-arc-100"}">${escape((_a = $data.spotify) == null ? void 0 : _a.song)}</span>
				<span class="${"text-arc-800 dark:text-arc-300"}">${escape((_b = $data.spotify) == null ? void 0 : _b.artist)}</span>
				<span class="${"text-arc-700 dark:text-arc-400"}">${escape((_c = $data.spotify) == null ? void 0 : _c.album)}</span></div>` : ``}
		${(codeData == null ? void 0 : codeData.idling) ? `<div class="${"flex flex-col items-start sm:items-end"}"><span class="${"text-arc-900 dark:text-arc-100"}">vsc</span>
				<span class="${"text-arc-700 dark:text-arc-400"}">currently idling</span></div>` : ``}
		${codeData && !codeData.idling ? `<div class="${"flex flex-col items-start sm:items-end"}"><span class="${"text-arc-900 dark:text-arc-100"}">vsc</span>
				<span class="${"text-arc-800 dark:text-arc-300"}">working on <span class="${"text-arc-700 dark:text-arc-200"}">${escape((_d = codeData.folder) == null ? void 0 : _d.toLocaleLowerCase())}</span></span>
				<span class="${"text-arc-700 dark:text-arc-400"}">currently writing
					<span class="${"text-arc-700 dark:text-arc-200"}">${escape(codeData.lang)}</span></span></div>` : ``}
		${otherActivities ? `${each(otherActivities, (activity) => {
    var _a2;
    return `<div class="${"flex flex-col items-start sm:items-end"}"><span class="${"text-arc-700 dark:text-arc-400"}">playing <span class="${"text-arc-700 dark:text-arc-200"}">${escape(activity.name)}</span>
						${activity.start ? `for ${escape((_a2 = DateTime.fromJSDate(activity.start).toRelative({ base: DateTime.fromJSDate(now) })) == null ? void 0 : _a2.replace(" ago", ""))}` : ``}</span>
				</div>`;
  })}` : ``}</div></section>`;
});
export {
  Routes as default,
  prerender
};
