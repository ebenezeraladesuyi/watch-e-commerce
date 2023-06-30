interface iButton {
    buttonTitle: string;
    back?: string;
}

const Button: React.FC<iButton> = ({buttonTitle, back}) => {
  return (
    <button className= {`${ back ? "bg-blue-500 text-white w- p-[10px] pr-[20px] pl-[20px] m-3 border-none font-bold font-roboto rounded " : "bg-gray-300 text-gray-500 p-[10px] pr-[20px] pl-[20px] hover:text-white hover:bg-blue-500 font-bold font-roboto rounded transition-all ease-in-out duration-1000"}`}>
            {buttonTitle}
    </button>
  )
}

export default Button