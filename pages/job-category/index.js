import Link from "next/link";
import { styled } from "styled-components";
import JobList from "../components/JobList";
import { v4 as uuidv4 } from "uuid";
import tailwindConfig from "@/tailwind.config";
import postcssConfig from "@/postcss.config";

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

const StyledHeading = styled.h1``;
const StyledSpan = styled.span`
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
const StyledSection = styled.section``;

export default function createJobcategory() {
  return (
    <div class="mt 8 grid grid-cols-5">
      <div class="card">
        <StyledSpan>
          <StyledHeading>Full-Stack</StyledHeading>
        </StyledSpan>
      </div>
      <div class="card">
        <StyledSpan>
          <StyledHeading>Front-End</StyledHeading>
        </StyledSpan>
      </div>
      <div class="card">
        <StyledSpan>
          <StyledHeading>UX</StyledHeading>
        </StyledSpan>
      </div>

      <div class="card">
        <StyledSpan>
          <StyledHeading>Online-Marketing</StyledHeading>
        </StyledSpan>
      </div>

      <div class="card">
        <StyledSpan>
          <StyledHeading>Back-end</StyledHeading>
        </StyledSpan>
      </div>
    </div>
  );
}
