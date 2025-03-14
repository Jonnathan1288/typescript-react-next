import { RecordTypes } from "./course/record_types/record_types";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {/* <Button /> */}
                {/* Props */}
                {/* <ButtonProp text="Click" subTitle="another" color="red" /> */}
                {/* Types */}
                {/* <UnionTypes title="Click Type" backgroundColor="red" /> */}
                {/* <ArrayC padding={[1, 2, 3]} /> */}
                {/* <CssProperties
                    title="Click Me!"
                    style={{ color: "blue", padding: 5, fontFamily: "sans-serif", fontSize: 20 }}
                /> */}
                <RecordTypes
                    style={{ color: "blue", padding: 5, fontFamily: "sans-serif", fontSize: 20 }}
                    userAges={{ lucho: 10, moreno: 1, pepe: 2 }}
                />
            </main>
        </div>
    );
}
