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

const reportData = [
    {
        id: 1,
        customerName: "Elizabeth Lee",
        company: "AvatarSystems",
        orderValue: 359,
        orderDate: new Date(2023, 6, 10),
        status: "New",
        img: 0
    },
    {
        id: 2,
        customerName: "Carlos Garcia",
        company: "SmoozeShift",
        orderValue: 747,
        orderDate: new Date(2023, 6, 24),
        status: "New",
        img: 1
    },
    {
        id: 3,
        customerName: "Elizabeth Balley",
        company: "Prime Time Telecom",
        orderValue: 564,
        orderDate: new Date(2023, 7, 8),
        status: "In-progress",
        img: 2
    },
    {
        id: 4,
        customerName: "Ryan Brown",
        company: "OmniTeach Corporation",
        orderValue: 541,
        orderDate: new Date(2023, 7, 31),
        status: "In-progress",
        img: 3
    },
    {
        id: 5,
        customerName: "Ryan Young",
        company: "DataStram Inc.",
        orderValue: 769,
        orderDate: new Date(2023, 4, 1),
        status: "Completed",
        img: 4
    },
    {
        id: 6,
        customerName: "Hailey Adams",
        company: "FlowRush",
        orderValue: 922,
        orderDate: new Date(2023, 5, 10),
        status: "Completed",
        img: 5
    }
]

app.get("/report", (req, res) => {
    res.json(reportData)
})