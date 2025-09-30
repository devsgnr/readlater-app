"use client";

import Benefits from "./components/benefits";
import CustomerState from "./components/customer-state";
import Products from "./components/products";

const Billing = () => {
  return (
    <div className="container mx-auto py-8 sm:px-20 px-3 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
          <p className="text-sm font-medium text-muted-foreground">Manage your billing</p>
        </div>
      </div>

      {/** Products Section */}
      <Products />

      {/** Customer State */}
      <CustomerState />

      {/** Benefits Section */}
      <Benefits />
    </div>
  );
};

export default Billing;
