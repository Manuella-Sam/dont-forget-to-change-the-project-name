import { useState } from "react";
import GlobalStyle from "../styles";
import { JobsDummyData } from "./api/job_offers";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const [jobs, setJobs] = useState(JobsDummyData);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} jobs={jobs} />
      </Layout>
    </>
  );
}
