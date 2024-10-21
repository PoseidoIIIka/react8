import { Btn3 } from "../Btn/Btn3";
import s from './Banner.module.css';

export function Banner() {
    return (
        <div className={s.banner}>
            <div className={s.banner__inner}></div>
            <div className={s.btns}>
                <Btn3/>
            </div>
        </div>
    )
}