import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const LandingPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Navbar />

      {/* Jumbotron Section */}
      <section className="relative py-16 bg-white dark:bg-gray-900 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl lg:px-8">
          <div className="relative z-10 p-8 border border-gray-200 rounded-lg shadow-xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <a
              href="#"
              className="inline-flex items-center px-3 py-1 mb-4 text-xs font-semibold text-blue-800 transition-colors duration-300 bg-blue-100 rounded-md dark:bg-gray-700 dark:text-blue-400 hover:bg-blue-200"
            >
              <svg
                className="w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
              </svg>
              Tutorial
            </a>
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-6xl">
              Reqres API
            </h1>
            <p className="mt-4 text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-400">
              Reqres simulates real-world application scenarios. Use it to test
              authentication, user creation, and much more.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 mt-6 text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Read more
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="grid gap-8 px-4 mx-auto max-w-7xl lg:px-8 lg:grid-cols-2">
          {/* Feature 1 */}
          <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a
              href="#"
              className="inline-flex items-center px-3 py-1 mb-4 text-xs font-semibold text-green-800 transition-colors duration-300 bg-green-100 rounded-md dark:bg-gray-700 dark:text-green-400 hover:bg-green-200"
            >
              <svg
                className="w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
              </svg>
              Design
            </a>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              Fake Data
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Use fake data to test your app without impacting real users.
              Perfect for prototyping!
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-6 text-blue-600 dark:text-blue-500 hover:underline"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a
              href="#"
              className="inline-flex items-center px-3 py-1 mb-4 text-xs font-semibold text-purple-800 transition-colors duration-300 bg-purple-100 rounded-md dark:bg-gray-700 dark:text-purple-400 hover:bg-purple-200"
            >
              <svg
                className="w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Code
            </a>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              Always On
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              24/7 support. We are here to assist you, anytime, anywhere.
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-6 text-blue-600 dark:text-blue-500 hover:underline"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
