import styled from "styled-components";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

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

export default function Page({ users }) {
  return (
    <StyledSection>
      <StyledHeading>Users</StyledHeading>
      {users.map((user) => {
        return (
          <StyledArticle key={uuidv4()}>
            <StyledSpan>
              <p>{user.jobtitle}</p>
            </StyledSpan>
            <p>{user.start}</p>
            <p>{user.salary}</p>
            <p>{user.desc}</p>
            <p>{user.tags}</p>
          </StyledArticle>
        );
      })}
    </StyledSection>
  );
}
