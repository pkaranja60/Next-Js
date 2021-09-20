import styles from '../styles/Layout.module.css'

const layout = ({ children }) => {
    return (
        <>
         {children}
        <div className={styles.container}>
            <main className={styles.main}>   
            </main>
        </div>
        </>
    )
}

export default layout
