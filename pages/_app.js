import { useState } from "react";
import GlobalStyle from "../styles";
import { JobsDummyData } from "./api/job_offers";
import { jobSeekingData } from "./api/job_seeking.js";

import Layout from "@/components/Layout";

// const jobSeekingData = [
//   {
//     jobtitle: "UX Designer with Development Background",
//     start: "December 2023",
//     salary: "60,000",
//     desc: "I am looking for a job that will meet my expectations",
//     tags: ["Designer", "Developer"],
//   },

export default function App({ Component, pageProps }) {
  const [jobs, setJobs] = useState(JobsDummyData);
  const [users, setUsers] = useState(jobSeekingData);
  console.log("jobSeekingData", jobSeekingData);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} jobs={jobs} users={users} />
      </Layout>
    </>
  );
}
