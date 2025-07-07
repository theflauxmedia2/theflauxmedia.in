export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--flaux-black)] border-t border-[var(--flaux-light-gray)] rounded-b-3xl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-[var(--flaux-white)] mb-4 md:mb-0">
            THE FLAUX MEDIA
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 The Flaux Media. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
