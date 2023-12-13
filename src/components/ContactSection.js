import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
//const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;

const ContactSection = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  //Using weather api
  // const [weatherData, setWeatherData] = useState(null);
  // const [imgPath, setImgPath] = useState("");

  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=45.50884&lon=-73.58781&appid=${weatherKey}`
  //   )
  //     .then((result) => {
  //       if (!result.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return result.json();
  //     })
  //     .then((jsonData) => {
  //       setWeatherData(jsonData);
  //       const imagePath = `assets/weather/${jsonData.weather[0].icon}.png`;

  //       setImgPath(imagePath);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  //   //});
  // }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log("Email sent successfully!" + result.text);
        setEmail("");
        setMessage("");
        setName("");
        setModalOpen(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900">
      <div className="py-4 lg:py-12 px-4 mx-auto max-w-screen-md">
        {/* <div className="mb-4 text-4xl  font-bold text-right text-gray-900 dark:text-white">
          {weatherData && (
            <div className="grid grid-cols-12 gap-0">
              <p className="text-[16px] col-start-11 col-span-1">
                {weatherData.name}
              </p>
              <img
                className="text-xl ml-2 col-start-12 col-span-1 justify-self-end"
                src={imgPath}
                width={30}
                height={30}
                alt="Weather Icon"
              />
            </div>
          )}
        </div> */}
        <h2 className="mb-4 text-4xl  font-bold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>

        {/* <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Feel free to contact me if you .
        </p> */}
        <form ref={form} className="space-y-4" onSubmit={sendEmail}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="justify-center  flex items-center">
            <button
              type="submit"
              value="Send"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-sky-600 cursor-pointer
             text-sm text-center"
            >
              Send message
            </button>

            {/* Modal */}
            {isModalOpen && (
              <div className="modal fixed inset-0 flex bg-black bg-opacity-30 backdrop-blur-sm items-center justify-center z-50"
                overlayClassName="fixed inset-0"
              >
                <div className='bg-white p-2 rounded shadow-lg w-80'>
                  <div className="modal-content p-2 ">
                    <div className='font-bold text-xl mb-5 flex justify-center'>Thank you for your contact!</div>
                    <div className='text-lg flex justify-center'>You message is send successfully.</div>
                  </div>
                  <div className="modal-buttons flex justify-center  mt-5">
                    <button
                      className="px-4 py-1 mx-5 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => setModalOpen(false)}>
                      OK
                    </button>

                  </div>
                </div>



              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
