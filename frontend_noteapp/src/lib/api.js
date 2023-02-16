
export async function getAllNotes() {
  const response = await fetch("http://localhost:8080/api/notes");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch notes.");
  }

  const transformedNotes = [];
  for (const key in data) {
    const noteObj = {
      id: key,
      ...data[key],
    };
    transformedNotes.push(noteObj);
  }
  return transformedNotes;
}

export async function getSingleNote(noteId) {
  const response = await fetch(`http://localhost:8080/api/notes/${noteId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch note.");
  }

  const loadedNote = {
    id: noteId,
    ...data,
  };

  return loadedNote;
}

export async function addNote(noteData) {
  const response = await fetch("http://localhost:8080/api/notes", {
    method: "POST",
    body: JSON.stringify(noteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create new note.");
  }

  return null;
}


export async function deleteNote(noteId) {
  const response = await fetch(`http://localhost:8080/api/notes/${noteId} `, {
    method: "DELETE",
  }).then(() => ({ status: "Delete successful", notes: noteId }));

  console.log(response);
  console.log(noteId);
}


