import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div className="grid grid-cols-1 p-5">
        <h1 className="pb-3">10 methods for centering div: </h1>
        <Link to={"/1"}>1 method</Link>
        <Link to={"/2"}>2 method</Link>
        <Link to={"/3"}>3 method</Link>
        <Link to={"/4"}>4 method</Link>
        <Link to={"/5"}>5 method</Link>
        <Link to={"/6"}>6 method</Link>
        <Link to={"/7"}>7 method</Link>
        <Link to={"/8"}>8 method</Link>
        <Link to={"/9"}>9 method</Link>
        <Link to={"/10"}>10 method</Link>
      </div>
    </>
  );
}

export default MainPage;
