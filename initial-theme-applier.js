const isDark = localStorage.getItem("theme-dark");
const deviceIsDark = matchMedia("(prefers-color-scheme: dark)").matches;
if (isDark === "true" || (isDark == undefined && deviceIsDark))
  document.documentElement.classList.add("dark");
