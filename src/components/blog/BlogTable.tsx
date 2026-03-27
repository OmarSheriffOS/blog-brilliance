import React from "react";

interface BlogTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
}

const BlogTable: React.FC<BlogTableProps> = ({ headers, rows, caption }) => {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        {caption && (
          <caption className="px-4 py-2 text-xs text-muted-foreground text-left">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-blog-table-header">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-semibold text-foreground text-xs uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={
                rowIdx % 2 === 1 ? "bg-blog-table-stripe" : "bg-background"
              }
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-3 text-foreground/80 border-t border-border"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
