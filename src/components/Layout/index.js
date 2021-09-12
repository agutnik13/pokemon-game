import s from './style.module.css';

const Layout = ({ title, children, urlBg, colorBg }) => {
    const sectionStyle = {};

    if (urlBg) {
        sectionStyle.backgroundImage = `url(${urlBg})`;
    }

    if (colorBg) {
        sectionStyle.backgroundColor = colorBg;
    }

    return (
        <section
            style={sectionStyle}
            className={s.root}
        >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}



export default Layout;