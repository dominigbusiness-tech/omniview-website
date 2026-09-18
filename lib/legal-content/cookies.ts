import type { LegalContent } from "./types"

export const cookiesContent: LegalContent = {
  en: {
    kicker: "Legal",
    title: "Cookie Policy",
    intro: "This policy explains the limited use of cookies and similar browser technologies on the OmniView website.",
    meta: "Last updated: September 17, 2026",
    tocLabel: "Contents",
    homeLabel: "Home",
    sections: [
      {
        id: "overview",
        heading: "1. Overview",
        bodyHtml: `<p>This Cookie Policy explains how OmniView uses cookies and similar technologies on its website. At launch, the site is designed to minimize tracking and does not intentionally use third-party advertising cookies, Meta Pixel, or Google Analytics.</p>`,
      },
      {
        id: "analytics",
        heading: "2. Vercel Web Analytics",
        bodyHtml: `<p>OmniView plans to use <strong>Vercel Web Analytics</strong> for privacy-friendly traffic measurement. The configured Web Analytics service is designed to operate without traditional tracking cookies and is used to understand aggregate information such as page views, traffic sources, device/browser characteristics, and broad geographic trends.</p>
<p>Vercel may also process request and infrastructure metadata needed to operate, secure and deliver the site under its own services and privacy terms.</p>`,
      },
      {
        id: "language",
        heading: "3. Language preference and approximate country",
        bodyHtml: `<p>The site may use Vercel request information to obtain an approximate country code associated with a visitor's public IP address so the site can select an initial English or Spanish experience. OmniView does not use this for precise-location tracking.</p>
<p>If you manually choose a language, the site may store that preference in <strong>local browser storage</strong>. Local storage is similar to a cookie in that it remembers a browser preference, but it is not itself a cookie and is not used by OmniView for advertising.</p>`,
      },
      {
        id: "cookies",
        heading: "4. Cookies currently used",
        bodyHtml: `<p>At launch, OmniView does not intentionally deploy advertising or cross-site behavioral-tracking cookies. Any strictly necessary technologies used by hosting, security, network or browser infrastructure may operate as required for the site and the underlying services.</p>`,
      },
      {
        id: "future",
        heading: "5. Future analytics or advertising tools",
        bodyHtml: `<p>OmniView may later add services such as advertising pixels, conversion tracking, additional analytics, or marketing technologies. Before doing so, this policy will be updated and consent controls will be implemented where required by applicable law.</p>`,
      },
      {
        id: "control",
        heading: "6. Your controls",
        bodyHtml: `<p>You can clear cookies and local browser storage through your browser settings. Clearing local storage may reset your saved language preference. Browser privacy settings may also restrict certain technologies used by websites.</p>`,
      },
      {
        id: "changes",
        heading: "7. Updates",
        bodyHtml: `<p>This Cookie Policy may be updated when the site's technology changes. The current version will be posted with a revised "Last updated" date. Individual notice will be provided only where required by applicable law.</p>`,
      },
      {
        id: "contact",
        heading: "8. Contact",
        bodyHtml: `<p>Questions about cookies or similar technologies may be sent to <a href="mailto:dominig.business@gmail.com">dominig.business@gmail.com</a>.</p>`,
      },
    ],
  },
  es: {
    kicker: "Legal",
    title: "Política de Cookies",
    intro: "Esta política explica el uso limitado de cookies y tecnologías similares del navegador en el sitio web de OmniView.",
    meta: "Última actualización: 17 de septiembre de 2026",
    tocLabel: "Contenido",
    homeLabel: "Inicio",
    sections: [
      {
        id: "overview",
        heading: "1. Descripción general",
        bodyHtml: `<p>Esta Política de Cookies explica cómo OmniView utiliza cookies y tecnologías similares en su sitio web. En el lanzamiento, el sitio está diseñado para minimizar el seguimiento y no utiliza intencionalmente cookies publicitarias de terceros, Meta Pixel ni Google Analytics.</p>`,
      },
      {
        id: "analytics",
        heading: "2. Vercel Web Analytics",
        bodyHtml: `<p>OmniView prevé utilizar <strong>Vercel Web Analytics</strong> para medir tráfico de forma orientada a la privacidad. El servicio configurado está diseñado para funcionar sin cookies tradicionales de seguimiento y se utiliza para comprender información agregada como visitas de páginas, fuentes de tráfico, características generales de dispositivo/navegador y tendencias geográficas amplias.</p>
<p>Vercel también puede procesar metadatos de solicitudes e infraestructura necesarios para operar, proteger y entregar el sitio conforme a sus propios servicios y políticas de privacidad.</p>`,
      },
      {
        id: "language",
        heading: "3. Preferencia de idioma y país aproximado",
        bodyHtml: `<p>El sitio puede utilizar información de la solicitud gestionada por Vercel para obtener el código de país aproximado asociado a la IP pública del visitante y seleccionar inicialmente una experiencia en inglés o español. OmniView no utiliza esta función para rastrear ubicación precisa.</p>
<p>Si eliges manualmente un idioma, el sitio puede guardar esa preferencia en <strong>almacenamiento local del navegador</strong>. Este almacenamiento es similar a una cookie en cuanto recuerda una preferencia, pero no es una cookie y OmniView no lo utiliza con fines publicitarios.</p>`,
      },
      {
        id: "cookies",
        heading: "4. Cookies utilizadas actualmente",
        bodyHtml: `<p>Al momento del lanzamiento, OmniView no implementa intencionalmente cookies publicitarias ni cookies de seguimiento conductual entre sitios. Las tecnologías estrictamente necesarias que utilicen el hosting, la seguridad, la red o la infraestructura del navegador pueden operar cuando sean necesarias para el funcionamiento del sitio y los servicios subyacentes.</p>`,
      },
      {
        id: "future",
        heading: "5. Herramientas futuras de analítica o publicidad",
        bodyHtml: `<p>OmniView puede incorporar posteriormente píxeles publicitarios, seguimiento de conversiones, analítica adicional u otras tecnologías de marketing. Antes de hacerlo, esta política se actualizará y se implementarán controles de consentimiento cuando la normativa aplicable lo exija.</p>`,
      },
      {
        id: "control",
        heading: "6. Tus controles",
        bodyHtml: `<p>Puedes borrar cookies y almacenamiento local desde la configuración de tu navegador. Al borrar el almacenamiento local puede perderse la preferencia de idioma guardada. Las opciones de privacidad del navegador también pueden restringir determinadas tecnologías utilizadas por los sitios web.</p>`,
      },
      {
        id: "changes",
        heading: "7. Actualizaciones",
        bodyHtml: `<p>Esta Política de Cookies puede actualizarse cuando cambie la tecnología del sitio. La versión vigente se publicará con una nueva fecha de "Última actualización". Solo se proporcionará aviso individual cuando la normativa aplicable lo exija.</p>`,
      },
      {
        id: "contact",
        heading: "8. Contacto",
        bodyHtml: `<p>Las preguntas sobre cookies o tecnologías similares pueden enviarse a <a href="mailto:dominig.business@gmail.com">dominig.business@gmail.com</a>.</p>`,
      },
    ],
  },
}
