import experss from "express";
import { getStudents, addStudents } from "../../controller/studentsController.js";  
const router = experss.Router();

router.get("/get-students", getStudents);
router.post("/add-students", addStudents);
export default router;