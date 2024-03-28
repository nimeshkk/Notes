'use client';
import { BiTrash } from "react-icons/bi";

export default function Remove({ id }) {
  const removeTitle = async () => {
    const confirmed = confirm("Are you sure you want to delete this title?");
    if (confirmed) {
      try {
        await fetch(`http://localhost:3000/api/titles?id=${id}`, {
          method: "DELETE",
        });
        
        window.location.reload();
      } catch (error) {
        console.error("Error deleting title:", error);
      }
    }
  };

  return (
    <button className="text-red-500" onClick={removeTitle}>
      <BiTrash size={30} />
    </button>
  );
}