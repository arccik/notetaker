import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const Header: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">Note GanG</a>
      </div>
      {sessionData?.user ? (
        <div className="flex-none">
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                {sessionData.user.image && <img src={sessionData.user.image} />}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => void signOut()}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button className="btn-primary btn" onClick={() => void signIn()}>
          Login
        </button>
      )}
    </div>
  );
};
