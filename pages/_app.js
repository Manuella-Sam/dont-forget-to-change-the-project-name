import { useState } from "react";
import GlobalStyle from "../styles";
import { JobsDummyData } from "./api/db";

export default function App({ Component, pageProps }) {
  const [jobs, setJobs] = useState(JobsDummyData);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} jobs={jobs} />
    </>
  );
}
