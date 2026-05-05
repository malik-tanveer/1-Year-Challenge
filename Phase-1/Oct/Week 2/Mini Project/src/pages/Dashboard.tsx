import React from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Top Summary Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Sales" value="$12,450" />
        <Card title="Orders" value="340" />
        <Card title="Customers" value="1280" />
        <Card title="Revenue" value="$78k" />
      </div>

      {/* Chart Section */}
      <Chart />

      {/* Table Section */}
      <Table />
    </div>
  );
};

export default Dashboard;
