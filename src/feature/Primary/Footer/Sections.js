import HeaderSection from "./HeaderSection";
import Image from "./Image";
import ListItem from "./ListItem";
export default function Sections() {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="p-1.5">
          <HeaderSection>chăm sóc khách hàng</HeaderSection>
          <ListItem>
            <li className="capitalize">trung tâm trợ giúp</li>
            <li className="capitalize">Shopee blog</li>
            <li className="capitalize">shopee mall</li>
            <li className="capitalize">hướng dẫn mua hàng</li>
            <li className="capitalize">hướng dẫn bán hàng</li>
            <li className="capitalize">thanh toán</li>
            <li className="capitalize">shopee xu</li>
            <li className="capitalize">vận chuyển</li>
            <li className="capitalize">trả hàng & hoàn tiền</li>
            <li className="capitalize">chăm sóc khách hàng</li>
            <li className="capitalize">chính sách bảo hành</li>
          </ListItem>
        </div>
        <div className="p-1.5">
          <HeaderSection>về shopee</HeaderSection>
          <ListItem>
            <li className="capitalize">Giới thiệu về shopee việt nam</li>
            <li className="capitalize">tuyển dụng</li>
            <li className="capitalize">điều khoản shopee</li>
            <li className="capitalize">chính sách bảo mật</li>
            <li className="capitalize">chính hãng</li>
            <li className="capitalize">kênh người bán</li>
            <li className="capitalize">flash sales</li>
            <li className="capitalize">
              chương trình tiếp thị liên kết shopee
            </li>
            <li className="capitalize">liên hệ với truyền thông</li>
          </ListItem>
        </div>
        <div className="grid grid-rows-2 p-1.5">
          <div>
            <HeaderSection>thanh toán</HeaderSection>
            <div className="grid grid-cols-3 gap-y-2">
              <Image name={"payment1.png"} />
              <Image name={"payment2.png"} />
              <Image name={"payment2.png"} />
              <Image name={"payment1.png"} />
              <Image name={"payment1.png"} />
              <Image name={"payment2.png"} />
              <Image name={"payment1.png"} />
              <Image name={"payment2.png"} />
            </div>
          </div>
          <div>
            <HeaderSection>đơn vị vận chuyển</HeaderSection>
            <div className="grid grid-cols-3 gap-y-2">
              <Image name={"shipping1.png"} />
              <Image name={"shipping2.png"} />
              <Image name={"shipping2.png"} />
              <Image name={"shipping1.png"} />
              <Image name={"shipping2.png"} />
              <Image name={"shipping2.png"} />
              <Image name={"shipping1.png"} />
              <Image name={"shipping2.png"} />
            </div>
          </div>
        </div>
        <div className="p-1.5">
          <HeaderSection>theo dõi chúng tôi trên</HeaderSection>
          <ListItem>
            <li className="capitalize">facebook</li>
            <li className="capitalize">instagram</li>
            <li className="capitalize">linkedln</li>
          </ListItem>
        </div>
        <div className="p-1.5">
          <HeaderSection>tải ứng dụng shopee ngay thôi</HeaderSection>
          <div className="grid grid-cols-2">
            <div className="p-0">
              <img
                className="h-[88px] w-[88px] rounded bg-[#ffffff] p-1 shadow"
                src={require("assets/images/footer/qr.png")}
              ></img>
            </div>
            <div className="grid grid-rows-3 gap-y-2">
              <div>
                <img
                  className="rounded bg-[#ffffff] p-1 shadow"
                  src={require("assets/images/footer/app.png")}
                ></img>
              </div>
              <div>
                <img
                  className="rounded bg-[#ffffff] p-1 shadow"
                  src={require("assets/images/footer/app.png")}
                ></img>
              </div>
              <div>
                <img
                  className="rounded bg-[#ffffff] p-1 shadow"
                  src={require("assets/images/footer/app.png")}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 px-0 py-10 text-sm">
        <div>© 2024 Shopee. Tất cả các quyền được bảo lưu.</div>
        <div>Quốc gia & Khu vực </div>
      </div>
    </>
  );
}
