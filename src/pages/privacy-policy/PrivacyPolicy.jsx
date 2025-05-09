import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import PrivacyPolicyTextContents from "./components/TextContents";

export default function PrivacyPolicy() {
  return (
    <div className="overflow-hidden">
      <Layout>
        <Header />
        <PrivacyPolicyTextContents />
      </Layout>
    </div>
  );
}
