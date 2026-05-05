import React from "react";

interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            {columns.map((col, i) => (
              <th key={i} className="p-3 font-semibold border-b border-gray-300">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {columns.map((col, j) => (
                  <td key={j} className="p-3 border-b border-gray-200">
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="p-3 text-center text-gray-500"
              >
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
