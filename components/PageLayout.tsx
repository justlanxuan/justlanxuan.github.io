/** @format */
import { ReactNode } from "react";

export default function PageLayout({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="page-layout">
      {title && <h1 className="page-title">{title}</h1>}
      <div className="page-content">{children}</div>
    </div>
  );
}
