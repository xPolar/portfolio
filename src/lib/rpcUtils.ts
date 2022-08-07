import type { useLanyard } from 'svelte-lanyard';
import type { Readable } from 'svelte/store';
type ExtractData<Type> = Type extends Readable<infer X> ? X : never;
interface VSCodeData {
	lang?: string;
	editing?: string;
	folder?: string;
	idling?: boolean;
}

interface Activity {
	name: string;
	start?: Date;
}

export const getAppleMusicData = (data: ExtractData<ReturnType<typeof useLanyard>>) => {
	const appleMusic = data?.activities.find?.(
		(a) => (a.application_id as unknown as string) === '886578863147192350'
	);

	if (!appleMusic) return undefined;

	const artistSplit = appleMusic.state.split('by ');
	artistSplit.shift();
	const artist = artistSplit.join('by ');

	return {
		artist,
		song_name: appleMusic.details,
		album_name: appleMusic.assets?.large_text
	};
};

export const getCodeData = (
	data: ExtractData<ReturnType<typeof useLanyard>>
): VSCodeData | undefined => {
	// Unknown cast is a workaround for the fact that `application_id` is a string but the interface is wrong
	const codeActivity = data?.activities?.find?.(
		(a) => (a.application_id as unknown as string) === '732565262704050298'
	);

	if (!codeActivity) {
		return undefined;
	}

	const idling = codeActivity?.details === 'Idling';
	if (idling) {
		return {
			idling: true
		};
	}

	const editing = codeActivity.details?.substring(3).split(' - ')[0];
	let folder = codeActivity.state.split('📂 ')[1];
	const lang = codeActivity.assets?.large_text?.split(' file')[0]?.toLocaleLowerCase();

	const splitFolder = folder.split(' ');
	splitFolder.shift();
	folder = splitFolder.join(' ');

	return {
		lang,
		editing,
		folder
	};
};

export const getOtherActivities = (
	data: ExtractData<ReturnType<typeof useLanyard>>
): Activity[] | undefined => {
	// Unknown cast is a workaround for the fact that `application_id` is a string but the interface is wrong
	const otherActivities = data?.activities?.filter?.(
		(a) =>
			!['732565262704050298', '886578863147192350'].includes(
				a.application_id as unknown as string
			) && a.type === 0
	);

	return otherActivities?.map?.((activity) => ({
		name: activity.name,
		start: activity.timestamps ? new Date(activity.timestamps.start) : undefined
	}));
};
