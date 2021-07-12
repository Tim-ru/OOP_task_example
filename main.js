class Plane {
    constructor (name, maxSpeed, status) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.status = 'on ground';
    }
    takeOff() {
        this.status = 'in the air'
    }
    landing() {
        this.status = 'on ground';
    }
    location() {
        console.log(`Plane ${this.status}`);
    }
}

class MigPlane extends Plane{
    attack() {
        this.status = 'attack'
    }
}

const mig1 = new MigPlane('МИГ', '1400км/ч') 
const tu1 = new MigPlane('ТУ-154', '700км/ч') 
