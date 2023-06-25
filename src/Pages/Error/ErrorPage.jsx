import { Link } from "react-router-dom"
export default function ErrorPage() {
  return (
  <div>
    <h2>404</h2>
    <h3>Oups! La page que vous demandez n'éxiste pas.</h3>
    <Link to={"/"}>
      Retourner sur la page d'accueil
    </Link>
  </div>
  );
}
