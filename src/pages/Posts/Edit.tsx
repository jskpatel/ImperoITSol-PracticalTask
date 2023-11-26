import { useState, useEffect, ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { Post } from "../../helpers/types";
import { api } from "../../config/api";
import Axios from "../../config/Axios";
import { postValidation } from "../../helpers/validations";

const Edit = (): ReactElement => {
  const { id } = useParams();

  const [post, setPost] = useState<Post | null>(null);

  const fetch = async () => {
    const response = await Axios.get(api.posts + `/${id}`);
    setPost(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const initialValues = {
    userId: null,
    id: null,
    title: "",
    body: "",
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <Formik
          initialValues={post || initialValues}
          validationSchema={postValidation}
          onSubmit={() => {}}
        >
          {({
            errors,
            touched,
            handleChange,
            handleSubmit,
            values,
            handleBlur,
          }) => (
            <>
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Post Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.title && touched.title && (
                    <div className="text-red">{errors.title}</div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Body
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={values.body}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.body && touched.body && (
                    <div className="text-red">{errors.body}</div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Update
                  </button>
                </div>
              </form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Edit;
