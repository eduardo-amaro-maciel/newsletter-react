import './Assinar.css'

export default function Assinar() {

    return (
        <main className="assinar">
            <h1 className='title'>Notícias diárias no seu e-mail</h1>
            <p className='subtexto'>Os principais conteúdos e notícias sobre tecnologia direto no seu e-mail. Reportagens, entrevistas, breaking news e mais. Assine na nossa plataforma!</p>
            <form className='form-assinar'>
                <input type="email" placeholder='Seu melhor e-mail'/>
                <button className='btn'>Assinar</button>
            </form>
            <span className='btn-politica'>Politica de privacidade</span>
        </main>
    )
}