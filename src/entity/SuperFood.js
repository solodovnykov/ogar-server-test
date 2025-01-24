const Cell = require('./Cell');

class SuperFood extends Cell {
    constructor(server, owner, position, size) {
        super(server, owner, position, size);
        this.type = 4;
        this.overrideReuse = false;
        this.color = {
            r: 0x00,
            g: 0x00,
            b: 0x00
        };
    }
    onAdd(server) {
        server.nodesFood.push(this);
    }
    onRemove(server) {
        server.nodesFood.removeUnsorted(this);
        if (!this.overrideReuse) server.spawnSuperFood();
    }
}

module.exports = SuperFood;
