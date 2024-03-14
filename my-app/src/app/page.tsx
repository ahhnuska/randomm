import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
     
    <h1>Welcome to the crystal shop!</h1>
    <ul>
      <li>
    <Link href="crystals/Amethyst">Amethyst</Link>
    </li>
    <li>
    <Link href="crystals/Citrine">Citrine</Link>
    </li>
    <li>
    <Link href="crystals/Carnelite">Carnelite</Link>
    </li>
    </ul>

    <section>
      <form
      
      >
        <input type="email" placeholder="Enter the type of crystal you want to add"/>
        <br/>
        <button type="submit">Add</button>
        
      </form>

    
      <form>
        <input type="email" placeholder="Delete"/>
        <br/>
        <button type="submit">Delete</button>
      </form>

    </section>
    </section>
    
  )
}

