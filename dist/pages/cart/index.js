!function(e){var o=wx.__installedModules=wx.__installedModules||{};function t(n){if(o[n])return o[n].exports;var d=wx.__installedModules[n]=o[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,t),d.l=!0,d.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var d in e)t.d(n,d,function(o){return e[o]}.bind(null,d));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=98)}({98:function(e,o){Page({data:{openId:"",appId:"",shopId:""},onLoad:function(e){this.setData({openId:e.openId,appId:e.appId,shopId:e.shopId})},goBuy:function(e){var o=e.detail.bookKey,t=this.data,n=t.openId,d=t.appId,r=t.shopId;wx.navigateTo({url:"plugin://yzTradePlugin/buy?bookKey="+o+"&openId="+n+"&appId="+d+"&shopId="+r})},goGoodsDetail:function(e){var o=e.detail.goodsId,t=this.data,n=t.openId,d=t.appId,r=t.shopId;wx.navigateTo({url:"plugin://yzTradePlugin/goods-detail?goodsId="+o+"&openId="+n+"&appId="+d+"&shopId="+r})}})}});