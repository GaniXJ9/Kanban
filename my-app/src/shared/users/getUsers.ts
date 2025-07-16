const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");

    return await response.json();
  } catch (error) {
    return [];
  }
};

export default getUsers;
