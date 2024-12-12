import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><Link to="/" className="hover:underline">Cinemate</Link> 2024
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://github.com/AndrewJCate" target='_blank' className="hover:underline me-4 md:me-6">GitHub</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/andrewjcate/" target='_blank' className="hover:underline me-4 md:me-6">LinkedIn</a>
            </li>
            <li>
                <a href="https://andrewjcate.com/" target='_blank' className="hover:underline">Portfolio</a>
            </li>
        </ul>
        </div>
    </footer>
  )
}