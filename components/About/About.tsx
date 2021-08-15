import styles from "../../styles/About.module.css";
import Image from "next/dist/client/image";

function About() {
    return (
        <header className="max-h-full grid grid-flow-col grid-cols-2 grid-rows-1">
            <div className="grid content-center">
                <h1 className="text-5xl mb-9 animate-bounce">Hi there !</h1>
                <h3 className="text-7xl">
                    I am <strong className="text-purple">Thu Vo</strong>
                </h3>
                <div
                    className={styles.typewriter}
                    data-testid="Typewriter__wrapper"
                >
                    <span className="typewriter-name text-purple font-semibold text-3xl">
                        WEB DEVELOPER.
                    </span>
                </div>
            </div>
            <div className="grid content-center items-end">
                <Image
                    src="/images/hero.svg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    objectFit={"contain"}
                />
            </div>
        </header>
    );
}

export default About;
