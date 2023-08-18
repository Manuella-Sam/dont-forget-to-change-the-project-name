import { useState } from "react";
import GlobalStyle from "../styles";
import { jobOffersData } from "./api/job_offers";
import { jobSeekingData } from "./api/job_seeking.js";

import Layout from "@/components/Layout";


export default function App({ Component, pageProps }) {
  const [jobOffers, setJobOffers] = useState(jobOffersData);
  const [seekingUsers, setSeekingUsers] = useState(jobSeekingData);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} jobs={jobs} users={users} />
      </Layout>
    </>
  );
}
