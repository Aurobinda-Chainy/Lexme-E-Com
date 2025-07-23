import React from "react";

const SideBar = ({ selectedCategories, setSelectedCategories }) => {
  const categories = ["Fashion", "Electronics", "Bags", "Footwear", "Groceries", "Beauty", "Jewellery"];

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, id]);
    } else {
      setSelectedCategories(selectedCategories.filter(cat => cat !== id));
    }
  };

  return (
    <aside className="w-full px-4 py-6">
      <div className="mb-6">
        <h3 className="text-[16px] font-semibold mb-4 flex justify-between items-center whitespace-nowrap">
          Shop by Category 
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                id={cat}
                className="accent-[#ff5252]"
                checked={selectedCategories.includes(cat)}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={cat}>{cat}</label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
