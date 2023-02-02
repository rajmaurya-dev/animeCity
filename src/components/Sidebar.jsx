import React from "react";

const Sidebar = ({ topAnime }) => {
  return (
    <aside className="flex-grow max-w-[350px] min-h-[80vh] bg-blue-300 pr-3 flex flex-col gap-3">
      <nav>
        <h3 className="text-center font-bold ml-7">Top Anime</h3>
      </nav>
    </aside>
  );
};

export default Sidebar;
