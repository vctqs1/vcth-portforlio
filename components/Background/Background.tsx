import { PropsWithChildren } from "react";

const Background = ({ children }: PropsWithChildren<{}>) => {
    return (
        <body className="bg-white dark:bg-black transition-all dark:text-gray-200">
            {children}
        </body>
    );
};

export default Background;
