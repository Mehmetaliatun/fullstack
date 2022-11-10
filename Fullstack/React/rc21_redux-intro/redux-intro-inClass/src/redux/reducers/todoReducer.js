import { ADD_TODO } from "../types/todoTypes";

const initialState = {
  todoList: [{ id: new Date().getTime(), text: "Workout", completed: true }],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };

    default:
      return state;
  }
};
export default todoReducer;
