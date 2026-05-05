export const withLoaderAndError = (WrappedComponent: any) => {
    return ({ loading, error, ...props }: any) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
        return <WrappedComponent {...props} />;
    };
};