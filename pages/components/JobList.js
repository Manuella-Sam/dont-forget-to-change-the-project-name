export default function JobList({ jobs }) {
  return (
    <ul>
      {jobs.map((job) => {
        return <li>{job.jobtitle}</li>;
      })}
    </ul>
  );
}
