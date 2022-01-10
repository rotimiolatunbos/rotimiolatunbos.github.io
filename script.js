window.onload = function () {
	const link = document.querySelectorAll('link')[1];
	const themeSwitch = document.querySelector('.theme-switch');

	themeSwitch.onclick = function () {
		let path;
		let ext;
		let theme;

		const href = link.href;

		if (href.endsWith('dark.css')) {
			theme = 'light';
			[path, ext] = href.split('dark');
		} else if (href.endsWith('light.css')) {
			theme = 'dark';
			[path, ext] = href.split('light');
		}

		link.href = `${path}${theme}${ext}`
	}
}