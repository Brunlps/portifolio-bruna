import AOS from "aos";
import 'aos/dist/aos.css';
import { CiSun } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  function dardkMode{

    
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
          offset: 100
        })
      }, [])
    
      document.documentElement.classList.add('dark')
    
      useEffect(() => {
        AOS.refresh()
      }, [darkMode])
    
      const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.documentElement.classList.toggle('dark');
      }
  }
  return (
    <>
      <nav className="bg-blend-darken bg-black ">
        <a href="">Inicío</a>
        <a href="">Sobre</a>
        <a href="">Stacks</a>
        <a href="">Projetos</a>
        <a href="">Contatos</a>

        {/* <button type="button" onClick={dardkMode() => {

          setDarkMode = { darkMode ?
            <LuSunMoon className="bg-linear-to-br from-gray-50 to-red-50 min-h-screen" />
            : <FaRegSun className="bg-linear-to-br from-gray-50 to-red-50 min-h-screen" />
        }} /> */}

      </nav>
    </>
  );

}

export default Navbar;