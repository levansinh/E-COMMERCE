const Notfound = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-y-3'>
      <img src='https://bazar-react.vercel.app/assets/images/illustrations/404.svg' />
      <div className='flex items-center gap-3'>
        <button className='bg-danger p-2 min-w-14 text-white rounded-md'>Trang chủ</button>
        <button className='bg-danger p-2 min-w-14 text-white rounded-md'>Tải lại</button>
      </div>
    </div>
  );
};
export default Notfound;
