import Sidebar from './Sidebar';
import styles from '../styles/Layout.module.css'

const layout = ({ children }) => {
    return (
        <>
      <Sidebar />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default layout
