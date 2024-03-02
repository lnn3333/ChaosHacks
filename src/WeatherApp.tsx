import React from 'react';

const WeatherApp: React.FC = () => {
  return (
    <>
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">Weather App</span>
              </a>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900">Home</a>
                <a className="mr-5 hover:text-gray-900">Change City</a>
                <a className="mr-5 hover:text-gray-900">Current Location</a>
                <a className="mr-5 hover:text-gray-900">Support</a>
              </nav>
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">See More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </header>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h1 className="sm:text-3xl text-2xl medium title-font mb-2 text-gray-900">
                    Current Weather of the city                       
                    <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-5">
                    </div>
                  </h1>
                </div>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg" alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Cloudy</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">HiiiiHaaaaaaa</h2>
                    <p className="leading-relaxed text-base">The Weather today is Cloudy</p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://cdn.dribbble.com/users/925716/screenshots/3333720/attachments/722375/night.png?resize=400x300&vertical=center" alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Night Time</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Whoooooooooooooo</h2>
                    <p className="leading-relaxed text-base">It's night Outside Go Sleep</p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://is3-ssl.mzstatic.com/image/pf/us/r30/Purple7/v4/c3/d8/2b/c3d82b0d-4299-e7a6-212a-99060d8a9a33/mzl.ukbrzgqd.png" alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Sunny</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Niceeeeeeeee</h2>
                    <p className="leading-relaxed text-base">The Weather today is Sunny</p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://us.123rf.com/450wm/chekman/chekman1805/chekman180500011/100835324-paper-art-rain-icon-on-blue-background-paper-art-of-weather-concept.jpg?ver=6" alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Rainy</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Nooooooooo</h2>
                    <p className="leading-relaxed text-base">The Weather today is Rainy</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </body>
      </html>
    </>
  );
}

export default WeatherApp;
