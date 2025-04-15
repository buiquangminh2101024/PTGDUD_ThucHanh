import express from "express";
import cors from "cors"
import path from 'path'
import fs from 'fs'
import multer from 'multer'
import { fileURLToPath } from "url";

const app = express();
const port = 8000;
const __filename = fileURLToPath(import.meta.url);//giúp tạo đường dẫn đúng
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../src/assets");

app.use(cors())

app.use(express.json()); // Middleware để đọc JSON từ request

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
});

////////////
//Get data//
////////////
var rawData = fs.readFileSync(path.join(filePath, 'data.txt'), "utf8");
var data = JSON.parse(rawData)

app.get("/overview", (req, res) => {
    res.json(data);
});

//////////////////
//Get reportData//
//////////////////
var reportData
try {
    const data = fs.readFileSync(path.join(filePath, "reportData.txt"), "utf8");
    const jsonData = JSON.parse(data);
    jsonData.orderDate = new Date(jsonData.orderDate);

    reportData = jsonData; // Gán giá trị cho biến
} catch (err) {
    console.error("Lỗi:", err.message);
}

app.get("/report", (req, res) => {
    res.json(reportData)
})

/////////////
//Get image//
/////////////
app.use("/report/images",express.static(filePath));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(filePath, "/cachedImg"));
    },
    filename: (req, file, cb) => {
        const fileName = req.body.img.split('/')
        cb(null, fileName[fileName.length - 1]);
    }
});

const upload = multer({ storage: storage });

/////////////
//Edit user//
/////////////
var lastUserEdited

app.put("/editUser", upload.single("imgFile"), (req, res) => {
    console.log('BODY RECEIVED:', req.body)
    lastUserEdited = req.body
    const index = reportData.findIndex(user => user.id == req.body.id)
    reportData[index] = { ...reportData[index], ...req.body }
    res.json({ message: 'Ok' })
})

app.get("/editUser/lastEdit", (req, res) => {
    res.json(lastUserEdited)
})

/////////////
//Add user//
/////////////
var lastUserAdded

app.post("/addUser", upload.single("imgFile"), (req, res) => {
    console.log('BODY RECEIVED:', req.body)
    const newUser = {id: reportData.length + 1, ...req.body}
    lastUserAdded = newUser
    reportData.push(newUser)
    res.json({ message: 'Ok' })
})

app.get("/addUser/lastAdd", (req, res) => {
    res.json(lastUserAdded)
})