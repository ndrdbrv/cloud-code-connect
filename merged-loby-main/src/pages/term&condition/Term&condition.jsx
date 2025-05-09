import React from "react";
import TermsAndConditionsTextContent from "./components/TextContent";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

const TermsAndConditions = () => {
  return (
    <div className="overflow-hidden">
      <Layout>
        <Header />
        <TermsAndConditionsTextContent />
      </Layout>
    </div>
  );
};

export default TermsAndConditions;
