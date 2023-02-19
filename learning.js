// class => 1 bản thiết kế để tạo ra 1 hoặc nhiều đối tượng

// khai báo class House
class House {
    // khai báo thuộc tính (đặc điểm) cho ngôi nhà (House)
    owner; // chủ sở hữu
    area; // diện tích
    floorCount; // số tầng
    roomCount; // số phòng
    type; // kiểu nhà

    // khai báo phương thức khởi tạo
    constructor(_owner, _area, _floorCount, _roomCount, _type) {
        this.owner = _owner;
        this.area = _area;
        this.floorCount = _floorCount;
        this.roomCount = _roomCount;
        this.type = _type;
    }

    // khai báo phương thức (hành động) cho ngôi nhà
    collapse() {
        console.log("Nhà sắp sập, vui lòng push code trước khi chạy");
    }

    jump() {
        console.log("Bạn có thể nhảy cao hơn 1 ngôi nhà");
        console.log("Bởi vì ngôi nhà không thể nhảy :v");
    }

    introduce() {
        // this là đối tượng đang gọi phương thức introduce
        console.log(this);
        console.log(`
            Chào câu, tớ là ngôi nhà của ${this.owner},
            Tớ rộng ${this.area}m2
            Tớ có ${this.floorCount} tầng
        `);
    }
}

class Motel extends House {
    discount;
    vipRoomCount;

    constructor(_owner, _area, _floorCount, _roomCount, _type, _discount, _vipRoomCount) {
        super(_owner, _area, _floorCount, _roomCount, _type);
        this.discount = _discount;
        this.vipRoomCount = _vipRoomCount;
    }
}

// tạo 1 object từ class
let motel = new Motel("Hello", 2000, 10, 50, "cottage", 20, 3);
console.log(motel);