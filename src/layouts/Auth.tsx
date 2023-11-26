import { ReactElement, ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}

const Auth = ({ children }: AuthProps): ReactElement => {
  return (
    <div>
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <div className="hidden xl:flex flex-col min-h-screen">
            <div className="my-auto">
              <div className="w-1/2 flex justify-center">
                <h1>LoGo</h1>
              </div>
              <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                A few more clicks to
                <br />
                sign in to your account.
              </div>
              <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                Manage all your users accounts in one place
              </div>
            </div>
          </div>
          <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
