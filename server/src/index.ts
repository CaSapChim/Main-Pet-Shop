import express, { Response, Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectToDB } from "./Utils/connectToDB";

const port: number = 3300;

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

connectToDB().catch(() => { 
    throw new Error("Lỗi: ");
});

app.get("/v1/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "Success" });
})

app.listen(port, () => {
  console.log("Server đã chạy ở port: ", port);
})