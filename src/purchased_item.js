// const {
//     Sequelize,
//     sequelize
// } = require('./connections');
import {
    Sequelize,
    sequelize
} from "./connections";
const _ = require('lodash');

function createModel() {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    return sequelize.define(
        'purchased_item', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            type_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            size_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            color_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            min_weight: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            smell_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            smell_id1: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            expr_date: {
                type: Sequelize.DATE,
                allowNull: false
            },
        }, {
            freezeTableName: true
        }
    );
}
const t = createModel();
const modelAttributes = [
    'id',
    'type_id',
    'number',
    'size_id',
    'color_id',
    'min_weight',
    'price',
    'smell_id',
    'smell_id1',
    'expr_date'
];

function pack(item) {
    return {
        id: item.id,
        type_id: item.type_id,
        number: item.number,
        size_id: item.size_id,
        color_id: item.color_id,
        min_weight: item.min_weight,
        price: item.price,
        smell_id: item.smell_id,
        smell_id1: item.smell_id1,
        expr_date: item.expr_date
    };
}
async function findAll() {
    const Model = await t.findAll({
        attributes: modelAttributes
    });

    return _.map(Model, item => {
        return pack(item);
    });
}
// export default {
//     findAll,
//     modelAttributes
// };
export default {
    findAll
};
// module.exports = {
//     createModel,
//     modelAttributes
// };