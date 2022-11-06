const Base = require('./base.js');
const {decodeResult2Json} = require("../util/wallhaven");

const baseUrl = "https://wallhaven.cc";

module.exports = class extends Base {
    /**
     * 最新壁纸
     * @returns {Promise<void>}
     */
    async latestAction() {
        let {ctx} = this;
        let {request} = ctx;

        let url = `${baseUrl}/latest`;
        let query = request.query || {};

        ctx.body = {
            code: 200,
            data: await decodeResult2Json(url, query)
        }
    }

    /**
     * 热门壁纸
     * @returns {Promise<void>}
     */
    async hotAction() {
        let {ctx} = this;
        let {request} = ctx;

        let url = `${baseUrl}/hot`;
        let query = request.query || {};

        ctx.body = {
            code: 200,
            data: await decodeResult2Json(url, query)
        }
    }

    /**
     * 排行榜壁纸
     * @returns {Promise<void>}
     */
    async toplistAction() {
        let {ctx} = this;
        let {request} = ctx;

        let url = `${baseUrl}/toplist`;
        let query = request.query || {};

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

        let url = `${baseUrl}/random`;
        let query = request.query || {};

        ctx.body = {
            code: 200,
            data: await decodeResult2Json(url, query)
        }
    }

    /**
     * 壁纸搜索
     * @returns {Promise<void>}
     */
    async searchAction() {
        let {ctx} = this;
        let {request} = ctx;

        let url = `${baseUrl}/search`;
        let query = request.query || {};

        ctx.body = {
            code: 200,
            data: await decodeResult2Json(url, query)
        }
    }


}