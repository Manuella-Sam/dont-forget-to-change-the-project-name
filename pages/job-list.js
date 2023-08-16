import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "@/utils/fetcher";
import { v4 as uuidv4 } from "uuid";

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

export default function joblist({ data }) {
  const router = useRouter();
  const { slug: websiteSlug } = router.query;
  data = useSWR(
    `https://arbeitnow.com/api/job-board-api${websiteSlug}`,
    fetcher
  );

  return (
    <>
      <StyledSection>
        <StyledHeading>Job List</StyledHeading>
        {datas.map((data) => {
          return (
            <StyledArticle key={uuidv4()}>
              <StyledSpan>
                <p>{data.title}</p>
              </StyledSpan>

              {data.location}
            </StyledArticle>
          );
        })}
      </StyledSection>
      s
      <StyledButton>
        <StyledLink href="/job-category">Go To Categories</StyledLink>
      </StyledButton>
    </>
  );
}
