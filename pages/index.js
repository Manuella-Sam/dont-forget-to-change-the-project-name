import { JobsDummyData } from "@/public/Job.Data";
import { MyListContainer } from "./components/MyListContainer";
// export default function HomePage() {
//   const result = JobsDummyData.filter((item) => item.category === "back-end");
// console.log(result);
//   return (
//     <div>
//       <h1>{result}</h1>
//     </div>
//   );
// }
  
// var newArray = homes.filter(function (el) {
//   return el.price <= 1000 &&
//          el.sqft >= 500 &&
//          el.num_of_beds >=2 &&
//          el.num_of_baths >= 2.5;
// });

export default function Homepage() {
  return (
    <div>
      <MyListContainer/>

    </div>
  )
  }
