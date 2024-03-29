import Remove from "@/app/Remove/page";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

const fetchTitles = async () => {
  try {
    const response = await fetch("https://vercel.com/nimeshs-projects-08600d9c/notes-nimesh/DLzf2XBUYPDrwvaMngafmdVVXVrz/source?f=src%2Fapp%2Fapi%2Ftitles%2Froute.js", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data from the server");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default async function TitleList() {
  const titles = await fetchTitles();
  return (
    <>
      {
        titles.map((t:any) => (
          <div
            key={t._id}
            className="p-4 border border-slate-500 mt-2 flex justify-between gap-6 items-start"
          >
            <div>
              <h1 className="font-bold text-2xl text-black">{t.title}</h1>
              <p>{t.description}</p>
            </div>
            <div className="flex gap-2">
              <Remove id={t._id} />
              <Link href={`/EditNote/${t._id}`}>
                <BiEdit size={30} />
              </Link>
            </div>
          </div>
        ))
      }
    </>
  );
}
