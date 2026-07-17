/**
 * WhatsAppButton — Sitewide Floating Contact Widget
 *
 * Fixed-position circular WhatsApp button, bottom-right on every page.
 * Clicking it opens a small chat-style popup (greeting bubble + message
 * input). Sending redirects to wa.me with the typed message pre-filled.
 */

"use client";

import { useState, FormEvent } from "react";

const WHATSAPP_NUMBER = "7478664889";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    const text = message.trim() || "Hi";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setMessage("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* ============================================================
          Chat popup
      ============================================================ */}
      {open && (
        <div className="w-75 sm:w-80 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <svg className="w-5 h-5 text-white" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.9 34.9 55.8 81.2 55.7 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span className="text-white text-sm font-semibold">Let&apos;s chat on WhatsApp</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/90 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Body — greeting bubble on a light patterned background */}
          <div className="bg-[#e9e3d9] px-4 py-5 min-h-40 flex flex-col justify-end gap-2">
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 shrink-0 rounded-full bg-advenco-graphite flex items-center justify-center text-white text-[9px] font-bold">
                A
              </div>
              <div className="bg-white rounded-lg rounded-bl-none px-3.5 py-2.5 shadow-sm max-w-[80%]">
                <p className="text-advenco-graphite-mid text-sm">How can I help you? :)</p>
                <p className="text-advenco-muted text-[10px] mt-1">
                  {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          </div>

          {/* Input row */}
          <form onSubmit={handleSend} className="flex items-center gap-2 p-3 bg-white border-t border-advenco-border">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="hi"
              aria-label="Your WhatsApp message"
              className="flex-1 min-w-0 bg-advenco-alabaster rounded-full px-4 py-2.5 text-sm text-advenco-graphite-mid placeholder:text-advenco-muted focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
              autoFocus
            />
            <button
              type="submit"
              aria-label="Send message on WhatsApp"
              className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* ============================================================
          Floating toggle button
      ============================================================ */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        aria-expanded={open}
        className="group flex items-center gap-2"
      >
        {!open && (
          <span className="hidden sm:inline-block bg-white text-advenco-graphite-mid text-xs font-semibold px-3 py-2 rounded-full shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            Contact us
          </span>
        )}
        <span
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-colors ${
            open ? "bg-advenco-graphite hover:bg-advenco-graphite-mid" : "bg-[#25D366] hover:bg-[#20bd5a]"
          }`}
        >
          {open ? (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7 text-white" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.9 34.9 55.8 81.2 55.7 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
