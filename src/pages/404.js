import React from "react";
import { useEffect } from "react";

export default function NotFoundRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace("/en/404/");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="redirect-page" style={{ maxWidth: "720px", margin: "0 auto", padding: "96px 16px" }}>
      <h1>Redirecting…</h1>
      <p>
        If you are not redirected automatically,{" "}
        <a href="/en/404/">go to the English 404 page</a>.
      </p>
    </main>
  );
}
