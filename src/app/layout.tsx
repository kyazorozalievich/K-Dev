import Head from 'next/head';

export const metadata = {
	title: 'Your New Title',
	description: 'Your description here'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}
