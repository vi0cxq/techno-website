import { SANITY_VIEWER_TOKEN } from '$env/static/private';
import { assertEnvVar } from '$lib/sanity/api';

export const token = assertEnvVar(SANITY_VIEWER_TOKEN, 'SANITY_VIEWER_TOKEN');
