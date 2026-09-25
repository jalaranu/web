import "./src/styles/global.css";

const localized = (en, id) =>
  typeof window !== "undefined" && window.location.pathname.startsWith("/id/")
    ? id
    : en;

export const onServiceWorkerUpdateReady = () => {
  if (document.querySelector(".sw-update")) return;

  const banner = document.createElement("div");
  banner.className = "sw-update";
  banner.setAttribute("role", "status");
  banner.setAttribute("aria-live", "polite");

  const text = document.createElement("span");
  text.className = "sw-update__text";
  text.textContent = localized(
    "A new version of this site is available.",
    "Versi baru situs ini tersedia."
  );

  const refresh = document.createElement("button");
  refresh.type = "button";
  refresh.className = "sw-update__refresh";
  refresh.textContent = localized("Refresh", "Muat ulang");
  refresh.addEventListener("click", () => {
    if (navigator.serviceWorker && navigator.serviceWorker.waiting) {
      navigator.serviceWorker.waiting.postMessage({ type: "SKIP_WAITING" });
    }
    window.location.reload();
  });

  const dismiss = document.createElement("button");
  dismiss.type = "button";
  dismiss.className = "sw-update__dismiss";
  dismiss.setAttribute("aria-label", localized("Dismiss", "Tutup"));
  dismiss.textContent = "\u2715";
  dismiss.addEventListener("click", () => {
    banner.remove();
  });

  banner.append(text, refresh, dismiss);
  document.body.appendChild(banner);
};
