const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/save", async (req, res, next) => {
	try {
		const { name, email } = req.body;
		const task = await prisma.user.create({data: { name,email }});
		res.json(task);
	} catch (error) {next({message: 'Email Already Taken'})}
});

module.exports = router;
