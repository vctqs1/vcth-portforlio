import Image from "next/dist/client/image";
function Resume() {
    return (
        <section className="mt-5">
            <h3 className="text-3xl mb-5 animate-bounce">
                <strong className="text-purple">OVERVIEW</strong>
            </h3>
            <div className="grid grid-flow-col grid-cols-2 grid-rows-1">
                <div className="pr-4">
                    <div>
                        <div className="py-1">
                            I am{" "}
                            <strong className="text-purple">
                                Frontend Engineer
                            </strong>{" "}
                            at current company.
                        </div>
                        <div className="py-1 italic">
                            But the funny thing is that I intended to switch to
                            Backend when I applied for current company but came
                            back again with Frontend.
                        </div>
                        <div className="py-1">
                            Each position gives me a lot of opportunities. But
                            now I am completely comfortable being a Frontend
                            Engineer
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="py-2">
                            <span>
                                I have several years of experience working. I
                                already approach many languages (
                                <strong className="text-purple">NodeJS</strong>,{" "}
                                <strong className="text-purple">Golang</strong>,{" "}
                                ... ).{" "}
                            </span>
                            <span>
                                But for now, I want to{" "}
                                <span className="italic font-bold">
                                    focus my passion on developing products with{" "}
                                    <strong className="text-purple">
                                        React
                                    </strong>
                                </span>
                                .
                            </span>
                        </div>
                        <div className="py-2">
                            Besides, I also learned more about{" "}
                            <strong className="text-purple">Deployment</strong>,{" "}
                            <strong className="text-purple">CI/CD</strong>,{" "}
                            <strong className="text-purple">Testing</strong> and{" "}
                            <strong className="text-purple">Automation</strong>
                        </div>
                    </div>
                </div>
                <div className="pl-4 flex m-auto">
                    <Image
                        src="/images/cicd_pipeline.png"
                        height={200}
                        width={500}
                        objectFit="contain"
                        alt="CI/CD pipeline"
                    />
                </div>
            </div>
        </section>
    );
}

export default Resume;
