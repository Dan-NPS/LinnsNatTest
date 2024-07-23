var firstPlaceHolder = function ($scope, $element) {
    this.getItems = function () {
        var items = [{
            key: "testButton",
            text: "Test Button"
        }];

        return items;
    }

    this.isEnabled = true;

    this.onClick = function ($event) {
    
        new Core.Window({
            windowName: 'ProductStats',
            moduleName: 'ProductStats',
            onWindowClosed: function (event) {
                       
            }
        }).open();
    }
}

Core.PlaceHolderManager.register({
    moduleName: "MyInventory",
    placeHolderName: "Test Button"
}, firstPlaceHolder);
