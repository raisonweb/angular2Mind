"use strict";
var Hero = (function () {
    // 这是一个少量需求和零行为的贫血模型
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map