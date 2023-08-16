import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Link from "next/link";

const URL = `https://arbeitnow.com/api/job-board-api`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const StyledHeading = styled.h1`
  display: flex;
  text-align: center;
  font-size: 40px;
  color: darkblue;
`;
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

const StyledSpan = styled.span`
  font-size: 27px;
  color: darkblue;
`;

export default async function handler(req, res) {
  try {
    // Making an HTTP GET request to the API using fetch
    const response = await fetch(URL);
    const data = await response.json();

    // Returning the fetched data as the API response
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
  return (
    <StyledSection>
      <StyledHeading>Job List</StyledHeading>
      {jobs.map((job) => {
        return (
          <StyledArticle key={uuidv4()}>
            <StyledSpan>
              <p>{job.title}</p>
            </StyledSpan>

            {job.location}
          </StyledArticle>
        );
      })}
    </StyledSection>
  );
}
