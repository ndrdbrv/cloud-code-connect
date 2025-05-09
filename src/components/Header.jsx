import React from "react";
import GetStarted from "../pages/home/components/GetStarted";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute w-full left-0 top-6 z-50">
      <div className="container">
        <nav className="flex items-center justify-between">
          <img src="/img/logo.svg" className="max-sm:w-[130px]" alt="" />

          <GetStarted className="hidden sm:block" />
          <Link to="#" className="sm:hidden">
            <Bar />
          </Link>
        </nav>
      </div>
    </header>
  );
};
const Bar = () => (
  <svg
    width="25"
    height="33"
    viewBox="0 0 25 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.0001 8.50195C21.0631 7.93227 19.9184 8.20281 18.8909 8.27578C16.7941 8.42467 14.7106 8.30446 12.6127 8.48275C10.1662 8.69066 7.79048 8.70364 5.34704 8.67593C4.52186 8.66657 3.54627 8.41924 2.78469 8.60489"
      stroke="#9379EC"
      strokeWidth="4.49664"
      strokeLinecap="round"
    />
    <path
      d="M22.0001 15.6309C21.0631 15.0612 19.9184 15.3317 18.8909 15.4047C16.7941 15.5536 14.7106 15.4334 12.6127 15.6117C10.1662 15.8196 7.79048 15.8325 5.34704 15.8048C4.52186 15.7955 3.54627 15.5482 2.78469 15.7338"
      stroke="#9379EC"
      strokeWidth="4.49664"
      strokeLinecap="round"
    />
    <path
      d="M22.0001 23.6309C21.0631 23.0612 19.9184 23.3317 18.8909 23.4047C16.7941 23.5536 14.7106 23.4334 12.6127 23.6117C10.1662 23.8196 7.79048 23.8325 5.34704 23.8048C4.52186 23.7955 3.54627 23.5482 2.78469 23.7338"
      stroke="#9379EC"
      strokeWidth="4.49664"
      strokeLinecap="round"
    />
  </svg>
);

export default Header;
