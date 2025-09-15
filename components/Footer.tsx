/** @format */

// components/Footer.tsx
import { siteData } from "@/data/siteData";

export default function Footer() {
  const { footer } = siteData;
  return (
    <footer className="site-footer">
      <div>{footer.copyright}</div>
      <div>Last updated on {footer.updated}</div>
    </footer>
  );
}
