import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

export default function NavBar({ photo }) {
  return (
    <div className="justify-between bg-gray-100 px-10 py-5 shadow flex ">
      
      <Link to="/"><img src={photo} alt="Amazon Logo" className="h-10" /></Link>
      
      <div className="space-x-4">
          <button className=" hover:text-blue-600 hover:font-bold px-2 py-1 rounded-md text-purple-600">
            <Link to="/login">Login</Link>
          </button>
          <button className="hover:text-purple-600 hover:font-bold px-2 py-1 rounded-md text-blue-600">
            <Link to="/signup">Signup</Link>
          </button>
        </div>
    </div>
  );
}
