import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should setup remove expense action object", () => {
  const actual = removeExpense({ id: "123abc" });
  expect(actual).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("Should setup edit expense action object", () => {
  const actual = editExpense("123abc", { note: "New note value" });
  expect(actual).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "New note value" },
  });
});

test("Should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rend",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent",
  };
  const actual = addExpense(expenseData);
  expect(actual).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test("Should setup add expense action object with default values", () => {
  const actual = addExpense();
  expect(actual).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
    },
  });
});
