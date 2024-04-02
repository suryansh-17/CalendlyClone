import React from "react";

function FooterMenu({ heading, menueItems = [] }) {
  return (
    <>
      <h1 className="font-sans text-lg font-bold text-sky-950">{heading}</h1>
      {menueItems.map((item) => (
        <a href={item.url}>
          <p className="font-sans text-gray-600 my-2">{item.name}</p>
        </a>
      ))}
    </>
  );
}

export default FooterMenu;
