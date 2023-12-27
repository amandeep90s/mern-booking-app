const Footer = () => {
  return (
    <div className="py-10 bg-blue-800">
      <div className="container flex items-center justify-between mx-auto">
        <span className="text-3xl font-bold tracking-tight text-white">
          MernHolidays.com
        </span>

        <span className="flex gap-4 font-bold tracking-tight text-white">
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <p className="cursor-pointer hover:underline">
            Terms &amp; Conditions
          </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
