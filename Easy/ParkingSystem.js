class ParkingSystem {
    constructor(big, medium, small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }
    addCar(carType) {
        switch (carType) {
            case 1:
                if (this.big > 0) {
                    this.big -= 1;
                    return true;
                }
                break;
            case 2:
                if (this.medium > 0) {
                    this.medium -= 1;
                    return true;
                }
                break;
            case 3:
                if (this.small > 0) {
                    this.small -= 1;
                    return true;
                }
                break;
        }
        return false;
    }
}
/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */ 
//# sourceMappingURL=ParkingSystem.js.map