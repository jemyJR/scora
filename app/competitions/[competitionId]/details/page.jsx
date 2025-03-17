
// export default function page() {
//   return (
//     <div>
//         Competition Details
//     </div>
//   )
// }

import CompetitionDetails from "./components/CompetitionDetails";
import data from "./data";


export default function page() {
  return (
    <div>
        <CompetitionDetails data={data} />
    </div>
  )
}
