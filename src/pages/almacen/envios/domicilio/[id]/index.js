import ReturnArrow from "@/Components/ReturnArrow";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Detalles() {
  const router = useRouter();
  const { id } = router.query;

  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("/api/entidades/usuarios")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <>
      <ReturnArrow href="/almacen/envios/domicilio" />
      {users?.map((user, index) => {
        return (
          <div key={index}>
            {user.envios?.map((envio, index) => {
              if (envio.id_envio === id)
                return (
                  <div key={index}>
                    <p>{envio.id_envio}</p>
                    <p>{envio.fecha}</p>
                    <p></p>
                  </div>
                );
            })}
          </div>
        );
      })}
    </>
  );
}
