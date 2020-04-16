(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ThingsToBuyController', ThingsToBuyController)
        .controller('BoughtAlreadyController', BoughtAlreadyController)
        .service('CheckoffService', CheckoffService);

    ThingsToBuyController.$inject = ['CheckoffService'];

    function ThingsToBuyController(CheckoffService) {
        var List = this;

        List.items = CheckoffService.getThingsToBuyItems();

        List.buyItem = function(itemIndex) {
            CheckoffService.buyItem(itemIndex);
        };
    }

    BoughtAlreadyController.$inject = ['CheckoffService'];

    function BoughtAlreadyController(CheckoffService) {
        var BougthList = this;
        BougthList.items = CheckoffService.getBoughtAlreadyItems();
    }

    function CheckoffService() {
        var service = this;
        var thingstoBuyItems = [
            { name: "BOOK", quantity: 5 },
            { name: "PEN", quantity: 7 },
            { name: "PENCIL", quantity: 7 },
            { name: "LAPTOP", quantity: 1 },
            { name: "IPHONE", quantity: 1 }
        ];
        var boughtAlreadyItems = [];

        service.buyItem = function(itemIndex) {
            var item = thingstoBuyItems[itemIndex];

            boughtAlreadyItems.push(item);
            thingstoBuyItems.splice(itemIndex, 1);
        };

        service.getThingsToBuyItems = function() {
            return thingstoBuyItems;
        };

        service.getBoughtAlreadyItems = function() {
            return boughtAlreadyItems;
        };
    }
})();
