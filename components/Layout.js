import styled from "styled-components";
import Link from "next/link";

const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: teal;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: teal;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavigationList = styled.ul``;

const NavigationListItem = styled.li``;

export default function Layout({ children }) {
  return (
    <>
      <Header>Your App Name</Header>
      <Wrapper>{children}</Wrapper>
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
