import Image from "next/image";

export default function Privacy() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Instrucciones para la eliminación de datos
      </h1>

      <p className="mb-4 text-justify">
        En concordancia con las regulaciones de Facebook para Apps y sitios web,
        debemos brindarle a los usuarios las instrucciones para eliminar sus
        datos. Si quieres eliminar tu actividad relacionada a Nomadem App, lo
        puedes hacer de la siguiente manera.
      </p>

      <p className="mb-4 text-justify">
        <strong>1.</strong> Ingresa a tu cuenta de Facebook y haz clic en
        &quot;Configuración y privacidad&quot;. Después haz clic en &quot;Configuración&quot;.
      </p>
      <p className="mb-4 text-justify">
        <strong>2.</strong> Ve a la sección de &quot;Apps y sitios web&quot;, aquí podrás
        ver toda tu actividad relacionada a aplicaciones y páginas web
        registradas en tu cuenta de Facebook.
      </p>
      <div className="mb-4 flex">
        <Image
          className="m-auto"
          src="/instrucciones-eliminar-datos-1.png"
          alt="instrucciones-eliminar-datos-1"
          width="900"
          height="100"
        />
      </div>
      <p className="mb-4 text-justify">
        <strong>3.</strong> Selecciona la casilla correspondiente a Nomadem App y haz clic en &quot;Eliminar&quot;.
      </p>
      <div className="mb-4 flex">
        <Image
          className="m-auto"
          src="/instrucciones-eliminar-datos-2.png"
          alt="instrucciones-eliminar-datos-2"
          width="900"
          height="100"
        />
      </div>
      <p className="mb-4 text-justify">
        <strong>3.</strong> Selecciona las casillas de acuerdo a tu preferencia y haz clic en &quot;Eliminar&quot;.
      </p>
      <div className="mb-4 flex">
        <Image
          className="m-auto"
          src="/instrucciones-eliminar-datos-3.png"
          alt="instrucciones-eliminar-datos-3"
          width="900"
          height="100"
        />
      </div>
      <p className="mb-4 text-justify">
        <strong>5.</strong> ¡Listo! Eliminaste Nomadem App de tus actividades de manera exitosa.
      </p>
    </div>
  );
}
