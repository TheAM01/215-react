export function PageWrapper({children}: { children: React.ReactNode }) {
    return (
        <section className="bg-gray-900 text-white min-h-screen min-w-screen">{children}</section>
    )
}