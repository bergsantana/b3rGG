import "./styles/Resume.css";
import {
  LinkedIn,
  GitHub,
  Email,
  LabelImportantTwoTone,
  RadioButtonCheckedSharp,
  Link,
} from "@mui/icons-material";

export default function Resume() {
  const aboutMe =
    "Me chamo Wanderberg, sou Desenvolvedor Fullstack. Graduado em Sistemas de Informação na Universidade do Amazonas.";
  const workExp: {
    role: string;
    company: string;
    from: string;
    until: string;
    description: string[];
  }[] = [
    {
      role: "Devesenvolvedor Fullstack",
      company: "Bondy",
      from: "06/2024",
      until: "07/2025",
      description: [
        `Desenvolvi um projeto que envolveu a integração e modernização de serviços CRM com um módulo de vagas integrado em uma plataforma externa, usando Next(React), Node, MongoDB, AWS. `,
        `Atuei no desenvolvimento de chatbots customizáveis e assistentes usando DialogFlow ES e CX, manutenção nas APIs GraphQLs e REST com aplicações em Next/React. Banco de dados MongoDB `,
        `Trabalhei na migração da infraestrutura de serviços da AWS para a Google Cloud.`,
        `Implementei integrações com Low Code com NodeRED e API SOAP. Outras tecnologias com que trabalhei: AWS, Google Cloud, Docker, Kubernetes, SQS e RabbitMQ.`,
      ],
    },
    {
      role: "Desenvolvedor Fullstack",
      company: "Faço a Conta Gestão Fiscal",
      from: "11/2024",
      until: "03/2025",
      description: [
        `Desenvolvi uma solução para consulta de pendências para microempreendedores e implementar o cálculo de imposto mensal para contribuintes do simples nacional, reduzindo de 5 dias de trabalho para 1 dia`,
        `Desenvolvi o envio de todas as guias DAR para o mês atual da base de clientes do simples nacional.`,
        `Responsável pela migração de infra de AWS para Google Cloud. Tecnologias foram React, Next.js, Node.js, Python e AWS.`,
      ],
    },
    {
      role: "Desenvolvedor Fullstack",
      company: "Defsafe Cybersecurity",
      from: "06/2024",
      until: "09/2024",
      description: [
        `Desenvolvi na internacionalização, medidas de segurança de autenticação e melhorias da interface`,
        `Implementei o módulo de gerenciamento de permissões no painel de administração para gerentes.`,
        `Tech: Nuxt.js/Vue.js, TailwindCSS, Supabase com infra AWS.`,
      ],
    },
    {
      role: "Desenvolvedor Fullstack",
      company: "Cal-Comp/ Femto R&D",
      from: "04/2022",
      until: "04/2024",
      description: [
        `Projeto Smart Security - Sistema de monitoração dos ativos de uma fábrica de circuitos eletrônicos.
Integrado com câmeras de reconhecimento facial, antenas e tags para rastreamento de ativos em
tempo real, integrado com sistema de alarmes auditivos, visuais, notificações por whatsapp e e-mail.`,
        `Implementei a interface com Vue.js, com Sass e posteriormente Bootstrap. API em Node.js e Nest.js,
TypeORM com banco Oracle.`,
        `Desenvolvi parte das rotinas automáticas de monitoração e envio de alertas por e-mails da sala cofre.`,
        `Desenvolvi uma solução de Observabilidade com o APM do Elastic Stack, utilizando Elasticsearch,
usado para monitoração da aplicação, centralização de logs e dashboard customizada.`,
      ],
    },
    {
      role: "Desenvolvedor Fullstack Voluntário",
      company: "KeelWorks Foundation",
      from: "04/2024",
      until: "",
      description: [
        "Estagiário voluntário, atuo codificando ferramentas de uso interno, entre elas está um editor online da newsletter mensal em React.",
      ],
    },
  ];

  const hardSkills = {
    programmingLanguages: [
      "Typescript",
      "Python",
      "Golang",
      "C#",
      "Java",
      "Ruby",
    ],
    languages: ["Portuguese", "English"],
    frontEnd: ["Vue.js", "React.js", "Next.js", "Nuxt.js"],
    backEnd: ["Node.js", "Go","Flask", "Django", "FastAPI", "Spring Boot", ".NET"],
    databases: ["Oracle", "PostgreSQL", "MySQL", "Mongodb"],
    observability: ["Elastic APM(Elasticsearch)", "Jaeger Tracing"],
    cloud: ["AWS", "Google Cloud"],
    otherTools: ["Docker", "RabbitMQ", "Redis"],
  };
  const linkedinURL =
    "https://www.linkedin.com/in/wanderberg-santana-42084bb8/";
  const gitURl = "https://github.com/bergsantana";
  return (
    <>
      <div className="resumeContainer     pt-4 ">
        <div className="about">
          <h4>Olá,</h4>
          <p>{aboutMe}</p>
        </div>
        <div className="workXp">
          <div className="xpTitle">
            <h4>Experiência</h4>
          </div>
          {workExp.map((item, item_idx) => {
            return (
              <div className="xpItem" key={item_idx}>
                <div className="role">{item.role}</div>
                <div className="company">{item.company}</div>
                <div className="period">
                  <div className="from">{item.from}</div>
                  <p> - </p>
                  <div className="until">{item.until}</div>
                </div>
                <ul className="roleDescription">
                  {item.description.map((descriptionItem, descript_idx) => (
                    <li key={descript_idx}>{descriptionItem}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="skills">
          <h4>Habilidades</h4>

          <ul className="skillItem">
            <p>Linguages de programação: </p>
            {hardSkills.programmingLanguages.map((lang, lang_idx) => (
              <li key={lang_idx}>{lang} </li>
            ))}
          </ul>
          <ul className="skillItem">
            <p>Front-end: </p>
            {hardSkills.frontEnd.map((framework, framework_idx) => (
              <li key={framework_idx}>{framework} </li>
            ))}
          </ul>
          <div className="skillItem">
            <p>Back-end - </p>
            {hardSkills.backEnd.map((framework, framework_idx) => (
              <li key={framework_idx}>{framework}</li>
            ))}
          </div>
          <div className="skillItem">
            <p>Bancos de Dados- </p>
            {hardSkills.databases.map((db, db_idx) => (
              <li key={db_idx}>{db}</li>
            ))}
          </div>
          <div className="skillItem">
            <p>Oberservabilidade: </p>
            {hardSkills.observability.map((tools, tools_idx) => (
              <li key={tools_idx}>{tools}</li>
            ))}
          </div>
          <div className="skillItem">
            <p>Cloud: </p>
            {hardSkills.cloud.map((cloud, cloud_idx) => (
              <li key={cloud_idx}>{cloud}</li>
            ))}
          </div>
          <div className="skillItem">
            <p>Outras ferramentas: </p>
            {hardSkills.otherTools.map((tool, tool_idx) => (
              <li key={tool_idx}>{tool}</li>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-mono  text-2xl text-center">
            <LabelImportantTwoTone className="pt-1" /> Demos de interfaces
          </h4>
          <div className="pl-1 flex flex-col gap-4 text-lg lg:w-8/12 self-center">
            <div className="flex flex-col gap-2 px-5 shadow-md  shadow-indigo-600  rounded-xl">
              <p className="text-3xl pl-5">
                <RadioButtonCheckedSharp className="p-1 mr-4" />
                Cat Facts - Nuxt/Vue, Tailwind
              </p>
              <img
                className="imgs rounded-xl"
                src="https://raw.githubusercontent.com/bergsantana/defsafe-developers-test/master/public/images/def-safe-mobile.gif"
              />
              <img
                className="imgs rounded-xl"
                src="https://raw.githubusercontent.com/bergsantana/defsafe-developers-test/master/public/images/def-safe-desktop.gif"
              />

              <p className="pl-5">
                <Link /> Disponível em:{" "}
                <a
                  className="text-blue-500"
                  href="defsafe-developers-test-nine.vercel.app"
                >
                  Cat Facts on Vercel
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2 px-5 shadow-md  shadow-indigo-600  rounded-xl">
              <p className="text-3xl pl-5">
                <RadioButtonCheckedSharp className="p-1 mr-4" />
                Fake E-Commerce - React, Material UI, and Tailwind
              </p>
              <img
                className="imgs rounded-xl"
                src="https://github.com/bergsantana/desafio-front/raw/main/desafio-imagens/desafio-front-mobile.gif"
              />
              <img
                className="imgs rounded-xl"
                src="https://raw.githubusercontent.com/bergsantana/desafio-front/main/desafio-imagens/desafio-front-desktop.gif"
              />

              <p className="pl-5">
                <Link /> Available on:{" "}
                <a
                  className="text-blue-500"
                  href="https://bergsantana.github.io/desafio-front"
                >
                  Fake Online Store
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2 px-5 shadow-md  shadow-indigo-600  rounded-xl ">
              <p className="text-3xl pl-5">
                <RadioButtonCheckedSharp className="p-1 mr-4" />
                Login and Welcome page - React, Tailwind and Node.js
              </p>
              <img
                className="imgs rounded-xl"
                src="https://raw.githubusercontent.com/bergsantana/bondy-desafio-fullstack/main/packages/frontend/imgs/mobile.gif"
              />
            </div>
          </div>
        </div>

        <div className="social p-14 rounded-lg shadow-sm shadow-blue-600">
          <a href={linkedinURL}>
            <LinkedIn />
          </a>
          <a href={gitURl}>
            <GitHub />
          </a>
          <Email />
        </div>
      </div>
    </>
  );
}
