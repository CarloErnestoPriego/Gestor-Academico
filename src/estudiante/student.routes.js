import { Router } from "express";
import { registerStudentValidator, asignacion1CursoStudentValidator, eliminarPerfilEstudianteValidator} from "../middlewares/validadores.js"
import { deleteFileOnError } from "../middlewares/delete-file-on-errors.js"
import { asignacion1CursoStudent, getStudents, registerStudent, actualizarPerfilEstuiante, eliminarPerfilEstudiante} from "./student.controller.js"

const router = Router()
router.post(
    "/registerStudent",
    registerStudentValidator,
    deleteFileOnError,
    registerStudent
)
router.put(
    "/asignaturaStudent/:uid",
    asignacion1CursoStudentValidator,
    deleteFileOnError,
    asignacion1CursoStudent
)
router.get("/", getStudents)
router.put("/editProfile/:uid", actualizarPerfilEstuiante)
router.delete("/deleteProfile/:uid", eliminarPerfilEstudianteValidator, eliminarPerfilEstudiante)

export default router