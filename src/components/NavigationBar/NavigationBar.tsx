export const NavigationBar = () => {
  return (
    <nav className="bg-white flex justify-between items-center p-4 border-b-2">
      <div className="flex items-center">
        <img
          src="./images/Rectangle10.png"
          alt="Mindclip Logo"
          className="h-8 md:h-12"
        />
      </div>
      <div className="text-sm text-gray-600 font-semibold">BETA</div>
    </nav>
  );
};
