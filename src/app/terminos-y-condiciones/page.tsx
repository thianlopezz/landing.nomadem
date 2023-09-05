import Image from "next/image";

export default function Privacy() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Términos y condiciones
      </h1>

      <p className="mb-4 text-justify">¡Bienvenido a Nomadem App!</p>

      <p className="mb-4 text-justify">
        Estos términos y condiciones describen las reglas y regulaciones para el
        uso del sitio web de Nomadem, ubicado en{" "}
        <a href="https://app.nomadem.cloud/" className="text-blue-500">
          https://app.nomadem.cloud/
        </a>
        .
      </p>

      <p className="mb-4 text-justify">
        Al acceder a este sitio web, asumimos que aceptas estos términos y
        condiciones. No continúes usando Nomadem App si no estás de acuerdo con
        todos los términos y condiciones establecidos en esta página.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Cookies:</h2>
      <p className="mb-4 text-justify">
        El sitio web utiliza cookies para ayudar a personalizar tu experiencia
        en línea. Al acceder a Nomadem App, aceptaste utilizar las cookies
        necesarias.
      </p>

      <p className="mb-4 text-justify">
        Una cookie es un archivo de texto que un servidor de páginas web coloca
        en tu disco duro. Las cookies no se pueden utilizar para ejecutar
        programas o enviar virus a tu computadora. Las cookies se te asignan de
        forma exclusiva y solo un servidor web en el dominio que emitió la
        cookie puede leerlas.
      </p>

      <p className="mb-4 text-justify">
        Podemos utilizar cookies para recopilar, almacenar y rastrear
        información con fines estadísticos o de marketing para operar nuestro
        sitio web. Tienes la capacidad de aceptar o rechazar cookies opcionales.
        Hay algunas cookies obligatorias que son necesarias para el
        funcionamiento de nuestro sitio web. Estas cookies no requieren tu
        consentimiento ya que siempre funcionan. Ten en cuenta que al aceptar
        las cookies requeridas, también aceptas las cookies de terceros, que
        podrían usarse a través de servicios proporcionados por terceros si
        utilizas dichos servicios en nuestro sitio web, por ejemplo, una ventana
        de visualización de video proporcionada por terceros e integrada en
        nuestro sitio web.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Licencia:</h2>
      <p className="mb-4 text-justify">
        A menos que se indique lo contrario, Nomadem y/o sus licenciatarios
        poseen los derechos de propiedad intelectual de todo el material en
        Nomadem App. Todos los derechos de propiedad intelectual son reservados.
        Puedes acceder desde Nomadem App para tu uso personal sujeto a las
        restricciones establecidas en estos términos y condiciones.
      </p>

      <ul className="list-disc list-inside pl-4 mb-4">
        <li>
          No debes:
          <ul className="list-disc list-inside pl-4">
            <li>Copiar o volver a publicar material de Nomadem App</li>
            <li>Vender, alquilar o sublicenciar material de Nomadem App</li>
            <li>Reproducir, duplicar o copiar material de Nomadem App</li>
            <li>Redistribuir contenido de Nomadem App</li>
          </ul>
        </li>
      </ul>

      <p className="mb-4 text-justify">Este acuerdo comenzará el fecha presente.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Partes de este sitio web ofrecen a los usuarios la oportunidad de
        publicar e intercambiar opiniones e información en determinadas áreas.
      </h2>
      <p className="mb-4 text-justify">
        Nomadem no filtra, edita, publica ni revisa los comentarios antes de su
        presencia en el sitio web. Los comentarios no reflejan los puntos de
        vista ni las opiniones de Nomadem, sus agentes y/o afiliados. Los
        comentarios reflejan los puntos de vista y opiniones de la persona que
        publica. En la medida en que lo permitan las leyes aplicables, Nomadem
        no será responsable de los comentarios ni de ninguna responsabilidad,
        daños o gastos causados ​​o sufridos como resultado de cualquier uso o
        publicación o apariencia de comentarios en este sitio web.
      </p>

      <p className="mb-4 text-justify">
        Nomadem se reserva el derecho de monitorear todos los comentarios y
        eliminar los que puedan considerarse inapropiados, ofensivos o que
        incumplan estos Términos y Condiciones.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Garantizas y declaras que:
      </h2>
      <ul className="list-disc list-inside pl-4 mb-4">
        <li>
          Tienes derecho a publicar comentarios en nuestro sitio web y tienes
          todas las licencias y consentimientos necesarios para hacerlo;
        </li>
        <li>
          Los comentarios no invaden ningún derecho de propiedad intelectual,
          incluidos, entre otros, los derechos de autor, patentes o marcas
          comerciales de terceros;
        </li>
        <li>
          Los comentarios no contienen ningún material difamatorio, calumnioso,
          ofensivo, indecente o ilegal de otro modo, que sea una invasión de la
          privacidad.
        </li>
        <li>
          Los comentarios no se utilizarán para solicitar o promover negocios o
          actividades comerciales personalizadas o presentes o actividades
          ilegales.
        </li>
      </ul>

      <p className="mb-4 text-justify">
        Por la presente, otorgas a Nomadem una licencia no exclusiva para usar,
        reproducir, editar y autorizar a otros a usar, reproducir y editar
        cualquiera de tus comentarios en todas y cada una de las formas,
        formatos, o medios.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Hipervínculos a nuestro contenido:
      </h2>
      <p className="mb-4 text-justify">
        Las siguientes organizaciones pueden vincularse a nuestro sitio web sin
        aprobación previa por escrito:
      </p>
      <ul className="list-disc list-inside pl-4 mb-4">
        <li>Agencias gubernamentales;</li>
        <li>Motores de búsqueda;</li>
        <li>Organizaciones de noticias;</li>
        <li>
          Los distribuidores de directorios en línea pueden vincularse a nuestro
          sitio web de la misma manera que hacen hipervínculos a los sitios web
          de otras empresas que figuran en la lista; y
        </li>
        <li>
          Empresas acreditadas en todo el sistema, excepto que soliciten
          organizaciones sin fines de lucro, centros comerciales de caridad y
          grupos de recaudación de fondos de caridad que no pueden hacer
          hipervínculos a nuestro sitio web.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Responsabilidad del contenido:
      </h2>
      <p className="mb-4 text-justify">
        No seremos responsables de ningún contenido que aparezca en tu sitio
        web. Aceptas protegernos y defendernos contra todas las reclamaciones
        que se presenten en tu sitio web. Ningún enlace(s) debe aparecer en
        ningún sitio web que pueda interpretarse como difamatorio, obsceno o
        criminal, o que infrinja, de otra manera viole o defienda la infracción
        u otra violación de los derechos de terceros.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Reserva de derechos:</h2>
      <p className="mb-4 text-justify">
        Nos reservamos el derecho de solicitar que elimines todos los enlaces o
        cualquier enlace en particular a nuestro sitio web. Apruebas eliminar de
        inmediato todos los enlaces a nuestro sitio web cuando se solicite.
        También nos reservamos el derecho de modificar estos términos y
        condiciones y su política de enlaces en cualquier momento. Al vincular
        continuamente a nuestro sitio web, aceptas estar vinculado y seguir
        estos términos y condiciones de vinculación.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Eliminación de enlaces de nuestro sitio web:
      </h2>
      <p className="mb-4 text-justify">
        Si encuentras algún enlace en nuestro sitio que sea ofensivo por
        cualquier motivo, puedes contactarnos e informarnos en cualquier
        momento. Consideraremos las solicitudes para eliminar enlaces, pero no
        estamos obligados a hacerlo ni a responder directamente.
      </p>

      <p className="mb-4 text-justify">
        No nos aseguramos de que la información de este sitio web sea correcta.
        No garantizamos su integridad o precisión, ni prometemos asegurarnos de
        que el sitio web permanezca disponible o que el material en el sitio se
        mantenga actualizado.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Exención de responsabilidad:
      </h2>
      <p className="mb-4 text-justify">
        En la medida máxima permitida por la ley aplicable, excluimos todas las
        representaciones, garantías y condiciones relacionadas con nuestro sitio
        web y el uso de este. Nada en este descargo de responsabilidad:
      </p>

      <ul className="list-disc list-inside pl-4 mb-4">
        <li>
          limitará o excluirá nuestra responsabilidad o la tuya por muerte o
          lesiones personales;
        </li>
        <li>
          limitará o excluirá nuestra responsabilidad o la tuya por fraude o
          tergiversación fraudulenta;
        </li>
        <li>
          limitará cualquiera de nuestras responsabilidades o las tuyas de
          cualquier manera que no esté permitida por la ley aplicable; o
        </li>
        <li>
          excluirá cualquiera de nuestras responsabilidades o las tuyas que no
          puedan estar excluidas según la ley aplicable.
        </li>
      </ul>

      <p className="mb-4 text-justify">
        Las limitaciones y prohibiciones de responsabilidad establecidas en esta
        sección y en otras partes de este descargo de responsabilidad: (a) están
        sujetas al párrafo anterior; y (b) regirán todas las responsabilidades
        que surjan en virtud de la exención de responsabilidad, incluidas las
        responsabilidades que surjan en el contrato, en agravio y por
        incumplimiento de la obligación legal.
      </p>

      <p className="mb-4 text-justify">
        Siempre que el sitio web y la información y los servicios en el sitio se
        proporcionen de forma gratuita, no seremos responsables de ninguna
        pérdida o daño de cualquier naturaleza.
      </p>
    </div>
  );
}
