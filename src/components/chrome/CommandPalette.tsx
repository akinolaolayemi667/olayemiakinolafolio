"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  commandIndex,
  filterCommandIndex,
  type CommandItem,
} from "@lib/command-index";

const GROUP_ORDER: CommandItem["group"][] = [
  "Actions",
  "Pages",
  "Case studies",
  "Sections",
];

function groupItems(items: CommandItem[]) {
  return GROUP_ORDER.map((group) => ({
    group,
    items: items.filter((item) => item.group === group),
  })).filter((entry) => entry.items.length > 0);
}

/** ⌘K / Ctrl+K command palette — pages, case studies, and section jumps. */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const dialogId = useId();
  const router = useRouter();

  const results = filterCommandIndex(query);
  const grouped = groupItems(results);
  const flatResults = grouped.flatMap((g) => g.items);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const navigate = useCallback(
    (item: CommandItem) => {
      close();
      if (/^https?:\/\//i.test(item.href)) {
        window.open(item.href, "_blank", "noopener,noreferrer");
        return;
      }
      router.push(item.href);
    },
    [close, router]
  );

  useEffect(() => {
    function onOpenEvent() {
      setOpen(true);
    }

    window.addEventListener("open-command-palette", onOpenEvent);
    return () => window.removeEventListener("open-command-palette", onOpenEvent);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const mod = event.metaKey || event.ctrlKey;
      if (mod && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
        return;
      }
      if (!open) return;

      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, flatResults.length - 1));
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        return;
      }

      if (event.key === "Enter" && flatResults[activeIndex]) {
        event.preventDefault();
        navigate(flatResults[activeIndex]);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close, flatResults, activeIndex, navigate]);

  useEffect(() => {
    if (open) {
      queueMicrotask(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-ink/70 p-4 pt-[12vh] backdrop-blur-sm sm:p-6"
      role="presentation"
      onClick={close}
    >
      <div
        id={dialogId}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-surface/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl motion-safe:animate-[fadeUp_0.2s_ease-out]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="shrink-0 text-muted"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages, case studies, sections…"
            className="min-h-10 w-full bg-transparent text-sm text-[color:var(--hv-fg)] placeholder:text-[color:var(--hv-fg-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
            aria-controls={`${dialogId}-list`}
            aria-activedescendant={
              flatResults[activeIndex]
                ? `${dialogId}-item-${flatResults[activeIndex].id}`
                : undefined
            }
          />
          <kbd className="hidden rounded-md border border-white/10 bg-ink/60 px-2 py-0.5 text-[10px] text-muted sm:inline">
            Esc
          </kbd>
        </div>

        <div
          id={`${dialogId}-list`}
          ref={listRef}
          className="max-h-[min(50vh,420px)] overflow-y-auto p-2"
          role="listbox"
        >
          {flatResults.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted">
              No results for &ldquo;{query}&rdquo;
            </p>
          ) : (
            grouped.map(({ group, items }) => (
              <div key={group} className="mb-2 last:mb-0">
                <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {group}
                </p>
                <ul className="flex flex-col gap-0.5">
                  {items.map((item) => {
                    const index = flatResults.indexOf(item);
                    const active = index === activeIndex;
                    return (
                      <li key={item.id}>
                        <button
                          id={`${dialogId}-item-${item.id}`}
                          type="button"
                          role="option"
                          aria-selected={active}
                          className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent ${
                            active
                              ? "bg-accent/15 text-white"
                              : "text-white/80 hover:bg-white/[0.04]"
                          }`}
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => navigate(item)}
                        >
                          <span>{item.label}</span>
                          <span className="truncate text-xs text-muted">
                            {item.href.replace(/^https?:\/\//, "")}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-[10px] text-muted">
          <span>{commandIndex.length} destinations indexed</span>
          <span className="hidden sm:inline">
            <kbd className="rounded border border-white/10 px-1">↑↓</kbd> navigate{" "}
            <kbd className="rounded border border-white/10 px-1">↵</kbd> open{" "}
            <kbd className="rounded border border-white/10 px-1">?</kbd> shortcuts
          </span>
        </div>
      </div>
    </div>
  );
}

/** Keyboard hint button for navbar — opens palette on click. */
export function CommandPaletteTrigger({
  className = "",
}: {
  className?: string;
}) {
  function open() {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  }

  return (
    <button
      type="button"
      onClick={open}
      className={`hidden items-center gap-2 rounded-xl border border-[color:var(--hv-border)] bg-white/[0.03] px-2.5 py-1.5 text-xs text-[color:var(--hv-fg-muted)] transition-colors hover:border-accent/30 hover:text-[color:var(--hv-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:inline-flex ${className}`}
      aria-label="Open command palette"
    >
      <span>Search</span>
      <kbd className="rounded-md border border-[color:var(--hv-border)] px-1.5 py-0.5 text-[10px]">
        ⌘K
      </kbd>
    </button>
  );
}
