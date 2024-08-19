import { getRandomId } from '$lib';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({}) => {
	const randomId = getRandomId();

	redirect(302, `/send/${randomId}`);
};
