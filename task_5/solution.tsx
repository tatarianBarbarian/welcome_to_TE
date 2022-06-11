import { useState } from "react";

const FancyWrapper = ({ children, onMouseEnter }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    onMouseEnter && onMouseEnter();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => (
  <FancyWrapper onMouseEnter={mouseEnterCallbak}>
    <img src={imgSrc} alt={imgAlt} />
  </FancyWrapper>
);

export const Block2 = ({ mouseEnterCallbak, content }) => (
  <FancyWrapper onMouseEnter={mouseEnterCallbak}>
    <p>{content}</p>
  </FancyWrapper>
);

export const Block3 = ({ mouseEnterCallbak, userData }) => (
  <FancyWrapper onMouseEnter={mouseEnterCallbak}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </FancyWrapper>
);

