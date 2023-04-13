import { useState } from "react";
export default function TableRow({ srn, name, issuer }) {
  let [issueState, setIssueState] = useState("Issued");

  function handleStatusChange() {
    setIssueState("Returned");
  }

  return (
    <tr key={srn}>
      <td>{srn}</td>
      <td>{name}</td>
      <td>{issuer}</td>
      <td>
        {issueState}{" "}
        <button style={{ fontSize: "0.6rem" }} onClick={handleStatusChange}>
          Change Status
        </button>
      </td>
    </tr>
  );
}
