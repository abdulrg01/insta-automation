import { SearchIcon } from "lucide-react";
import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="flex overflow-hidden gap-x-2 border-2 border-[#3352CC] rounded-full px-4 py-1 items-center flex-1">
      <SearchIcon color="#3352CC" />
      <input
        type="text"
        placeholder="Search by name, email or status"
        className="outline-none border-none ring-0 focus:ring-0 text-sm flex-1"
      />
    </div>
  );
};

export default Search;
