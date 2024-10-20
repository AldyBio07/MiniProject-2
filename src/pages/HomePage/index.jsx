import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-center bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e74a6aba-f6ed-4e89-a9e9-55602c7ffa8e/dezgmta-bb9ff73e-986f-4dac-8da8-08109382a108.png/v1/fit/w_828,h_456,q_70,strp/windows_10_login_screen_wallpaper_in_minecraft_by_ominouspotato_dezgmta-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2U3NGE2YWJhLWY2ZWQtNGU4OS1hOWU5LTU1NjAyYzdmZmE4ZVwvZGV6Z210YS1iYjlmZjczZS05ODZmLTRkYWMtOGRhOC0wODEwOTM4MmExMDgucG5nIiwid2lkdGgiOiI8PTE5NjMifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yawZahpN-nvDi6n2gZyIADT0AgQduh_aAzG9VzxGDCs')] bg-gray-700 bg-blend-multiply">
        <div className="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Mini Project
          </h1>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Login
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:text-gray-900 sm:ms-4 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Info
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
