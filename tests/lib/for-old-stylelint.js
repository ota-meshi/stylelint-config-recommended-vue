"use strict"

const { fail } = require("assert")
const cp = require("child_process")
const path = require("path")

cp.execSync("npm pack", { stdio: "inherit" })
const tgzName = path.resolve(
    `stylelint-config-recommended-vue-${
        require("../../package.json").version
    }.tgz`,
)

const STYLELINT = `.${path.sep}node_modules${path.sep}.bin${path.sep}stylelint`

describe("Integration with stylelint v14.3", () => {
    let originalCwd

    before(() => {
        originalCwd = process.cwd()
        process.chdir(
            path.join(__dirname, "../fixtures/integrations/stylelint-v14.3"),
        )
        cp.execSync("npm i", { stdio: "inherit" })
        cp.execSync(
            "npx rimraf ./node_modules/stylelint-config-recommended-vue",
            { stdio: "inherit" },
        )
        cp.execSync(`npm i ${tgzName}`, { stdio: "inherit" })
    })
    after(() => {
        process.chdir(originalCwd)
    })

    it("should lint without errors", () => {
        cp.execSync(`${STYLELINT} src/valid.vue`, { stdio: "inherit" })
    })
    it("should lint with errors", () => {
        try {
            cp.execSync(`${STYLELINT} src/invalid.vue`, { stdio: "inherit" })
        } catch {
            // Expected!
            return
        }
        fail("Expect an error, but without errors")
    })
})

describe("Integration with stylelint v14.4", () => {
    let originalCwd

    before(() => {
        originalCwd = process.cwd()
        process.chdir(
            path.join(__dirname, "../fixtures/integrations/stylelint-v14.4"),
        )
        cp.execSync("npm i", { stdio: "inherit" })
        cp.execSync(
            "npx rimraf ./node_modules/stylelint-config-recommended-vue",
            { stdio: "inherit" },
        )
        cp.execSync(`npm i ${tgzName}`, { stdio: "inherit" })
    })
    after(() => {
        process.chdir(originalCwd)
    })

    it("should lint without errors", () => {
        cp.execSync(`${STYLELINT} src/valid.vue`, { stdio: "inherit" })
    })
    it("should lint with errors", () => {
        try {
            cp.execSync(`${STYLELINT} src/invalid.vue`, { stdio: "inherit" })
        } catch {
            // Expected!
            return
        }
        fail("Expect an error, but without errors")
    })
})
