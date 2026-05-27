import useUsers from ".";

describe("useUsers store", () => {
  it("should initialize with currentUser from localStorage", () => {
    const { currentUser } = useUsers.getState();
    const storedUser = localStorage.getItem("currentUser");
    expect(currentUser).toEqual(storedUser ? JSON.parse(storedUser) : null);
  });
});
