import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import mediaIcons from "../data/mediaIcons";
import columns from "../data/columns";

import { ScrollTo } from "./utils/scrollHandler";

export default function Footer(props) {
  const { sidebar, setSidebar, setProjectName } = props;
  const navigate = useNavigate();

  const [src, setSrc] = useState("../images/logo.png");
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <footer className="bg-tertiary">
      <div className="max-w-[1100px] mx-auto px-5 xl:px-0 py-5">
        <div className="flex flex-col md:flex-row md:justify-between items-center py-8">
          <div className="md:flex w-full md:justify-between space-y-10 md:space-y-0 md:space-x-10">
            {/* Branding */}
            <div className="-ml-6 md:w-1/3">
              <div className="px-6">
                <img
                  src={src}
                  alt="Logo"
                  onMouseEnter={() => setSrc("../images/logo-hover.png")}
                  onMouseLeave={() => setSrc("../images/logo.png")}
                  onClick={() => navigate("/")}
                  className="w-[185px] h-auto hover:cursor-pointer"
                ></img>

                <p className="text-sm max-w-sm mt-5 text-gray-400">
                  Contact me via my{" "}
                  <span className="font-normal">social media</span> or{" "}
                  <span className="font-normal">email</span> for any inquiries.
                </p>

                {/* Media icons */}
                <div className="flex mt-4 -mx-2">
                  {mediaIcons.map((icon) => (
                    <a
                      key={icon.label}
                      href={icon.path}
                      className="mx-2"
                      aria-label={icon.label}
                    >
                      <svg
                        className="w-4 h-4 fill-gray-400 hover:fill-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d={icon.svg}></path>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Columns */}
            <div className="md:w-2/3">
              <div className={`${!isMobile && "grid gap-6 grid-cols-3"}`}>
                {columns.map((column, index) => (
                  <div key={column.heading} className={column.containerStyle}>
                    <h4
                      className={`${
                        isMobile ? "my-4" : "mb-4"
                      } text-base font-semibold text-gray-300`}
                    >
                      {column.heading}
                    </h4>

                    {/* Links */}
                    {/* If pages column use scroll to else open sidebar */}
                    {index < 1
                      ? column.links.map((link) => (
                          <div
                            key={link.label}
                            onClick={() => {
                              ScrollTo({
                                target: link.target,
                                offset: 120,
                                mobileOffset: 80,
                              });
                            }}
                            className="mb-3 block text-sm text-gray-400 hover:underline hover:cursor-pointer"
                          >
                            {link.label}
                          </div>
                        ))
                      : column.links.map((link) => (
                          <div
                            key={link.label}
                            onClick={() => {
                              setSidebar(!sidebar);
                              setProjectName(link.target);
                            }}
                            className="mb-3 block text-sm text-gray-400 hover:underline hover:cursor-pointer"
                          >
                            {link.label}
                          </div>
                        ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="flex py-5 justify-between border-t border-primary">
          <a
            href="https://www.joshhaywood-portfolio.com/"
            className="text-sm text-gray-400 hover:underline"
          >
            © Josh Haywood {new Date().getFullYear()}
          </a>

          <button
            id="back-to-top"
            onClick={() => {
              document.documentElement.scrollTop = 0;
            }}
            className="flex flex-row space-x-1 items-center"
          >
            <span className="text-sm text-gray-400">Back To Top</span>

            {/* Attribution: https://www.svgrepo.com/svg/343035/chevron-up-circle */}
            <svg
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 hover:cursor-pointer"
            >
              <g
                fill="none"
                transform="translate(2 2)"
                strokeWidth="2"
                className="stroke-gray-400 fill-none"
              >
                <circle cx="8.5" cy="8.5" r="8" />
                <path d="m11.5 9.5-3-3-3 3" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
