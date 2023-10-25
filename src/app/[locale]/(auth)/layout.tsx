export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const isLogin = true;
    return (
       <>
           <p>auth layout</p>
           {children}
       </>
    )
}
