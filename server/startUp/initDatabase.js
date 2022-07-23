const Promo = require("../models/Promo");
const promoMock = require("../mock/promos.json");
const User = require("../models/User");
const userMock = require("../mock/users.json");

module.exports = async () => {
    const promos = await Promo.find()
    if (promos.length !== promoMock.length) {
        await createInitialEntity(Promo, promoMock)
    }

    const users = await User.find()
    if (users.length !== userMock.length) {
        await createInitialEntity(User, userMock)
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            }
            catch (e) {
                return e;
            }
        })
    );
};