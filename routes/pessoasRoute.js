const { Router } = require("express")
const PessoaController = require("../controllers/PessoaController")

const router = Router()

router.get("/pessoas", PessoaController.getPessoas)
router.get("/pessoas/:id", PessoaController.getPessoasId)
router.post("/pessoas", PessoaController.criarPessoa)
router.put("/pessoas/:id", PessoaController.updatePessoa)
router.delete("/pessoas/:id", PessoaController.deletaPessoa)
router.get(
	"/pessoas/:estudanteId/matricula/:matriculaId",
	PessoaController.getMatriculaId
)
router.post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula)
router.put(
	"/pessoas/:estudanteId/matricula/:matriculaId",
	PessoaController.updateMatricula
)
router.delete(
	"/pessoas/:estudanteId/matricula/:matriculaId",
	PessoaController.deletaMatricula
)
router.get("/teste/:pessoaId", PessoaController.getPessoaMatricula)

module.exports = router
