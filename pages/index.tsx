import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import About from "../components/About";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className="container">
                <About />
                <Resume />
            </main>

            <footer className={styles.footer}>
                <Contact />
            </footer>
        </div>
    );
};

export default Home;
