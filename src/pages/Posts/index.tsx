import { ReactElement, useEffect, useState } from "react";
import Axios from "../../config/Axios";
import { api } from "../../config/api";
import { Link } from "react-router-dom";
import { Post } from "../../helpers/types";

const Posts = (): ReactElement => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  const fetch = async () => {
    const response = await Axios.get(api.posts);
    setPosts(response.data.filter((data: Post) => data.userId === 1));
  };

  useEffect(() => {
    fetch();
  }, []);

  const deletePost = async (id: number) => {
    const response = await Axios.delete(api.posts + `/${id}`);

    if (response.status === 200) {
      fetch();
    } else {
      console.log("Something went wrong..");
    }
  };

  return (
    <>
      <h1 className="w-full text-[30px] mb-3 bg-white px-4 pt-2 pb-3 font-bold  shadow-md sm:rounded-lg">
        Posts
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Body
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {posts
              ? posts.map((post: Post, i: number) => {
                  return (
                    <>
                      <tr
                        key={post.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {i + 1}
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {post.title.slice(0, 20)}...
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {post.body.slice(0, 60)}...
                        </th>
                        <td className="px-6 py-4 text-right">
                          <Link
                            to={`/posts/edit/${post.id}`}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2"
                          >
                            Edit
                          </Link>
                          <Link
                            to="/posts"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2"
                            onClick={() => deletePost(post?.id)}
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    </>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Posts;
