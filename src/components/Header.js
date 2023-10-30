import React, { useState, useEffect } from "react";
import WebFont from 'webfontloader';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const navContent = [
  // {
  //   label: "Home",
  //   page: "home",
  // },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Experience",
    page: "experience",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const Header = () => {
  // const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === "system" ? systemTheme : theme

  // const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (redirect) {
      setRedirect(false);
      // Redirect to a different route or URL
      navigate("/contact");
    }
  }, [redirect, navigate]);

  useEffect(() => {
    setMounted(true);
  }, []);



  if (!mounted) {
    return null;
  }

  return (
    <header className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl top-0 z-50  bg-white dark:bg-stone-900 font-sans font-Poppins">
      <div className="justify-between md:items-center md:flex dark:bg-stone-900 dark:border-b dark:border-stone-600">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <HashLink to="/">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-semibold cursor-pointer">Xiaoxing Pan</h2>
              </div>
            </HashLink>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border font-semibold"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navContent.map((item, idx) => {
                return (
                  <HashLink
                    key={idx}
                    to={item.page === "contact" ? "" : `/#${item.page}`}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-sky-600 dark:text-neutral-100 cursor-pointer"
                    }
                    // spy={true}
                    scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                    offset={-100}
                    duration={500}
                    onClick={() => {
                      setNavbar(!navbar);
                      if (item.page === "contact") {
                        setRedirect(true);
                      }
                    }}
                  >
                    {item.label}
                  </HashLink>
                );
              })}
              {/* {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-0.5 mx-auto bg-neutral-200 border-0"></hr>
    </header>
  );
};

export default Header;
