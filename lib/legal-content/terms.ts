import type { LegalContent } from "./types"

export const termsContent: LegalContent = {
  en: {
    kicker: "Legal",
    title: "Terms of Service",
    intro:
      "These Terms describe the commercial rules that apply when you use the OmniView website or engage OmniView for a project.",
    meta: "Last updated: September 17, 2026",
    tocLabel: "Contents",
    homeLabel: "Home",
    sections: [
      {
        id: "scope",
        heading: "1. About OmniView",
        bodyHtml: `<p>OmniView is operated by <strong>Dominig Williams</strong>, based in Quito, Ecuador. OmniView provides digital design, website and landing-page development, AI and automation systems, growth and marketing-related services, integrations, and related professional services to business and individual clients internationally.</p>
<p>These Terms apply to use of the OmniView website and, unless a written project agreement states otherwise, to services supplied by OmniView. A project-specific proposal, scope, email, WhatsApp confirmation, or other written agreement may add to or override these Terms for that project.</p>`,
      },
      {
        id: "acceptance",
        heading: "2. Acceptance and contracting",
        bodyHtml: `<p>By requesting, approving, purchasing, or using OmniView services, you agree to these Terms and to any written project terms accepted by you. A project may be accepted or confirmed through email or WhatsApp. Electronic communications, checkboxes, electronic signatures, and other lawful electronic acceptance methods may be used.</p>
<p>A person contracting with OmniView must have legal capacity to do so or be authorized to act for the relevant person or organization.</p>`,
      },
      {
        id: "services",
        heading: "3. Services, pricing and quotes",
        bodyHtml: `<p>Service descriptions and public prices are indicative, not fixed quotations. Unless a specific proposal states otherwise:</p>
<ul>
<li><strong>OmniView Growth</strong> may be presented as starting around USD 2,000, but the final price may be lower or higher depending on scope.</li>
<li><strong>OmniView AI</strong> may be presented as starting around USD 5,000, but the final price may be lower or higher depending on scope.</li>
<li><strong>OmniView Partners</strong> is quoted according to the required scope and has no public minimum price at this time.</li>
</ul>
<p>Quotes are valid for <strong>15 calendar days</strong> unless the quote states another period. OmniView may accept or decline a project request before a project is formally accepted.</p>`,
      },
      {
        id: "payments",
        heading: "4. Payments",
        bodyHtml: `<p>Unless otherwise agreed in writing, OmniView may first present an illustrative, non-final mockup or visual direction. The standard payment structure is <strong>50% to proceed with production and 50% after final delivery</strong>. Payment plans are not offered unless a project document expressly states otherwise.</p>
<p>Any taxes, government charges, platform fees, subscriptions, hosting, domains, advertising spend, APIs, AI services, communications services, third-party software, or other external costs are the client's responsibility unless a written proposal expressly includes them.</p>
<p>Amounts requested for payment are due on the stated due date; where no other date is stated, payment is due the same day the payment request is issued. OmniView may suspend services, access, support, or ongoing work while amounts are overdue.</p>`,
      },
      {
        id: "cancellations",
        heading: "5. Cancellations and refunds",
        bodyHtml: `<p>If a client cancels <strong>before OmniView has begun work</strong>, amounts paid for the project will be refunded in full. Once work has begun, the initial payment is non-refundable, except where a written agreement or mandatory law requires otherwise, and the client remains responsible for work already performed.</p>
<p>If a client refuses to continue after a project has been accepted but before work begins, a full refund may be made. No other refund or cancellation right is created except as expressly agreed in writing or required by mandatory law.</p>
<p>If OmniView terminates or cancels an engagement, amounts and outstanding obligations will be handled according to the written project terms and applicable mandatory law. These Terms do not create an additional automatic refund right beyond those requirements.</p>`,
      },
      {
        id: "client",
        heading: "6. Client responsibilities and project timing",
        bodyHtml: `<p>Clients are responsible for supplying accurate information, required access, approvals, content, logos, photographs, text, brand materials, credentials, and other project inputs in a timely manner. The client is responsible for ensuring that materials it provides may lawfully be used.</p>
<p>Delivery dates are estimates and may change when approvals, materials, access, third-party services, or client responses are delayed. Unless another timeframe is agreed for a project, OmniView may request feedback or approval within <strong>5 business days</strong>.</p>
<p>OmniView may pause and reschedule a project when the client becomes inactive. A project with no meaningful client response for <strong>60 consecutive days</strong> may be treated as abandoned and may require a new schedule or updated scope before work resumes.</p>`,
      },
      {
        id: "revisions",
        heading: "7. Revisions and changes in scope",
        bodyHtml: `<p>Unless a proposal states otherwise, projects include up to <strong>three rounds of revisions</strong>. Requests beyond those revisions, requests outside the agreed scope, additional pages, functions, integrations, automation, redesigns, or material changes may be quoted separately before execution.</p>
<p>The project proposal or scope may identify items that are specifically excluded. Anything not reasonably included in the written scope is not automatically included in the project price.</p>`,
      },
      {
        id: "delivery",
        heading: "8. Delivery, warranty and maintenance",
        bodyHtml: `<p>Custom work is delivered according to the agreed scope. OmniView provides a <strong>60-day technical correction period</strong> for reproducible bugs directly attributable to OmniView's delivered work.</p>
<p>This correction period does not cover new functionality, new requests, changes made by the client or third parties, changes to third-party services, unsupported environments, platform or API changes, misuse, content changes, or issues outside the agreed deliverable.</p>
<p>Maintenance, ongoing support, modifications, new features, optimization, or work after the agreed support period is priced separately unless it is included in a written recurring-service agreement.</p>`,
      },
      {
        id: "ip",
        heading: "9. Intellectual property",
        bodyHtml: `<p>After the project has been fully paid, the client receives ownership of custom final deliverables created specifically for that client to the extent stated in the project agreement and permitted by applicable law.</p>
<p>OmniView retains ownership of its pre-existing and reusable materials, including methods, know-how, processes, frameworks, templates, libraries, prompts, internal systems, automation patterns, generic code, reusable components, tools, documentation structures, and other materials not created exclusively for the client.</p>
<p>Third-party software, open-source components, fonts, APIs, services, stock assets, plugins, and other licensed materials remain subject to their respective licenses and terms.</p>
<p>OmniView will only publicly display a completed client project in its portfolio or promotional materials with the client's authorization, which may be given by email or WhatsApp.</p>`,
      },
      {
        id: "confidentiality",
        heading: "10. Confidentiality and subcontractors",
        bodyHtml: `<p>OmniView will treat non-public client information received for a project as confidential and will use it for project delivery and related business administration. OmniView may sign a separate NDA where appropriate.</p>
<p>OmniView may use qualified contractors, collaborators, or specialist providers to perform portions of a project. Where they need access to confidential or personal information, access should be limited to what is reasonably necessary for their role.</p>`,
      },
      {
        id: "ai",
        heading: "11. AI, automation and prohibited use",
        bodyHtml: `<p>AI systems, automated workflows and third-party models may produce incomplete, inaccurate, delayed or unexpected results. OmniView does not guarantee that AI-generated or automated output will always be correct. Clients remain responsible for appropriate human review before relying on outputs for important decisions.</p>
<p>Services must not be used for unlawful activity, fraud, deceptive impersonation, harmful spam, discrimination, deliberate harm to third parties, or other prohibited conduct.</p>`,
      },
      {
        id: "thirdparty",
        heading: "12. Third-party platforms and business results",
        bodyHtml: `<p>OmniView does not control third-party platforms such as hosting providers, advertising networks, search engines, social networks, AI providers, communications providers, CRMs, APIs, payment providers, domain registrars, or software services. Their pricing, availability, algorithms, policies, functionality and APIs may change without OmniView's control.</p>
<p>Unless a written guarantee expressly says otherwise, OmniView does <strong>not</strong> guarantee sales, revenue, profit, leads, conversion rates, search rankings, ROAS, advertising performance, traffic, platform approval, business growth, or any other specific commercial result.</p>`,
      },
      {
        id: "regulated",
        heading: "13. Regulated sectors and professional advice",
        bodyHtml: `<p>Clients are responsible for determining and complying with laws, licensing, disclosures, industry regulations, advertising rules, consumer obligations and professional requirements that apply to their business and use of the deliverables.</p>
<p>OmniView provides technology, design, automation, marketing and related business services. These services do not replace legal, medical, accounting, tax, financial, regulatory, or other licensed professional advice.</p>`,
      },
      {
        id: "chargebacks",
        heading: "14. Payment disputes and chargebacks",
        bodyHtml: `<p>If a payment issue or dispute arises, the client should contact OmniView first at <a href="mailto:dominig.business@gmail.com">dominig.business@gmail.com</a> and make a good-faith attempt to resolve the issue directly. Unjustified chargebacks or payment reversals may result in suspension of services, and OmniView may provide transaction and project records to the relevant payment provider when contesting a dispute.</p>`,
      },
      {
        id: "liability",
        heading: "15. Limitation of liability",
        bodyHtml: `<p>To the maximum extent permitted by applicable law, OmniView will not be liable for indirect, incidental, special, punitive or consequential damages, including lost profits, lost revenue, lost opportunities, loss of goodwill, business interruption or loss of data arising from the services or third-party platforms.</p>
<p>To the maximum extent permitted by law, OmniView's total aggregate liability arising from a specific project or service will not exceed the amount actually paid to OmniView for the specific project or service giving rise to the claim.</p>
<p>Nothing in these Terms excludes liability or consumer rights that cannot lawfully be excluded or limited.</p>`,
      },
      {
        id: "indemnity",
        heading: "16. Client materials and indemnity",
        bodyHtml: `<p>The client is responsible for claims arising from content, trademarks, logos, images, data, instructions, products, services or other materials supplied by the client. To the extent permitted by law, the client agrees to defend, indemnify and hold OmniView harmless from third-party claims resulting from the client's unlawful materials, infringement of third-party rights, or unlawful use of the deliverables.</p>`,
      },
      {
        id: "force",
        heading: "17. Force majeure",
        bodyHtml: `<p>OmniView is not responsible for delay or failure caused by events reasonably outside its control, including natural disasters, war, civil disturbance, government action, telecommunications failures, major internet outages, power failures, labor disruptions, cyber incidents affecting third parties, or failure of critical external platforms and service providers.</p>`,
      },
      {
        id: "disputes",
        heading: "18. Governing law and disputes",
        bodyHtml: `<p>These Terms are governed by the laws of the <strong>Republic of Ecuador</strong>, without prejudice to mandatory consumer or other non-waivable rights that may apply in a client's jurisdiction.</p>
<p>Before filing a court claim, the parties will first attempt in good faith to resolve the dispute through direct negotiation for at least <strong>15 calendar days</strong> after written notice of the dispute.</p>
<p>If no resolution is reached, disputes will be submitted to the competent ordinary courts of <strong>Quito, Ecuador</strong>, to the extent that such forum selection is legally enforceable.</p>`,
      },
      {
        id: "changes",
        heading: "19. Changes to these Terms",
        bodyHtml: `<p>OmniView may update these Terms from time to time. The current version will be posted with its "Last updated" date. Unless mandatory law requires otherwise, updated Terms become effective when published and individual notice is not required. Changes do not retroactively alter a project-specific agreement already accepted unless the parties agree or applicable law requires it.</p>`,
      },
      {
        id: "contact",
        heading: "20. Contact",
        bodyHtml: `<p>Questions about these Terms may be sent to:</p>
<div class="legal-notice"><strong>OmniView — Dominig Williams</strong><br>Quito, Ecuador<br><a href="mailto:dominig.business@gmail.com">dominig.business@gmail.com</a><br>+1 (213) 636-4537</div>`,
      },
    ],
  },
  es: {
    kicker: "Legal",
    title: "Términos de Servicio",
    intro:
      "Estos Términos describen las reglas comerciales aplicables al uso del sitio de OmniView y a la contratación de proyectos y servicios.",
    meta: "Última actualización: 17 de septiembre de 2026",
    tocLabel: "Contenido",
    homeLabel: "Inicio",
    sections: [
      {
        id: "scope",
        heading: "1. Acerca de OmniView",
        bodyHtml: `<p>OmniView es operado por <strong>Dominig Williams</strong>, con domicilio legal en Quito, Ecuador. OmniView presta servicios de diseño digital, desarrollo de páginas web y landing pages, sistemas de inteligencia artificial y automatización, crecimiento y marketing, integraciones y otros servicios profesionales relacionados a clientes empresariales y particulares a nivel internacional.</p>
<p>Estos Términos aplican al uso del sitio web de OmniView y, salvo que un acuerdo escrito de proyecto disponga otra cosa, a los servicios prestados por OmniView. Una propuesta, alcance, correo electrónico, confirmación por WhatsApp u otro acuerdo escrito específico de un proyecto puede complementar o prevalecer sobre estos Términos para ese proyecto.</p>`,
      },
      {
        id: "acceptance",
        heading: "2. Aceptación y contratación",
        bodyHtml: `<p>Al solicitar, aprobar, adquirir o utilizar servicios de OmniView, aceptas estos Términos y las condiciones escritas del proyecto que hayas aceptado. Un proyecto puede aceptarse o confirmarse por correo electrónico o WhatsApp. Podrán utilizarse comunicaciones electrónicas, casillas de aceptación, firmas electrónicas y otros medios de aceptación electrónica legalmente válidos.</p>
<p>La persona que contrate con OmniView debe tener capacidad legal para hacerlo o estar debidamente autorizada para actuar en nombre de la persona u organización correspondiente.</p>`,
      },
      {
        id: "services",
        heading: "3. Servicios, precios y cotizaciones",
        bodyHtml: `<p>Las descripciones de servicios y precios públicos son referenciales y no constituyen cotizaciones fijas. Salvo que una propuesta específica indique otra cosa:</p>
<ul>
<li><strong>OmniView Growth</strong> puede mostrarse desde aproximadamente USD 2.000, pero el precio final puede ser menor o mayor según el alcance.</li>
<li><strong>OmniView AI</strong> puede mostrarse desde aproximadamente USD 5.000, pero el precio final puede ser menor o mayor según el alcance.</li>
<li><strong>OmniView Partners</strong> se cotiza según el alcance requerido y actualmente no tiene un precio mínimo público.</li>
</ul>
<p>Las cotizaciones tienen una vigencia de <strong>15 días calendario</strong>, salvo que indiquen otro plazo. OmniView puede aceptar o rechazar una solicitud de proyecto antes de que exista una aceptación formal.</p>`,
      },
      {
        id: "payments",
        heading: "4. Pagos",
        bodyHtml: `<p>Salvo acuerdo escrito distinto, OmniView puede presentar primero un mockup o dirección visual ilustrativa y no definitiva. La estructura estándar de pago es <strong>50% para continuar con la producción y 50% después de la entrega final</strong>. No se ofrecen planes de pago salvo que un documento del proyecto indique expresamente otra condición.</p>
<p>Los impuestos, tasas gubernamentales, costos de plataformas, suscripciones, hosting, dominios, inversión publicitaria, APIs, servicios de IA, comunicaciones, software de terceros u otros costos externos corren por cuenta del cliente, salvo que una propuesta escrita los incluya expresamente.</p>
<p>Los valores solicitados son exigibles en la fecha indicada; cuando no se indique otra fecha, el pago vence el mismo día en que se emite la solicitud de pago. OmniView puede suspender servicios, accesos, soporte o trabajo en curso mientras existan valores vencidos.</p>`,
      },
      {
        id: "cancellations",
        heading: "5. Cancelaciones y reembolsos",
        bodyHtml: `<p>Si el cliente cancela <strong>antes de que OmniView haya comenzado a trabajar</strong>, los valores pagados por el proyecto se devolverán íntegramente. Una vez iniciado el trabajo, el pago inicial no es reembolsable, salvo que un acuerdo escrito o una norma obligatoria disponga otra cosa, y el cliente seguirá siendo responsable por el trabajo ya ejecutado.</p>
<p>Si el cliente decide no continuar después de aceptar el proyecto pero antes de que se inicie el trabajo, podrá realizarse un reembolso completo. No existe otro derecho de reembolso o cancelación salvo el acordado expresamente por escrito o el exigido por normas obligatorias.</p>
<p>Si OmniView termina o cancela una relación de servicios, los valores y obligaciones pendientes se manejarán conforme a las condiciones escritas del proyecto y la normativa obligatoria aplicable. Estos Términos no crean un derecho automático adicional de reembolso.</p>`,
      },
      {
        id: "client",
        heading: "6. Responsabilidades del cliente y tiempos del proyecto",
        bodyHtml: `<p>El cliente es responsable de proporcionar información correcta, accesos, aprobaciones, contenido, logotipos, fotografías, textos, materiales de marca, credenciales y demás insumos necesarios de manera oportuna. El cliente es responsable de que los materiales que proporciona puedan utilizarse legalmente.</p>
<p>Los plazos de entrega son estimados y pueden variar cuando se retrasan aprobaciones, materiales, accesos, servicios de terceros o respuestas del cliente. Salvo que se acuerde otro plazo para un proyecto, OmniView podrá solicitar comentarios o aprobaciones dentro de <strong>5 días hábiles</strong>.</p>
<p>OmniView puede pausar y reprogramar un proyecto cuando el cliente permanece inactivo. Un proyecto sin respuesta relevante del cliente durante <strong>60 días consecutivos</strong> podrá considerarse abandonado y podrá requerir una nueva planificación o actualización del alcance para reanudarse.</p>`,
      },
      {
        id: "revisions",
        heading: "7. Revisiones y cambios de alcance",
        bodyHtml: `<p>Salvo que la propuesta indique otra cosa, los proyectos incluyen hasta <strong>tres rondas de revisiones</strong>. Las solicitudes posteriores, fuera del alcance acordado, páginas adicionales, funcionalidades, integraciones, automatizaciones, rediseños o cambios sustanciales podrán cotizarse por separado antes de ejecutarse.</p>
<p>La propuesta o alcance puede identificar expresamente elementos no incluidos. Todo aquello que no esté razonablemente comprendido en el alcance escrito no se considera incluido automáticamente en el precio.</p>`,
      },
      {
        id: "delivery",
        heading: "8. Entrega, garantía técnica y mantenimiento",
        bodyHtml: `<p>El trabajo personalizado se entrega conforme al alcance acordado. OmniView ofrece un período de <strong>60 días para correcciones técnicas</strong> de errores reproducibles directamente atribuibles al trabajo entregado por OmniView.</p>
<p>Este período no cubre nuevas funcionalidades, nuevas solicitudes, cambios realizados por el cliente o terceros, modificaciones de servicios externos, entornos no soportados, cambios de plataformas o APIs, uso indebido, cambios de contenido ni situaciones fuera del entregable acordado.</p>
<p>El mantenimiento, soporte continuo, modificaciones, nuevas funciones, optimizaciones o trabajo posterior al período acordado se cotizarán por separado, salvo que formen parte de un servicio recurrente contratado por escrito.</p>`,
      },
      {
        id: "ip",
        heading: "9. Propiedad intelectual",
        bodyHtml: `<p>Una vez que el proyecto haya sido pagado por completo, el cliente recibe la propiedad de los entregables finales personalizados creados específicamente para dicho cliente, en la medida establecida en el acuerdo del proyecto y permitida por la ley aplicable.</p>
<p>OmniView conserva la propiedad de sus materiales preexistentes y reutilizables, incluidos métodos, know-how, procesos, frameworks, plantillas, librerías, prompts, sistemas internos, patrones de automatización, código genérico, componentes reutilizables, herramientas, estructuras documentales y demás materiales que no hayan sido creados exclusivamente para el cliente.</p>
<p>El software de terceros, componentes open source, fuentes, APIs, servicios, recursos de stock, plugins y demás materiales licenciados se mantienen sujetos a sus respectivas licencias y condiciones.</p>
<p>OmniView solo mostrará públicamente un proyecto terminado en su portafolio o materiales promocionales con autorización del cliente, la cual podrá otorgarse por correo electrónico o WhatsApp.</p>`,
      },
      {
        id: "confidentiality",
        heading: "10. Confidencialidad y subcontratistas",
        bodyHtml: `<p>OmniView tratará como confidencial la información no pública recibida para un proyecto y la utilizará para ejecutar el proyecto y administrar la relación comercial. OmniView podrá firmar un NDA independiente cuando corresponda.</p>
<p>OmniView puede utilizar contratistas, colaboradores o proveedores especializados para ejecutar partes de un proyecto. Cuando requieran acceso a información confidencial o datos personales, el acceso deberá limitarse a lo razonablemente necesario para su función.</p>`,
      },
      {
        id: "ai",
        heading: "11. IA, automatización y usos prohibidos",
        bodyHtml: `<p>Los sistemas de IA, flujos automatizados y modelos de terceros pueden producir resultados incompletos, inexactos, tardíos o inesperados. OmniView no garantiza que el contenido generado por IA o automatización sea siempre correcto. El cliente sigue siendo responsable de realizar la revisión humana apropiada antes de utilizar dichos resultados en decisiones importantes.</p>
<p>Los servicios no podrán utilizarse para actividades ilegales, fraude, suplantación engañosa, spam dañino, discriminación, daño deliberado a terceros u otras conductas prohibidas.</p>`,
      },
      {
        id: "thirdparty",
        heading: "12. Plataformas de terceros y resultados comerciales",
        bodyHtml: `<p>OmniView no controla plataformas externas como proveedores de hosting, redes publicitarias, motores de búsqueda, redes sociales, proveedores de IA, servicios de comunicaciones, CRM, APIs, medios de pago, registradores de dominios o software externo. Sus precios, disponibilidad, algoritmos, políticas, funcionalidades y APIs pueden cambiar sin control de OmniView.</p>
<p>Salvo que exista una garantía escrita específica, OmniView <strong>no garantiza</strong> ventas, ingresos, utilidades, leads, tasas de conversión, posiciones SEO, ROAS, rendimiento publicitario, tráfico, aprobación de plataformas, crecimiento comercial ni ningún otro resultado específico.</p>`,
      },
      {
        id: "regulated",
        heading: "13. Sectores regulados y asesoría profesional",
        bodyHtml: `<p>El cliente es responsable de determinar y cumplir las leyes, licencias, avisos, regulaciones de su industria, normas publicitarias, obligaciones de consumo y requisitos profesionales que correspondan a su negocio y al uso de los entregables.</p>
<p>OmniView presta servicios tecnológicos, de diseño, automatización, marketing y negocios relacionados. Estos servicios no sustituyen asesoría legal, médica, contable, tributaria, financiera, regulatoria ni otra asesoría profesional licenciada.</p>`,
      },
      {
        id: "chargebacks",
        heading: "14. Disputas de pago y chargebacks",
        bodyHtml: `<p>Si surge un problema o disputa de pago, el cliente debe contactar primero a OmniView en <a href="mailto:dominig.business@gmail.com">dominig.business@gmail.com</a> e intentar resolver el asunto de buena fe directamente. Los chargebacks o reversos de pago injustificados pueden ocasionar la suspensión de servicios, y OmniView podrá aportar registros de transacciones y del proyecto al proveedor de pagos correspondiente al contestar una disputa.</p>`,
      },
      {
        id: "liability",
        heading: "15. Limitación de responsabilidad",
        bodyHtml: `<p>En la máxima medida permitida por la ley aplicable, OmniView no será responsable por daños indirectos, incidentales, especiales, punitivos o consecuenciales, incluyendo lucro cesante, pérdida de ingresos, oportunidades, reputación, interrupción del negocio o pérdida de datos derivados de los servicios o de plataformas de terceros.</p>
<p>En la máxima medida permitida por la ley, la responsabilidad total acumulada de OmniView respecto de un proyecto o servicio específico no excederá el monto efectivamente pagado a OmniView por el proyecto o servicio que dio origen a la reclamación.</p>
<p>Nada de estos Términos excluye responsabilidades o derechos del consumidor que legalmente no puedan excluirse o limitarse.</p>`,
      },
      {
        id: "indemnity",
        heading: "16. Materiales del cliente e indemnización",
        bodyHtml: `<p>El cliente es responsable por reclamaciones derivadas de contenido, marcas, logos, imágenes, datos, instrucciones, productos, servicios u otros materiales que suministre. En la medida permitida por la ley, el cliente acepta defender, indemnizar y mantener indemne a OmniView frente a reclamaciones de terceros derivadas de materiales ilegales del cliente, infracción de derechos de terceros o uso ilegal de los entregables.</p>`,
      },
      {
        id: "force",
        heading: "17. Fuerza mayor",
        bodyHtml: `<p>OmniView no será responsable por retrasos o incumplimientos ocasionados por eventos razonablemente fuera de su control, incluyendo desastres naturales, guerra, disturbios, actuaciones gubernamentales, fallas de telecomunicaciones, interrupciones importantes de Internet, fallas eléctricas, conflictos laborales, incidentes cibernéticos que afecten a terceros o fallas de plataformas y proveedores externos críticos.</p>`,
      },
      {
        id: "disputes",
        heading: "18. Ley aplicable y disputas",
        bodyHtml: `<p>Estos Términos se rigen por las leyes de la <strong>República del Ecuador</strong>, sin perjuicio de derechos obligatorios de consumidores u otras normas irrenunciables que puedan resultar aplicables en la jurisdicción del cliente.</p>
<p>Antes de presentar una demanda judicial, las partes intentarán de buena fe resolver la disputa mediante negociación directa durante al menos <strong>15 días calendario</strong> desde la notificación escrita de la controversia.</p>
<p>Si no se alcanza una solución, las controversias se someterán a los tribunales ordinarios competentes de <strong>Quito, Ecuador</strong>, en la medida en que dicha elección de foro sea legalmente exigible.</p>`,
      },
      {
        id: "changes",
        heading: "19. Cambios a estos Términos",
        bodyHtml: `<p>OmniView puede actualizar estos Términos periódicamente. La versión vigente se publicará con su fecha de "Última actualización". Salvo que una norma obligatoria exija otro mecanismo, las condiciones actualizadas entran en vigor cuando se publican y no se requiere aviso individual. Los cambios no modifican retroactivamente un acuerdo específico ya aceptado, salvo acuerdo de las partes o exigencia legal.</p>`,
      },
      {
        id: "contact",
        heading: "20. Contacto",
        bodyHtml: `<p>Las preguntas sobre estos Términos pueden enviarse a:</p>
<div class="legal-notice"><strong>OmniView — Dominig Williams</strong><br>Quito, Ecuador<br><a href="mailto:dominig.business@gmail.com">dominig.business@gmail.com</a><br>+1 (213) 636-4537</div>`,
      },
    ],
  },
}
