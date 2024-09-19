import roulletBet from "../../database/models/roullet-bet-model.js";

const store = async (req, res) => {
  try {
    const drawnNumber = Math.ceil(Math.random() * 100) //numero aleatorio de 1 a 100

    req.body.drawnNumber == req.body.betNumber //se o numero aleatorio for igual o da aposta
    ?   req.body.bet.status = "WON"//se
    : (req.body.bet.status = "LOST") //if

    await roulletBet.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
    try {
        const content = await roulletBet.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        const content = await roulletBet.findById(req.params.id).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        await roulletBet.findByIdAndUpdate(req.params.id).exec()
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}



export default {
    store,
    index,
    show,
    update,

}