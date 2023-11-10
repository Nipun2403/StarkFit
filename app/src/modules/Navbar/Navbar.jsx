import React from "react";
import ActionButton from "../../shared/ActionButton";
import Link from "./Link";

function Navbar(isTopOfPage, selectedPage, setSelectedPage) {
  return (
    <nav>
      {/* Parent Div */}
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between mx-auto gap-96">
            {/* Left Section */}
            <div className="flex items-center justify-between gap-52">
              <div className="text-[1.6rem]">
                <p className="mx-10 font-medium">
                  Stark<span className="text-primary-200 font-bold">FIT</span>.
                </p>
              </div>

              {/* Links Section */}
              <div className="flex items-center justify-between gap-24">
                <Link title="Home" />
                <Link title="Programs" />
                <Link title="Community" />
                <Link title="Pricing" />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-between ml-44 gap-20">
              <p>Login</p>
              <ActionButton
                className={"bg-primary-200"}
                title="Register"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
