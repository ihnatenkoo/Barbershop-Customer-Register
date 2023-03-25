import ContentLoader from 'react-content-loader';

const MasterSkeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={120}
			height={187}
			viewBox="0 0 120 187"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="60" cy="61" r="60" />
			<rect x="0" y="135" rx="0" ry="0" width="115" height="40" />
		</ContentLoader>
	);
};

export default MasterSkeleton;
