const axios = require("axios");
const cheerio = require("cheerio");
const {domEach} = require("cheerio/lib/utils");

/**
 * 获取目标网页HTML
 * @param url
 * @param query
 * @returns {Promise<unknown>}
 */
async function getTargetUrlHtml(url, query = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: query,
            headers: {
                referer: url,
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.35"
            },
            timeout: 1000 * 5
        }).then((xhr) => {
            if (xhr.status === 200) {
                resolve(xhr.data);
            } else {
                reject(xhr.statusText)
            }
        }).catch(reject);
    })
}

/**
 * 加载网页为jquery对象
 * @param html
 * @returns {CheerioAPI}
 */
function readHtmlString2JqueryObject(html) {
    return cheerio.load(html);
}

/**
 * 解析壁纸返回结果为json
 * @returns {Promise<void>}
 */
async function decodeResult2Json(url, query) {
    let total = 0, pageSize = 0, lastPage = 1, currentPage = 1, data = [];

    currentPage = parseInt(query.page) || 1;

    try {
        let html = await getTargetUrlHtml(url, query);
        let $ = readHtmlString2JqueryObject(html);

        let $title = $("#main>header>h1");
        total = parseInt($title.text().replace(/[^0-9]/g, "")) || 0;
        if (currentPage > 1 && total === 0) {
            $title = $("#main>#thumbs>section.thumb-listing-page>.thumb-listing-page-header>h2");
            total = parseInt($title.text().replace(/^.+\//g, "")) || 0;
        }

        let $thumbs = $("#main>#thumbs>section.thumb-listing-page>ul>li>figure.thumb");

        pageSize = $thumbs.length;
        lastPage = Math.ceil(total / pageSize);

        for (let i = 0; i < pageSize; i++) {
            let $thumb = $thumbs.eq(i);

            const $img = $thumb.find("img.lazyload");
            const $a = $thumb.find("a.preview");

            const thumb = $img.attr("data-src");
            const detail = $a.attr("href");

            const regex = /^(https:\/\/)(\w+)(.+?\/)(small)(\/\w+\/)(\w+\.\w+)$/g
            const replace = "$1w$3full$5wallhaven-$6";

            const url = thumb.replace(regex, replace)

            data.push({thumb, detail, url})
        }

    } catch (e) {
        console.error(e.message)
    }

    return {total, pageSize, data, lastPage, currentPage}
}

module.exports = {
    getTargetUrlHtml,
    readHtmlString2JqueryObject,
    decodeResult2Json
}