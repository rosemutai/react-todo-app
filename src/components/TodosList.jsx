import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
const TodosList = ({ todosProps, handleChange, deleteTodo }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodosList;
