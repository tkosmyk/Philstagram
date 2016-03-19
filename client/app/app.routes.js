philstagram.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);
    
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
    .state('home', {
        url: "/",
        templateUrl: "/app/components/home/home.view.html",
        controller: "HomeCtrl"
    })
    .state('login', {
        url: "/login",
        templateUrl: "/app/components/login/login.view.html"
    })
    .state('postcode',{
        url:"/postcode",
        temlateUrl: "/app/components/postcode/postcode.view.html",
        controller: "HomeCtrl"
    });
});