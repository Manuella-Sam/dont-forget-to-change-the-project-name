import Link from "next/link";
import { styled } from "styled-components";
import JobList from "../components/JobList";
import { v4 as uuidv4 } from "uuid";
import tailwindConfig from "@/tailwind.config";
import postcssConfig from "@/postcss.config";
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
  color: white;
`;
const StyledSpan = styled.span`
  border-radius: 20px;
  border: 1px lightgrey;
  box-shadow: 1px 1px 2px lightgrey;
  background-color: #c8c8c8;
  margin: 5px;
  padding: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;

  align-items: center;
  font-size: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  webkit-box-pack: center;
  flex-direction: row;
  justify-content: center;
  background-color: white;
`;

const StyledDiv1 = styled.div`
  display: flex;
  text-align: center;
  flex-align: center;
  postion: absolute;
  left: 30px;
`;

const StyledP = styled.p`
  color: white;
`;

const StyledSection = styled.section`
  postion: absolute;
  width: 80 %;
`;

const StyledSpan1 = styled.span``;

export default function createJobcategory() {
  return (
    <StyledDiv>
      <StyledDiv1>
        <StyledSpan>
          <Image
            src="/1.jpg"
            width={400}
            height={200}
            alt="Picture of the author"
          />
          <StyledHeading>Full-Stack</StyledHeading>
          <StyledP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            iaculis, nulla ac convallis rutrum, erat enim porta dui, id lobortis
            ex nulla vel leo.
          </StyledP>
        </StyledSpan>
      </StyledDiv1>

      <div class="card">
        <StyledSpan>
          <Image
            src="/7.jpg"
            width={400}
            height={200}
            alt="Picture of the author"
          />
          <StyledHeading>Front-End</StyledHeading>
          <StyledP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            iaculis, nulla ac convallis rutrum, erat enim porta dui, id lobortis
            ex nulla vel leo.
          </StyledP>
        </StyledSpan>
      </div>
      <div class="card">
        <StyledSpan>
          <Image
            src="/5.jpg"
            width={400}
            height={200}
            alt="Picture of the author"
          />
          <StyledHeading>UX</StyledHeading>
          <StyledP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            iaculis, nulla ac convallis rutrum, erat enim porta dui, id lobortis
            ex nulla vel leo.
          </StyledP>
        </StyledSpan>
      </div>

      <div class="card">
        <StyledSpan>
          <Image
            src="/4.jpg"
            width={400}
            height={200}
            alt="Picture of the author"
          />
          <StyledHeading>Online-Marketing</StyledHeading>
          <StyledP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            iaculis, nulla ac convallis rutrum, erat enim porta dui, id lobortis
            ex nulla vel leo.
          </StyledP>
        </StyledSpan>
      </div>

      <StyledSection>
        <StyledSpan>
          <Image
            src="/3.jpg"
            width={400}
            height={200}
            alt="Picture of the author"
          />
          <StyledHeading>Back-end</StyledHeading>
          <StyledP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            iaculis, nulla ac convallis rutrum, erat enim porta dui, id lobortis
            ex nulla vel leo.
          </StyledP>
        </StyledSpan>
      </StyledSection>
    </StyledDiv>
  );
}
