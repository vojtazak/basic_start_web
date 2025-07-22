
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white shadow px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Left: Site name */}
        <div className="text-xl font-bold">My Gallery</div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                isActive(href)
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle (Unicode hamburger / X icon) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile menu links */}
      {menuOpen && (
        <nav className="md:hidden mt-4 space-y-2 px-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block ${
                isActive(href)
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
