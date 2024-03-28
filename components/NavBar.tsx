import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center bg-gray-900 px-8 py-3">
        <Link className="text-white" href="/">My Notes</Link>
        <Link className="bg-green-600 p-2 text-white" href="/AddNote">Add</Link>
        </nav>
    );
    }