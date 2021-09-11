import s from './style.css';

const getStyle = (colorBg) => {
    if (colorBg) return { background: colorBg };
    return {};
}

const getClasses = (urlBg) => {
    if (urlBg) return "wrapper " + urlBg;
    return "wrapper"
}

const Layout = ({ title, descr, urlBg, colorBg }) => {
    return (
        <section className="root">
            <div className={getClasses(urlBg)} style={getStyle(colorBg)}>
                <article>
                    <div className="title">
                        <h3>{title}</h3>
                        <span className="separator"></span>
                    </div>
                    <div className="desc full">
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}



export default Layout;