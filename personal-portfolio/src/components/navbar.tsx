import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
        </div>

        {/* Menu */}
        <ul className="flex space-x-4">
          <li>
            <a href="#progetti">Progetti</a>
          </li>
          <li>
            <a href="#chi-sono">Chi sono</a>
          </li>
          <li>
            <a href="#contatti">Contatti</a>
          </li>
        </ul>

        {/* Lingua e Tema */}
        <div className="flex space-x-4">
          <div>
            <a href="#tema">Tema</a>
          </div>
          <div>
            <a href="#lingua">Lingua</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
