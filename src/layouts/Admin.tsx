import { ReactElement, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface AuthProps {
  children: ReactNode;
}

const Admin = ({ children }: AuthProps): ReactElement => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="flex flex-row">
        <div className="w-[300px] h-[100vh] bg-white p-3">
          <ul className="mt-3">
            <li className="py-3">
              <Link
                to="/dashboard"
                className={`${
                  pathname.includes("dashboard") ? "active text-blue-700" : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li className="py-3">
              <Link
                to="/posts"
                className={`${
                  pathname.includes("posts") ? "active text-blue-700" : ""
                }`}
              >
                Posts
              </Link>
            </li>
            <li className="py-3">
              <Link
                to="/albums"
                className={`${
                  pathname.includes("albums") ? "active text-blue-700" : ""
                }`}
              >
                Albums
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full p-3">{children}</div>
      </div>
    </div>
  );
};

export default Admin;
