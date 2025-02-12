import IconImg from "./IconImg";

const WelcomeTab = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#222] text-gray-200">
      <IconImg
        src="/icons/vscode.svg"
        className="w-64 h-64 mb-8 filter brightness-0 "
      />
      <div className="space-y-2">
        <p className="text-lg filter brightness-50 text-center">
          Open a file to start coding
        </p>
      </div>
    </div>
  );
};

export default WelcomeTab;
