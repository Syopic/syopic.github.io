angular.module("sara").controller("AppCtrl",["$q","$scope","$rootScope","$http","$location","$scope",function(s,e,a,i,t){var l=this,o=["layout","layout-header-fixed"];a.serverURL="#",a.serverMode=!1,l.navbar={},l.navbar.hide=!0,l.navbar.toggle=function(){this.hide=!this.hide},l.search={},l.search.isCollapsed=!0,l.search.toggle=function(){this.isCollapsed=!this.isCollapsed},l.sidebar={},l.sidebar.isCollapsed=!1,l.sidebar.toggle=function(){this.isCollapsed=!this.isCollapsed},l.sidebar.xs={},l.sidebar.xs.isCollapsed=!0,l.sidebar.xs.toggle=function(){this.isCollapsed=!this.isCollapsed},a.$on("$stateChangeStart",function(s,e){l.cssClasses=_.join(_.get(e,"data.cssClasses",o)," "),l.sidebar.isFixed=_.includes(l.cssClasses,"layout-sidebar-fixed")}),e.getClass=function(s){return t.path().substr(0,s.length)===s?"active":""}}]);