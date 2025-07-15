const getUsers = async () => {
  try {
    const response = await fetch("/api/users");

    return await response.json();
  } catch (error) {
    return [];
  }
};

export default getUsers;
