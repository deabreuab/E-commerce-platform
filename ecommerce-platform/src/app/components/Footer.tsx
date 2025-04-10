export default function Footer() {
    return (
        <footer className="flex justify-center items-center flex-col bg-gray-900 text-white p-6 mt-10 max-h-20 gap-6 bottom-0 w-full">
            <div className="flex items-center">
                <div className="">
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Politicas de privacidad</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Terminos de servicio</a>
                </div>
            </div>
                <p className="text-sm">© 2025 STUK. All rights reserved.</p>
        </footer>
    )
}