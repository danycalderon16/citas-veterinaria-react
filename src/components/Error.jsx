const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white p-3 mb-3 
    font-bold text-center uppercase rounded-md">
      {children}
    </div>
  );
};

export default Error;