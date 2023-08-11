import styled from "styled-components";
import { JobsDummyData } from "../api/db";
import { useRouter } from "next/router";
import JobList from "../components/JobList";
import Link from "next/link";

const StyledButton = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
  background-color: lightblue;
  color: blue;
`;

export default function JobsCategory({ jobs }) {
  const router = useRouter();
  const jobCategory = router.query.JobCategory;
  if (!jobCategory) {
    return null;
  }
  const filteredJobs = jobs.filter(
    (job) => job.category.toLowerCase() === jobCategory.toLowerCase()
  );

  return (
    <>
      <JobList jobs={filteredJobs} />
      <StyledButton>
        <Link style={{ textDecoration: "none" }} href="/">
          Home
        </Link>
      </StyledButton>
    </>
  );
}
