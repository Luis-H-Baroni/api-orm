const database = require("../models")

class PessoaController {
	static async getPessoas(req, res) {
		try {
			const todasPessoas = await database.Pessoas.findAll()
			return res.status(200).json(todasPessoas)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async getPessoasId(req, res) {
		const { id } = req.params
		try {
			const umaPessoa = await database.Pessoas.findOne({
				where: { id: Number(id) },
			})
			return res.status(200).json(umaPessoa)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async criarPessoa(req, res) {
		const novaPessoa = req.body
		try {
			const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
			return res.status(200).json(novaPessoaCriada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async updatePessoa(req, res) {
		const { id } = req.params
		const novaInfo = req.body
		try {
			await database.Pessoas.update(novaInfo, { where: { id: Number(id) } })
			const pessoaAlterada = await database.Pessoas.findOne({
				where: { id: Number(id) },
			})
			return res.status(200).json(pessoaAlterada)
		} catch (error) {}
	}

	static async deletaPessoa(req, res) {
		const { id } = req.params
		try {
			await database.Pessoas.destroy({ where: { id: Number(id) } })
			return res.status(200).json({ mensagem: "Registro deletado" })
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async getMatriculaId(req, res) {
		const { estudanteId, matriculaId } = req.params
		try {
			const umaMatricula = await database.Matriculas.findOne({
				where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
			})
			return res.status(200).json(umaMatricula)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async criarMatricula(req, res) {
		const { estudanteId } = req.params
		const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
		try {
			const novaMatriculaCriada = await database.Matriculas.create(
				novaMatricula
			)
			return res.status(200).json(novaMatriculaCriada)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async updateMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params
		const novaInfoMatricula = req.body
		try {
			await database.Matriculas.update(novaInfoMatricula, {
				where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
			})
			const matriculaAlterada = await database.Matriculas.findOne({
				where: { id: Number(matriculaId) },
			})
			return res.status(200).json(matriculaAlterada)
		} catch (error) {}
	}

	static async deletaMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params
		try {
			await database.Matriculas.destroy({
				where: { id: Number(matriculaId), estudante_id: estudanteId },
			})
			return res.status(200).json({ mensagem: "Registro deletado" })
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}

	static async getPessoaMatricula(req, res) {
		const { pessoaId } = req.params
		try {
			const resultado = await database.Pessoas.findOne({
				where: { id: Number(pessoaId) },
			})
			const matricula = await database.Matriculas.findAll({
				where: { estudante_id: Number(pessoaId) },
			})
			return res.status(200).json({ resultado, matricula })
		} catch (error) {}
	}
}

module.exports = PessoaController
