import React, { useState } from "react";
import { icons } from "@/constants/icons";
import { Icon } from "../icon/Icon";

export interface SearchBarProps {
  placeholder: string;
  onClear: () => void;
  onSearch: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onClear,
  onSearch,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  const handleClear = () => {
    setValue("");
    onClear();
  };

  const borderColor = value.length > 0 ? "border-primary-500" : "border-primary-400";

  return (
    <div className={`flex items-center justify-between w-full bg-background-300 py-2 px-3 rounded-lg border ${borderColor}`}>
      <input
        className="w-full bg-transparent outline-none"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {value.length === 0 ? (
        <div className="cursor-pointer" onClick={() => onSearch(value)}>
          <Icon icon={icons.search} altText="search" size="medium" />
        </div>
      ) : (
        <div className="cursor-pointer" onClick={handleClear}>
          <Icon icon={icons.close} altText="clear" size="small" />
        </div>
      )}
    </div>
  );
};