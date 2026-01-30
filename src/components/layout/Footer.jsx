export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-6 text-center mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm">
          © {currentYear} Éducation Canine Positive. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
