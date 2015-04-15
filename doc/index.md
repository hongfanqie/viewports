---
title: 移动浏览器 viewport 概述
description: 移动浏览器 viewport 相关概念概述。
---

# 移动浏览器 viewport 概述

## 译者序

本文由 [Ivan Yan](http://yanxyz.net/) 翻译，译文版权["署名-非商用"](http://creativecommons.org/licenses/by-nc/4.0/)，意见[反馈](https://github.com/hongfanqie/viewports)。

注意这是选译，请同时参看[原文](http://www.quirksmode.org/mobile/overview.html)。

## 正文

移动浏览器 viewport 相关概念概述，截止 2013 年 11 月。

<table class="table">
  <thead>
    <tr>
      <th style="width:100px">概念</th>
      <th>说明</th>
      <th style="width:100px">JavaScript</th>
      <th style="width:100px">Media query</th>
      <th style="width:120px">Meta viewport</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Physical screen</td>
      <td>设备屏幕的物理像素数目</td>
      <td>screen.width（旧）</td>
      <td>device-width（旧）</td>
      <td></td>
    </tr>
    <tr>
      <td>Layout viewport</td>
      <td>CSS 的初始包含块，常常设置为 ideal viewport 的尺寸。</td>
      <td class="textwrap">document.documentElement.clientWidth/Height</td>
      <td>width height</td>
      <td>width</td>
    </tr>
    <tr>
      <td>Visual viewport</td>
      <td>页面可见部分</td>
      <td>window.innerWidth <br />window.innerHeight</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Ideal viewport</td>
      <td>最佳体验的尺寸</td>
      <td>screen.width <br /> screen.height</td>
      <td>device-width <br /> device-height</td>
      <td>width=device-width</td>
    </tr>
    <tr>
      <td>Resolution</td>
      <td>物理屏幕尺寸与 Ideal viewport 的比值</td>
      <td>window.devicePixelRatio</td>
      <td>resolution</td>
      <td></td>
    </tr>
    <tr>
      <td>Orientation</td>
      <td>设备方向：竖屏（portrait）横屏（landscape）</td>
      <td>window.orientation</td>
      <td>orientation</td>
      <td></td>
    </tr>
    <tr>
      <td>Zooming</td>
      <td>页面相对于 ideal viewport 的缩放率</td>
      <td></td>
      <td></td>
      <td>*-scale</td>
    </tr>
  </tbody>
</table>


目前许多移动浏览器将 `screen.width` 从物理像素值改为 ideal viewport 的宽度值，参看[此文](http://www.quirksmode.org/blog/archives/2013/11/screenwidth_is.html)。后者视为正确。

所有的 Webkit 浏览器媒体查询使用 `-webkit-device-pixel-ratio` 而不是 `resolution`。在后者胜出之前，前者视为正确。

Meta viewport 的 `initial-scale` 也会将 layout viewport 的尺寸设为缩放后的 ideal viewport 的尺寸。

## 相关文章

- [两个 viewport 的故事 （一）](1.html)
- [两个 viewport 的故事 （二）](2.html)
- [Meta Viewport](3.html)
