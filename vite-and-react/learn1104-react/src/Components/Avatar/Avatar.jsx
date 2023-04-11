export default function Avatar(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.source} sizes="100px" />
    </div>
  );
}
