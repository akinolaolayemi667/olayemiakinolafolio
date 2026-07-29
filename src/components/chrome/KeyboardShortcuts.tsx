"use client";

import { useEffect, useState } from "react";

const shortcuts = [
  { keys: ["⌘", "K"], label: "Open command palette" },
  { keys: ["?"], label: "Show keyboard shortcuts" },
  { keys: ["Esc"], label: "Close dialogs / mobile menu" },
  { keys: ["↑", "↓"], label: "Navigate command palette results" },
  { keys: ["↵"], label: "Open selected command" },
];

/** Keyboard shortcut cheat sheet — toggled with ? */
export function KeyboardShortcuts() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (
        event.key === "?" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !(event.target instanceof HTMLInputElement) &&
        !(event.target instanceof HTMLTextAreaElement)
      ) {
        event.preventDefault();
        setOpen((value) => !value);
      }

      if (event.key === "Escape" && open) {
        event.preventDefault();
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Keyboard shortcuts"
        className="w-full max-w-md rounded-2xl border border-white/10 bg-surface/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)] motion-safe:animate-[fadeUp_0.2s_ease-out]"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-lg font-semibold text-white">Keyboard shortcuts</h2>
        <p className="mt-1 text-sm text-muted">
          Power-user navigation for the portfolio.
        </p>
        <ul className="mt-5 space-y-3">
          {shortcuts.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between gap-4 text-sm"
            >
              <span className="text-white/80">{item.label}</span>
              <span className="flex shrink-0 gap-1">
                {item.keys.map((key) => (
                  <kbd
                    key={key}
                    className="rounded border border-white/10 bg-ink/60 px-2 py-0.5 text-[11px] text-muted"
                  >
                    {key}
                  </kbd>
                ))}
              </span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="mt-6 text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Close
        </button>
      </div>
    </div>
  );
}
