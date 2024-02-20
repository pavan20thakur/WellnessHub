import React from "react";
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-10 h-screen gap-2 bg-gray-200 px-2 py-1">
        {/* UserSideNav occupies 2/10 of the viewport width */}
        <div className="col-span-2 ">
          Sidenav
        </div>


        <div className="col-span-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;


