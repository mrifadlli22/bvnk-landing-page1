import React from "react";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const handleScroll = (event, targetId, offset = 90) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const links = [
    { text: "Services", targetId: "services" },
    { text: "Get started", targetId: "get-started-section" },
    { text: "FAQ", targetId: "faq" }, // Menghubungkan ke elemen FAQ
   ];

  return (
    <ul className={styles.navList}>
      {links.map((link, index) => (
        <li key={index} className={styles.navItem}>
          <a
            href={`#${link.targetId}`}
            className={styles.navLink}
            onClick={(event) => handleScroll(event, link.targetId)}
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
