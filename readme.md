# 改动记录

**20200926**

+ add shuoshuo pages
+ valine添加企业微信

**20200927**

+ [添加加载动画](https://abobot.github.io/20210927/hexo-pure-gai-zao-ji-hua-tian-jia-jia-zai-dong-hua.html)
+ [添加hexo-lazyload-image插件（图片懒加载）](https://abobot.github.io/20210927/hexo-pure-gai-zao-ji-hua-tu-pian-lan-jia-zai.html)
+ [添加标签云](https://abobot.github.io/20210927/hexo-pure-gai-zao-ji-hua-tian-jia-biao-qian-yun.html)
  + {% post_link Hexo-pure改造计划——添加标签云 %}

---
---
**20230920更新**

*书单相关*

由于豆瓣API用不了，参考[hexo-douban](https://github.com/mythsman/hexo-douban)中的接口更改了`\themes\pure\layout\_script\douban.ejs`中的部分代码，原始文件更名为`\themes\pure\layout\_script\douban.ejs.v0`

---

*添加`readme.md`文件*

在 `Hexo` 目录下的 source 根目录下添加一个 README.md 文件，修改站点配置文件 `_config.yml`，将 `skip_render` 参数的值设置为

`skip_render: README.md`

---
---

**20230921更新**

**插入博客其他文章**

> 在引入位置插入`{* post_link filename *}`
> 
> [标签插件（Tag Plugins） | Hexo](https://hexo.io/zh-cn/docs/tag-plugins#%E5%BC%95%E7%94%A8%E6%96%87%E7%AB%A0)

**添加可折叠内容**

> {% post_link 'Hexo-静态博客添加可折叠内容' %}

**更新hexo**

> 更新hexo至6.3.0