
const ua = window.navigator.userAgent.toLowerCase()

// android平台
const isAndroid = (() => {
    return /Android|Adr/i.test(ua)
})()

// ios平台
const isIos = (() => {
    return /iPhone|iPod|iPad/i.test(ua)
})()

// 微信生态
const isWechat = (() => {
    return /MicroMessenger/i.test(ua)
})()

// 微信小程序
const isWxmp = (() => {
    return /miniProgram/i.test(ua) || window.__wxjs_environment === 'miniprogram'
})()

// 钉钉环境
const isDingding = (() => {
    return /DingTalk/i.test(ua)
})()

// 自家的android客户端
const isInnerAdr = ((appName) => {
    const reg = new RegExp(appName);
    return isAndroid && reg.test(ua)
})()

// 自家的ios客户端
const isInnerIos = ((appName) => {
    const reg = new RegExp(appName);
    return isIos && reg.test(ua)
})()

// 自家的app客户端
const isInnerApp = (() => {
    return isInnerAdr || isInnerIos
})()

// 站内
const isInner = (() => {
    return isInnerAdr || isInnerIos || isWxmp
})()

// 站外
const isOuter = (() => {
    return !isInner
})()

export default {
    isAndroid,
    isIos,
    isWechat,
    isWxmp,
    isDingding,
    isInnerAdr,
    isInnerIos,
    isInnerApp,
    isInner,
    isOuter
}
