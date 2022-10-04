import axios from 'axios';

axios.defaults.timeout = 5000

axios.jsonp = (url: string) => {
    if (!url) {
        console.error('Axios.JSONP 至少需要一个url参数!')
        return;
    }
    return new Promise((resolve, reject) => {
        window.jsonCallBack = (result) => {
            resolve(result)
        }
        var JSONP = document.createElement("script");
        JSONP.type = "text/javascript";
        JSONP.src = `${url}&callback=jsonCallBack`;
        document.getElementsByTagName("head")[0].appendChild(JSONP);
        setTimeout(() => {
            document.getElementsByTagName("head")[0].removeChild(JSONP)
        }, 500)
    })
}

axios.json2jsonp = (url: string) => axios.jsonp('https://json2jsonp.com/?url=' + url)

export async function getSearchPrompt(wd) {
    return axios.jsonp(`https://www.baidu.com/sugrec?p=3&json=1&prod=pc&wd=${wd}`)
        .then(data => data.g?.map(e => e.q))
        .catch(function (error) { // 请求失败处理
            console.log(error);
            return error;
        });
}


export function getTophub() {
    return axios.json2jsonp('https://open.tophub.today/hot')
        .then(response => {
            return response['data']['items'];
        })
        .catch(error => console.log(error));
}

