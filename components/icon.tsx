/** @format */
export default function Icon({ name }: { name: string }) {
  switch (name) {
    case "github":
      return (
        <svg
          className="link-icon"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 
            0-.29-.01-1.05-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.78-1.34-1.78-1.1-.75.08-.74.08-.74 
            1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1 .11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 
            0-1.31.47-2.38 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 
            3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.85 1.23 1.92 1.23 3.23 
            0 4.62-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22 
            0 1.6-.01 2.9-.01 3.29 
            0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          className="link-icon"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
        >
          <path d="M19 0h-14c-2.8 0-5 2.3-5 5v14c0 2.7 2.2 5 5 5h14c2.8 0 5-2.3 5-5V5c0-2.7-2.2-5-5-5zm-11.6 20h-3V9h3v11zm-1.5-12.4c-1 0-1.9-.8-1.9-1.9 0-1 .9-1.8 1.9-1.8s1.8.8 1.8 1.8c0 1-.8 1.9-1.8 1.9zM20 20h-3v-5.6c0-1.3-.4-2.1-1.6-2.1-.9 0-1.5.6-1.8 1.2-.1.2-.1.6-.1.9V20h-3V9h3v1.5c.4-.6 1.1-1.5 2.7-1.5 2 0 3.8 1.3 3.8 4.2V20z" />
        </svg>
      );
    case "cv":
      return (
        <svg
          className="link-icon"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
        >
          <path d="M6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
        </svg>
      );
    case "gmail":
      return (
        <svg
          className="link-icon"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
        >
          <path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );
    default:
      return null;
  }
}
