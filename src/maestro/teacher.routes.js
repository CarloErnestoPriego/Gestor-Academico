import { Router } from "express";
import { registrarCursosValidator } from "../middlewares/validadores.js"
import { deleteFileOnError } from "../middlewares/delete-file-on-errors.js"
import { actualizarCursos, editarCursoAlumnoAsignado, eliminarCursos, eliminarCursosAlumnosAsignados, registrarCursos, visualizarCursos } from "./teacher.controller.js"

const router = Router()

router.post(
    "/registerCourses",
    registrarCursosValidator,
    deleteFileOnError,
    registrarCursos
)
router.put("/actualizarCursos/:uid", actualizarCursos)
router.delete("/eliminarCursos/:uid", eliminarCursos)
router.get("/visualizar", visualizarCursos)
router.put("/editarCursoAA/:uid", editarCursoAlumnoAsignado)
router.delete("/eliminarCursoAA/:uid", eliminarCursosAlumnosAsignados)

export default router