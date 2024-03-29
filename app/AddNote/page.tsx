"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddNote() {

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Please fill in all fields");
            return;
        }
        try {
            const response = await fetch("http://localhost:3000/api/titles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                
                body: JSON.stringify({ title, description }),
                
            });

            if (response.ok) {
                router.push("/");
                router.refresh();
                
               
               
            }else{
                throw new Error("Failed to add note");
            }

            


        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <form action="" className="flex flex-col gap-3">
            <input
                onChange={(e) =>setTitle(e.target.value)}
                value={title}

                type="text"
                className="border border-slate-400 p-2 px-8 py-2 mt-2"
                placeholder="Title"
            />

            <input
                onChange={(e) =>setDescription(e.target.value)}
                value={description}

                type="text"
                className="border border-slate-400 p-2 px-8 py-2 mt-2"
                placeholder="Add Description"
            />

            <button
                onClick={handleSubmit}
                type="submit"
                className="bg-green-800 text-white p-2  py-5 px-6 w-fit "
            >
                Add Note
            </button>

        </form>
    )
}