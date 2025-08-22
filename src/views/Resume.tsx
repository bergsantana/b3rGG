import './styles/Resume.css'
import {LinkedIn, GitHub,Email, LabelImportantTwoTone, RadioButtonCheckedSharp, Link } from '@mui/icons-material'

export default function Resume () {
    const aboutMe = 'Me chamo Wanderberg, sou desenvolvedor Fullstack. Graduando de Sistemas de Informação na Universidade do Amazonas. Também contribuo em projetos voluntários desde 2021.'
    const workExp : {role: string, company: string, from: string, until: string, description : string}[]= [
        {role: 'Devesenvolvedor Fullstack', company: 'Bondy', from: '06/2024', until: '', description: 'Integrando API GraphQL+MongoDB com front em Next.js/React hospedados em AWS.'},
        {role: 'Desenvolvedor Fullstack', company: 'Cal-Comp/ Femto R&D',from: '04/2022', until: '04/2024', description : 'Implemento telas em Vue com Sass. Rotas da API em Node.js com Nest.js. Banco Oracle com TypeORM e CI/CD com o GitLab, mensageria com Redis e RabbitMQ. Resposável por implementar um APM.'},
        {role: 'Desenvolvedor Fullstack Voluntário', company: 'KeelWorks Foundation',from: '04/2024', until: '', description : 'Estagiário voluntário, atuo codificando ferramentas de uso interno, entre elas está um editor online da newsletter mensal em React.'}
    ]

    const linkedinURL = 'https://www.linkedin.com/in/wanderberg-santana-42084bb8/'
    const gitURl = 'https://github.com/bergsantana'
    return (
        <>
            <div className="resumeContainer     pt-4 ">
                <div className='about'>
                     <h4>Olá,</h4>
                    <p>
                        {aboutMe}
                    </p>
                </div>
                <div  className="workXp">
                    <div className='xpTitle'>
                        <h4>Experiência</h4>
                    </div>
                    {workExp.map((item) => {
                        return (
                            <div className='xpItem'>
                                <div className="role">{item.role}</div>
                                <div className="company">{item.company}</div>
                                <div className="period">
                                    <div className="from">{item.from}</div>
                                    <p> -  </p>
                                    <div className="until">{item.until}</div>
                                </div>
                                <div className="roleDescription">
                                    <p> {item.description}</p>
                                    
                                    </div>
                            </div>
                        )
                    } )}

                </div>
                <div className='skills'>
                    <h4>Habilidades</h4>
                    <div className='skillItem'>
                        <p>Front-end - </p>
                        <p> React.js, Vue.js, Sass, Tailwind</p>
                    </div>
                    <div className='skillItem'>
                        <p>Back-end  - </p>
                        <p> Node.js, Nest.js, Flask</p>
                    </div>
                    <div className='skillItem'>
                        <p>Bancos de Dados- </p>
                        <p> Oracle, MySQL, Mongo</p>
                    </div>
                    <div className='skillItem'>
                        <p>ORMs - </p>
                        <p> TypeORM, Prisma</p>
                    </div>
                    <div className='skillItem'>
                        <p>Application Monitoring- </p>
                        <p> Elastic APM(Elastisearch)</p>
                    </div>
                    <div className='skillItem'>
                        <p>Utilidades - </p>
                        <p> Docker, Linux, RabbitMQ, Redis, AWS, GitHub CI/CD </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-mono  text-2xl text-center"><LabelImportantTwoTone className='pt-1' /> Uma demo do meu trabalho</h4>
                    <div className='pl-1 flex flex-col gap-4 text-lg lg:w-8/12 self-center'>
                        <div className='flex flex-col gap-2 px-5 shadow-md  shadow-indigo-600  rounded-xl'>
                            <p className='text-3xl pl-5'><RadioButtonCheckedSharp className='p-1 mr-4' />Cat Facts - Nuxt/Vue, Tailwind</p>
                            <img className='imgs rounded-xl' src="https://raw.githubusercontent.com/bergsantana/defsafe-developers-test/master/public/images/def-safe-mobile.gif" />
                            <img  className='imgs rounded-xl' src="https://raw.githubusercontent.com/bergsantana/defsafe-developers-test/master/public/images/def-safe-desktop.gif" />
                            
                            <p className='pl-5'><Link /> Disponível em: <a className='text-blue-500' href='defsafe-developers-test-nine.vercel.app'>Cat Facts on Vercel</a></p>
                        </div>
                        <div  className='flex flex-col gap-2 px-5 shadow-md  shadow-indigo-600  rounded-xl'>
                            <p className='text-3xl pl-5' ><RadioButtonCheckedSharp className='p-1 mr-4' />Fake E-Commerce - React, Material UI, and Tailwind</p>
                            <img   className='imgs rounded-xl' src="https://github.com/bergsantana/desafio-front/raw/main/desafio-imagens/desafio-front-mobile.gif" />
                            <img   className='imgs rounded-xl' src="https://raw.githubusercontent.com/bergsantana/desafio-front/main/desafio-imagens/desafio-front-desktop.gif" />

                            <p className='pl-5'><Link /> Available on: <a  className='text-blue-500' href='https://bergsantana.github.io/desafio-front'>Fake Online Store</a></p>
                        </div>
                        <div  className='flex flex-col gap-2 px-5 shadow-md  shadow-indigo-600  rounded-xl '>
                            <p className='text-3xl pl-5' ><RadioButtonCheckedSharp className='p-1 mr-4' />Login and Welcome page - React, Tailwind and Node.js</p>
                            <img  className='imgs rounded-xl' src="https://raw.githubusercontent.com/bergsantana/bondy-desafio-fullstack/main/packages/frontend/imgs/mobile.gif" />
                             
                        </div>
                    </div>
                </div>
                    
                <div className='social p-14 rounded-lg shadow-sm shadow-blue-600'>
                    <a href={linkedinURL} ><LinkedIn /></a>
                    <a href={gitURl} ><GitHub /></a>
                    <Email /> 
                </div>
            </div>

        </>
    )
}

 
