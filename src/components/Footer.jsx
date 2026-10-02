export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer animate-in delay-4">
      <p>© {currentYear} oxoxox-oxox · Built with React & Vite</p>
    </footer>
  );
}
