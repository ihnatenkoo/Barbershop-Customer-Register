import ContentLoader from 'react-content-loader';

const ServicesListSkeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={770}
			height={310}
			viewBox="0 0 770 310"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="2" y="10" rx="0" ry="0" width="350" height="18" />
			<rect x="2" y="50" rx="0" ry="0" width="350" height="18" />
			<rect x="2" y="90" rx="0" ry="0" width="350" height="18" />
			<rect x="2" y="130" rx="0" ry="0" width="350" height="18" />
			<rect x="2" y="170" rx="0" ry="0" width="350" height="18" />
			<rect x="2" y="210" rx="0" ry="0" width="350" height="18" />
			<rect x="2" y="250" rx="0" ry="0" width="350" height="18" />
			<rect x="2" y="290" rx="0" ry="0" width="350" height="18" />

			<rect x="417" y="10" rx="0" ry="0" width="350" height="18" />
			<rect x="417" y="50" rx="0" ry="0" width="350" height="18" />
			<rect x="417" y="90" rx="0" ry="0" width="350" height="18" />
			<rect x="417" y="130" rx="0" ry="0" width="350" height="18" />
			<rect x="417" y="170" rx="0" ry="0" width="350" height="18" />
			<rect x="417" y="210" rx="0" ry="0" width="350" height="18" />
			<rect x="417" y="250" rx="0" ry="0" width="350" height="18" />
			<rect x="417" y="290" rx="0" ry="0" width="350" height="18" />
		</ContentLoader>
	);
};

export default ServicesListSkeleton;
