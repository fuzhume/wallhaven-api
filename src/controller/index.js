const Base = require('./base.js');

module.exports = class extends Base {
    indexAction() {
        const {ctx} = this;

        ctx.body = {
            code: 200,
            msg: "接口服务器运行正常"
        }
    }
};
