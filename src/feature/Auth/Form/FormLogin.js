import HeaderForm from "./components/HeaderForm";

export default function FormLogin() {
  return (
    <>
      <div className="min-h-[427px] w-[400px] rounded border bg-white shadow">
        <HeaderForm title={"Đăng nhập"} />
        <div className=" px-[30px] pb-[30px] pt-0">
          <div className="mb-[10px]">
            <input
              className="focus:shadow-outline w-full appearance-none rounded-sm border px-3 py-3 text-sm leading-tight text-gray-700 shadow focus:outline-none"
              id="username"
              type="text"
              placeholder="Tên đăng nhập"
            />
            <div className="text-xs text-primary">Vui lòng điền mục này</div>
          </div>
          <div className="mb-[10px]">
            <input
              className="focus:shadow-outline w-full appearance-none rounded-sm border px-3 py-3 text-sm leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="Mật khẩu"
            />
            <div className="text-xs text-primary">Vui lòng điền mục này</div>
          </div>
          <button className="w-full appearance-none rounded-sm bg-primary py-3 text-sm font-semibold uppercase text-white">
            đăng nhập
          </button>
          <div className="mb-[10px] flex w-full flex-row justify-between py-1 text-xs text-blue-600">
            <div>Quên mật khẩu</div>
            <div>Đăng nhập với SMS</div>
          </div>
          <div className="mb-[10px] w-full">
            <div></div>
            <span className="text-sm uppercase">hoặc</span>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
