import { JobsDummyData } from "@/public/Job.Data";
export default function HomePage() {
  const result = JobsDummyData.filter((item) => item.category === "back-end");
console.log(result);
  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
}
  