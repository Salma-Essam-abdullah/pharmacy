import { MenuList } from "../MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import Header from "../shared/Header";
import FooterInfo from "../shared/FooterInfo";
import Footer from "../shared/Footer";
import "../styles/style.css";
function Menu() {
  return (
    <>
    <Header/>

    <div className="menu">
      <h1 className="menuTitle">Our Products</h1>
      <div className="menuList">
        {MenuList.map((menuItem) => {
          return (
            <MenuItem
            section={menuItem.section}
              img1={menuItem.img1}
              name1={menuItem.name1}
              img2={menuItem.img2}
              name2={menuItem.name2}
              img3={menuItem.img3}
              name3={menuItem.name3}
              
            />
            
          );
        })}
      </div>
      
    </div>
   
    <FooterInfo/>
    <Footer/>
    </>
    
  );
}

export default Menu;
