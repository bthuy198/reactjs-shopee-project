 import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Select({
  options,
  width,
  px,
  py,
  borderRadius,
  bg,
  border,
  borderColor,
}) {
  const [select, setSelect] = useState(options[0]);
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef(null);

  const handleSelectChange = (event) => {
    setSelect(event.target.textContent);
    setShowOptions(false);
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  const toggleOptions = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        ref={selectRef}
        className={`relative flex w-[${width}px] cursor-pointer items-center justify-between gap-10 hover:bg-black hover:bg-opacity-20 ${
          borderRadius && "rounded-lg"
        } ${border && "border"} ${
          borderColor && `border-${borderColor}`
        } px-${px} py-${py}`}
        onClick={toggleOptions}
      >
        {select}
        <FontAwesomeIcon icon="fa-solid fa-angle-down" />
        {options && showOptions && (
          <div
            className={`py-${py} absolute left-0 top-full w-full rounded-lg ${
              border && "border"
            } ${borderColor && `border-${borderColor}`} bg-${bg}`}
          >
            {options.slice(0).map((item, index) => (
              <div
                className={`px-${px} py-${py} hover:bg-black hover:bg-opacity-20`}
                onClick={handleSelectChange}
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
