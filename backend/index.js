import express from "express";
import puppeteer from "puppeteer";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import { errorHandler } from "./errorMiddleware.js";

dotenv.config();

const app = express();

app.get(
  "/pdf",
  asyncHandler(async (req, res) => {
    const url = req.query.target;

    const format = req.query.format || "Letter";
    const printBackground = req.query.printBackground === 0 ? false : true || true;
    const top = req.query.top || "20px";
    const bottom = req.query.bottom || "40px";
    const left = req.query.left || "20px";
    const right = req.query.right || "20px";

    const browser = await puppeteer.launch({
      headless: true,
    });

    const webPage = await browser.newPage();

    await webPage.goto(url, {
      waitUntil: "networkidle0",
    });

    const pdf = await webPage.pdf({
      printBackground,
      format,
      margin: {
        top,
        bottom,
        left,
        right,
      },
    });

    await browser.close();

    res.contentType("application/pdf");
    res.send(pdf);
  })
);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server Started on port ${process.env.PORT}`);
});
