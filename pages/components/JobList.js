import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Link from "next/link";

const StyledArticle = styled.article`
  border-radius: 20px;
  border: 1px solid lightgrey;
  margin: 5px;
  padding: 10px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

const StyledHeading = styled.h1`
  display: flex;
  text-align: center;
  font-size: 40px;
  color: darkblue;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 27px;
  color: darkblue;
`;

const StyledButton = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 10px;
  margin: 10px;
  background-color: lightblue;
  position: relative;
  bottom: 0px;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function JobList({ jobs }) {
  return (
    <>
      <StyledSection>
        <StyledHeading>Job List</StyledHeading>
        {jobs.map((job) => {
          return (
            <StyledArticle key={uuidv4()}>
              <StyledSpan>
                <p>{job.jobtitle}</p>
              </StyledSpan>
              {job.company}
              {job.location}
              <p>{job.salary}</p>
            </StyledArticle>
          );
        })}
      </StyledSection>
      <StyledButton>
        <StyledLink href="/job-category">Go To Categories</StyledLink>
      </StyledButton>
    </>
  );
}
