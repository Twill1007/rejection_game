import React, { useState } from "react";
import Button from "../../UI/Button/Button";

function Menu(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {showMenu && (
        <div>
          <h2>Chocolate Chip Cookies</h2>
          <h2>Snickerdoodles</h2>
        </div>
      )}
      <Button onClick={toggleMenu}></Button>
    </div>
  );
}

export default Menu;
