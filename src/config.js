import wjConfig from "wj-config";

const config = await wjConfig()
    .addObject({ DBURL: "" })
    .addEnvironment(globalThis?.process?.env, 'POSTGRES_')
    .build();

export default config;
