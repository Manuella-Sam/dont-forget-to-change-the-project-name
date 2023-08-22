import JobList from "../components/JobList";
import { Cards } from "./_app";

export default function Homepage({ jobOffers }) {
  return (
    <>
      <JobList jobOffers={jobOffers} />
    </>
  );
}
