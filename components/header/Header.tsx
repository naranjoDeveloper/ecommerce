import Link from 'next/link'
import Menu from './Menu'

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href={'/'} className="btn btn-gosth text-lg">
            Ecommerce Naranjo
          </Link>
          <ul className="flex">
            <Menu />
          </ul>
        </div>
      </nav>
    </header>
  )
}
