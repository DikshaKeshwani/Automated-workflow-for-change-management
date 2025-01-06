import React, { useEffect, useState } from "react";
import axios from "axios";
const ChangeList = () => {
const [changes, setChanges] = useState([]);
useEffect(() => {
const fetchChanges = async () => {
const response = await axios.get("http://localhost:5000/api/changes");
setChanges(response.data);
};
fetchChanges();
}, []);
const handleStatusUpdate = async (id, status) => {
await axios.put(http://localhost:5000/api/changes/${id}, { status });
window.location.reload();
};
return (
<div>
<h2>Change Requests</h2>
<ul>
{changes.map((change) => (
<li key={change.id}>
<h3>{change.title}</h3>
<p>{change.description}</p>
<p>Status: {change.status}</p>
<button onClick={() => handleStatusUpdate(change.id, "Approved")}>Approve</button>
<button onClick={() => handleStatusUpdate(change.id, "Rejected")}>Reject</button>
</li>
))}
</ul>
</div>
);
};
export default ChangeList;
