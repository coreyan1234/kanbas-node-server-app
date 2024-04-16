import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from './Kanbas/courses/routes.js';
import ModuleRoutes from './Kanbas/modules/routes.js';
import cors from "cors";
import mongoose from 'mongoose';
import UserRoutes from './Kanbas/users/routes.js';

mongoose.connect("mongodb://127.0.0.1:27017/kanbas"); // mongodb://127.0.0.1:27017/kanbas
const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
UserRoutes(app);
app.listen(4000);