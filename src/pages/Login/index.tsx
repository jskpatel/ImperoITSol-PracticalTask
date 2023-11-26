import { Formik } from "formik";
import { ReactElement, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../../helpers/validations";
import { LoginPayload, StateValue } from "../../helpers/types";
import { onLogin } from "../../service/auth";

const Login = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state: StateValue) => state.base.loading);

  const onLoginSubmit = useCallback((value: LoginPayload) => {
    onLogin(value, dispatch, navigate);
  }, []);

  return (
    <>
      <div className="w-full max-w-xs">
        <Formik
          initialValues={{
            email: "",
            role: "",
          }}
          validationSchema={loginValidation}
          onSubmit={onLoginSubmit}
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
                    Username
                  </label>
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.email && touched.email && "border-danger"
                    }`}
                    name="email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className="text-red">{errors.email}</div>
                  )}
                </div>

                <div className="mb-6">
                  <div>
                    <select
                      name="role"
                      className={`intro-x login__input form-control py-3 px-4 block ${
                        errors.role && touched.role && "border-red"
                      }`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Select Admin Role</option>
                      <option value="Admin">Admin</option>
                      <option value="Super Admin">Super Admin</option>
                    </select>
                    {errors.role && touched.role && (
                      <div className="text-red">{errors.role}</div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    disabled={loading}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </>
          )}
        </Formik>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Practical. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Login;
