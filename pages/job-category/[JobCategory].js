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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function JobsCategory({ jobOffers }) {
  const router = useRouter();
  const jobCategory = router.query.JobCategory;
  if (!jobCategory) {
    return null;
  }
  const filteredJobs = jobOffers.filter(
    (jobOffer) => jobOffer.category.toLowerCase() === jobCategory.toLowerCase()
  );

  return (
    <>
      <JobList jobs={filteredJobs} />
      <StyledButton>
        <StyledLink href="/">Home</StyledLink>
      </StyledButton>
    </>
  );
}
