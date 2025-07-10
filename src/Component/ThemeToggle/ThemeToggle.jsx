import React, {useEffect, useState} from "react";
import "./ThemeToggle.scss";

export default function ThemeToggle() {

	const getPreferredTheme = () => {
	if (localStorage.getItem("theme")) {
		return localStorage.getItem("theme");
	}
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return "dark";
	}
	return "light";
    };

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
				{theme === "dark" ? <i class="bi bi-brightness-high"></i> : <i class="bi bi-moon"></i>}
			</span>
		</button>
	);
}
