//
import React from "react";
import ActionButton from "./ActionButton";

function GetEmail({ ButtonTitle, ButtonClass, InputClass, FormClass }) {
  return (
    <div className={`${FormClass} w-full`}>
      <div className="flex gap-10 items-centers">
        <input
          className={`bg-transparent  text-primary-100  ring-2 ring-primary-100 rounded-xl px-5 w-4/6 ${InputClass}`}
          placeholder="Enter your email......"
        ></input>
        <ActionButton
          className={`bg-primary-200  ${ButtonClass}`}
          title={ButtonTitle}
        />
      </div>
    </div>
  );
}

export default GetEmail;
