import express from "express";
import cors from "cors"
const app = express();
const port = 8000;

app.use(cors())

app.use(express.json()); // Middleware để đọc JSON từ request

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

const data = [
    {
        id: 1,
        title: 'Turnover',
        amount: 92405,
        periodOfChange: 5.39,
        backgroundColor: 'bg-pink-200'
    },
    {
        id: 2,
        title: 'Profit',
        amount: 32218,
        periodOfChange: 5.39,
        backgroundColor: 'bg-purple-200'
    },
    {
        id: 3,
        title: 'New customer',
        amount: 298,
        periodOfChange: 6.84,
        backgroundColor: 'bg-blue-200'
    },
]

app.get("/overview", (req, res) => {
    res.json(data);
});