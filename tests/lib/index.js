"use strict"

const { fail } = require("assert")
const cp = require("child_process")
const path = require("path")

const STYLELINT = `.${path.sep}node_modules${path.sep}.bin${path.sep}stylelint`

describe("Integration with stylelint", () => {
    let originalCwd

    before(() => {
        originalCwd = process.cwd()
        process.chdir(
            path.join(__dirname, "../fixtures/integrations/stylelint"),
        )
        cp.execSync("npm i", { stdio: "inherit" })
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
    it("should lint with errors #2", () => {
        try {
            cp.execSync(`${STYLELINT} src/invalid2.vue`, { stdio: "inherit" })
        } catch {
            // Expected!
            return
        }
        fail("Expect an error, but without errors")
    })
})

describe("Integration with stylelint with scss", () => {
    let originalCwd

    before(() => {
        originalCwd = process.cwd()
        process.chdir(
            path.join(__dirname, "../fixtures/integrations/stylelint-scss"),
        )
        cp.execSync("npm i", { stdio: "inherit" })
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

describe("Integration with stylelint-config-standard-scss", () => {
    let originalCwd

    before(() => {
        originalCwd = process.cwd()
        process.chdir(
            path.join(
                __dirname,
                "../fixtures/integrations/stylelint-config-standard-scss",
            ),
        )
        cp.execSync("npm i", { stdio: "inherit" })
    })
    after(() => {
        process.chdir(originalCwd)
    })

    it("should lint without errors", () => {
        cp.execSync(`${STYLELINT} src/valid.vue --fix`, {
            stdio: "inherit",
        })
    })
    it("should lint with errors", () => {
        try {
            cp.execSync(`${STYLELINT} src/invalid.vue`, {
                stdio: "inherit",
            })
        } catch {
            // Expected!
            return
        }
        fail("Expect an error, but without errors")
    })
})
