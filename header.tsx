const Header = () => {
return (
    <header className = "bg-lime-400 text-stone-900 p-5 " >
     <div className = " container mx-autoflex justify-between items-center">
        <h1 className = " text-2xl font-bold"> My Next JS Project</h1>
        <nav>
         <ul className = "display: flex  text-lg text-align:center bg-orange-700  justify-evenly font-light items-start gap-3 p-10 mx-auto flex">
         <li>
            <a href = "/" className = "hover:text-red-500 " > Home</a>
            </li>
            <li>
            <a href = "/" className = " hover:text-red-500" > About</a> 
            </li>
            <li>
             <a href = "/" className = " hover:text-red-500" > Contact Us</a>  
            </li>
            </ul>
            </nav>
            </div>   
    </header>
);
} ;
export default Header;