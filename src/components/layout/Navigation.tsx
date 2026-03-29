export default function Navigation() {
    const isUserLoggedIn: boolean = true;
    const appName: string = "ReactInit";
    return (
        <nav className="items-center bg-gray-900 border-b border-gray-800 flex justify-between">
            <div className="p-4 font-bold text-2xl">{appName}</div>
            {isUserLoggedIn
                ? <button className="p-2 text-white bg-gray-800 border border-gray-700">Profile</button>
                : <button className="p-2 text-white bg-gray-800 border border-gray-700">Login</button>
            }
        </nav>
    )
}