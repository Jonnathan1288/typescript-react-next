"use client";

import { GenericComponent } from "./course/generic/generic";
import styles from "./page.module.css";

export default function Home() {
    // const [count, setCount] = useState(0);
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
                {/* <RecordTypes
                    style={{ color: "blue", padding: 5, fontFamily: "sans-serif", fontSize: 20 }}
                    userAges={{ lucho: 10, moreno: 1, pepe: 2 }}
                /> */}
                {/* <TypeFunction
                    onClick={() => {
                        alert("Hola como estas ");
                    }}
                /> */}
                {/* <ReactNodeJsx>
                    <div>Hola</div>
                    <div>Hola</div>
                </ReactNodeJsx> */}
                {/* <Setters setCount={setCount} /> */}
                {/* sds */}
                {/* <div>Value : {count}</div> */}
                {/* <DefaultProps /> */}
                {/* <ComponentCProps /> */}
                {/* <SpreadOperator onClick={() => {}} /> */}
                {/* First Example */}

                {/* <FirstComponent /> */}

                {/* <EventHandler /> */}

                {/* <EventHook /> */}
                {/* <UtilType /> */}
                {/* <AsComponent /> */}
                <GenericComponent />
            </main>
        </div>
    );
}
