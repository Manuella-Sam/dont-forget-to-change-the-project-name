import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Link from "next/link";

const URL = `https://arbeitnow.com/api/job-board-api`;

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
