import JobList from "./components/JobList";

export default function Homepage({ jobs }) {
  return (
    <>
      <JobList jobs={jobs} />
    </>
  );
}
