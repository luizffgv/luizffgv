const isDark = localStorage.getItem("theme-dark") == "true";
const deviceIsDark = matchMedia("(prefers-color-scheme: dark)").matches;
if (isDark || (isDark == undefined && deviceIsDark))
  document.documentElement.classList.add("raiar-dark");
