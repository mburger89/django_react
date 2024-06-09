export default function TodoItem(props) {
  return (
    <li key={props.id}>
      <h3> {props.title} </h3>
      <p>{props.description}</p>
    </li>
  );
}
