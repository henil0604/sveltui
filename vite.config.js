import { sveltekit } from '@sveltejs/kit/vite';
import postcss from 'postcss';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), postcss()]
};

export default config;
