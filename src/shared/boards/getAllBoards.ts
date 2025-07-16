export const getAllBoards = async () => {
  try {
    const res = await fetch("http://localhost:3000/boards");

    return await res.json();
  } catch (error) {
    return [];
  }
};
