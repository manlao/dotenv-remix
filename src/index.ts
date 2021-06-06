import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

export function config(
  ...args: Parameters<typeof dotenv.config>
): ReturnType<typeof dotenvExpand> {
  return dotenvExpand(dotenv.config(...args));
}
