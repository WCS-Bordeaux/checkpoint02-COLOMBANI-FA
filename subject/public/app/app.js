'use strict'

const config = [
    "$stateProvider",
    "$urlRouterProvider",
    Config
]

const run = [
    "$state",
    Run
]

angular
    
    .module('wildNoteApp', [
        "ui.router",
        "ngResource"
    ])


    .config(config)
    .run(run)
    .factory("Users", ["$resource", function($resource) {
        return $resource("http://localhost:9000/users/",{})
    }])
    .factory("Notes", ["$resource", function($resource) {
        return $resource("http://localhost:9000/notes/:id", {id : "id"})
    }])
    // .factory("Hey", function() {
    //     return {getConseil: () => "utilise les factory pour créer ta ressource !"}
    // })

function Config($stateProvider, $urlRouterProvider) {
    const states = [
        {
            name: "home",
            url: "/",
            component: "home"
        }
    ]

    states.forEach((state) => {
        $stateProvider.state(state)
    })

    $urlRouterProvider.otherwise('/')
}

function Run($state) {
    if (!navigator.onLine) {
        $state.go("offline")
    }
}
