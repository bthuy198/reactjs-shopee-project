export default function PassWord() {
  return (
    <>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col ">
          <h1 className="text-lg font-semibold capitalize">Đổi mật khẩu</h1>
          <p className="text-sm">
            Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
          </p>
        </div>
        <div className="h-[0.5px] w-full bg-black/10"></div>
        <div>
          <form>
            <table className="w-2/3 text-sm">
              <tr>
                <td className="w-1/4 pb-7 text-right">Mật khẩu mới</td>
                <td className="w-3/4 pb-7 pl-5">
                  <input
                    className="w-full rounded-sm border bg-white p-2 pl-4 text-black placeholder:text-slate-400 focus:outline-none sm:text-sm"
                    type="password"
                    name="search"
                  />
                </td>
              </tr>
              <tr>
                <td className="w-1/4 pb-7 text-right">Xác nhận mật khẩu</td>
                <td className="w-3/4 pb-7 pl-5">
                  <input
                    className="w-full rounded-sm border bg-white p-2 pl-4 text-black placeholder:text-slate-400 focus:outline-none sm:text-sm"
                    type="password"
                    name="search"
                  />
                </td>
              </tr>
              <tr>
                <td className="w-1/3 pb-7 text-right"></td>
                <td className="w-2/3 pb-7 pl-5">
                  <button className="rounded-sm bg-primary px-6 py-2 text-white">
                    Xác nhận
                  </button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}
