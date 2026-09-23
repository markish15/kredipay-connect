export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  eyebrow: string;
  title: string;
  updated: string;
  sections: LegalSection[];
};

type LegalLocale = {
  terms: LegalDocument;
  privacy: LegalDocument;
};

export const legalContent: Record<'es' | 'en' | 'pt', LegalLocale> = {
  es: {
    terms: {
      eyebrow: 'Información legal',
      title: 'Términos y Condiciones de Uso del Sitio Web',
      updated: 'Última actualización: 23 de septiembre de 2026',
      sections: [
        {
          title: '1. Identidad y aceptación',
          paragraphs: [
            'El sitio web disponible en www.kredibilitypay.com (el “Sitio”) es operado por KredibilityPay, S.A. de C.V., que utiliza la marca KredibilityPay (“KredibilityPay”, “nosotros” o “nuestro”).',
            'Al acceder o utilizar el Sitio, la persona usuaria acepta estos Términos y Condiciones. Si no está de acuerdo, deberá abstenerse de utilizarlo.',
          ],
        },
        {
          title: '2. Objeto del Sitio',
          paragraphs: [
            'El Sitio presenta información sobre KredibilityPay, sus servicios y los medios para ponerse en contacto con la empresa. La descripción vigente de los servicios se encuentra en las secciones correspondientes del Sitio.',
            'La información publicada tiene carácter general e informativo. El envío de una consulta, solicitud de contacto o formulario no constituye por sí mismo una contratación, aprobación o garantía de prestación de servicios. La prestación de servicios a un comercio, en su caso, estará sujeta a la evaluación correspondiente y a la aceptación de los acuerdos que se celebren por separado.',
          ],
        },
        {
          title: '3. Uso permitido',
          paragraphs: ['La persona usuaria se compromete a utilizar el Sitio de manera lícita y a no:'],
          bullets: [
            'Utilizarlo para cometer o facilitar actos ilícitos.',
            'Intentar acceder sin autorización a sistemas, cuentas o información.',
            'Interferir con el funcionamiento, seguridad o disponibilidad del Sitio.',
            'Introducir código malicioso o realizar actividades que puedan afectar a otras personas usuarias.',
            'Enviar información falsa, engañosa o que no tenga autorización para proporcionar.',
          ],
        },
        {
          title: '4. Formularios de contacto',
          paragraphs: ['Al utilizar formularios de contacto, la persona usuaria debe proporcionar información veraz y actualizada. No debe incluir contraseñas, datos de tarjetas, credenciales de acceso, información bancaria sensible ni documentación confidencial en formularios de contacto generales.'],
        },
        {
          title: '5. Propiedad intelectual',
          paragraphs: ['Los contenidos del Sitio, incluidos textos, marcas, logotipos, diseños, gráficos y materiales, pertenecen a KredibilityPay o se utilizan con autorización de sus titulares. No se permite copiarlos, modificarlos, distribuirlos o utilizarlos comercialmente sin autorización previa, salvo cuando la ley lo permita.'],
        },
        {
          title: '6. Información y disponibilidad',
          paragraphs: [
            'KredibilityPay procura mantener la información del Sitio actualizada y disponible. El contenido puede modificarse, actualizarse o retirarse. El Sitio también puede experimentar interrupciones por mantenimiento, cuestiones técnicas u otras causas.',
            'La información del Sitio no constituye asesoría legal, fiscal, financiera ni de inversión, y no debe utilizarse como sustituto de asesoría profesional.',
          ],
        },
        {
          title: '7. Enlaces a sitios de terceros',
          paragraphs: ['El Sitio puede incluir enlaces a páginas de terceros. KredibilityPay no controla esos sitios ni es responsable de sus contenidos, servicios o políticas. El acceso a ellos queda sujeto a las condiciones y avisos publicados por sus respectivos titulares.'],
        },
        {
          title: '8. Privacidad',
          paragraphs: ['El tratamiento de los datos personales que se recopilen a través del Sitio se rige por el Aviso de Privacidad publicado en /aviso-de-privacidad.'],
        },
        {
          title: '9. Cambios a estos Términos',
          paragraphs: ['KredibilityPay podrá actualizar estos Términos. La versión vigente estará disponible en el Sitio e indicará su fecha de última actualización. El uso del Sitio después de la publicación de cambios implica que la persona usuaria consulta y acepta la versión vigente.'],
        },
        {
          title: '10. Legislación aplicable y contacto',
          paragraphs: [
            'Estos Términos se rigen por las leyes aplicables de los Estados Unidos Mexicanos. Cualquier controversia se resolverá ante las autoridades competentes conforme a la legislación aplicable.',
            'Para consultas sobre el Sitio, escribe a sales@kredibilitypay.com.',
          ],
        },
      ],
    },
    privacy: {
      eyebrow: 'Privacidad',
      title: 'Aviso de Privacidad Integral',
      updated: 'Última actualización: 23 de septiembre de 2026',
      sections: [
        {
          title: '1. Responsable',
          paragraphs: [
            'KredibilityPay, S.A. de C.V., que utiliza la marca KredibilityPay y está registrada en los Estados Unidos Mexicanos, es responsable del tratamiento de los datos personales recabados a través de www.kredibilitypay.com.',
            'Para consultas sobre privacidad o para ejercer derechos sobre tus datos, puedes escribir a sales@kredibilitypay.com.',
          ],
        },
        {
          title: '2. Datos personales que podemos recabar',
          paragraphs: ['Cuando una persona utiliza el formulario o los medios de contacto del Sitio, podemos recabar los datos que proporciona directamente:'],
          bullets: ['Nombre completo.', 'Correo electrónico corporativo.', 'Empresa.', 'Volumen mensual estimado.', 'Contenido de la consulta o mensaje.'],
        },
        {
          title: '3. Información que no debe enviarse',
          paragraphs: ['No envíes por los formularios de contacto datos personales sensibles, contraseñas, números completos de tarjetas, credenciales de acceso, información bancaria sensible ni documentación confidencial. El Sitio no solicita esa información a través de sus formularios generales.'],
        },
        {
          title: '4. Finalidades del tratamiento',
          paragraphs: ['Utilizaremos los datos únicamente para las siguientes finalidades necesarias:'],
          bullets: [
            'Atender preguntas, solicitudes y mensajes.',
            'Comunicarnos con representantes de empresas que soliciten información.',
            'Dar seguimiento a consultas comerciales.',
            'Mantener registros de las comunicaciones.',
            'Proteger la seguridad y el funcionamiento del Sitio.',
            'Cumplir obligaciones legales aplicables.',
          ],
        },
        {
          title: '5. Transferencias y proveedores de servicios',
          paragraphs: [
            'KredibilityPay puede permitir que proveedores que prestan servicios necesarios para operar el Sitio o atender consultas traten datos personales bajo instrucciones de KredibilityPay y para los fines descritos en este Aviso. Estos servicios pueden incluir alojamiento del Sitio, correo electrónico, gestión de consultas, seguridad y soporte técnico.',
            'Los datos pueden ser almacenados o procesados fuera de México por dichos proveedores, de conformidad con las medidas y requisitos legales aplicables. También podrán comunicarse a autoridades competentes cuando lo requiera una disposición legal o una solicitud válida de autoridad.',
          ],
        },
        {
          title: '6. Conservación y seguridad',
          paragraphs: [
            'Conservaremos los datos personales durante el tiempo necesario para atender la finalidad para la que fueron recabados y cumplir las obligaciones legales aplicables. Después, se eliminarán o dejarán de estar disponibles para su uso, de acuerdo con los procesos y plazos que correspondan.',
            'KredibilityPay adopta medidas administrativas, técnicas y físicas razonables para proteger los datos personales contra daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizado.',
          ],
        },
        {
          title: '7. Derechos sobre tus datos',
          paragraphs: [
            'La persona titular puede solicitar acceso a sus datos personales, su rectificación cuando sean inexactos o incompletos, su cancelación cuando legalmente proceda, u oponerse a su tratamiento (derechos ARCO). También puede solicitar la revocación del consentimiento cuando corresponda o limitar el uso o divulgación de sus datos.',
            'Para presentar una solicitud, escribe a sales@kredibilitypay.com e incluye:',
          ],
          bullets: [
            'Nombre de la persona titular y medio para recibir respuesta.',
            'Una descripción clara de los datos y del derecho que desea ejercer.',
            'Documentos que acrediten identidad y, si aplica, representación legal.',
            'Cualquier información que ayude a localizar los datos.',
          ],
        },
        {
          title: '8. Procedimiento de respuesta',
          paragraphs: ['KredibilityPay responderá conforme a los plazos y procedimientos previstos por la legislación aplicable. Si la solicitud está incompleta o se necesita información adicional para verificar la identidad, se podrá solicitar la información necesaria.'],
        },
        {
          title: '9. Cookies y tecnologías similares',
          paragraphs: ['El Sitio no utiliza cookies ni tecnologías similares para fines de análisis, publicidad o seguimiento.'],
        },
        {
          title: '10. Cambios al Aviso',
          paragraphs: ['KredibilityPay podrá actualizar este Aviso para reflejar cambios en el Sitio, en el tratamiento de datos o en la legislación aplicable. La versión vigente estará disponible en www.kredibilitypay.com/aviso-de-privacidad, con la fecha de su última actualización.'],
        },
        {
          title: '11. Contacto',
          paragraphs: ['Para preguntas sobre este Aviso o sobre el tratamiento de datos personales, escribe a sales@kredibilitypay.com.'],
        },
      ],
    },
  },
  en: {
    terms: {
      eyebrow: 'Legal information',
      title: 'Website Terms and Conditions of Use',
      updated: 'Last updated: September 23, 2026',
      sections: [
        { title: '1. Identity and acceptance', paragraphs: ['The website available at www.kredibilitypay.com (the “Site”) is operated by KredibilityPay, S.A. de C.V., which uses the KredibilityPay brand (“KredibilityPay,” “we,” “us,” or “our”).', 'By accessing or using the Site, the user accepts these Terms and Conditions. If the user does not agree, they must refrain from using it.'] },
        { title: '2. Purpose of the Site', paragraphs: ['The Site provides information about KredibilityPay, its services, and ways to contact the company. The current description of the services is available in the relevant sections of the Site.', 'The information published is general and informational. Submitting an inquiry, contact request, or form does not in itself constitute a contract, approval, or guarantee that services will be provided. Any provision of services to a merchant will be subject to the relevant assessment and acceptance of separate agreements.'] },
        { title: '3. Permitted use', paragraphs: ['Users agree to use the Site lawfully and not to:'], bullets: ['Use it to commit or facilitate unlawful acts.', 'Attempt to access systems, accounts, or information without authorization.', 'Interfere with the operation, security, or availability of the Site.', 'Introduce malicious code or conduct activities that may affect other users.', 'Submit false or misleading information, or information they are not authorized to provide.'] },
        { title: '4. Contact forms', paragraphs: ['When using contact forms, users must provide truthful and current information. They must not include passwords, card data, access credentials, sensitive banking information, or confidential documents in general contact forms.'] },
        { title: '5. Intellectual property', paragraphs: ['The Site content, including text, trademarks, logos, designs, graphics, and materials, belongs to KredibilityPay or is used with authorization from its owners. It may not be copied, modified, distributed, or used commercially without prior authorization, except where permitted by law.'] },
        { title: '6. Information and availability', paragraphs: ['KredibilityPay seeks to keep the Site information current and available. Content may be modified, updated, or removed. The Site may also experience interruptions due to maintenance, technical issues, or other causes.', 'Information on the Site does not constitute legal, tax, financial, or investment advice and should not replace professional advice.'] },
        { title: '7. Third-party links', paragraphs: ['The Site may include links to third-party websites. KredibilityPay does not control those sites and is not responsible for their content, services, or policies. Access is subject to the terms and notices published by their respective owners.'] },
        { title: '8. Privacy', paragraphs: ['The processing of personal data collected through the Site is governed by the Privacy Notice published at /aviso-de-privacidad.'] },
        { title: '9. Changes to these Terms', paragraphs: ['KredibilityPay may update these Terms. The current version will be available on the Site and will state its last-updated date. Use of the Site after changes are published means the user has reviewed and accepts the current version.'] },
        { title: '10. Governing law and contact', paragraphs: ['These Terms are governed by the applicable laws of the United Mexican States. Any dispute will be resolved by the competent authorities in accordance with applicable law.', 'For questions about the Site, email sales@kredibilitypay.com.'] },
      ],
    },
    privacy: {
      eyebrow: 'Privacy',
      title: 'Comprehensive Privacy Notice',
      updated: 'Last updated: September 23, 2026',
      sections: [
        { title: '1. Data controller', paragraphs: ['KredibilityPay, S.A. de C.V., which uses the KredibilityPay brand and is registered in the United Mexican States, is responsible for processing personal data collected through www.kredibilitypay.com.', 'For privacy questions or to exercise rights over your data, email sales@kredibilitypay.com.'] },
        { title: '2. Personal data we may collect', paragraphs: ['When a person uses the Site contact form or contact channels, we may collect the information they provide directly:'], bullets: ['Full name.', 'Corporate email address.', 'Company.', 'Estimated monthly volume.', 'The content of the inquiry or message.'] },
        { title: '3. Information you should not submit', paragraphs: ['Do not submit sensitive personal data, passwords, full card numbers, access credentials, sensitive banking information, or confidential documents through contact forms. The Site does not request this information through its general forms.'] },
        { title: '4. Purposes of processing', paragraphs: ['We will use the data only for the following necessary purposes:'], bullets: ['Respond to questions, requests, and messages.', 'Communicate with company representatives requesting information.', 'Follow up on commercial inquiries.', 'Maintain communication records.', 'Protect the security and operation of the Site.', 'Comply with applicable legal obligations.'] },
        { title: '5. Transfers and service providers', paragraphs: ['KredibilityPay may allow providers of services required to operate the Site or respond to inquiries to process personal data under KredibilityPay’s instructions and for the purposes described in this Notice. These services may include Site hosting, email, inquiry management, security, and technical support.', 'Data may be stored or processed outside Mexico by these providers, subject to applicable legal safeguards and requirements. It may also be disclosed to competent authorities when required by law or a valid authority request.'] },
        { title: '6. Retention and security', paragraphs: ['We will retain personal data for as long as necessary to fulfill the purpose for which it was collected and to comply with applicable legal obligations. It will then be deleted or made unavailable for use in accordance with the relevant processes and time periods.', 'KredibilityPay adopts reasonable administrative, technical, and physical measures to protect personal data against damage, loss, alteration, destruction, or unauthorized use, access, or processing.'] },
        { title: '7. Your data rights', paragraphs: ['Data subjects may request access to their personal data, correction when it is inaccurate or incomplete, cancellation where legally appropriate, or object to its processing (ARCO rights). They may also request withdrawal of consent where applicable or limit the use or disclosure of their data.', 'To submit a request, email sales@kredibilitypay.com and include:'], bullets: ['The data subject’s name and a means of receiving a response.', 'A clear description of the data and the right they wish to exercise.', 'Documents proving identity and, where applicable, legal representation.', 'Any information that may help locate the data.'] },
        { title: '8. Response procedure', paragraphs: ['KredibilityPay will respond within the time limits and according to the procedures established by applicable law. If the request is incomplete or additional information is needed to verify identity, the necessary information may be requested.'] },
        { title: '9. Cookies and similar technologies', paragraphs: ['The Site does not use cookies or similar technologies for analytics, advertising, or tracking purposes.'] },
        { title: '10. Changes to this Notice', paragraphs: ['KredibilityPay may update this Notice to reflect changes to the Site, data processing, or applicable law. The current version will be available at www.kredibilitypay.com/aviso-de-privacidad and will state its last-updated date.'] },
        { title: '11. Contact', paragraphs: ['For questions about this Notice or the processing of personal data, email sales@kredibilitypay.com.'] },
      ],
    },
  },
  pt: {
    terms: {
      eyebrow: 'Informações legais',
      title: 'Termos e Condições de Uso do Site',
      updated: 'Última atualização: 23 de setembro de 2026',
      sections: [
        { title: '1. Identidade e aceitação', paragraphs: ['O site disponível em www.kredibilitypay.com (o “Site”) é operado pela KredibilityPay, S.A. de C.V., que utiliza a marca KredibilityPay (“KredibilityPay”, “nós” ou “nosso”).', 'Ao acessar ou utilizar o Site, a pessoa usuária aceita estes Termos e Condições. Caso não concorde, deverá se abster de utilizá-lo.'] },
        { title: '2. Objetivo do Site', paragraphs: ['O Site apresenta informações sobre a KredibilityPay, seus serviços e os meios de entrar em contato com a empresa. A descrição vigente dos serviços encontra-se nas seções correspondentes do Site.', 'As informações publicadas são gerais e informativas. O envio de uma consulta, solicitação de contato ou formulário não constitui, por si só, contratação, aprovação ou garantia de prestação de serviços. A eventual prestação de serviços a um estabelecimento estará sujeita à avaliação correspondente e à aceitação de acordos celebrados separadamente.'] },
        { title: '3. Uso permitido', paragraphs: ['A pessoa usuária se compromete a utilizar o Site de forma lícita e a não:'], bullets: ['Utilizá-lo para cometer ou facilitar atos ilícitos.', 'Tentar acessar sistemas, contas ou informações sem autorização.', 'Interferir no funcionamento, segurança ou disponibilidade do Site.', 'Introduzir código malicioso ou realizar atividades que possam afetar outras pessoas usuárias.', 'Enviar informações falsas, enganosas ou que não esteja autorizada a fornecer.'] },
        { title: '4. Formulários de contato', paragraphs: ['Ao utilizar formulários de contato, a pessoa usuária deve fornecer informações verdadeiras e atualizadas. Não deve incluir senhas, dados de cartões, credenciais de acesso, informações bancárias sensíveis ou documentos confidenciais nos formulários gerais de contato.'] },
        { title: '5. Propriedade intelectual', paragraphs: ['Os conteúdos do Site, incluindo textos, marcas, logotipos, designs, gráficos e materiais, pertencem à KredibilityPay ou são utilizados com autorização de seus titulares. Não é permitido copiá-los, modificá-los, distribuí-los ou utilizá-los comercialmente sem autorização prévia, salvo quando permitido por lei.'] },
        { title: '6. Informações e disponibilidade', paragraphs: ['A KredibilityPay procura manter as informações do Site atualizadas e disponíveis. O conteúdo pode ser modificado, atualizado ou removido. O Site também pode sofrer interrupções por manutenção, questões técnicas ou outras causas.', 'As informações do Site não constituem aconselhamento jurídico, fiscal, financeiro ou de investimento e não devem substituir aconselhamento profissional.'] },
        { title: '7. Links para sites de terceiros', paragraphs: ['O Site pode incluir links para páginas de terceiros. A KredibilityPay não controla esses sites nem é responsável por seus conteúdos, serviços ou políticas. O acesso está sujeito aos termos e avisos publicados por seus respectivos titulares.'] },
        { title: '8. Privacidade', paragraphs: ['O tratamento dos dados pessoais coletados por meio do Site é regido pelo Aviso de Privacidade publicado em /aviso-de-privacidad.'] },
        { title: '9. Alterações destes Termos', paragraphs: ['A KredibilityPay poderá atualizar estes Termos. A versão vigente estará disponível no Site e indicará a data de sua última atualização. O uso do Site após a publicação de alterações implica que a pessoa usuária consultou e aceitou a versão vigente.'] },
        { title: '10. Legislação aplicável e contato', paragraphs: ['Estes Termos são regidos pelas leis aplicáveis dos Estados Unidos Mexicanos. Qualquer controvérsia será resolvida pelas autoridades competentes de acordo com a legislação aplicável.', 'Para consultas sobre o Site, escreva para sales@kredibilitypay.com.'] },
      ],
    },
    privacy: {
      eyebrow: 'Privacidade',
      title: 'Aviso de Privacidade Integral',
      updated: 'Última atualização: 23 de setembro de 2026',
      sections: [
        { title: '1. Responsável', paragraphs: ['KredibilityPay, S.A. de C.V., que utiliza a marca KredibilityPay e está registrada nos Estados Unidos Mexicanos, é responsável pelo tratamento dos dados pessoais coletados por meio de www.kredibilitypay.com.', 'Para consultas sobre privacidade ou para exercer direitos sobre seus dados, escreva para sales@kredibilitypay.com.'] },
        { title: '2. Dados pessoais que podemos coletar', paragraphs: ['Quando uma pessoa utiliza o formulário ou os meios de contato do Site, podemos coletar os dados fornecidos diretamente:'], bullets: ['Nome completo.', 'E-mail corporativo.', 'Empresa.', 'Volume mensal estimado.', 'Conteúdo da consulta ou mensagem.'] },
        { title: '3. Informações que não devem ser enviadas', paragraphs: ['Não envie pelos formulários de contato dados pessoais sensíveis, senhas, números completos de cartões, credenciais de acesso, informações bancárias sensíveis ou documentos confidenciais. O Site não solicita essas informações por meio de seus formulários gerais.'] },
        { title: '4. Finalidades do tratamento', paragraphs: ['Utilizaremos os dados somente para as seguintes finalidades necessárias:'], bullets: ['Responder a perguntas, solicitações e mensagens.', 'Comunicar-nos com representantes de empresas que solicitem informações.', 'Dar seguimento a consultas comerciais.', 'Manter registros das comunicações.', 'Proteger a segurança e o funcionamento do Site.', 'Cumprir obrigações legais aplicáveis.'] },
        { title: '5. Transferências e prestadores de serviços', paragraphs: ['A KredibilityPay pode permitir que prestadores de serviços necessários para operar o Site ou atender consultas tratem dados pessoais sob suas instruções e para as finalidades descritas neste Aviso. Esses serviços podem incluir hospedagem do Site, e-mail, gestão de consultas, segurança e suporte técnico.', 'Os dados podem ser armazenados ou processados fora do México por esses prestadores, de acordo com as medidas e exigências legais aplicáveis. Também poderão ser comunicados às autoridades competentes quando exigido por lei ou por uma solicitação válida de autoridade.'] },
        { title: '6. Conservação e segurança', paragraphs: ['Conservaremos os dados pessoais durante o tempo necessário para cumprir a finalidade para a qual foram coletados e as obrigações legais aplicáveis. Depois, serão eliminados ou deixarão de estar disponíveis para uso, de acordo com os processos e prazos correspondentes.', 'A KredibilityPay adota medidas administrativas, técnicas e físicas razoáveis para proteger os dados pessoais contra dano, perda, alteração, destruição ou uso, acesso ou tratamento não autorizado.'] },
        { title: '7. Direitos sobre seus dados', paragraphs: ['A pessoa titular pode solicitar acesso aos seus dados pessoais, sua retificação quando estiverem inexatos ou incompletos, seu cancelamento quando legalmente cabível ou opor-se ao tratamento (direitos ARCO). Também pode solicitar a revogação do consentimento quando aplicável ou limitar o uso ou divulgação de seus dados.', 'Para apresentar uma solicitação, escreva para sales@kredibilitypay.com e inclua:'], bullets: ['Nome da pessoa titular e meio para receber resposta.', 'Descrição clara dos dados e do direito que deseja exercer.', 'Documentos que comprovem a identidade e, se aplicável, a representação legal.', 'Qualquer informação que ajude a localizar os dados.'] },
        { title: '8. Procedimento de resposta', paragraphs: ['A KredibilityPay responderá de acordo com os prazos e procedimentos previstos pela legislação aplicável. Se a solicitação estiver incompleta ou forem necessárias informações adicionais para verificar a identidade, as informações necessárias poderão ser solicitadas.'] },
        { title: '9. Cookies e tecnologias semelhantes', paragraphs: ['O Site não utiliza cookies nem tecnologias semelhantes para fins de análise, publicidade ou rastreamento.'] },
        { title: '10. Alterações do Aviso', paragraphs: ['A KredibilityPay poderá atualizar este Aviso para refletir alterações no Site, no tratamento de dados ou na legislação aplicável. A versão vigente estará disponível em www.kredibilitypay.com/aviso-de-privacidad e indicará a data de sua última atualização.'] },
        { title: '11. Contato', paragraphs: ['Para perguntas sobre este Aviso ou sobre o tratamento de dados pessoais, escreva para sales@kredibilitypay.com.'] },
      ],
    },
  },
};