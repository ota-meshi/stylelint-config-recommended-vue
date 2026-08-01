import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);

/**
 * Gets the module version from package name
 */
export default function getModuleVersion(...moduleNames) {
  const packageName = moduleNames.pop();

  let ownerModuleRootPath = process.cwd();
  for (const ownerNames of moduleNames) {
    ownerModuleRootPath =
      getModuleRootPath(ownerNames, ownerModuleRootPath) || ownerModuleRootPath;
  }
  try {
    const relativeTo = path.join(ownerModuleRootPath, "__placeholder__.js");
    return createRequire(relativeTo)(`${packageName}/package.json`).version;
  } catch {
    // ignore
  }
  try {
    return require(`${packageName}/package.json`).version;
  } catch {
    // ignore
  }

  return null;
}

/**
 * Get module root path
 */
function getModuleRootPath(packageName, ownerModuleRootPath) {
  try {
    const relativeTo = path.join(ownerModuleRootPath, "__placeholder__.js");

    return path.dirname(
      createRequire(relativeTo).resolve(`${packageName}/package.json`),
    );
  } catch {
    // ignore
  }
  try {
    return path.dirname(require.resolve(`${packageName}/package.json`));
  } catch {
    // ignore
  }

  return null;
}
