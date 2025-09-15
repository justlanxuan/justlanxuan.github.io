/** @format */
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteData } from "@/data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logo, navItems } = siteData;

  return (
    <header className="navbar">
      <nav className="nav-container">
        {/* Logo + Name */}
        <Link href="/" className="logo-container">
          <div className="logo-avatar">
            <Image
              src={logo.avatar}
              alt={`${logo.name} avatar`}
              fill
              className="avatar"
              priority
            />
          </div>
          <span className="logo">{logo.name}</span>
        </Link>

        {/* 桌面导航 */}
        <ul className="nav-menu desktop-menu">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>

        {/* 移动端按钮 */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* 移动菜单 */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link href={path} onClick={() => setIsOpen(false)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
