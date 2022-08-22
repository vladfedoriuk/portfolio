module.exports = {
	extends: [
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint'],
	settings: {
		next: {
			rootDir: 'apps/front/',
		},
	},
	root: true,
	ignorePatterns: [
		'node_modules/*',
		'.next',
		'build/',
		'dist/',
		'.cache/',
		'.tmp/',
	],
	rules: {
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'import/no-anonymous-default-export': 'off',
	},
};
