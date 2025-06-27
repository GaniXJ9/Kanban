export default async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/users");
    return await response.json();
  } catch (error) {
    return [];
  }
}
