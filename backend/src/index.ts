import Cors from 'cors';
import Express from 'express';
import followController from './controllers/follow';
import threadController from './controllers/thread';
import userController from './controllers/user';
import { authenticateToken } from './middlewares/authentication';
import { upload } from './middlewares/image-thread';

const port = 5000;
const app = Express();
const router = Express.Router();

// Middleware untuk parsing JSON dan form data
app.use(Express.json());  // Menangani body yang dikirim sebagai JSON
app.use(Express.urlencoded({ extended: false }));  // Menangani form-urlencoded
app.use(Cors());
app.use("/api/v1", router);

// Endpoint untuk user
router.get("/user/:id", userController.findUser);  // Menggunakan "/:id" untuk parameter
router.post("/register", upload.none(), userController.registerUser);
router.post("/login", upload.none(), userController.loginUser);
router.patch("/user/:id", authenticateToken, upload.none(), userController.updateUser);
router.delete("/user/:id", authenticateToken, userController.deleteUser);

// Endpoint untuk thread
router.get("/thread", authenticateToken, upload.none(), threadController.findAllThread);
router.get("/thread/:id", authenticateToken, upload.none(), threadController.findThread);
router.post("/thread", authenticateToken, upload.single("image"), threadController.postThread);
router.patch("/thread/:id", authenticateToken, upload.none(), threadController.updateThread);
router.delete("/thread/:id", authenticateToken, threadController.deleteThread);

// Endpoint untuk follow
router.get("/following", authenticateToken, upload.none(), followController.fetchFollowing);
router.get("/follower", authenticateToken, upload.none(), followController.fetchFollower);
router.get("/suggested", authenticateToken, upload.none(), followController.fetchRandomUserSuggestion);

// Start server
app.listen(port, () => {
    console.log(`Port ${port} is listening`);
});
