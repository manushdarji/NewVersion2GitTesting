import { readFileSync } from "node:fs";

const ENVIRONMENT_NAME_ENV_VAR = "BLINQ_ENVIRONMENT";
const TEST_DATA_SEED_FILE_PATH = "test-data.json";

function loadEnvironmentConfig() {
  try {
    return JSON.parse(readFileSync(new URL("./environments.json", import.meta.url), "utf8"));
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return { default: null, environments: {} };
    }
    throw error;
  }
}

function loadTestDataConfig() {
  try {
    return JSON.parse(readFileSync(new URL(`./${TEST_DATA_SEED_FILE_PATH}`, import.meta.url), "utf8"));
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return { projectId: null, entries: [] };
    }
    throw error;
  }
}

function resolveEnvironment() {
  const config = loadEnvironmentConfig();
  const environmentName = process.env[ENVIRONMENT_NAME_ENV_VAR] || config.default;
  if (!environmentName) {
    return undefined;
  }

  const environment = config.environments[environmentName];
  if (!environment) {
    const available = Object.keys(config.environments).join(", ") || "none";
    throw new Error(
      `Unknown ${ENVIRONMENT_NAME_ENV_VAR} "${environmentName}". Available environments: ${available}`,
    );
  }

  return environment;
}

function resolveProjectId(environment) {
  return environment?.projectId || loadTestDataConfig().projectId;
}

const baseProfile = {
  paths: ["features/**/*.feature"],
  import: ["features/step_definitions/**/*.mjs"],
  format: ["progress"],
};

const browserProfile = (browserType) => {
  const environment = resolveEnvironment();
  const projectId = resolveProjectId(environment);
  return {
    ...baseProfile,
    worldParameters: {
      browserType,
      testDataSeedFilePath: TEST_DATA_SEED_FILE_PATH,
      ...(environment?.baseURL ? { baseUrl: environment.baseURL } : {}),
      ...(projectId ? { projectId } : {}),
      ...(environment?.id ? { environmentId: environment.id } : {}),
    },
  };
};

const defaultProfile = browserProfile("chromium");
const chromium = browserProfile("chromium");
const firefox = browserProfile("firefox");
const webkit = browserProfile("webkit");

export { chromium, firefox, webkit };
export default defaultProfile;
