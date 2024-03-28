"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditNoteForm({ id, title, description}) {

    const[newTitle, setNewTitle] = useState(title);
    const[newDescription, setNewDescription] = useState(description);

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/titles/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                
                body: JSON.stringify({newTitle, newDescription }),
                
            });

            if (response.ok) {
                router.push("/");
                router.refresh(router.asPath);
                
               
               
            }else{
                throw new Error("Failed to update note");
            }

            

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form action="" className="flex flex-col gap-3">
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                type="text"
                className="border border-slate-400 p-2 px-8 py-2 mt-2"
                placeholder="Title"
            />

            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                type="text"
                className="border border-slate-400 p-2 px-8 py-2 mt-2"
                placeholder="Add Description"
            />

            <button
            onClick={handleSubmit}
                type="submit"
                className="bg-green-800 text-white p-2  py-5 px-6 w-fit "
            >
                Update Note
            </button>

        </form>
    )
}
