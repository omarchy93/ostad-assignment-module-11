import { blogData } from "@/lib/blogData";

const Post = ({ params }) => {
  const id = params.id;
  const data = blogData;
  let details = {};

  data.map((item) => {
    if (id == item.id) {
      details = {
        id: item.id,
        title: item.title,
        content: item.content,
        date: item.date,
      };
      return details;
    }
  });

  return (
    <div>
      <h1 className=" text-7xl font-bold text-green-500 text-center pt-20">
        Post Details
      </h1>
      <div className="flex flex-col justify-center text-lg    text-black rounded-full bg-green-500 mt-10 p-20 text-center">
        <p className="py-2 text-xl font-bold">{details.id}</p>
        <p className="py-2 text-xl font-semibold ">{details.title}</p>
        <p className="py-2 text-justify">{details.content}</p>
        <p className="py-2 text-xl font-bold">{details.date}</p>
      </div>
    </div>
  );
};

export default Post;
