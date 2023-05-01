import { useRouter } from "next/router";
export default function Detalles() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Aca vamos a ver los detalles del envío n°: {id}</h1>;
}
