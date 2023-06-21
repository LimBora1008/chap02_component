import World from "./World";
import styles from "./Hello.module.css";

// export default function 으로 선언시 
// export default Hello;를 마지막에 선언해주지 않아도 사용가능
export default function Hello(){
    return(
        <div className={styles.box}>
            <h1>Hello.js</h1>
            <World />
        </div>
    )
}