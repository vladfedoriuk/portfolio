module.exports = {
	extends: ['next', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['@typescript-eslint'],
	settings: {
		next: {
			rootDir: 'apps/front/',
		},
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
	},
};
