import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Link from "next/link";

const Navigation = styled.nav`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;

  gap: 5 em;
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
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 2px, 2px, 3px, 0;
`;

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5em;
`;

const NavigationListItem = styled.li``;

// const jobSeekingData = [
//   {
//     jobtitle: "UX Designer with Development Background",
//     start: "December 2023",
//     salary: "60,000",
//     desc: "I am looking for a job that will meet my expectations",
//     tags: ["Designer", "Developer"],
//   },

export default function Layout({ children, seekingUsers }) {
  return (
    <>
      <Header>My App Name</Header>
      <Wrapper>{children}</Wrapper>

      <Navigation>
        <NavigationList>
          <NavigationListItem>
            <StyledLink href="/">Job Offers</StyledLink>
            <StyledLink href="/job-category">Categories</StyledLink>
            <StyledLink href="/job-seeking">Users</StyledLink>
          </NavigationListItem>
        </NavigationList>
      </Navigation>
    </>
  );
}
