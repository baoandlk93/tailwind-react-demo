import HeaderSections from "../component/HeaderSections.jsx";
import Banner from "../component/Banner.jsx";
import Navbar from "../component/Navbar.jsx";


function UserLayout({children}) {


    return (
        <>
            <HeaderSections/>
            <Banner/>
            <div className="min-h-full">
                <Navbar/>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}

export default UserLayout;