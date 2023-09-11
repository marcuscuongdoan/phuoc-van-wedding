import { Banner, Van, Phuoc, ContentBox } from "../components";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        height: "100%",
      }}
    >
      <Banner />
      <Van />
      <Phuoc />
      <div
        style={{
          zIndex: 10,
        }}
      >
        <p
          style={{
            fontFamily: "Amatic SC",
            fontSize: 32,
          }}
        >
          Đám Cưới
        </p>
        <p
          style={{
            fontFamily: "Amatic SC",
            fontSize: 60,
            fontWeight: 700,
            color: "lightpink",
          }}
        >
          Phước - Văn
        </p>
        <p>Trân Trọng Kính Mời</p>

        <p>Bạn</p>
        <p>Đến dự buổi tiệc chung vui cùng gia đình chúng tôi tại:</p>
        <p
          style={{
            fontFamily: "Amatic SC",
            fontSize: 40,
            fontWeight: 700,
            color: "lightpink",
          }}
        >
          Nhà Hàng Kim Sơn
        </p>

        <p
          style={{
            fontFamily: "Amatic SC",
            fontSize: 24,
          }}
        >
          185 Liêu Bình Hương - Ấp Tân Thành, Huyện Củ Chi, TP.HCM
        </p>
        <p>Vào lúc: 11 giờ 30 - ngày 24 - 9 - 2023</p>
        <p>(Nhằm ngày 10 - 8 năm Quý Mão)</p>
        <p
          style={{
            fontFamily: "Amatic SC",
            fontSize: 24,
          }}
        >
          Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi
        </p>
      </div>
      <div
        style={{
          marginTop: "200px",
        }}
      >
        <p
          style={{
            fontFamily: "Amatic SC",
            fontSize: 60,
            fontWeight: 700,
            color: "lightpink",
          }}
        >
          Lễ Vu Quy
        </p>
        <p>Hôn lễ được cử hành tại</p>
        <p
          style={{
            fontFamily: "Amatic SC",
            fontSize: 40,
            fontWeight: 700,
            color: "lightpink",
          }}
        >
          Thánh đường Giáo xứ Bắc Hà
        </p>
        <p>Vào lúc: 5 giờ - ngày Chúa nhật 24 - 9 - 2023</p>
        <p>(Nhằm ngày 10 - 8 năm Quý Mão)</p>
      </div>
      {/* <ContentBox
        name="Lê Hoàng Văn"
        description="Trưởng Nam"
        father="Lê Hoàng Anh"
        mother="Lưu Thị Nghiêng"
        location="Xã Thạnh Phú, Huyện Cái Nước, Tỉnh Cà Mau"
      />
      <ContentBox
        name="Maria Nguyễn Thị Hồng Phước"
        description="Trưởng Nữ"
        father="Nguyễn Văn Chiến"
        mother="Maria Hồ Thị Thanh Hồng"
        location="Xã Phước Vĩnh An, Huyện Củ Chi, TP.HCM"
      /> */}
    </div>
  );
};

export default Home;
