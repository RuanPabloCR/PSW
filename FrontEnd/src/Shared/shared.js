function show(hash){
	const id = (hash || '#home').replace('#','');
	const screens = document.querySelectorAll('.screen');
	const tabs = document.querySelectorAll('[data-tab]');
	screens.forEach(s => s.classList.toggle('hidden', s.id !== id));
	tabs.forEach(t => t.classList.toggle('active', t.getAttribute('href') === '#'+id));
}

document.addEventListener('DOMContentLoaded', function() {
	const toggle = document.querySelector('.menu-toggle');
	const navLinks = document.querySelector('.nav-links');
	if(toggle && navLinks) {
		toggle.addEventListener('click', () => {
			navLinks.classList.toggle('open');
		});
	}
	window.addEventListener('hashchange', ()=> show(location.hash));
	document.querySelectorAll('[data-link]').forEach(a => a.addEventListener('click', e => {
		const href = a.getAttribute('href');
		if(href?.startsWith('#')) show(href);
	}));
	show(location.hash || '#home');
});

function loadScreen(path) {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
    });
}