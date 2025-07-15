export const getBoards = async () => {
  try {
    const res = await fetch("/api/boards");

    return await res.json();
  } catch (error) {
    return [];
  }
};
