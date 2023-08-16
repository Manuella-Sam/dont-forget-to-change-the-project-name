import useSWR from "swr";
import { useRouter } from "next/router";

export default function joblist({ jobs }) {
  const router = useRouter;
  return (
    <>
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
    </>
  );
}
