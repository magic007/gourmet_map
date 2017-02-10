# gourmet_map
微信小程序-美食地图（v1.0.0）——“发现最地道的美食”。

# 项目地址
![小程序二维码](http://wx3.sinaimg.cn/mw690/8f8f5f45gy1fclsqoy7g2j2076086jrz.jpg)

# 截图
![](http://wx4.sinaimg.cn/mw690/8f8f5f45gy1fclr3k0bgtj21kw0p9n6y.jpg)

# 项目简介

### 二维码地址

# 项目说明

## 功能清单
* 美食点列表：当前位置为中心，周围top50的美食点列表。
* 美食点详情：查看美食点详情，点击swiper可以预览图片，可以查看地理位置信息，可以评论（无回复功能）
* 查看地图：已地图的形式显示美食点。
* 新增美食点：发现地道美食，选择位置信息，拍至多3张照片，附上标题、地址及说明，可以新增一个美食点。

## 项目架构
* 前端用微信小程序的那一套，文档地址：https://mp.weixin.qq.com/debug/wxadoc/dev/api/
* 后端用的Bmob，就用到3个表:```wxuser gourmet comment```，为了灵活配置一些东西，你可以弄个config表，例如配置最多上传的图片个数 。官网：http://www.bmob.cn/
* 小程序具体项目架构规范，请参考官网文档。

# 准备工作
* 请注册一个Bmob账号，新建一个应用，配置微信appid和secret，并获取Bmob应用的 Application ID和REST API KEY。 
* 登录微信公众号平台https://mp.weixin.qq.com/，配置小程序的请求地址。参照：http://docs.bmob.cn/data/wechatApp/a_faststart/doc/index.html

# 快速开始
第一步，```git clone git@github.com:LanceCong/gourmet_map.git```，下载代码。    
第二步，复制项目中/utils/bmob_init_pub.js，粘贴到当前路径，命名为bmob_init.js。  
第三步，修改bmob_init.js，改成你的 Application ID和REST API KEY。  
第四步，然后就初始化好项目了，导入微信的的“web开发者工具”，扫码运行吧。

# 需要帮助
* 一个icon（我设想是一个包子或烧卖什么的，在一个地图上）
* ~~Bmob更高权限~~(目前来看貌似够用了)
* ~~一个认证的小程序账号~~（已有人愿意年后提供帮助）

# BUG 
* 发现坑欢迎修复提交合并。

# TODO
* 美食点按距离排序（貌似是Bmob的bug，near方法没用，年后再问客服）