import React, {useEffect, useState} from "react";
import "./ThemeToggle.scss";

const getPreferredTheme = () => {
	if (localStorage.getItem("theme")) {
		return localStorage.getItem("theme");
	}
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return "dark";
	}
	return "light";
};

export default function ThemeToggle() {
	const [theme, setTheme] = useState(getPreferredTheme());

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<button
			className={`theme-toggle ${theme}`}
			onClick={toggleTheme}
			aria-label="Toggle dark/light mode">
			<span className="theme-toggle__icon" aria-hidden="true">
				{theme === "dark" ? "🌙" : "☀️"}
			</span>
		</button>
	);
}
