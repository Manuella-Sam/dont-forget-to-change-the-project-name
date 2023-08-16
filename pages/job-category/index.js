import Link from "next/link";
import styled from "styled-components";
import JobList from "../components/JobList";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

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
  text-align: center;
`;
const StyledBox = styled.div`
  border-radius: 20px;
  border: 1px lightgrey;
  box-shadow: 1px 1px 2px lightgrey;
  background-color: #c8c8c8;
  color: white;
  margin: 5px;
  padding: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  position: relative;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  webkit-box-pack: center;
  flex-direction: row;
  justify-content: center;
  background-color: #FAFEE;
`;

const StyledContainer = styled.div`
  display: flex;
  text-align: center;
  flex-align: center;
`;

const StyledP = styled.p``;

const StyledSection = styled.section`
  postion: absolute;
  width: 80 %;
`;

const StyledButton = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 0px;
  border-color: white;
  margin: 10px;
  background-color: white;
  color: blue;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledHeader = styled.div`
  background-color: #878DA;
  text-align: center;
  width: 2000px;
  height: 500px;
`;

export default function createJobcategory() {
  return (
    <>
      <StyledHeader>
        <Image
          src="/gradient.jpg"
          width={2000}
          height={500}
          alt="bronze background"
        />
        Start your career here
      </StyledHeader>
      <StyledDiv>
        <StyledContainer>
          <StyledBox>
            <Image
              src="/1.jpg"
              width={400}
              height={200}
              alt="Picture of the author"
            />
            <StyledHeading>Full-Stack</StyledHeading>
            <StyledP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse iaculis, nulla ac convallis rutrum, erat enim porta
              dui, id lobortis ex nulla vel leo.
              <StyledButton>
                <StyledLink href="/job-category/Full-Stack">
                  Full-Stack Jobs
                </StyledLink>
              </StyledButton>
            </StyledP>
          </StyledBox>
        </StyledContainer>

        <div class="card">
          <StyledBox>
            <Image
              src="/7.jpg"
              width={400}
              height={200}
              alt="Picture of the author"
            />
            <StyledHeading>Front-End</StyledHeading>
            <StyledP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse iaculis, nulla ac convallis rutrum, erat enim porta
              dui, id lobortis ex nulla vel leo.
              <StyledButton>
                <StyledLink href="/job-category/Front-End">
                  Front-End Jobs
                </StyledLink>
              </StyledButton>
            </StyledP>
          </StyledBox>
        </div>
        <div class="card">
          <StyledBox>
            <Image
              src="/5.jpg"
              width={400}
              height={200}
              alt="Picture of the author"
            />
            <StyledHeading>UX</StyledHeading>
            <StyledP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse iaculis, nulla ac convallis rutrum, erat enim porta
              dui, id lobortis ex nulla vel leo.
              <StyledButton>
                <StyledLink href="/job-category/UX">UX Jobs</StyledLink>
              </StyledButton>
            </StyledP>
          </StyledBox>
        </div>

        <div class="card">
          <StyledBox>
            <Image
              src="/4.jpg"
              width={400}
              height={200}
              alt="Picture of the author"
            />
            <StyledHeading>Online-Marketing</StyledHeading>
            <StyledP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse iaculis, nulla ac convallis rutrum, erat enim porta
              dui, id lobortis ex nulla vel leo.
              <StyledButton>
                <StyledLink href="/job-category/Online-Marketing">
                  Online-Marketing Jobs
                </StyledLink>
              </StyledButton>
            </StyledP>
          </StyledBox>
        </div>

        <StyledSection>
          <StyledBox>
            <Image
              src="/3.jpg"
              width={400}
              height={200}
              alt="Picture of the author"
            />
            <StyledHeading>Back-end</StyledHeading>
            <StyledP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse iaculis, nulla ac convallis rutrum, erat enim porta
              dui, id lobortis ex nulla vel leo.
              <StyledButton>
                <StyledLink href="/job-category/Back-End">
                  Back-End Jobs
                </StyledLink>
              </StyledButton>
            </StyledP>
          </StyledBox>
        </StyledSection>
      </StyledDiv>
      <StyledButton>
        <StyledLink href="/">Home</StyledLink>
      </StyledButton>
    </>
  );
}
