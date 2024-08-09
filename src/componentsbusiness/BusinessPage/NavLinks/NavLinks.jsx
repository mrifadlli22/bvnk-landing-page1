import React from "react";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const scrollToWithOffset = (event, href, offset) => {
    event.preventDefault(); // Mencegah perilaku default dari anchor link
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const links = [
    { text: "Services", href: "#services" },
    { text: "Get started", href: "#get-started" },
    { text: "FAQ", href: "#faq" },
  ];

  return (
    <ul className={styles.navList}>
      {links.map((link, index) => (
        <li key={index} className={styles.navItem}>
          <a
            href={link.href}
            className={styles.navLink}
            onClick={(e) => scrollToWithOffset(e, link.href, 100)} // Ganti 100 dengan nilai offset yang sesuai
          >
            {link.text}
            {link.hasDropdown && (
              <span className={styles.dropdownIcon}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/26d305feb7ce23d14d5915567e543160357778fba93115af315d843a7e52506c?apiKey=e3ddd6dd58b748b09fc1391939743920&&apiKey=e3ddd6dd58b748b09fc1391939743920"
                  alt=""
                  className={styles.dropdownImage}
                />
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
