import { PropsWithChildren, useEffect } from "react";

const Background = ({ children }: PropsWithChildren<{}>) => {
    useEffect(() => {
        document.body.className =
            "bg-white dark:bg-black transition-all dark:text-gray-200";
    }, []);

    return <>{children}</>;
};

export default Background;
