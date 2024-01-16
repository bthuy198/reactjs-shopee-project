export default function UserInfoForm() {
  return (
    <>
      <div className="flex flex-col gap-7 ">
        <div className="flex flex-col ">
          <h1 className="font-semibold capitalize">Hồ sơ của tôi</h1>
          <p className="text-sm">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </p>
        </div>
        <div className="h-[0.5px] w-full bg-black/10"></div>
        <div className="grid grid-cols-3">
          <div className="col-span-2 pr-12">
            <form>
              <table className="w-full">
                <tr>
                  <td className="w-1/3 pb-7 text-right">Tên đăng nhập</td>
                  <td className="w-2/3 pb-7 pl-5">user</td>
                </tr>
                <tr>
                  <td className="w-1/3 pb-7 text-right">Tên</td>
                  <td className="w-2/3 pb-7 pl-5">
                    <input
                      className="w-full rounded-sm border bg-white p-3 pl-4 text-black placeholder:text-slate-400 focus:outline-none sm:text-sm"
                      type="text"
                      name="search"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 pb-7 text-right">Email</td>
                  <td className="w-2/3 pb-7 pl-5">user@gmail.com</td>
                </tr>
                <tr>
                  <td className="w-1/3 pb-7 text-right">Giới tính</td>
                  <td className="w-2/3 pb-7 pl-5">
                    <div className="flex flex-row">
                      <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] pr-5">
                        <input
                          class="border-neutral-300 dark:border-neutral-600 relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="gender_male"
                          id="gender_male"
                        />
                        <label
                          class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="gender_male"
                        >
                          Nam
                        </label>
                      </div>
                      <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] pr-5">
                        <input
                          class="border-neutral-300 dark:border-neutral-600 relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="gender_female"
                          id="gender_female"
                          checked
                        />
                        <label
                          class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="gender_female"
                        >
                          Nữ
                        </label>
                      </div>
                      <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] pr-5">
                        <input
                          class="border-neutral-300 dark:border-neutral-600 relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="radio"
                          name="gender_other"
                          id="gender_other"
                        />
                        <label
                          class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                          for="gender_other"
                        >
                          Khác
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 pb-7 text-right">Ngày sinh</td>
                  <td className="w-2/3 pb-7 pl-5">
                    <div className="flex w-full flex-row">
                      <div>
                        <select
                          id="countries"
                          class="block w-full rounded-sm border bg-white p-2.5 pl-4 text-black  focus:outline-none sm:text-sm"
                        >
                          <option selected>Ngày</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                      <div className="mx-2">
                        <select
                          id="countries"
                          class="block w-full rounded-sm border bg-white p-2.5 pl-4 text-black  focus:outline-none sm:text-sm"
                        >
                          <option selected>Tháng</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                      <div>
                        <select
                          id="countries"
                          class="block w-full rounded-sm border bg-white p-2.5 pl-4 text-black focus:outline-none sm:text-sm"
                        >
                          <option selected>Năm</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 pb-7 text-right"></td>
                  <td className="w-2/3 pb-7 pl-5">
                    <button className="rounded-sm bg-primary px-6 py-2 text-white">
                      Lưu
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <div className="">
            <div className="flex flex-col items-center justify-center border-l">
              <div className="my-5">
                <img
                  className="border-1 h-24 w-24 rounded-full border align-middle"
                  src={require("assets/images/icon-logo/account.png")}
                  alt=""
                />
              </div>
              <div className="my-4">
                <button className="rounded-sm border bg-white px-6 py-2 capitalize text-black">
                  Chọn ảnh
                </button>
              </div>
              <div className="text-sm">
                <p>Dung lượng file tối đa 1MB</p>
                <p>Định dạng: .JPEG, .PNG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
