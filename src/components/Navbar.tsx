import { Menu } from 'lucide-react';
import logomark from '../assets/logomark.png';
import icon from '../assets/Icon.svg';
import search from '../assets/search.svg';
import dark from '../assets/Vector.svg';
import pfp from '../assets/pfp.svg';
import group from '../assets/Group.svg';
import Today from '../assets/Today.svg';
import imp from '../assets/Imp.svg';
import planned from '../assets/planned.svg';
import tome from '../assets/tome.svg';
import Plus from '../assets/Plus.svg';
import bar from '../assets/bar.svg';
import { useState } from 'react';


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

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

            {/* <button className=' flex gap-1'> */}
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
            {/* </button> */}

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

      {/* Sidebar */}
      {sidebar ? (
        <div className="flex flex-col items-center" style={{ fontFamily: "Outfit", backgroundColor: '#EEF6EF', width: 280, gap: 9, marginTop: 102 }}>
          <img src={pfp} alt="profile-photo" height={118} width={118} style={{ borderRadius: 2947, marginTop: -59 }} />
          <div className=''>Hey, ABCD</div>
          <div style={{ height: 248, width: 240, backgroundColor: '#FBFDFC' }} className=' flex flex-col pt-6 pb-6'>
            <button className=' min-h-10 gap-4 pt-2 pr-4 pb-2 pl-4 flex'>
              <img height={20} width={17} className='mt-1 ' src={group} alt="" />
              <span>All Tasks</span>
            </button>
            <button className='min-h-10 gap-4 pt-2 pr-4 pb-2 pl-4 flex' style={{ backgroundColor: '#35793729', borderRadius: 8 }}>
              <img height={20} width={17} className='mt-1 ' src={Today} alt="" />
              <div>Today</div>
            </button>
            <button className='min-h-10 gap-4 pt-2 pr-4 pb-2 pl-4 flex' >
              <img height={20} width={17} className='mt-1 ' src={imp} alt="" />
              <div>Important</div>
            </button>
            <button className='min-h-10 gap-4 pt-2 pr-4 pb-2 pl-4 flex' >
              <img height={20} width={17} className='mt-1 ' src={planned} alt="" />
              <div>Planned</div>
            </button>
            <button className='min-h-10 gap-4 pt-2 pr-4 pb-2 pl-4 flex' >
              <img height={20} width={17} className='mt-1 ' src={tome} alt="" />
              <div>Assigned to me</div>
            </button>
          </div>

          <div className=' pt-6 pb-6 min-w-60 min-h-10 gap-4 flex ' style={{ height: 88,
             backgroundColor: '#FBFDFC' 
             }}>
            <div style={{ height: 40, width: 240 }} className='flex gap-4 pt-2 pr-4 pb-2 pl-4' >
              <img height={20} width={20} className='' src={Plus} alt="" />
              <div>Add list</div>
            </div>
          </div>

          <div style={{width:261,paddingTop:7,paddingBottom:7,height:321.13}} className='pr-3 pl-3'>
            {/* <div style={{height:321.13,width:237,paddingTop:7,paddingBottom:7,backgroundColor:'#FFFFFF'}}>
              <div style={{height:307.13,width:236}}>
                
              </div>
            </div> */}
            {/* <div></div>
            <div></div> */}
            <img src={bar} alt="sdkf" />
          </div>
        </div>
      ) : null}


    </div>
  );
};

export default Navbar;