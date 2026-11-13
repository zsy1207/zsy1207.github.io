// Keep this synchronous and independent of the client bundle: the saved theme
// must be applied before first paint, including when storage is unavailable.
export const THEME_INIT_SCRIPT = `(function(){var theme;try{theme=localStorage.getItem('theme')}catch(e){}var dark=theme==='dark'||(theme!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark)})()`
