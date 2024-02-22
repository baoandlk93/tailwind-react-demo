import Headers from "../component/Headers.jsx";

function GuestLayout({children}) {
    return (
        <>
            <Headers/>
                {children}
        </>
    );
}

export default GuestLayout;