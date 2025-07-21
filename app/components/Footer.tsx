import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright Notice */}
        <div className="mb-4 md:mb-0">
          {/* A small trick to make sure the year is always current! */}
          <p>&copy; {new Date().getFullYear()} YVD NAILS. All Rights Reserved.</p>
        </div>

        {/* Footer Links */}
        <div className="flex gap-6">
          <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </Link>
          {/* We can add a privacy policy link here later */}
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}