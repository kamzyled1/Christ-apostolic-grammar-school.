import { Router } from 'express';
import auth from './auth';
import principal from './principal';
import teacher from './teacher';
import student from './student';
import parent from './parent';
import oldstudent from './oldstudent';
import gateman from './gateman';
import bursar from './bursar';
import pta from './pta';
import ai from './ai';

const router = Router();

router.use('/auth', auth);
router.use('/principal', principal);
router.use('/teacher', teacher);
router.use('/student', student);
router.use('/parent', parent);
router.use('/oldstudent', oldstudent);
router.use('/gateman', gateman);
router.use('/bursar', bursar);
router.use('/pta', pta);
router.use('/ai', ai);

export default router;