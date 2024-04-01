
export const Header:React.FC<{title:string}> = ({title}) => {
    return (
        <h1 className="bg-gradient-to-tr from-slate-800 via-stone-800 to-red-300 bg-clip-text text-transparent text-3xl">
         {title}
      </h1>
    );
  };
  