const Footer = () => {
  return (
    <div className="w-full mt-20">
      <footer className="relative p-6 text-white shadow-lg bg-gradient-to-r from-blue-600 to-purple-700 md:p-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Left Side */}
          <span className="mb-4 text-sm text-gray-200 sm:text-center md:mb-0">
            © 2024{" "}
            <a
              href="https://example.com/"
              className="font-bold transition-colors duration-300 hover:underline hover:text-gray-50"
            >
              Aldy™
            </a>
            . All Rights Reserved.
          </span>

          {/* Right Side */}
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-gray-50"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-gray-50"
              >
                Social
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-gray-50"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-6 space-x-6">
          <a
            href="#"
            className="transition-colors duration-300 hover:text-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h21.351C23.406 24 24 23.406 24 22.675V1.325C24 .593 23.406 0 22.675 0zM7.088 20.452H3.44V9h3.648v11.452zM5.262 7.591C4.053 7.591 3.08 6.619 3.08 5.408 3.08 4.195 4.052 3.225 5.262 3.225 6.472 3.225 7.445 4.195 7.445 5.408c0 1.21-.972 2.183-2.183 2.183zM20.452 20.452h-3.648v-5.612c0-1.341-.026-3.063-1.865-3.063-1.865 0-2.15 1.457-2.15 2.963v5.712h-3.648V9h3.506v1.561h.05c.487-.922 1.676-1.893 3.447-1.893 3.688 0 4.367 2.426 4.367 5.575v6.21h-.008z" />
            </svg>
          </a>
          <a
            href="#"
            className="transition-colors duration-300 hover:text-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.56c-.88.39-1.82.66-2.82.78a4.93 4.93 0 0 0 2.16-2.71c-.95.56-2 .96-3.1 1.18A4.92 4.92 0 0 0 16.67 3a4.92 4.92 0 0 0-4.91 4.91c0 .38.04.76.12 1.12-4.08-.2-7.7-2.16-10.13-5.13A4.92 4.92 0 0 0 2.8 9.77a4.93 4.93 0 0 1-2.22-.61v.06c0 2.39 1.7 4.38 3.96 4.83-.42.11-.86.17-1.31.17-.32 0-.63-.03-.93-.09a4.93 4.93 0 0 0 4.6 3.42A9.86 9.86 0 0 1 0 19.54a13.9 13.9 0 0 0 7.53 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.62a9.92 9.92 0 0 0 2.45-2.53z" />
            </svg>
          </a>
          <a
            href="#"
            className="transition-colors duration-300 hover:text-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.04C6.48 2.04 2 6.48 2 12c0 4.84 3.66 8.83 8.41 9.8v-6.91H7.9v-2.89h2.51V9.79c0-2.48 1.49-3.83 3.72-3.83 1.08 0 2.21.2 2.21.2v2.43h-1.24c-1.22 0-1.6.76-1.6 1.55v1.86h2.74l-.44 2.89h-2.3v6.91C18.34 20.83 22 16.84 22 12c0-5.52-4.48-9.96-10-9.96z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
