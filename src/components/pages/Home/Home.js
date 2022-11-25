import React from "react";
import "./home.css";
import { ImArrowRight2 } from "react-icons/im";
import { RiMotorbikeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import banner1 from "../../../assets/banner/banner-1.jpg";
import banner2 from "../../../assets/banner/banner-2.jpg";
import banner3 from "../../../assets/banner/banner-3.jpg";

const Home = () => {
  return (
    <div>
      <section className="mb-10">
        <div className="hero min-h-[600px] bg-bike">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome to Motohub</h1>
              <h1 className="mb-5 text-2xl font-bold">
                Garade for your next motorbike
              </h1>
              <p className="mb-5">
                A virtual used motorbikes' trading center where your next bike
                is waiting for you
              </p>
              <Link to="/allproducts">
                <button className="btn btn-secondary font-bold">
                  Get Started &nbsp; <ImArrowRight2 />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="catagories-container mt-10 mb-20">
        <h1 className="text-5xl font-bold mt-20 mb-5">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
          <Link to="/catagory/100cc">
            <button className="w-full h-20 btn btn-primary btn-active text-xl font-bold">
              <RiMotorbikeLine /> &nbsp; 100 CC Bikes
            </button>
          </Link>
          <Link to="/catagory/125cc">
            <button className="h-20 w-full btn btn-secondary btn-active text-xl font-bold">
              <RiMotorbikeLine /> &nbsp;125 CC Bikes
            </button>
          </Link>
          <Link to="/catagory/150cc">
            <button className="h-20 w-full btn btn-accent btn-active text-xl font-bold">
              <RiMotorbikeLine /> &nbsp;150 CC Bikes
            </button>
          </Link>
        </div>
      </section>
      <section className="carousel-section">
        <div className="carousel w-full h-[500px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={banner1}
              className="w-full opacity-40 object-cover"
              alt=""
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <h1 className="text-5xl font-bold">Trusted by thousands</h1>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={banner2}
              className="w-full opacity-40 object-cover"
              alt=""
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <h1 className="text-4xl font-bold">
                Verified buyers and sellers around Asia
              </h1>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={banner3}
              className="w-full opacity-40 object-cover"
              alt=""
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <h1 className="text-5xl font-bold">Find your bike here & ride</h1>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">All the features about us</h2>
          <p className="dark:text-gray-400">Why should you choose us?</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-sky-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Verified Buyers</h3>
            <div className="space-y-1 leading-tight">
              <p>All the buyers are</p>
              <p>judged thoroughly</p>
              <p>by our product review team</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-sky-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Friendly Prices</h3>
            <div className="space-y-1 leading-tight">
              <p>Almost all of our</p>
              <p>bikes are pocket friendly</p>
              <p>to our respective customers</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-sky-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Services</h3>
            <div className="space-y-1 leading-tight">
              <p>We do provide necessary</p>
              <p>services to our customers</p>
              <p>according to their needs</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-sky-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Locations</h3>
            <div className="space-y-1 leading-tight">
              <p>Our products can be</p>
              <p>purchased throughout the</p>
              <p>country with courier facilities</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-sky-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Sales</h3>
            <div className="space-y-1 leading-tight">
              <p>Festive sales and discount is</p>
              <p>provided upon selected items</p>
              <p>on holidays</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-sky-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Satisfaction</h3>
            <div className="space-y-1 leading-tight">
              <p>All our customers have responded</p>
              <p>with a positive review so far</p>
              <p>proving our high quality facilities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
