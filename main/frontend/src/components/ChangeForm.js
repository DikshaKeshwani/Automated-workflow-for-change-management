import React, { useState } from "react";
import axios from "axios";

const ChangeForm = () => {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();
await axios.post("http://localhost:5000/api/changes", { title, description });
setTitle("");
setDescription("");
window.location.reload();
};

return (
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
required
/>
<textarea
placeholder="Description"
value={description}
onChange={(e) => setDescription(e.target.value)}
required
></textarea>
<button type="submit">Add Change</button>
</form>
);
};

export default ChangeForm;
