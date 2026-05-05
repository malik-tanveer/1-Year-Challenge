import React from "react";

interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="bg-white shadow-md rounded-2xl p-4 space-y-2">
      {items.length > 0 ? (
        items.map((item, i) => (
          <li
            key={i}
            className="p-3 border-b last:border-none border-gray-200 hover:bg-gray-50 rounded-lg"
          >
            {item}
          </li>
        ))
      ) : (
        <li className="text-gray-500 text-center p-3">No Items Found</li>
      )}
    </ul>
  );
};

export default List;
