const THEME_KEY = "theme";

function isDark() {
	return document.documentElement.classList.contains("dark");
}

function syncThemeToggle() {
	const toggle = document.getElementById("theme-toggle");
	if (!toggle) return;
	toggle.setAttribute("aria-pressed", String(isDark()));
}

function toggleTheme() {
	const next = isDark() ? "light" : "dark";
	document.documentElement.classList.toggle("dark", next === "dark");
	syncThemeToggle();
	try {
		localStorage.setItem(THEME_KEY, next);
	} catch {
		/* storage unavailable: theme still applies for this page */
	}
}

function setupThemeToggle() {
	const toggle = document.getElementById("theme-toggle");
	if (!toggle) return;
	syncThemeToggle();
	if (toggle.dataset.bound === "true") return;
	toggle.dataset.bound = "true";
	toggle.addEventListener("click", toggleTheme);
}

function setMenuOpen(open) {
	const button = document.getElementById("menu-toggle");
	const menu = document.getElementById("mobile-menu");
	if (!button || !menu) return;
	menu.classList.toggle("hidden", !open);
	button.setAttribute("aria-expanded", String(open));
	button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

function setupMobileMenu() {
	const button = document.getElementById("menu-toggle");
	const menu = document.getElementById("mobile-menu");
	if (!button || !menu || button.dataset.bound === "true") return;
	button.dataset.bound = "true";

	button.addEventListener("click", () => {
		setMenuOpen(menu.classList.contains("hidden"));
	});
	for (const link of menu.querySelectorAll("a")) {
		link.addEventListener("click", () => setMenuOpen(false));
	}
}

function markActiveLinks() {
	const path = window.location.pathname.replace(/\/+$/, "") || "/";
	for (const link of document.querySelectorAll("[data-nav-link]")) {
		const target = link.getAttribute("href")?.replace(/\/+$/, "") || "/";
		link.setAttribute("aria-current", target === path ? "page" : "false");
	}
}

// Elements are re-rendered on every view transition, so per-element listeners
// are (re)bound in init(). Document-level listeners are bound exactly once.
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") setMenuOpen(false);
});

document.addEventListener("astro:page-load", () => {
	setupThemeToggle();
	setupMobileMenu();
	markActiveLinks();
});
