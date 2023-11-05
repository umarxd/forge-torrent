const ErrorBox = ({ error }: { error: string | null }) => {
  return (
    <>
      {error && (
        <div className="w-max bg-gray-600 px-4 py-2 rounded-md text-white">
          {error}
        </div>
      )}
    </>
  );
};

export default ErrorBox;
