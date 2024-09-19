import "dotenv/config"
import e from "express";
import user_router from "./http/routes/user-router.js";
import roullet_bet_router from "./http/routes/roullet-bet-route.js"
import match_router from "./http/routes/match-route.js"
import match_bet_router from "./http/routes/match-bet-route.js"
import jackpot_bet from "./http/routes/jackpot-bet-route.js"
import competitor_router from "./http/routes/competitor-route.js"

const app = e();

app.use(e.json());
app.use("/user", user_router);

app.use(e.json())
app.use("/roullet", roullet_bet_router)

app.use(e.json())
app.use ("/match_router", match_router)

app.use(e.json())
app.use ("/match-bet", match_bet_router)

app.use(e.json())
app.use("/jackpot", jackpot_bet)

app.use(e.json())
app.use("/competitor", competitor_router)


app.listen(process.env.API_PORT, () => {
  console.log("Aplicação rodando");
});