import React, { useRef, useState } from "react";
import "./sidebar.css";
import { MdMenu } from "react-icons/md";
import {Link} from 'react-router-dom'

const menuItems = [
  {
    name: "Skills"
  },
  {
    name: "Aboutme"
  },
  {
    name: "Projects"
  },
  {
    name: "Contato"
  } 
];

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const NavHeader = ({ toggleSidebar, isSidebarOpen }) => (
  <header className="sidebar-header">
    <button type="button" onClick={toggleSidebar}>
      {isSidebarOpen ? <Icon icon="Menu" /> : <MdMenu />}
    </button>
  
  </header>
);

const NavButton = ({ onClick, name, icon, isActive, hasSubNav, to }) => (
  <Link
    to={to}
    className={`nav-button ${isActive ? "active" : ""}`}
    onClick={() => onClick(name)}
  >
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
    {hasSubNav && <Icon icon="expand_more" />}
  </Link>
);

const SubMenu = ({ item, activeItem, handleClick }) => {
  const navRef = useRef(null);

  const isSubNavOpen = (item, items) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <div
      className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
      style={{
        maxHeight: isSubNavOpen(item.name, item.items) ? navRef.current?.scrollHeight : 0,
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItem) => (
          <NavButton
            key={subItem}
            onClick={handleClick}
            name={subItem}
            isActive={activeItem === subItem}
          />
        ))}
      </div>
    </div>
  );
};

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (item) => {
    setActiveItem(item !== activeItem ? item : "");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <NavHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      {menuItems.map((item) => (
        <div className="buttonSide" key={item.name}>
          {!item.items && (
            <NavButton
              onClick={handleClick}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              hasSubNav={!!item.items}
              to={`/${item.name.toLowerCase()}`}
            />
          )}
          {item.items && (
            <>
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
                to={`/${item.name.toLowerCase()}`}
              />
              <SubMenu
                activeItem={activeItem}
                handleClick={handleClick}
                item={item}
              />
            </>
          )}
        </div>
      ))}
    </aside>
  );
};