const ThemeToggle = ({ darkMode, setDarkMode }: any) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
  >
    {darkMode ? "☀️ Light" : "🌙 Dark"}
  </button>
);

export default ThemeToggle;