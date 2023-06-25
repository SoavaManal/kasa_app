
export default function Collapse({text, title}) {
  return (
    <div>
        <button>{title}</button>
        <p>{text}</p>
    </div>
  );
}