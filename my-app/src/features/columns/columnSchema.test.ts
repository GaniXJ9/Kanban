import { column } from "./schema";

describe("columnShema", () => {
  it("passes when name is a valid non-empty string", async () => {
    const validData = { name: "To Do" };

    await expect(column.validate(validData)).resolves.toEqual(validData);
  });

  it("fails when name is missing", async () => {
    const invalidData = {};

    await expect(column.validate(invalidData)).rejects.toThrow(
      "Must be filled!"
    );
  });

  it("fails when name is an empty string", async () => {
    const invalidData = { name: "" };

    await expect(column.validate(invalidData)).rejects.toThrow(
      "Must be filled!"
    );
  });
});
