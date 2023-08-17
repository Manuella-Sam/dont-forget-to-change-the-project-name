import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Link from "next/link";

const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;

  gap: 1 em;
  background-color: lightblue;
  color: white;
`;

const Wrapper = styled.div`
  gap: 1.5em;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: lightblue;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;

  gap: 1.5em;
`;

const NavigationList = styled.ul``;

const NavigationListItem = styled.li``;

// const jobSeekingData = [
//   {
//     jobtitle: "UX Designer with Development Background",
//     start: "December 2023",
//     salary: "60,000",
//     desc: "I am looking for a job that will meet my expectations",
//     tags: ["Designer", "Developer"],
//   },

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

export default function Layout({ children, users }) {
  return (
    <>
      <Header>My App Name</Header>
      <Wrapper>{children}</Wrapper>

      <StyledSection>
        <StyledHeading>Job List</StyledHeading>
        {users.map((user) => {
          return (
            <StyledArticle key={uuidv4()}>
              <StyledSpan>
                <p>{users.jobtitle}</p>
              </StyledSpan>
              {users.start}
              {users.salary}
              {users.description}
              <p>{users.tags}</p>
            </StyledArticle>
          );
        })}
      </StyledSection>

      <Navigation>
        <NavigationList>
          <NavigationListItem>
            <StyledLink href="/job-seeking">Job Seeking</StyledLink>
            <StyledLink href="/">Job Offers</StyledLink>
            <StyledLink href="/job-category">Categories</StyledLink>
          </NavigationListItem>
        </NavigationList>
      </Navigation>
    </>
  );
}
