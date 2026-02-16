import React from "react";
import { Sidebar } from "../components/Sidebar";
import CumulativeIncomeExpenseLineChart from "../components/Charts/CumulativeIncomeExpenseLineChart";
import MonthlySavings from "../components/Charts/MonthlySavings";
import IncomeExpenseChart from "../components/Charts/IncomeExpenseChart";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="pl-64">
        <div className="flex flex-col h-screen">
          <div className="flex flex-1 p-2 space-x-2">
            <div className="flex-1 border border-gray-600 p-2 rounded-lg">
              <IncomeExpenseChart />
            </div>
            <div className="flex-1 border border-gray-600 p-2 rounded-lg shadow-lg">
              <MonthlySavings />
            </div>
          </div>
          <div className="flex-1 border border-gray-600 p-2 rounded-lg">
            <CumulativeIncomeExpenseLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
