'use strict'

angular.module('wildNoteApp')

    .component('home', {
        templateUrl: 'app/components/home/home.html',
        controller: Home
    })

function Home($state, $scope, $resource, Users, Notes) {
    Users.get(function (data) {
        $scope.users = data.users
        
    })
    //  Notes.get(function (data) {
            
    //         console.log(data)
    // })
}

