import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { categories } from "../../../data/categories";

const CategoryPanel = ({ open, setOpen }) => {
  const [expanded, setExpanded] = useState({});
  const [expandedSub, setExpandedSub] = useState({});

  const toggleCategory = (name) => {
    setExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleSubCategory = (name) => {
    setExpandedSub((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div
      className={`fixed top-0 left-0 w-60 h-full bg-white shadow-lg z-[200] overflow-y-auto transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="px-4 py-3 border-b flex justify-between items-center">
        <h2 className="text-[15px] font-semibold">Shop By Categories</h2>
        <button onClick={() => setOpen(false)} className="text-xl">
          <IoCloseSharp />
        </button>
      </div>

      <ul className="py-2 space-y-0.5 pl-2"> 
        {categories.map((category) => (
          <li key={category.name}>
            <div
              className="flex justify-between items-center pr-2 py-[6px] cursor-pointer hover:bg-gray-100"
              onClick={() => toggleCategory(category.name)}
            >
              <span className="text-[14px] font-medium">{category.name}</span>
              <div className="flex-shrink-0 ml-2">
                {category.subCategories ? (
                  expanded[category.name] ? (
                    <AiOutlineMinusSquare className="text-[16px]" />
                  ) : (
                    <AiOutlinePlusSquare className="text-[16px]" />
                  )
                ) : (
                  <AiOutlinePlusSquare className="opacity-50 text-[16px]" />
                )}
              </div>
            </div>

            {category.subCategories && expanded[category.name] && (
              <ul className="pl-4 space-y-0.5"> 
                {category.subCategories.map((sub) => (
                  <li key={sub.name}>
                    <div
                      className="flex justify-between items-center pr-2 py-[5px] cursor-pointer hover:bg-gray-50"
                      onClick={() => sub.sub && toggleSubCategory(sub.name)}
                    >
                      <span className="text-[13px]">{sub.name}</span>
                      <div className="flex-shrink-0 ml-2">
                        {sub.sub ? (
                          expandedSub[sub.name] ? (
                            <AiOutlineMinusSquare className="text-[14px]" />
                          ) : (
                            <AiOutlinePlusSquare className="text-[14px]" />
                          )
                        ) : (
                          <AiOutlinePlusSquare className="opacity-50 text-[14px]" />
                        )}
                      </div>
                    </div>

                    {sub.sub && expandedSub[sub.name] && (
                      <ul className="pl-6"> 
                        {sub.sub.map((item) => (
                          <li
                            key={item}
                            className="py-[3px] text-[12px] cursor-pointer hover:text-[#ff5252]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;
