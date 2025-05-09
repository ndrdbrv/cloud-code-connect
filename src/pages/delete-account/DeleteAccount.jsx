import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";

const DeleteAccount = () => {
  return (
    <div className="overflow-hidden">
      <Layout>
        <Header />
        <div className="container pt-32 pb-12 xl:pt-52 xl:pb-52">
          <p>
            <b>Delete Account Request</b>
          </p>
          <p>
            We're sorry to see you go, but we understand that sometimes it's
            necessary to part ways. If you wish to delete your Swayme account,
            please follow the steps below:
          </p>
          <br />
          <p>
            <b>1. Send an Email:</b> Send an email to <b>hello@swayze.pl</b>{" "}
            with the subject line "Account Deletion Request."
          </p>
          <br />
          <p>
            <b>2. Include the Following Information:</b> In your email, please
            provide the following details:
            <br />
            a) Your Instagram account username <br /> b) Reasoning behind your
            account deletion (optional but appreciated)
          </p>
          <br />
          <p>
            <b>3. Verification:</b> For security purposes, we may need to verify
            your identity before processing your request. Please ensure that the
            email you use to contact us matches the one associated with your
            Instagram account
          </p>
          <br />
          <p>
            <b>4. Processing Time:</b> Once we receive your request, we will
            process it as quickly as possible.
          </p>
          <br />
          <p>
            <b>‍5. Confirmation:</b> Once your account has been successfully
            deleted, we will send a confirmation email to the address provided.
          </p>
          <br />
          <p>
            <b>‍Important Note: </b>
            Please note that by deleting your Swayze account, you will lose
            access to all your data, including your profile information, posts,
            and any connections you've made on the platform. This action is
            irreversible.If you have any questions or encounter any issues
            during the account deletion process, please don't hesitate to reach
            out to us.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default DeleteAccount;
