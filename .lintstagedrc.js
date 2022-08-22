module.exports = {
	// Type check TypeScript files
	'apps/front/*.(ts|tsx)': () => 'yarn tsc --noEmit',
	'apps/cms/*.(ts|tsx)': () =>
		'yarn tsc --noEmit --project apps/cms/tsconfig.json',

	// Lint then format TypeScript and JavaScript files
	'**/*.(ts|tsx|js)': filenames => [
		`yarn eslint --fix ${filenames.join(' ')}`,
		`yarn prettier --write ${filenames.join(' ')}`,
	],

	// Format MarkDown and JSON
	'**/*.(md|json)': filenames =>
		`yarn prettier --write ${filenames.join(' ')}`,
};
