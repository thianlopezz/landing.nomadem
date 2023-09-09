import Image from "next/image";
import LinkButton from "./components/LinkButton";
import FeatureCard from "./components/FeatureCard";
import Accordion from "./components/Accordion";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col justify-between items-center justify-center min-h-screen bg-blue-100 bg-center bg-no-repeat bg-cover bg-fixed"
        style={{
          // backgroundImage: "url('/pikb28.jpg')",
          // backgroundImage: "url('/tropical-7980005_1920.png')",
          backgroundImage: "url('/hlmb_zo31_121022.jpg')",
          // backgroundImage: "url('/beach-2960959_1920.jpg')",
        }}
      >
        <div className="flex justify-around h-24 w-full">
          <div className="my-auto">
            <Image
              src="/nomadem_logotipo.png"
              alt="Logo Nomadem"
              width="200"
              height="100"
              className=""
            />
          </div>
          <LinkButton
            className="my-auto"
            href="https://app.nomadem.cloud/login"
            target="_system"
            text="Login"
            variant="secondary"
          />
        </div>
        <div className="text-center mt-5">
          <h1 className="text-6xl font-bold text-slate-800 mb-3">Nomadem</h1>
          <h2 className="text-2xl text-slate-600">
            Tu operadora de turismo en la nube
          </h2>
          <hr className="my-3 w-1/3 mx-auto" />
          <p className="my-5 text-lg text-slate-600 px-5 lg:px-0">
            Regístrate gratis y empieza a organizar las reservas de tus clientes desde donde estés.
          </p>
          <LinkButton
            className="mt-4"
            href="https://app.nomadem.cloud/login#registro"
            target="_blank"
            text="Regístrate"
          />
        </div>
        <div className="text-center">
          <Image
            src="/traveler.gif"
            alt="traveler"
            width="200"
            height="100"
            className="h-1/4"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 bg-center bg-no-repeat bg-cover">
        <div className="text-center mt-10 mb-20">
          <h2 className="text-4xl font-bold text-slate-800">¿Cómo funciona?</h2>
          <hr className="my-3 w-1/3 mx-auto border-sky-900" />
          <p className="mt-2 text-lg text-slate-600 px-5 lg:px-0">
            Administra todas tus reservas desde un solo lugar
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 lg:mx-20 mx-10">
          <FeatureCard
            imgSrc="reshot-icon-travel-ZEY6NK3CA2.svg"
            imgHeight={150}
            imgWidth={150}
            title="Gestión de Tours"
            description="Nuestra plataforma te brinda el poder de crear, personalizar y ajustar tus emocionantes tours con unos pocos clics."
          />
          <FeatureCard
            imgSrc="reshot-icon-visa-travel-document-TWNYHS3E42.svg"
            imgHeight={150}
            imgWidth={150}
            title="Gestión de reservas"
            description="Mantén el control total sobre las reservas de tus clientes. Confirma, modifica o reprograma reservas de manera eficiente para garantizar experiencias impecables."
          />
          <FeatureCard
            imgSrc="reshot-icon-schedule-XKRBJ7E6WC.svg"
            imgHeight={150}
            imgWidth={150}
            title="Calendario y disponibilidad"
            description="Con nuestro sistema de calendario en tiempo real, nunca más te preocuparás por conflictos de horarios. Tus tours se mostrarán con disponibilidad actualizada, lo que facilitará la planificación."
          />
        </div>
        <Accordion title="More">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 lg:mx-20 mx-10">
            <FeatureCard
              imgSrc="reshot-icon-partnership-PJAFKGN3E8.svg"
              imgHeight={150}
              imgWidth={150}
              title="Circles"
              description='Simplifica la colaboración y expande tu alcance, permitiendo que otras agencias/hoteles impulsen tus ventas y compartan tus emocionantes tours con sus clientes. Con "Circles", el crecimiento de tu negocio nunca ha sido tan sencillo y efectivo.'
            />
            <FeatureCard
              imgSrc="reshot-icon-connection-3T6VJGAB2X.svg"
              imgHeight={150}
              imgWidth={150}
              title="Gestión de clientes"
              description="La información es poder, y con nuestra plataforma, tendrás una base de datos de clientes a tu alcance para brindar un servicio personalizado que los mantendrá regresando."
            />
            <FeatureCard
              imgSrc="reshot-icon-statistics-MV85XR6QYW.svg"
              imgHeight={150}
              imgWidth={150}
              title="Informes y análisis"
              description="Toma decisiones informadas con nuestros informes y análisis detallados. Evalúa el rendimiento de tus tours y optimiza tu estrategia para maximizar la rentabilidad."
            />
            <FeatureCard
              imgSrc="reshot-icon-check-list-U5GXFYBT6Z.svg"
              imgHeight={125}
              imgWidth={125}
              title="Generación de lista de pasajeros"
              description=" Con solo unos pocos clics, podrás crear listas detalladas de los pasajeros que participarán en cada tour. Ya no tendrás que preocuparte por errores de registro ni perder tiempo recopilando información manualmente."
            />
            <FeatureCard
              imgSrc="reshot-icon-growth-DBFLU2JQGH.svg"
              imgHeight={125}
              imgWidth={125}
              title="Adaptabilidad y escalabilidad"
              description="Piensa en grande. Nuestra plataforma crece contigo, permitiéndote expandir tus ofertas y atender a más clientes sin perder calidad ni eficiencia."
            />
            <FeatureCard
              imgSrc="reshot-icon-customer-support-3SF6V8G5NH.svg"
              imgHeight={150}
              imgWidth={150}
              title="Soporte y asistencia técnica"
              description="No estás solo. Nuestro equipo de asistencia está listo para brindarte ayuda en cualquier momento. ¡Mantén tu operación sin problemas con nuestro respaldo!."
            />
          </div>
        </Accordion>
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-center justify-center h-max bg-sky-900 lg:px-32 px-10 lg:py-28 py-20">
        <div className="mt-10 mb-20 lg:w-2/5 w-full">
          <h2 className="text-3xl font-bold text-sky-200">
            ¿Ya usas una herramienta para tu operadora?
          </h2>
          <hr className="my-4 w-1/3" />
          <p className="mt-2 text-lg text-sky-100">
            Conéctate sin problemas con otras herramientas que utilizas.
            Nuestras integraciones simplifican los procesos y te permiten
            mantener todo bajo control.
          </p>
          <br />
          <LinkButton
            className="mt-10"
            href="https://wa.me/593990901765?text=Hola,%20Nomadem%20tengo%20una%20pregunta"
            target="_system"
            text="Pregúntanos"
            variant="secondary"
          />
        </div>
        <div className="lg:w-3/5 w-full">
          <Image
            src="/reshot-icon-network-connection-V3DXU4J7T2.svg"
            alt="traveler"
            width="300"
            height="300"
            className="m-auto"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 bg-center bg-no-repeat bg-cover">
        <div className="text-center mt-10 mb-20">
          <h2 className="text-3xl font-bold text-slate-800 px-5 lg:px-0">
            Operadoras que ya confían en nosotros
          </h2>
          <hr className="my-3 w-1/3 mx-auto border-sky-900" />
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 lg:mx-20 mx-10">
          <FeatureCard
            imgSrc="/historical.png"
            imgHeight={300}
            imgWidth={300}
            title="Historical Galapagos"
            description="Tour Operator"
          />
          <FeatureCard
            imgSrc="/xcursion.png"
            imgHeight={150}
            imgWidth={150}
            title="Galapagos Xcursion"
            description="Tour Agency"
            url="https://www.galapagosxcursion.com/"
          />
          <FeatureCard
            imgSrc="/dcristhi.png"
            imgHeight={275}
            imgWidth={275}
            title="Grupo D' Cristhi"
            description="Tour Operator & Hotel"
          />
        </div>
      </div>
      {/* <div className="flex p-10 bg-sky-900">
        <div className="mr-5">
          <Image
            src="/nomadem_logotipo_light.png"
            alt="Logo Nomadem"
            width="200"
            height="100"
            className="m-auto"
          />
        </div>
        <div>
          <h6>Links</h6>
          <p>
            <a href="/politica-de-privacidad">Política de privacidad</a>
          </p>
        </div>
      </div> */}
      <footer className="bg-sky-900 text-white py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around">
          {/* <!-- Logo on the left --> */}
          <div className="mb-4 lg:mb-0 lg:w-1/3">
            <Image
              src="/nomadem_logotipo_light.png"
              alt="Logo Nomadem"
              width="200"
              height="100"
              className="m-auto"
            />
          </div>

          {/* <!-- Links columns with a title --> */}
          <div className="flex flex-wrap justify-center lg:justify-between lg:w-2/3 px-5 lg:px-0">
            {/* <!-- Column 1 --> */}
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h4 className="text-xl font-semibold mb-2">Legal</h4>
              <ul>
                <li className="mb-2">
                  <a href="/politica-de-privacidad">Política de privacidad</a>
                </li>
                <li className="mb-2">
                  <a href="/terminos-y-condiciones">Términos y condiciones</a>
                </li>
                {/* <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li> */}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h4 className="text-xl font-semibold mb-2">Otros links</h4>
              <ul>
                <li className="mb-2">
                  <a href="/instrucciones-para-la-eliminacion-de-datos">Instrucciones para la eliminación de datos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
