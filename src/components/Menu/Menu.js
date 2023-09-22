import React, { useState } from "react";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {showMenu && <h1>Chocolate Chip Cookies</h1>}
      <button onClick={toggleMenu}>Show Menu</button>
    </div>
  );
}

export default Menu;
