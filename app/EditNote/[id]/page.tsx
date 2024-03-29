import EditNoteForm from "@/components/EditNoteForm";

const getTitleById = async (id: any) => {
  try {
    const response = await fetch(`http://localhost:3000/api/titles/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch title");
    }
    return response.json();
  } catch (error) {
    console.error(error);
  
  }
};

export default async function EditNote({ params }: { params: any }) {
  const { id } = params;

  const { titleUpdate } = await getTitleById(id);

  const { title, description } = titleUpdate;
  return <EditNoteForm id={id} title={title} description={description} />;
  
}



