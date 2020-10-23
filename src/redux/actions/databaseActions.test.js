const { pushUserData } = require("./databaseActions");

describe("databaseActions ", () => {
  test("should return the proper object", () => {
    expect(
      pushUserData("Mike799", "longpassword", "test@gmail.com", "Mike", "Gibson")
    ).toEqual({
      payload: {
        userName: "Mike799",
        password: "longpassword",
        email: "test@gmail.com",
        firstName: "Mike",
        lastName: "Gibson",
      },
      type: "PUSH_USER_DATA",
    });
  });

  test("should return a correct object even with only 3 arguments", () => {
    expect(pushUserData("Mike799", "longpassword", "test@gmail.com")).toEqual({
      payload: {
        userName: "Mike799",
        password: "longpassword",
        email: "test@gmail.com",
        firstName: "",
        lastName: "",
      },
      type: "PUSH_USER_DATA",
    });
  });
});
