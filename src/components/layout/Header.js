import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
            <li>-</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
