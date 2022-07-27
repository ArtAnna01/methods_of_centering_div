import React from "react";

function ThirdPage() {
  return (
    <>
      <div className="h-full third">
        <p className="w-60 h-auto border border-black rounded-sm flex justify-center thirdChild">
          position: relative; Child: position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        </p>
      </div>
    </>
  );
}

export default ThirdPage;
