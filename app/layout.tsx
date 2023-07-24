import './globals.css';
import NavBar from './components/NavBar';
import MyProfilePic from './components/MyProvilePic';

export const metadata = {
    title: "Dave's Blog",
    description: 'Created by Dave Gray',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="dark:bg-slate-800">
                <NavBar />
                <MyProfilePic />
                {children}
            </body>
        </html>
    );
}
