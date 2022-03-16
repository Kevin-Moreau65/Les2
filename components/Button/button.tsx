import styles from './button.module.css'
type props = {
    text: string
    action: () => void
    width: string
    height: string
}
const Button = ({ text, action, width, height }: props) => {
    return <div onClick={action} className={styles.button} style={{ width: width, height: height }}>
        <p>{text}</p>
    </div>
}

export default Button