const Base = require('./base.js');
const {decodeResult2Json} = require("../util/wallhaven");

module.exports = class extends Base {
    /**
     * 壁纸搜索
     * @returns {Promise<void>}
     */
    async searchAction() {
        let {ctx} = this;
        let {request} = ctx;

        let url = "https://wallhaven.cc/search";
        let query = request.query || {};

        if (Object.keys(query).length === 0) {
            ctx.body = {
                code: -1,
                msg: "缺少必要的过滤条件"
            };
            return;
        }

        ctx.body = {
            code: 200,
            data: await decodeResult2Json(url, query)
        }
    }

    /**
     * 随机壁纸
     * @returns {Promise<void>}
     */
    async randomAction() {
        let {ctx} = this;
        let {request} = ctx;

        let url = "https://wallhaven.cc/random";
        let query = request.query || {};

        if (Object.keys(query).length === 0) {
            ctx.body = {
                code: -1,
                msg: "缺少必要的过滤条件"
            };
            return;
        }

        ctx.body = {
            code: 200,
            data: await decodeResult2Json(url, query)
        }
    }

}