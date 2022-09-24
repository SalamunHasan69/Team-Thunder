import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg lg:px-20">
        <div className="flex-1">
          <a href='/' className="btn btn-ghost normal-case text-2xl font-medium text-primary	">Team Thunder</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt='' src="https://wallpaperaccess.com/full/4905279.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;