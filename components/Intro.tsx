/** @format */
import { homepageData } from "@/data/homepage";
import Icon from "./icon";

export default function Intro() {
  const { name, tagline, avatar, links } = homepageData;

  return (
    <section className="intro-section">
      <div className="intro-header">
        <img src={avatar} alt="avatar" className="avatar" />
        <h1 className="intro-name">{name}</h1>
        <p className="intro-tagline">{tagline}</p>

        <div className="intro-links">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="intro-link"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <Icon name={link.icon} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
