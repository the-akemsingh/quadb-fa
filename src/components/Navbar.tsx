import { Menu } from 'lucide-react';
import logomark from '../assets/logomark.png';
import icon from '../assets/Icon.svg';
import search from '../assets/search.svg';
import dark from '../assets/Vector.svg';



const Navbar = ({setSidebar,sidebar}:{setSidebar:any,sidebar:boolean}) => {

  return (
    <div className=' flex flex-col'>
      <div style={{ backgroundColor: "#FBFDFC" }} className="pt-3 pb-3 justify-between flex min-w-screen">

        <div style={{ width: 138 }} className="flex gap-6 min-h-8">
          <button onClick={() =>
            setSidebar(!sidebar)
          }>
            <Menu height={24} width={24}></Menu>
          </button>
          <div className='flex gap-1' style={{ width: 90 }}>

            <img src={logomark} alt="logo" width={32} height={90} />
            <div style={{
              fontFamily: "Sen, ",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "30px",
              letterSpacing: "-4%",
              color: "#3F9142",
              verticalAlign: "middle"
            }}>DoIt</div>

          </div>
        </div>

        <div className=" flex gap-6">
          <button>
            <img src={search} alt="search-icon" height={18} width={18} />
          </button>
          <button>
            <img src={icon} alt="icon" width={18} height={18} />
          </button>
          <button>
            <img src={dark} alt="icon" width={18} height={18} />
          </button>
        </div>

      </div>

    </div>
  );
};

export default Navbar;