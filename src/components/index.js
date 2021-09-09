import s from './style.css';



export const Layout = ({title, descr, urlBg, colorBg}) => {
    return(
        <section class="root">
            <div class="wrapper">
                <article>
                    <div class="title">
                        <h3>{title}</h3>
                        <span class="separator"></span>
                    </div>
                    <div class="desc full">
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
            <div className={urlBg}></div>
        </section>
    )
}

export const Footer =() =>{

}
