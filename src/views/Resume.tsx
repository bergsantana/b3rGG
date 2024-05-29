import './styles/Resume.css'
import {LinkedIn, GitHub,Email } from '@mui/icons-material'

export default function Resume () {
    const aboutMe = 'Me chamo Wanderberg, sou desenvolvedor Fullstack. Sou de Manaus, Amazonas e graduando de Sistemas de Informação na Universidade do Amazonas. Também contribuo em projetos voluntários desde 2021.'
    const workExp : {role: string, company: string, from: string, until: string, description : string}[]= [
        {role: 'Desenvolvedor Fullstack', company: 'Cal-Comp/R&D',from: '04/2023', until: '04/2024', description : 'Implemento telas em Vue com Sass. Rotas da API em Node.js com Nest.js. Banco Oracle com TypeORM. Uso de Redis e RabbitMQ. Resposável por implementar um APM.'},
        {role: 'Desenvolvedor Fullstack Voluntário', company: 'KeelWorks Foundation',from: '04/204', until: '', description : 'Estagiário voluntário, atuo codificando ferramentas de uso interno, entre elas está um editor online da newsletter mensal em React.'}
    ]

    const linkedinURL = 'https://www.linkedin.com/in/wanderberg-santana-42084bb8/'
    const gitURl = 'https://github.com/bergsantana'
    return (
        <>
            <div className="resumeContainer">
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
                        <p> Docker, Linunx, RabbitMQ, Redis, AWS </p>
                    </div>
                </div>
                <div className='social'>
                    <a href={linkedinURL} ><LinkedIn /></a>
                    <a href={gitURl} ><GitHub /></a>
                    <Email /> 
                </div>
            </div>

        </>
    )
}

 