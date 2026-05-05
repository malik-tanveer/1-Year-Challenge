import React from "react";

// HOC function
function withLoadingAndError<P>(WrappedComponent: React.ComponentType<P>) {
  // Return ek naya component (EnhancedComponent)
  return function EnhancedComponent(props: P & { loading?: boolean; error?: string }) {
    const { loading, error, ...rest } = props;

    if (loading) return <p style={{ color: "blue" }}>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return <WrappedComponent {...(rest as P)} />;
  };
}

export default withLoadingAndError;
