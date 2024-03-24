import Link from "next/link";
import Remove from "../app/Remove/page";
import { BiEdit, BiTrash } from "react-icons/bi";

export default function Title() {
    return (
        <>
            <div className="p-2 border border-slate-400 mt-2 flex justify-between gap-6 items-start">
                <div>
                    <h1 className="font-bold text-2xl">Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint, asperiores in quam suscipit nobis corrupti esse perspiciatis! Deleniti, delectus necessitatibus nesciunt dolores ullam laudantium consectetur incidunt animi eligendi cupiditate?</p>
                </div>

                <div className="flex gap-2">
                    
                    <Link href="/Remove">
                        <BiTrash size={30} className="text-red-600"/>
                    </Link>

                    <Link href="/EditNote/1">
                        <BiEdit size={30} />
                    </Link>
                </div>
            </div>
        </>
    );
}