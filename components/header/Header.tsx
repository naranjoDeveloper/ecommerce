import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href={'/'} className="btn btn-gosth text-lg">
            Ecommerce Naranjo
          </Link>
          <ul className="flex">
            <li>
              <Link href={'/cart'} className="btn btn-ghost rounded-btn">
                Carrito
              </Link>
              <Link href={'/signin'} className="btn btn-ghost rounded-btn">
                Iniciar Sesion
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
