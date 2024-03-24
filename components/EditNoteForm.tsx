export default function EditNoteForm() {
    return (
        <form action="" className="flex flex-col gap-3">
            <input
                type="text"
                className="border border-slate-400 p-2 px-8 py-2 mt-2"
                placeholder="Title"
            />

            <input
                type="text"
                className="border border-slate-400 p-2 px-8 py-2 mt-2"
                placeholder="Add Description"
            />

            <button
                type="submit"
                className="bg-green-800 text-white p-2  py-5 px-6 w-fit "
            >
                Update Note
            </button>

        </form>
    )
}
