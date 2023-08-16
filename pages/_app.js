import { useState } from "react";
import GlobalStyle from "../styles";
import { JobsDummyData } from "./api/db";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [jobs, setJobs] = useState(JobsDummyData);
  const { data } = useSWR("/api", fetcher);
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} jobs={jobs} />
    </>
  );
}
