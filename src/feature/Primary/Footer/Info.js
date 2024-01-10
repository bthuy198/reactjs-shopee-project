export default function Info() {
  return (
    <>
      <div className=" flex justify-center pb-9 pt-10 text-center text-xs">
        <div className="px-6 uppercase">chính sách bảo mật</div>
        <div className="px-6 uppercase">quy chế hoạt động</div>
        <div className="px-6 uppercase">chính sách vận chuyển</div>
        <div className="px-6 uppercase">chính sách trả hàng và hoàn tiền</div>
      </div>
      <div className=" flex justify-center">
        <div className="px-4">
          <a>
            <img
              className="h-10 w-28"
              src={require("assets/images/footer/cerf.png")}
            ></img>
          </a>
        </div>
        <div className="px-4">
          <a>
            <img
              className="h-10 w-28"
              src={require("assets/images/footer/cerf.png")}
            ></img>
          </a>
        </div>
        <div className="px-4">
          <a>
            <img
              className="h-10 w-28"
              src={require("assets/images/footer/cerf.png")}
            ></img>
          </a>
        </div>
      </div>
      <div className="flex justify-center px-0 pb-6 pt-2 text-xs">
        Công ty TNHH Shopee
      </div>
      <div className="grid grid-rows-4 justify-center px-0 pb-6 pt-2 text-center text-xs leading-6">
        <div>
          Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
          Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài
          hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
        </div>
        <div>
          Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên
          hệ: 024 73081221 (ext 4678)
        </div>
        <div>
          Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp
          lần đầu ngày 10/02/2015
        </div>
        <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
      </div>
    </>
  );
}
