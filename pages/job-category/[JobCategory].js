import { styled } from "styled-components";
import { JobsDummyData } from "../api/db";
import { useRouter } from "next/router";
import JobList from "../components/JobList";

export default function JobsCategory({ jobs }) {
  const router = useRouter();
  const jobCategory = router.query.JobCategory;
  if (!jobCategory) {
    return null;
  }
  const filteredJobs = jobs.filter(
    (job) => job.category.toLowerCase() === jobCategory.toLowerCase()
  );

  console.log(filteredJobs);
  return <JobList jobs={filteredJobs} />;
}
