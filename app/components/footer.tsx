export const Footer = () => (
  <footer className="flex justify-center border-t px-4 py-2">
    <div className="w-page">
      <p className="text-center text-sm">
        Made with ❤️ in Poland,
        <span className="inline-block">
          &copy;{new Date().getFullYear()} Amadeusz Starzykiewicz
        </span>
      </p>
    </div>
  </footer>
);
