import HeaderForm from "./components/HeaderForm";

export default function FormLogin() {
  return (
    <>
      <div className="w-[400px] rounded border bg-white shadow">
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
          <div className="mx-0 mb-[10px] flex w-full flex-row items-center text-center">
            <div className="grow">
              <hr />
            </div>
            <div className="w-1/3 grow-0 justify-center text-sm">
              <span className="uppercase">hoặc</span>
            </div>
            <div className="grow">
              <hr />
            </div>
          </div>
          <div className="mb-[10px] flex w-full flex-row">
            <div className="w-1/2">
              <button className=" rounded-sm border border-gray-400 px-10 py-2 text-sm">
                <img
                  className="inline h-4 w-4"
                  src={require("assets/images/Facebook_Logo.png")}
                ></img>
                Facebook
              </button>
            </div>
            <div className="flex w-1/2 justify-end">
              <button className="rounded-sm border border-gray-400 px-12 py-2 text-sm">
                <img
                  className="inline h-5 w-5"
                  src={require("assets/images/google.png")}
                ></img>
                Google
              </button>
            </div>
          </div>
          <div className="mb-[10px] py-4 text-center text-sm">
            Bạn mới biết đến Shopee?{" "}
            <a className="text-primary" href="/signup">
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
