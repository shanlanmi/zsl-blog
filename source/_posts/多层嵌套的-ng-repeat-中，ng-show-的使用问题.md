----
title: 多层嵌套的 ng-repeat 中，ng-show 的使用问题
date: 2016-10-25 18:38:34
categories:
- AngularJS
----
因为在`ng-repeat`命令下会创建多个子 scope，而 `ng-show`的判断值必须挂在 controller 的`$scope`下，所以需要调用如下命令来把ng-repeat 的 `scope` 挂在 `$scope` 下：
```
ng-init=“parent=$parent”
```

以下是具体的例子：
```HTML
<body>
  <div ng-app="myAppApp">
    <div ng-controller="MainCtrl">
      <div ng-repeat="note in notes" ng-init="parent=$parent">
        {{note.id}} - {{note.label}} -
        <a href="#" ng-click="parent.flag = true;reach(111);">click me</a>

      </div>

      <div class="row" id="" ng-show="flag">I'm Here</div>
    </div>
  </div>
</body>
```

多层 ng-repeat 同样适用，例子如下：
```jade
.school(ng-repeat="school in programLeads track by $index", ng-init="schoolIndex = $index; parent = $parent;")
  .program(ng-repeat="program in school.programs")
    h4.programTitle(ng-bind="::program.name")
    img.degreeIcon(ng-src="img/profiles/profile_degree@3x.png")
    p.degree(ng-bind="::program.degree")
    .programFrom
      img.schoolLogo(ng-src="{{school.logo_url}}")
      .schoolInfo
        .schoolName(ng-bind="::school.name")
        .inquiries(ng-bind="::program.monthly_inquiry + '(Last 30 Days)'")
        img.upIcon(ng-src="img/Navigation/navigation_back_blue@3x.png",
        ng-click="parent.display[schoolIndex][$index] = !parent.display[schoolIndex][$index]")
    .programDetail(ng-show="display[schoolIndex][$index]")
```