import icons from "../../assets/Tailwind CSS.svg";

function Header() {
    return (
        <div className="bg-[#000] flex justify-between items-center">
            <div className="text-[#fff] flex items-center gap- p-4">
                <h1 className="w-[100px] h-[100px] mr-2">
                    
                    <img src={icons} alt="Logo" width={100} height={100} />
                   </h1> 
                    <h4 className="text-[#fff] text-[24px]">tailwindscss</h4>
                
                
            </div>
            <div>
                <ul className="text-[#fff] flex gap-6">
                    <li>Docs</li>
                    <li>Components</li>
                    <li>Blog</li>
                    <li>GitHub</li>
                </ul>
            </div>
            <button className="text-[#fff] text-[14px] p-4 pl-[10px] py-[4px] border-3 border-amber-111">sign in </button>
        </div>
    );
}

export default Header;

        
   
