// This component injects a blocking script to set theme before React hydrates
// to prevent flash of incorrect theme
export function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        const savedTheme = localStorage.getItem('theme');
        const theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.classList.add(theme);
      } catch (e) {
        // If localStorage is not available, default to dark
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  );
}
