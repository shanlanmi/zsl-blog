----
title: Evernote Search
date: 2016-12-25 22:19:17
tags:
- Learn
----
# 高级搜索语法

操作符|描述|范例
:-|:-|:-
`intitle:`| 在笔记标题中搜索。| `intitle:`咖啡 可以搜索标题中含有“咖啡”的笔记。
`notebook:`| 在指定的笔记本中搜索笔记。| `notebook:财务` 将只搜索“财务”笔记本中的笔记。
`any:` | 将显示匹配任一 搜索关键词的笔记。默认只显示匹配全部关键词的笔记。| `any:披萨 啤酒` 
`tag:`| 搜索含有指定标签的笔记。| `tag:医疗`, `tag:*`
`-tag:`| 搜索无指定标签的笔记。| `-tag:医疗` 将搜索所有不含标签“医疗”的笔记。
`created:`| 搜索在特定日期或之后创建的笔记。<br>请注意给定的日期格式必须是这样的：YYYYMMDD或者与当前日期相关的日期（例如day-1 代表昨天，week-2表示两周之前）| `created:day-2` 搜索结果将显示最近两天内创建的笔记。<br>`created:20151218` 搜索结果将显示在2015年12月18日及之后创建的笔记。
`updated:`| 搜索在特定日期或之后更新的笔记。| `updated:day-2` 将会搜索最近两天内修改过的笔记。
`resource:`| 搜索包含特定媒体类型的笔记。| `resource:application/pdf`,`resource:image/jpeg` ,`resource:audio/*`
`latitude:`|搜索创建于给定坐标之上或附近的笔记。|`latitude:37` 将搜索其纬度值大于37的所有笔记。<br>`-latitude:38` 到你的搜索中将显示其纬度介于37到38度之间的结果。
`longitude:`|搜索创建于给定坐标之上或附近的笔记。| 同`latitude:`
`altitude:`| 搜索创建于给定坐标之上或附近的笔记。| 同`latitude:`
`source:`| 通过应用程序搜索笔记或者通过其他途径来创建它们| `source:mobile.*` 将搜索所有创建于移动版应用某一类型的所有笔记。<br>`source:web.clip` 搜索结果将显示所有通过Web Clipper创建的笔记。
`todo:`| 搜索包含一个或多个复选框的笔记。| `todo:true`,`todo:false`, `todo:*`
`encryption:`| 搜索使用Evernote内置加密系统进行部分加密的笔记。| `encryption:`

<https://dev.evernote.com/doc/articles/search_grammar.php>
