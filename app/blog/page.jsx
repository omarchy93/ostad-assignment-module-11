import { blogData } from "@/lib/blogData";
import Link from "next/link";
import React from "react";

const blog = () => {
  const data = blogData;
  return (
    <div>
      <h1 className="text-7xl font-bold text-green-500 text-center pt-20">
        Blog page
      </h1>
      <div className="flex flex-col gap-10 mt-10 pt-16 text-black">
        {data.map((item) => {
          return (
            <Link key={item.id} href={`/blog/${item.id}`}>
              <div>
                <span className="bg-green-500 px-10 py-3 my-6  text-lg font-bold rounded-lg  ">
                  {item.id}- {item.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default blog;
