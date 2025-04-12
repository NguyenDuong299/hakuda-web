import React from "react";

const Pagination = () => {
  return (
    <nav className="inline-flex items-center space-x-1">
      <button className="px-3 py-1 rounded bg-white border border-[#ebebeb] border rounded-l hover:bg-[#A3A3A3] hover:border-[#A3A3A3] hover:text-white">
        «
      </button>
      <button className="px-3 py-1 rounded text-white bg-[#A3A3A3] border border-[#A3A3A3]">
        1
      </button>
      <button className="px-3 py-1 rounded text-black bg-white border border-[#ebebeb] border hover:bg-[#A3A3A3] hover:border-[#A3A3A3] hover:text-white">
        2
      </button>
      <button className="px-3 py-1 rounded text-black bg-white border border-[#ebebeb] border hover:bg-[#A3A3A3] hover:border-[#A3A3A3] hover:text-white">
        3
      </button>
      <button className="px-3 py-1 rounded text-black bg-white border border-[#ebebeb] border hover:bg-[#A3A3A3] hover:border-[#A3A3A3] hover:text-white">
        ...
      </button>
      <button className="px-3 py-1 rounded text-black bg-white border border-[#ebebeb] border hover:bg-[#A3A3A3] hover:border-[#A3A3A3] hover:text-white">
        10
      </button>
      <button className="px-3 py-1 rounded bg-white border border-[#ebebeb] border rounded-r hover:bg-[#A3A3A3] hover:border-[#A3A3A3] hover:text-white">
        »
      </button>
    </nav>
  );
};
export default Pagination;
