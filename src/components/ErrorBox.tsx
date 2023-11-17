const ErrorBox = ({ error }: { error: string | null }) => {
  return (
    <>
      {error && (
        <div className="mx-auto my-4 text-center w-fit bg-gray-600 px-2 py-2 rounded-md text-sm text-white">
          {error}
        </div>
      )}
    </>
  );
};

export default ErrorBox;
