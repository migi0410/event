'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Prevent flash or hydration error by showing a skeleton button before client mount
  if (!mounted) {
    return (
      <button className="theme-toggle-btn" title="Đổi giao diện" style={{ opacity: 0 }}>
        <i className="fa-solid fa-moon"></i>
      </button>
    );
  }

  return (
    <button
      className="theme-toggle-btn"
      id="themeToggle"
      title="Đổi giao diện"
      onClick={toggleTheme}
      style={theme === 'light' ? { color: '#eab308' } : undefined}
    >
      <i className={theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
    </button>
  );
}
