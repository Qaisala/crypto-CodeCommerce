import React from "react";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="rounded-div mt-8 pt-8 text-text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-75 uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2 cursor-pointer hover:font-semibold">Help Center</li>
              <li className="text-sm py-2 cursor-pointer hover:font-semibold">Contact Us</li>
              <li className="text-sm py-2 cursor-pointer hover:font-semibold">API Status</li>
              <li className="text-sm py-2 cursor-pointer hover:font-semibold">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2 cursor-pointer hover:font-semibold">About Us</li>
              <li className="text-sm py-2 cursor-pointer hover:font-semibold">Careers</li>
              <li className="text-sm py-2 cursor-pointer hover:font-semibold">Invest</li>
              <li className="text-sm py-2 cursor-pointer hover:font-semibold">Legal</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-75 py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 -mt-4">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right">
                Sign up for crypto news
              </p>
              <div className="py-4">
                <form>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
                  />
                  <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2 cursor-pointer">
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-accent">
                <AiOutlineInstagram />
                <FaTiktok className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaFacebookF className="cursor-pointer" />
                <FaGithub className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">Power by Coin Gecko</p>
    </div>
  );
}

export default Footer;
