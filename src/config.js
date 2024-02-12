import wjConfig from "wj-config";

const config = await wjConfig()
    .addObject({ dbUrl: "" })
    .addEnvironment(globalThis?.process?.env, 'POSTGRES_')
    .build();

export default config;
