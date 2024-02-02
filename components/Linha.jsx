import styles from "../styles/Linha.module.css"
import Subdisvisao from "./SubDivisao";

export default function Linha(props) {
    return(
        <div className={styles.linha}>
            <Subdisvisao preta={props.preta} />
            <Subdisvisao preta={!props.preta} />
            <Subdisvisao preta={props.preta} />
            <Subdisvisao preta={!props.preta} />
            <Subdisvisao preta={props.preta} />
            <Subdisvisao preta={!props.preta} />
            <Subdisvisao preta={props.preta} />
            <Subdisvisao preta={!props.preta} />
            
        </div>
    )
}



