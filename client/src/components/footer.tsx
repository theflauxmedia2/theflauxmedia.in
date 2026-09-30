export default function Footer() {
  return (
    <footer
      className="footer-takeover fixed inset-0 z-0 flex flex-col items-center justify-center pointer-events-none"
      aria-label="The Flaux Media"
    >
      <h2 className="text-6xl sm:text-7xl md:text-[12vw] font-black text-[var(--flaux-white)] uppercase tracking-wider text-center footer-takeover-text leading-none px-4">
        THE FLAUX
        <br />
        MEDIA
      </h2>
      <div className="mt-6 text-gray-400 text-sm text-center">
        © 2025 The Flaux Media. All rights reserved.
      </div>
    </footer>
  );
}
