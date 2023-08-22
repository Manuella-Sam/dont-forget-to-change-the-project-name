import JobList from "../components/JobList";
import { Cards } from "./_app";

export default function Homepage({ jobs }) {
  return (
    <>
      <JobList jobs={jobs} />
    </>
  );
}
