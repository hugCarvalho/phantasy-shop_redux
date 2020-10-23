const { PUSH_USER_DATA } = require("../actions/databaseActions");
const { default: databaseReducer } = require("./databaseReducer");

const addedEntry = {
  userName: "Updated",
  firstName: "",
  lastName: "",
  password: "updated123",
  email: "updated@gmail.com",
};
test("should add users to existing database ", () => {
  const state = {
    userDatabase: [],
  };

  expect(
    databaseReducer(state, {
      type: PUSH_USER_DATA,
      payload: addedEntry,
    })
  ).toEqual({
    userDatabase: [
      {
        userName: "Updated",
        firstName: "",
        lastName: "",
        password: "updated123",
        email: "updated@gmail.com",
      },
    ],
  });
});

test("should return actual state in case of invalid type ", () => {
  const state = {
    userDatabase: [],
  };

  expect(
    databaseReducer(state, {
      type: "invalid type",
      payload: addedEntry,
    })
  ).toEqual({
    userDatabase: [],
  });
});
