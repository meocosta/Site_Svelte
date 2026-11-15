import type { Language } from '../globals/language.svelte';
import enUs from '../lang/en-us.json';
import ptBr from '../lang/pt-br.json';

export const t = (path: string, language: Language = 'en-us'): string => {
	const translations: unknown = language === 'pt-br' ? ptBr : enUs;
	const translation = path.split('.').reduce<unknown>((current, key) => {
		if (typeof current !== 'object' || current === null) return undefined;
		return (current as Record<string, unknown>)[key];
	}, translations);

	return typeof translation === 'string' ? translation : path;
};