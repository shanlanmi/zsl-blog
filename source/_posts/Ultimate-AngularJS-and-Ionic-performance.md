----
title: Ultimate AngularJS and Ionic performance
date: 2016-10-05 04:26:32
categories:
- AngularJS
----
AngularJS and Ionic performance is often questioned. The reason is because it does not necessarily comes out of the box. This post list all you need to focus on in order to get the best performance and user experience out of them.


As a lot of persons have asked me about how to improve AngularJS and/or Ionic performance. To avoid repeating myself on forums or on Slack I decided to create this ultimate cheat sheet list!

## AngularJS

### $watch

If you ever need to use $watch to listen to scope changes, you better use the right one. Indeed watched properties are examined on every call to $digest(), and therefore influence your application performance. There are three different ways to $watch scope properties:

#### $watch(watchExpression, listener, [objectEquality]);

> Registers a listener callback to be executed whenever the watchExpression changes.

This is the basic $watch, it can be used like this:

    $scope.$watch('watchExpression', function(newVal, oldVal){
        if(newVal){
            // watchExpression has changed.
        }
    });
    

If watchExpression is an object that contains objects you can use objectEquality as true to deep watch watchExpression. While this is a super feature to have, it has a huge impact on your application performance:

    $scope.$watch('watchExpression', function(newVal, oldVal){
        if(newVal){
            // watchExpression has changed.
        }
    }, true);
    

My advice is to avoid using objectEquality when possible.

#### $watchGroup(watchExpressions, listener);

> A variant of $watch() where it watches an array of watchExpressions. If any one expression in the collection changes the listener is executed.

Introduced in AngularJS 1.3, $watchGroup allows to watch several expressions at once.

    $scope.$watchGroup([
        'watchExpression',
        'watchExpression2',
        'watchExpression3'
    ], function(newVals, oldVals) {
        if (newVals[0]) {
            // watchExpression has changed.
        }
        if (newVals[1]) {
            // watchExpression2 has changed.
        }
        if (newVals[2]) {
            // watchExpression3 has changed.
        }
    });
    

While $watchGroup might not improve your application performance compare to $watch, it has the advantage to be more synthetic when watching several scope expressions.

#### $watchCollection(obj, listener);

> Shallow watches the properties of an object and fires whenever any of the properties change (for arrays, this implies watching the array items; for object maps, this implies watching the properties). If a change is detected, the listener callback is fired.

$watchCollection can be considered in between the $watch and the $watch with objectEquality (deep watch). It also works comparing object references but with the advantage to also shallow watches the properties of your object.

For instance adding an element to an array that you watch will not trigger the normal $watch but trigger the $watch with objectEquality and the $watchCollection.

I recommend using the $watchCollection over the $watch with objectEquality when necessary. It is less expensive and therefore better for performance.

To go further on $watch and $watchCollection differences I recommend this article by Ben Nadel: [http://www.bennadel.com/blog/2566-scope-watch-vs-watchcollection-in-angularjs.htm][1]

- - -

### One-time binding

> An expression that starts with > ::>  is considered a one-time expression. One-time expressions will stop recalculating once they are stable, which happens after the first digest if the expression result is a non-undefined value.

One-time binding :: was also introduced in Angular 1.3. It has a real impact on your application performance.

Basically using One-time binding :: on expression will remove it from the $watchers list when populated. It means that the expression will **not be able to update even if the data changes**.

For instance displaying the user first name on an application is unlikely to be updates, therefore is a good candidate for One-time binding :::

    {{::user.first_name}}
    

My advice is to go through all your applications views and think about what could or could not be updated and use One-time binding :: accordingly. It will be a huge relief for the digest cycle!

- - -

### Track by

track by is used to avoid useless DOM manipulation when using ng-repeat. Indeed if the digest cycle finds that at least one element of your collection has changed, ng-repeat will re-render all elements. DOM manipulation always has effects on the application performance, the less you have the better. To avoid re-rendering the complete collection and only change the elements that need to be changed use track by with a unique identifier.

Change your code from that:

ng-repeat="user in users"ng-repeat="user in users track by user.id" (if users have a unique id) or ng-repeat="user in users track by $index" if they don’t. $index is added by ng-repeat to each elements of your collection.

- - -
### Log

When using AngularJS do not use console.log, having them on a production application can slow down performances ([see this jsperf][2]). Some tools such as [gulp-strip-debug][3] automatically removes them from your code but my advice is not use console.log at all. AngularJS has a built in service that just does that: $log. It can be switched off using the $logProvider provider:

    angular.module('yourModule').config(function($logProvider) {
        if (/* test if in production */) {
            $logProvider.debugEnabled(false);
        }
    });
    

The $log service has several log levels .info.debug and .error.

- - -

### Debug

AngularJS by default adds scope references to the DOM for tools such as [angularjs-batarang][4] to work. This has an impact on your application performance.

It can be disabled using the $compileProvider provider:

    angular.module('yourModule').config(function($compileProvider) {
        if (/* test if in production */) {
            $compileProvider.debugInfoEnabled(false);
        }
    });
    

- - -

### Loops

Depending on the browser you use, JavaScript performance can be different. I set up 9 loop tests that go through an array of one hundred elements:

    var arr = new Array(100);
    
    # while loop
    var i = 0;
    while (i < arr.length) {
      arr[i];
      i++;
    };
    
    # cached while loop
    var i = 0,
      len = arr.length;
    while (i < len) {
      arr[i];
      i++;
    };
    
    # Reverse while loop
    var i = arr.length;
    while (i--) {
      arr[i];
    };
    
    # for loop
    for (var i = 0; i < arr.length; ++i) {
      arr[i];
    };
    
    # cached for loop
    var i = 0,
      len = arr.length
    for (; i < len; ++i) {
      arr[i];
    };
    
    # Reverse for loop
    for (var i = arr.length; i--;) {
      arr[i];
    };
    
    # Angular foreach
    angular.forEach(arr, function(value, i) {
      arr[i];
    });
    
    # Native foreach
    arr.forEach(function(value, i) {
      arr[i];
    });
    
    # Lodash foreach
    _.forEach(arr, function(value, i) {
      arr[i];
    });
    

At the end we can [compare the results][5]. What is the most performant way to iterate on an Array? Well apparently the “cached for loop” tend to be the best alternative across browsers. Native and Angular foreach are just 13 times less efficient than the cached loop…

The “cached for loop” does not re-evaluate the arr.length at every iteration, that’s why is it faster than the normal “for loop”.

It is also interesting to notice that [lodash][6] performance is four times better than angular foreach. If you do not like to use native for loops I recommend using lodash (I love this lib).

- - -

### Animations

According to Ben Nadel’s blog post: [Enable Animations Explicitly For A Performance Boost In AngularJS][7] it is possible to force ngAnimate to only target elements that have a specific class name instead of checking all elements seeking for elements that could animate.

    angular.module('yourModule').config(function($animateProvider) {
        $animateProvider.classNameFilter( /\banimated\b/ );
    });
    

I personally have not tested this approach but according to Ben Nadel’s numbers it could make a significant performance enhancement.

- - -

## Ionic

### Native scrolling

Native scrolling was released in May 2015 with Ionic 1.0. Before that Ionic relied on the JavaScript scrolling which was created to have proper events for features such as “Pull To Refresh”, Infinite Scrolling, List Reordering, or Collection Repeat. Browsers evolved to handle native scrolling events but mostly on Android, iOS in Cordova still doesn’t have completely native scroll events.

Native scrolling can be enabled using overflow-scroll=”true” on your ion-content or using the $ionicConfigProvider provider:

    angular.module('yourModule').config(function($ionicConfigProvider) {
        $ionicConfigProvider.scrolling.jsScrolling(false);
    });
    

My advice is to always enable it, once you have tested it you cannot live without it!

[More information][8]

- - -

### Collection repeat

The collection-repeat directive is a directive that allows you to render lists with thousands of items and experience little to no performance penalty. It renders into the DOM only as many items as are currently visible.

Collection repeat is good for performance, but not on every cases. Indeed Collection repeat must $watch every item and item properties of your collection (you cannot use the One-time binding or track by with it). Depending on the data you want to display the number of $watchers can slow down your application.

    <ion-content>
      <ion-item collection-repeat="item in items">
        {{item}}
      </ion-item>
    </ion-content>
    

Another downside is that you cannot use native scrolling with a collection repeat.

[More information][9]

- - -

### Infinite Scroll

The<ion-infinite-scroll> directive allows you to call a function whenever the user gets to the bottom of the page or near the bottom of the page. It has the advantage to only load the right amount of data that the user needs.

    <ion-content ng-controller="MyController">
      <ion-list>
      ....
      ....
      </ion-list>
    
      <ion-infinite-scroll
        on-infinite="loadMore()"
        distance="1%">
      </ion-infinite-scroll>
    </ion-content>
    

From my experience in a lot of cases using the infinite scroll combined with the [One-time binding][10], [track by][11] and the [Native scrolling][12] is way better in terms of performance than a collection repeat.

[More information][13]

- - -

### View cache

The view cache is one of Ionic’s killer feature. If enabled it keeps views in the DOM cache with their scope, current state, and scroll position. When navigating you never lose your input or scroll position so you can go back in history without the fear of losing data.

What about performance then? Well when a page is cached its scope is disconnected from the `$watch `cycle and reconnected when used again. It means that the number of `$watchers` are the same as if you do not use the view cache. However keeping views in the DOM and saving theirs states in memory have an impact on the application performance. My advice is to use this feature (it is a MUST have) but to cache only a reasonable amount of pages using the `$ionicConfigProvider` provider:

    angular.module('yourModule').config(function($ionicConfigProvider) {
        $ionicConfigProvider.views.maxCache(5);
    });
    

By default, Ionic will cache a maximum of 10 views, and not only can this be configured, but you can also explicitly state which views should and should not be cached using the <ion-view cache-view="false"> directive or the UI router $stateProvider provider.

    $stateProvider.state('myState', {
       cache: false,
       url : '/myUrl',
       templateUrl : 'my-template.html'
    });
    

[More information][14]

- - -

### Events

When using AngularJS it is considered a good practice to load your data using the $viewContentLoaded event in controllers. When using Ionic SDK, this event is not usable, instead we have access to more specific events. The Ionic view cache comes with 8 new events, for instance `$ionicView.loaded` is triggered once per view being created and added to the DOM while the `$ionicView.enter` event will fire, whether it was the first load or a cached view.

Using the right event to load your data can improve the usability of the application. Indeed the less HTTP requests you send the better for the usability.

Here is the complete list of events that you can use with Ionic:

```JS
$scope.$on('$ionicView.loaded', function(){});
$scope.$on('$ionicView.enter', function(){});
$scope.$on('$ionicView.leave', function(){});
$scope.$on('$ionicView.beforeEnter', function(){});
$scope.$on('$ionicView.beforeLeave', function(){});
$scope.$on('$ionicView.afterEnter', function(){});
$scope.$on('$ionicView.afterLeave', function(){});
$scope.$on('$ionicView.unloaded', function(){});
```
    

[More information][15]

- - -

### Native transitions

It is now possible to use native transitions within Ionic applications. I created [ionic-native-transitions][16], a plugin that helps you configuring [Telerik’s native transition Cordova plugin][17].

[More information][18]

### Using the GPU hack
What this does is force the browser to create a new layer and send the rendering to the GPU instead of the CPU. 
This might speed up your animations, but testing is key here.
```css
-webkit-transform: translateZ(0);
-webkit-transform: translate3d(0, 0, 0);
```
- - -

## Cordova

### Crosswalk

I highly recommend using [Crosswalk][19]. Basically it embedded the latest chromium into the app (adding around 20Mb per apk: ARM and X86) so you have the same experience on every android version/device.

Installing it is as easy as that:

    cordova plugin add cordova-plugin-crosswalk-webview@1.2.0
    

Try it out, for me Crosswalk has been a game changer in the hybrid industry, it makes applications smoother.

- - -

That’s all I could come up with on top of my head, if I missed things please let me know by commenting.

[0]: ./ionic_angular.jpg
[1]: http://www.bennadel.com/blog/2566-scope-watch-vs-watchcollection-in-angularjs.htm
[2]: http://jsperf.com/logs-impact
[3]: https://www.npmjs.com/package/gulp-strip-debug
[4]: https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en
[5]: http://jsperf.com/simple-js-loop-comparison/3
[6]: http://julienrenaux.fr/2015/08/24/ultimate-angularjs-and-ionic-performance-cheat-sheet/lodash.com
[7]: http://www.bennadel.com/blog/2935-enable-animations-explicitly-for-a-performance-boost-in-angularjs.htm
[8]: http://blog.ionic.io/native-scrolling-in-ionic-a-tale-in-rhyme/
[9]: http://ionicframework.com/docs/api/directive/collectionRepeat/
[10]: http://julienrenaux.fr/2015/08/24/ultimate-angularjs-and-ionic-performance-cheat-sheet/#one-time-binding
[11]: http://julienrenaux.fr/2015/08/24/ultimate-angularjs-and-ionic-performance-cheat-sheet/#track-by
[12]: http://julienrenaux.fr/2015/08/24/ultimate-angularjs-and-ionic-performance-cheat-sheet/#native-scrolling
[13]: http://ionicframework.com/docs/api/directive/ionInfiniteScroll/
[14]: http://ionicframework.com/docs/api/directive/ionNavView/
[15]: http://ionicframework.com/docs/api/directive/ionView/
[16]: https://github.com/shprink/ionic-native-transitions
[17]: http://plugins.telerik.com/cordova/plugin/native-page-transitions
[18]: http://julienrenaux.fr/2015/10/07/native-transitions-for-ionic-framework-made-easier/
[19]: https://crosswalk-project.org/