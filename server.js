const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

const API_KEY = "GTCAPI-6EB8ADC0D6DF8FB56138A01F618846DE";
const API_URL = "https://gtccheats.xyz/Api/uidbypassapi/api_user.php";

app.all("/api", async (req, res) => {
    try {

        const action = req.query.action || "";

        const response = await axios({
            method: req.method,
            url: `${API_URL}?action=${action}`,
            headers: {
                "X-API-KEY": API_KEY,
                "Content-Type": "application/json"
            },
            data: req.body
        });

        res.json(response.data);

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Proxy Running");
});
