import React, { useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/auth";
import {
  Sidenav,
  DashboardCommunity,
  DashboardHome,
  Questionnaire,
} from "../../components/DashboardComponents";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showQuestionnaire, setShowQuestionnaire] = useState(true);

  const closeQuestionnaire = () => {
    setShowQuestionnaire(false);
  };

  return (
    <>
      <div className="grid grid-cols-10 h-screen gap-2 bg-gray-200 px-2 py-1">
        {/* UserSideNav occupies 2/10 of the viewport width */}
        <div className="col-span-2 ">
          <Sidenav />
        </div>
        <div className="col-span-8 shadow-xl shadow-blue-gray-900/5 bg-white px-2 py-1">
          <Outlet />
          {showQuestionnaire && <Questionnaire onClose={closeQuestionnaire} />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
