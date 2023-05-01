import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
const TodosList = ({ todosProps, handleChange, deleteTodo, setUpdate }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodosList;
