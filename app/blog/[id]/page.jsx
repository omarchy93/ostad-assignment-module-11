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
      <div className="flex flex-col justify-center text-lg gap-3 font-semibold  text-black rounded-lg bg-green-500 mt-10 p-14 ">
        <p>{details.id}</p>
        <p>{details.title}</p>
        <p>{details.content}</p>
        <p>{details.date}</p>
      </div>
    </div>
  );
};

export default Post;
