import {useState} from 'react'
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { FaCaretRight,FaHome ,FaCaretLeft  } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { MdMovie ,MdOutlineSportsBaseball  } from "react-icons/md";
import { LuRadioReceiver } from "react-icons/lu";

const SideSlidingBar = () => {
    const [collapsed, setCollapsed] = useState(true);

    let iconRotationStyle = {
      transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.5s ease-in-out'
    };                                          
  
    return (
      <div style={{ display: 'flex', height: '91%', minHeight: '400px',position:"fixed",top:"65px",zIndex:"110"}}>
        <Sidebar className='sidebar_item' collapsed={collapsed}>
           <div style={{display:"flex", flexDirection:"column",justifyContent:"space-between",height:"100%",backgroundColor:"#852547"}}>
             <div>
              <Menu >
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"28px"}} >
                      {collapsed?(<div className='icon-wrapper'><FaHome  /></div>):( <MenuItem className='Menu_item'>Home</MenuItem>)}
                      {collapsed?(<div className='icon-wrapper'><MdMovie /></div>):( <MenuItem className='Menu_item'> Movies</MenuItem>)}
                      {collapsed?(<div className='icon-wrapper'><LuRadioReceiver /></div>):( <MenuItem className='Menu_item'> Web Series</MenuItem>)}
                      {collapsed?(<div className='icon-wrapper'><MdOutlineSportsBaseball /></div>):( <MenuItem className='Menu_item'>Sports</MenuItem>)}
                  </div>
              </Menu>
             </div>
              <div style={{paddingBottom:"24px"}}>
                <Menu>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"28px"}} >
                      {collapsed?(<div className='icon-wrapper'><CgProfile  /></div>):( <MenuItem className='Menu_item'>Profile</MenuItem>)}
                      {collapsed?(<div className='icon-wrapper'><IoSettings /></div>):( <MenuItem className='Menu_item'> Settings</MenuItem>)}
                  </div>
                </Menu>
              </div>
           </div>
        </Sidebar>
        <main style={{ padding: 10 }}>
         
            <button className="sb-button"  onClick={() => setCollapsed(!collapsed)}>
              <FaCaretLeft size={22} style={iconRotationStyle} />
            </button>
        </main>
      </div>
    );
  }


  export default SideSlidingBar;