import styles from "../styles/Linha.module.css"
import Subdisvisao from "./SubDivisao";

export default function Linha2(props) {
    return(
        <div className={styles.linha}>
            <Subdisvisao preta/>
            <Subdisvisao />
            <Subdisvisao preta/>
            <Subdisvisao />
            <Subdisvisao preta/>
            <Subdisvisao />
            <Subdisvisao preta/>
            <Subdisvisao />
        </div>
    )
}



