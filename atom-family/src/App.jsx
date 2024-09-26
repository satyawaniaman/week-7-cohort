import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atoms";
import PropTypes from "prop-types";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const todo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default App;
