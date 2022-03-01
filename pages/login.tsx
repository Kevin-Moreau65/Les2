import styles from '../styles/Login.module.css'
const LoginPage = () => {
    return <div className={styles.main}>
        <form action="" method="post">
            <div className={styles.formulaire}>
                <h3>Se connecter</h3>
                <div className={styles.champs}>
                    <label htmlFor="username">Pseudo</label>
                    <input type="text" name='username' placeholder='Pseudo' />
                </div>
                <div className={styles.champs}>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="text" name='password' placeholder='Mot de passe' />
                </div>
                <button className={styles.button}>Connecter</button>
            </div>
        </form>
    </div>
}

export default LoginPage