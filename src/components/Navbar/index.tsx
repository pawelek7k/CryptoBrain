export const Navbar = () => {
  return (
    <header className="flex p-4 items-center justify-around">
      <h1>Logo</h1>
      <div className="flex gap-6">
        <select name="" id="">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign up</button>
      </div>
    </header>
  );
};
