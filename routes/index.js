const express = require("express")
const pessoas = require("../routes/pessoasRoute")
const niveis = require("../routes/niveisRoute")
const turmas = require("../routes/turmasRoute")

module.exports = (app) => {
	app.use(express.json(), pessoas, niveis, turmas)
}
