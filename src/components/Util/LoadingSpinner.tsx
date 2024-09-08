const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-70 z-50">
    <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>{" "}
  </div>
);
export default LoadingSpinner;
