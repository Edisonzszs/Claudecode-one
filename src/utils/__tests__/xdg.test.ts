import { describe, expect, test } from "bun:test";
import {
  getXDGStateHome,
  getXDGCacheHome,
  getXDGDataHome,
  getUserBinDir,
} from "../xdg";

// Helper to normalize path for cross-platform comparison
const normalizePath = (p: string) => p.replace(/\\/g, "/");

describe("getXDGStateHome", () => {
  test("returns ~/.local/state by default", () => {
    const result = getXDGStateHome({ homedir: "/home/user" });
    expect(normalizePath(result)).toBe("/home/user/.local/state");
  });

  test("respects XDG_STATE_HOME env var", () => {
    const result = getXDGStateHome({
      homedir: "/home/user",
      env: { XDG_STATE_HOME: "/custom/state" },
    });
    expect(normalizePath(result)).toBe("/custom/state");
  });

  test("uses custom homedir from options", () => {
    const result = getXDGStateHome({ homedir: "/opt/home" });
    expect(normalizePath(result)).toBe("/opt/home/.local/state");
  });
});

describe("getXDGCacheHome", () => {
  test("returns ~/.cache by default", () => {
    const result = getXDGCacheHome({ homedir: "/home/user" });
    expect(normalizePath(result)).toBe("/home/user/.cache");
  });

  test("respects XDG_CACHE_HOME env var", () => {
    const result = getXDGCacheHome({
      homedir: "/home/user",
      env: { XDG_CACHE_HOME: "/tmp/cache" },
    });
    expect(normalizePath(result)).toBe("/tmp/cache");
  });
});

describe("getXDGDataHome", () => {
  test("returns ~/.local/share by default", () => {
    const result = getXDGDataHome({ homedir: "/home/user" });
    expect(normalizePath(result)).toBe("/home/user/.local/share");
  });

  test("respects XDG_DATA_HOME env var", () => {
    const result = getXDGDataHome({
      homedir: "/home/user",
      env: { XDG_DATA_HOME: "/custom/data" },
    });
    expect(normalizePath(result)).toBe("/custom/data");
  });
});

describe("getUserBinDir", () => {
  test("returns ~/.local/bin", () => {
    const result = getUserBinDir({ homedir: "/home/user" });
    expect(normalizePath(result)).toBe("/home/user/.local/bin");
  });

  test("uses custom homedir from options", () => {
    const result = getUserBinDir({ homedir: "/opt/me" });
    expect(normalizePath(result)).toBe("/opt/me/.local/bin");
  });
});

describe("path construction", () => {
  test("all paths end with correct subdirectory", () => {
    const home = "/home/test";
    expect(normalizePath(getXDGStateHome({ homedir: home }))).toMatch(/\.local\/state$/);
    expect(normalizePath(getXDGCacheHome({ homedir: home }))).toMatch(/\.cache$/);
    expect(normalizePath(getXDGDataHome({ homedir: home }))).toMatch(/\.local\/share$/);
    expect(normalizePath(getUserBinDir({ homedir: home }))).toMatch(/\.local\/bin$/);
  });

  test("respects HOME via homedir override", () => {
    const result = getXDGStateHome({ homedir: "/Users/me" });
    expect(normalizePath(result)).toBe("/Users/me/.local/state");
  });
});
