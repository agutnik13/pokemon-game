import s from'./style.module.css';

// const Header = ({ title, descr }) => {
//     return (
//     <div className={s.root}>
//         <div className={s.container}>
//             <h1 className={s.header}>
//                 {title}
//                 </h1>
//             <p>Simple Triple Triad Card Game</p>
//         </div>
//     </div>
//     )
// }

export const Header = ({ title, descr}) =>{
    return(
    <header class={s.root}>
        <div class={s.forest}></div>
        <div class={s.container}>
            <h1>{title}</h1>
            <p>{descr}</p>
        </div>
    </header>
    )
}

export default Header;